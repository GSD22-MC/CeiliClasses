import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.onPrimary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? props.theme.colors.secondary : props.theme.colors.onPrimary};
  font-weight: ${props => props.$active ? '600' : '500'};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
`;

const NavIcon = styled.span`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Fáilte', sublabel: 'Welcome', icon: '🏠' },
    { path: '/learn', label: 'Foghlaim', sublabel: 'Learn', icon: '📚' },
    { path: '/practice', label: 'Cleachtadh', sublabel: 'Practice', icon: '💃' },
    { path: '/community', label: 'Comhphobal', sublabel: 'Community', icon: '👥' },
    { path: '/heritage', label: 'Oidhreacht', sublabel: 'Heritage', icon: '🏛️' },
  ];

  return (
    <NavContainer>
      <Logo>CeiliClasses</Logo>
      <NavLinks>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            $active={location.pathname === item.path}
          >
            <NavIcon>{item.icon}</NavIcon>
            <div>
              <div>{item.label}</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>({item.sublabel})</div>
            </div>
          </NavLink>
        ))}
      </NavLinks>
    </NavContainer>
  );
};

export default Navigation;