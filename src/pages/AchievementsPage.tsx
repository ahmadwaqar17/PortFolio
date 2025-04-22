import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAws, FaReact, FaGraduationCap, FaGithub, FaTrophy, FaGoogle, FaUserTie, FaCode } from 'react-icons/fa';
import Section from '../components/ui/Section';
import { achievements } from '../data';
import { media } from '../styles/media';

const AchievementsContainer = styled.div`
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

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.up('lg')} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AchievementCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const AchievementImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${AchievementCard}:hover & img {
    transform: scale(1.05);
  }
`;

const AchievementContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AchievementDate = styled.div`
  font-size: 0.875rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const AchievementTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const AchievementDescription = styled.p`
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const AchievementLink = styled.a`
  color: var(--primary-color);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--secondary-color);
  font-size: 1.25rem;
  width: 100%;
  grid-column: 1 / -1;
`;

type AchievementCategory = 'all' | 'award' | 'certification' | 'education' | 'work' | 'other';

const AchievementsPage = () => {
  const [activeFilter, setActiveFilter] = useState<AchievementCategory>('all');

  const filteredAchievements = activeFilter === 'all'
    ? achievements
    : achievements.filter(achievement => achievement.category === activeFilter);

  const filterCategories: { value: AchievementCategory; label: string }[] = [
    { value: 'all', label: 'All Achievements' },
    { value: 'award', label: 'Awards' },
    { value: 'certification', label: 'Certifications' },
    { value: 'education', label: 'Education' },
    { value: 'work', label: 'Work' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Section title="Achievements" subtitle="A collection of my professional accomplishments, certifications, and milestones.">
      <AchievementsContainer>
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

        <AnimatePresence>
          <AchievementsGrid>
            {filteredAchievements.length > 0 ? (
              filteredAchievements.map((achievement, index) => {
                // Map icon names to components
                const iconMap = {
                  'FaAws': FaAws,
                  'FaReact': FaReact,
                  'FaGraduationCap': FaGraduationCap,
                  'FaGithub': FaGithub,
                  'FaTrophy': FaTrophy,
                  'FaGoogle': FaGoogle,
                  'FaUserTie': FaUserTie,
                  'FaCode': FaCode
                };

                const IconComponent = iconMap[achievement.icon];

                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    layout
                  >
                    <AchievementCard>
                      {achievement.image && (
                        <AchievementImage>
                          <img src={achievement.image} alt={achievement.title} />
                        </AchievementImage>
                      )}

                      <AchievementContent>
                        <AchievementDate>{achievement.date}</AchievementDate>
                        <AchievementTitle>{achievement.title}</AchievementTitle>
                        <AchievementDescription>{achievement.description}</AchievementDescription>

                        {achievement.link && (
                          <AchievementLink href={achievement.link} target="_blank" rel="noopener noreferrer">
                            View Certificate <IconComponent />
                          </AchievementLink>
                        )}
                      </AchievementContent>
                    </AchievementCard>
                  </motion.div>
                );
              })
            ) : (
              <NoResults>
                No achievements found in this category.
              </NoResults>
            )}
          </AchievementsGrid>
        </AnimatePresence>
      </AchievementsContainer>
    </Section>
  );
};

export default AchievementsPage;
