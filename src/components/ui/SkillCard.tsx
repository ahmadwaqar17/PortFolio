import styled from 'styled-components';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  level?: number;
  color?: string;
}

const SkillCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  height: 100%;
`;

const IconWrapper = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ $color }) => `rgba(${$color}, 0.1)`};
  color: ${({ $color }) => `rgb(${$color})`};
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const ProgressContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;

  span:last-child {
    font-weight: 600;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled(motion.div)<{ $width: number; $color: string }>`
  height: 100%;
  width: ${({ $width }) => `${$width}%`};
  background-color: ${({ $color }) => `rgb(${$color})`};
  border-radius: 4px;
`;

const SkillCard = ({
  icon,
  title,
  level = 0,
  color = '0, 112, 243' // Default to primary color
}: SkillCardProps) => {
  return (
    <SkillCardContainer hoverable>
      <IconWrapper $color={color}>
        {icon}
      </IconWrapper>

      <SkillTitle>{title}</SkillTitle>

      {level > 0 && (
        <ProgressContainer>
          <ProgressLabel>
            <span>Proficiency</span>
            <span>{level}%</span>
          </ProgressLabel>
          <ProgressBar>
            <Progress
              $width={level}
              $color={color}
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            />
          </ProgressBar>
        </ProgressContainer>
      )}
    </SkillCardContainer>
  );
};

export default SkillCard;
