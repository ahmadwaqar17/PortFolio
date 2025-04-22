import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  label?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled(motion.button)<{
  $variant: string;
  $size: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  /* Size variants */
  width: ${({ $size }) => 
    $size === 'small' ? '32px' : 
    $size === 'medium' ? '40px' : '48px'
  };
  height: ${({ $size }) => 
    $size === 'small' ? '32px' : 
    $size === 'medium' ? '40px' : '48px'
  };
  
  /* Color variants */
  background-color: ${({ $variant }) => 
    $variant === 'primary' ? 'var(--primary-color)' : 
    $variant === 'secondary' ? 'var(--secondary-color)' : 
    $variant === 'accent' ? 'var(--accent-color)' : 'transparent'
  };
  color: ${({ $variant }) => 
    $variant === 'ghost' ? 'var(--text-color)' : 'white'
  };
  box-shadow: ${({ $variant }) => 
    $variant === 'ghost' ? 'none' : 'var(--box-shadow)'
  };
  
  ${({ $variant }) => 
    $variant === 'ghost' && `
      border: 1px solid var(--border-color);
    `
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ $variant }) => 
      $variant === 'ghost' ? 'none' : '0 6px 12px rgba(0, 0, 0, 0.15)'
    };
    background-color: ${({ $variant }) => 
      $variant === 'primary' ? '#0062d9' : 
      $variant === 'secondary' ? '#5a6268' : 
      $variant === 'accent' ? '#e68a00' : 
      'rgba(0, 0, 0, 0.05)'
    };
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  svg {
    font-size: ${({ $size }) => 
      $size === 'small' ? '14px' : 
      $size === 'medium' ? '18px' : '22px'
    };
  }
`;

const IconButton = ({
  icon,
  onClick,
  label,
  variant = 'primary',
  size = 'medium',
  className,
  disabled = false,
  type = 'button',
}: IconButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      onClick={onClick}
      className={className}
      disabled={disabled}
      type={type}
      aria-label={label}
      whileTap={{ scale: 0.95 }}
      whileHover={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </StyledButton>
  );
};

export default IconButton;
