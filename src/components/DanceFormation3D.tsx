import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

interface DanceStep {
  stepNumber: number;
  irishTerm: string;
  phonetic: string;
  english: string;
  description: string;
  videoSegment: {
    startTime: number;
    endTime: number;
  };
  culturalNote: string;
}

interface DanceFormation3DProps {
  danceName: string;
  currentStep: number;
  steps: DanceStep[];
  onStepChange: (stepIndex: number) => void;
}

const Container = styled.div`
  width: 800px;
  height: 450px;
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium};
`;

const ControlButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StepInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 0.875rem;
  max-width: 300px;
`;

const ViewToggle = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

const ViewButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : 'rgba(255, 255, 255, 0.2)'};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  font-size: 0.75rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active, theme }) => 
      active ? theme.colors.primary : 'rgba(255, 255, 255, 0.3)'};
  }
`;

// Irish dance formations and patterns
const FORMATIONS = {
  circle: { name: 'Ciorcal', positions: 8 },
  line: { name: 'Líne', positions: 6 },
  square: { name: 'Cearnóg', positions: 4 },
  longways: { name: 'Fada', positions: 8 }
};

export const DanceFormation3D: React.FC<DanceFormation3DProps> = ({
  danceName,
  currentStep,
  steps,
  onStepChange
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const dancersRef = useRef<THREE.Group[]>([]);
  const animationIdRef = useRef<number>();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<'overhead' | 'side' | 'front'>('overhead');
  const [formation, setFormation] = useState<keyof typeof FORMATIONS>('circle');

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      800 / 450,
      0.1,
      1000
    );
    camera.position.set(0, 10, 15);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(800, 450);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Dance floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x8B4513,
      transparent: true,
      opacity: 0.8
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Create dancers
    createDancers(scene);

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Create dancer figures
  const createDancers = (scene: THREE.Scene) => {
    const dancers: THREE.Group[] = [];
    const numDancers = FORMATIONS[formation].positions;

    for (let i = 0; i < numDancers; i++) {
      const dancer = createDancerFigure(i);
      positionDancer(dancer, i, formation);
      scene.add(dancer);
      dancers.push(dancer);
    }

    dancersRef.current = dancers;
  };

  // Create a simplified dancer figure
  const createDancerFigure = (index: number) => {
    const dancer = new THREE.Group();

    // Body (cylinder)
    const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1.5, 8);
    const bodyMaterial = new THREE.MeshLambertMaterial({ 
      color: index % 2 === 0 ? 0x006633 : 0xFFD700 // Irish colors
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1.5;
    body.castShadow = true;
    dancer.add(body);

    // Head (sphere)
    const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0xFFDBB3 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 2.5;
    head.castShadow = true;
    dancer.add(head);

    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.2, 8);
    const armMaterial = new THREE.MeshLambertMaterial({ color: 0xFFDBB3 });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.5, 1.8, 0);
    leftArm.rotation.z = Math.PI / 6;
    leftArm.castShadow = true;
    dancer.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.5, 1.8, 0);
    rightArm.rotation.z = -Math.PI / 6;
    rightArm.castShadow = true;
    dancer.add(rightArm);

    // Legs
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8);
    const legMaterial = new THREE.MeshLambertMaterial({ color: 0x2F4F2F });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, 0.5, 0);
    leftLeg.castShadow = true;
    dancer.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, 0.5, 0);
    rightLeg.castShadow = true;
    dancer.add(rightLeg);

    return dancer;
  };

  // Position dancers in formation
  const positionDancer = (dancer: THREE.Group, index: number, formation: keyof typeof FORMATIONS) => {
    const positions = FORMATIONS[formation].positions;
    
    switch (formation) {
      case 'circle':
        const circleAngle = (index / positions) * Math.PI * 2;
        dancer.position.x = Math.cos(circleAngle) * 4;
        dancer.position.z = Math.sin(circleAngle) * 4;
        dancer.lookAt(0, dancer.position.y, 0);
        break;
        
      case 'line':
        dancer.position.x = (index - (positions - 1) / 2) * 2;
        dancer.position.z = 0;
        break;
        
      case 'square':
        const side = Math.floor(index / 2);
        const pos = index % 2;
        if (side === 0) { // Front
          dancer.position.x = pos === 0 ? -2 : 2;
          dancer.position.z = 2;
        } else { // Back
          dancer.position.x = pos === 0 ? -2 : 2;
          dancer.position.z = -2;
        }
        break;
        
      case 'longways':
        const isLeftSide = index < positions / 2;
        const linePos = index % (positions / 2);
        dancer.position.x = isLeftSide ? -3 : 3;
        dancer.position.z = (linePos - (positions / 4 - 0.5)) * 2;
        if (isLeftSide) {
          dancer.lookAt(3, dancer.position.y, dancer.position.z);
        } else {
          dancer.lookAt(-3, dancer.position.y, dancer.position.z);
        }
        break;
    }
  };

  // Update camera position based on view mode
  useEffect(() => {
    if (!cameraRef.current) return;

    const camera = cameraRef.current;
    switch (viewMode) {
      case 'overhead':
        camera.position.set(0, 12, 8);
        camera.lookAt(0, 0, 0);
        break;
      case 'side':
        camera.position.set(15, 5, 0);
        camera.lookAt(0, 2, 0);
        break;
      case 'front':
        camera.position.set(0, 5, 15);
        camera.lookAt(0, 2, 0);
        break;
    }
  }, [viewMode]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

      if (isPlaying) {
        // Animate dancers based on current step
        animateDancers();
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPlaying, currentStep]);

  // Animate dancers for current step
  const animateDancers = () => {
    const time = Date.now() * 0.001;
    
    dancersRef.current.forEach((dancer, index) => {
      // Basic dance movements - stepping and swaying
      const stepOffset = (index * Math.PI) / 4;
      const stepHeight = Math.sin(time * 4 + stepOffset) * 0.2;
      dancer.position.y = Math.max(0, stepHeight);
      
      // Arm movements
      const leftArm = dancer.children[2];
      const rightArm = dancer.children[3];
      
      if (leftArm && rightArm) {
        leftArm.rotation.z = Math.PI / 6 + Math.sin(time * 3 + stepOffset) * 0.3;
        rightArm.rotation.z = -Math.PI / 6 - Math.sin(time * 3 + stepOffset) * 0.3;
      }

      // Formation-specific movements
      if (formation === 'circle') {
        // Dancers face center and step in rhythm
        const angle = Math.atan2(dancer.position.z, dancer.position.x);
        dancer.rotation.y = angle + Math.PI;
      }
    });
  };

  // Recreate dancers when formation changes
  useEffect(() => {
    if (!sceneRef.current) return;

    // Remove existing dancers
    dancersRef.current.forEach(dancer => {
      sceneRef.current?.remove(dancer);
    });

    // Create new dancers
    createDancers(sceneRef.current);
  }, [formation]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const previousStep = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      onStepChange(currentStep + 1);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <Container>
      <div ref={mountRef} />
      
      <StepInfo>
        <strong>Step {currentStepData?.stepNumber}: {currentStepData?.english}</strong>
        <br />
        <em>{currentStepData?.irishTerm}</em>
        <br />
        Formation: {FORMATIONS[formation].name}
      </StepInfo>

      <ViewToggle>
        <ViewButton 
          active={viewMode === 'overhead'}
          onClick={() => setViewMode('overhead')}
        >
          Overhead
        </ViewButton>
        <ViewButton 
          active={viewMode === 'side'}
          onClick={() => setViewMode('side')}
        >
          Side
        </ViewButton>
        <ViewButton 
          active={viewMode === 'front'}
          onClick={() => setViewMode('front')}
        >
          Front
        </ViewButton>
      </ViewToggle>

      <Controls>
        <div>
          <select 
            value={formation} 
            onChange={(e) => setFormation(e.target.value as keyof typeof FORMATIONS)}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              padding: '8px',
              borderRadius: '4px',
              marginRight: '12px'
            }}
          >
            {Object.entries(FORMATIONS).map(([key, { name }]) => (
              <option key={key} value={key} style={{ background: '#333' }}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <ControlButton onClick={previousStep} disabled={currentStep === 0}>
            ← Previous
          </ControlButton>
          
          <ControlButton onClick={togglePlayback}>
            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
          </ControlButton>
          
          <ControlButton onClick={nextStep} disabled={currentStep === steps.length - 1}>
            Next →
          </ControlButton>
        </div>
      </Controls>
    </Container>
  );
};