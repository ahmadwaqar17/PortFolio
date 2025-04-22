import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  className?: string;
}

const StyledBadge = styled(motion.span)<{
  $variant: string;
  $size: string;
  $hasIcon: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-weight: 500;
  gap: 6px;
  
  /* Size variants */
  padding: ${({ $size, $hasIcon }) => 
    $size === 'small' ? ($hasIcon ? '2px 8px' : '2px 6px') : 
    $size === 'medium' ? ($hasIcon ? '4px 12px' : '4px 10px') : 
    ($hasIcon ? '6px 16px' : '6px 14px')
  };
  font-size: ${({ $size }) => 
    $size === 'small' ? '0.75rem' : 
    $size === 'medium' ? '0.875rem' : '1rem'
  };
  
  /* Color variants */
  background-color: ${({ $variant }) => 
    $variant === 'primary' ? 'rgba(0, 112, 243, 0.1)' : 
    $variant === 'secondary' ? 'rgba(108, 117, 125, 0.1)' : 
    $variant === 'accent' ? 'rgba(255, 152, 0, 0.1)' : 
    $variant === 'success' ? 'rgba(40, 167, 69, 0.1)' : 
    $variant === 'error' ? 'rgba(220, 53, 69, 0.1)' : 
    $variant === 'warning' ? 'rgba(255, 193, 7, 0.1)' : 
    'rgba(23, 162, 184, 0.1)'
  };
  color: ${({ $variant }) => 
    $variant === 'primary' ? 'var(--primary-color)' : 
    $variant === 'secondary' ? 'var(--secondary-color)' : 
    $variant === 'accent' ? 'var(--accent-color)' : 
    $variant === 'success' ? 'var(--success-color)' : 
    $variant === 'error' ? 'var(--error-color)' : 
    $variant === 'warning' ? 'var(--warning-color)' : 
    'var(--info-color)'
  };
  border: 1px solid ${({ $variant }) => 
    $variant === 'primary' ? 'rgba(0, 112, 243, 0.2)' : 
    $variant === 'secondary' ? 'rgba(108, 117, 125, 0.2)' : 
    $variant === 'accent' ? 'rgba(255, 152, 0, 0.2)' : 
    $variant === 'success' ? 'rgba(40, 167, 69, 0.2)' : 
    $variant === 'error' ? 'rgba(220, 53, 69, 0.2)' : 
    $variant === 'warning' ? 'rgba(255, 193, 7, 0.2)' : 
    'rgba(23, 162, 184, 0.2)'
  };
  
  svg {
    font-size: ${({ $size }) => 
      $size === 'small' ? '0.75rem' : 
      $size === 'medium' ? '0.875rem' : '1rem'
    };
  }
`;

const Badge = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  className,
}: BadgeProps) => {
  return (
    <StyledBadge
      $variant={variant}
      $size={size}
      $hasIcon={!!icon}
      className={className}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {icon && icon}
      {children}
    </StyledBadge>
  );
};

export default Badge;
