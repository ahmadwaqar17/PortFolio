import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  as?: 'button' | 'a' | typeof Link;
  to?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: var(--primary-color);
        color: white;
        border: 2px solid var(--primary-color);
        
        &:hover:not(:disabled) {
          background-color: transparent;
          color: var(--primary-color);
        }
      `;
    case 'secondary':
      return css`
        background-color: var(--secondary-color);
        color: white;
        border: 2px solid var(--secondary-color);
        
        &:hover:not(:disabled) {
          background-color: transparent;
          color: var(--secondary-color);
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        
        &:hover:not(:disabled) {
          background-color: var(--primary-color);
          color: white;
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: var(--primary-color);
        border: none;
        padding-left: 0;
        padding-right: 0;
        
        &:hover:not(:disabled) {
          color: var(--accent-color);
          background-color: transparent;
        }
      `;
    default:
      return '';
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      `;
    case 'medium':
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      `;
    case 'large':
      return css`
        padding: 1rem 2rem;
        font-size: 1.125rem;
      `;
    default:
      return '';
  }
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
  }
`;

const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  as = 'button',
  to,
  href,
  onClick,
  disabled = false,
  children,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      as={as}
      to={to}
      href={href}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
