import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from './Card';
import { media } from '../../styles/media';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCardContainer = styled(Card)<{ $featured: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: var(--transition);
  border: ${({ $featured }) => $featured ? '2px solid var(--primary-color)' : 'none'};
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  margin: -1.5rem -1.5rem 1.5rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  
  a {
    color: var(--text-color);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const ProjectDescription = styled.p`
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: rgba(0, 112, 243, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  font-size: 0.875rem;
  font-weight: 500;
  
  &:hover {
    color: var(--primary-color);
  }
  
  svg {
    font-size: 1rem;
  }
`;

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) => {
  return (
    <ProjectCardContainer hoverable $featured={featured}>
      <ProjectImage>
        {featured && <FeaturedBadge>Featured</FeaturedBadge>}
        <img src={image} alt={title} />
      </ProjectImage>
      
      <ProjectContent>
        <ProjectTitle>
          <Link to={`/projects/${id}`}>{title}</Link>
        </ProjectTitle>
        
        <ProjectDescription>{description}</ProjectDescription>
        
        <TagsContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
        
        <ProjectLinks>
          {githubUrl && (
            <ProjectLink href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </ProjectLink>
          )}
          
          {liveUrl && (
            <ProjectLink href={liveUrl} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectContent>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
