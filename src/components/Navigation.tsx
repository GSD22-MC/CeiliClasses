import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { View, Text, Icon } from './ui';

// Styled Components
const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.outline};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.elevation.low.boxShadow};
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing.large};
  
  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const NavItem = styled.li`
  display: flex;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  transition: all 0.2s ease;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  min-width: 60px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceVariant};
    color: ${({ theme }) => theme.colors.onSurface};
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryContainer};
  }
`;

const NavIcon = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const NavLabel = styled(Text)`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

interface NavItem {
  path: string;
  icon: string;
  label: string;
  irishLabel: string;
}

const navItems: NavItem[] = [
  {
    path: '/',
    icon: 'home',
    label: 'Welcome',
    irishLabel: 'Fáilte'
  },
  {
    path: '/learn',
    icon: 'school',
    label: 'Learn',
    irishLabel: 'Foghlaim'
  },
  {
    path: '/practice',
    icon: 'fitness-center',
    label: 'Practice',
    irishLabel: 'Cleachtadh'
  },
  {
    path: '/community',
    icon: 'groups',
    label: 'Community',
    irishLabel: 'Comhphobal'
  },
  {
    path: '/heritage',
    icon: 'menu-book',
    label: 'Heritage',
    irishLabel: 'Oidhreacht'
  }
];

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.path}>
            <NavLinkStyled 
              to={item.path}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <NavIcon>
                <Icon name={item.icon} size={24} />
              </NavIcon>
              <NavLabel>
                {item.irishLabel}
                <br />
                <span style={{ fontSize: '8px', opacity: 0.8 }}>
                  ({item.label})
                </span>
              </NavLabel>
            </NavLinkStyled>
          </NavItem>
        ))}
      </NavList>
    </NavigationContainer>
  );
};