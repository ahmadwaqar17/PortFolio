import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaVuejs, FaGitAlt, FaMobileAlt, FaPencilRuler, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiStyledcomponents, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiFirebase, SiJest, SiWebpack } from 'react-icons/si';
import Section from '../components/ui/Section';
import SkillCard from '../components/ui/SkillCard';
import { skills } from '../data';
import { media } from '../styles/media';

const SkillsContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'white' : 'var(--text-color)')};
  border: 2px solid ${({ $active }) => ($active ? 'var(--primary-color)' : 'var(--border-color)')};
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'rgba(0, 0, 0, 0.05)')};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.up('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.up('md')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.up('lg')} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillDescription = styled.p`
  margin-top: 1rem;
  color: var(--secondary-color);
  font-size: 0.875rem;
  line-height: 1.6;
`;

type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'tools' | 'other';

const SkillsPage = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeFilter);

  const filterCategories: { value: SkillCategory; label: string }[] = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'design', label: 'Design' },
    { value: 'tools', label: 'Tools & Others' },
  ];

  return (
    <Section title="My Skills" subtitle="Here's a comprehensive list of my technical skills and proficiency levels.">
      <SkillsContainer>
        <FilterContainer>
          {filterCategories.map(category => (
            <FilterButton
              key={category.value}
              $active={activeFilter === category.value}
              onClick={() => setActiveFilter(category.value)}
            >
              {category.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <SkillsGrid>
          {filteredSkills.map((skill, index) => {
            // Map icon names to components
            const iconMap = {
              'FaReact': FaReact,
              'FaJs': FaJs,
              'FaHtml5': FaHtml5,
              'FaNodeJs': FaNodeJs,
              'FaVuejs': FaVuejs,
              'FaGitAlt': FaGitAlt,
              'FaMobileAlt': FaMobileAlt,
              'FaPencilRuler': FaPencilRuler,
              'FaDocker': FaDocker,
              'FaAws': FaAws,
              'SiTypescript': SiTypescript,
              'SiStyledcomponents': SiStyledcomponents,
              'SiTailwindcss': SiTailwindcss,
              'SiNextdotjs': SiNextdotjs,
              'SiExpress': SiExpress,
              'SiMongodb': SiMongodb,
              'SiPostgresql': SiPostgresql,
              'SiGraphql': SiGraphql,
              'SiFirebase': SiFirebase,
              'SiJest': SiJest,
              'SiWebpack': SiWebpack
            };

            const IconComponent = iconMap[skill.icon];

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <SkillCard
                  icon={IconComponent ? <IconComponent /> : null}
                  title={skill.title}
                  level={skill.level}
                  color={skill.color}
                />
                {skill.description && (
                  <SkillDescription>{skill.description}</SkillDescription>
                )}
              </motion.div>
            );
          })}
        </SkillsGrid>
      </SkillsContainer>
    </Section>
  );
};

export default SkillsPage;
