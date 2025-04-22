import styled from 'styled-components';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  elevation?: 'low' | 'medium' | 'high';
  hoverable?: boolean;
  className?: string;
}

const getElevation = (level: string) => {
  switch (level) {
    case 'low':
      return '0 2px 5px rgba(0, 0, 0, 0.1)';
    case 'medium':
      return '0 5px 15px rgba(0, 0, 0, 0.1)';
    case 'high':
      return '0 10px 25px rgba(0, 0, 0, 0.1)';
    default:
      return '0 2px 5px rgba(0, 0, 0, 0.1)';
  }
};

const CardContainer = styled.div<{ 
  $elevation: string; 
  $hoverable: boolean;
}>`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: ${({ $elevation }) => getElevation($elevation)};
  transition: var(--transition);
  
  ${({ $hoverable }) => $hoverable && `
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
  `}
`;

const Card = ({ 
  children, 
  elevation = 'low', 
  hoverable = false,
  className 
}: CardProps) => {
  return (
    <CardContainer 
      $elevation={elevation} 
      $hoverable={hoverable}
      className={className}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
