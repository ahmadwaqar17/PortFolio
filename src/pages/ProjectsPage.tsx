import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';
import ToggleSwitch from '../components/ui/ToggleSwitch';
import { projects } from '../data';
import { media } from '../styles/media';

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
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

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--secondary-color);
  font-size: 1.25rem;
  width: 100%;
`;

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Extract unique tags from all projects
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  useEffect(() => {
    let filtered = projects;

    // Filter by tag
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.tags.includes(activeFilter));
    }

    // Filter by featured status
    if (showFeaturedOnly) {
      filtered = filtered.filter(project => project.featured);
    }

    setFilteredProjects(filtered);
  }, [activeFilter, showFeaturedOnly]);

  return (
    <Section title="My Projects" subtitle="Browse through my portfolio of web development and design projects.">
      <ProjectsContainer>
        <ToggleSwitch
          checked={showFeaturedOnly}
          onChange={() => setShowFeaturedOnly(prev => !prev)}
          label="Show featured projects only"
        />

        <FilterContainer>
          {allTags.map(tag => (
            <FilterButton
              key={tag}
              $active={activeFilter === tag}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterContainer>

        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            <ProjectsGrid>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    featured={project.featured}
                  />
                </motion.div>
              ))}
            </ProjectsGrid>
          ) : (
            <NoResults>
              No projects found with the selected filter.
            </NoResults>
          )}
        </AnimatePresence>
      </ProjectsContainer>
    </Section>
  );
};

export default ProjectsPage;
