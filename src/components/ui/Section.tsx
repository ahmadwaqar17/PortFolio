import styled from 'styled-components';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  background?: 'light' | 'dark' | 'primary' | 'accent';
  className?: string;
}

const SectionContainer = styled.section<{ background: string }>`
  padding: 5rem 0;
  background-color: ${({ background }) => {
    switch (background) {
      case 'dark':
        return 'var(--dark-background)';
      case 'primary':
        return 'var(--primary-color)';
      case 'accent':
        return 'var(--accent-color)';
      default:
        return 'var(--background-color)';
    }
  }};
  color: ${({ background }) => 
    background === 'dark' || background === 'primary' || background === 'accent' 
      ? 'var(--light-text-color)' 
      : 'var(--text-color)'
  };
`;

const SectionContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  background = 'light',
  className 
}: SectionProps) => {
  return (
    <SectionContainer id={id} background={background} className={className}>
      <SectionContent>
        {(title || subtitle) && (
          <SectionHeader>
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
          </SectionHeader>
        )}
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
