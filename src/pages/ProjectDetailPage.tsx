import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendarAlt, FaUser, FaBriefcase } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { projects } from '../data';
import { media } from '../styles/media';

const ProjectContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-color);
  
  svg {
    color: var(--primary-color);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: rgba(0, 112, 243, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 500px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: var(--box-shadow);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  margin-bottom: 3rem;
`;

const ContentSection = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${media.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryImage = styled.div`
  height: 250px;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const RelatedProjects = styled.div`
  margin-top: 4rem;
`;

const RelatedTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const RelatedGrid = styled.div`
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

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(projects.find(p => p.id === id));
  const [relatedProjects, setRelatedProjects] = useState<typeof projects>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!project) {
      navigate('/projects');
      return;
    }
    
    // Find related projects based on tags
    const related = projects
      .filter(p => p.id !== id && p.tags.some(tag => project.tags.includes(tag)))
      .slice(0, 3);
    
    setRelatedProjects(related);
  }, [id, project, navigate]);
  
  if (!project) {
    return null;
  }
  
  return (
    <Section background="light">
      <ProjectContainer>
        <BackButton to="/projects">
          <FaArrowLeft /> Back to Projects
        </BackButton>
        
        <ProjectHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            
            <ProjectMeta>
              <MetaItem>
                <FaCalendarAlt />
                <span>{project.date}</span>
              </MetaItem>
              
              {project.client && (
                <MetaItem>
                  <FaUser />
                  <span>Client: {project.client}</span>
                </MetaItem>
              )}
              
              {project.role && (
                <MetaItem>
                  <FaBriefcase />
                  <span>Role: {project.role}</span>
                </MetaItem>
              )}
            </ProjectMeta>
            
            <TagsContainer>
              {project.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagsContainer>
            
            <ProjectLinks>
              {project.githubUrl && (
                <Button as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub Repository
                </Button>
              )}
              
              {project.liveUrl && (
                <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="outline">
                  <FaExternalLinkAlt /> Live Demo
                </Button>
              )}
            </ProjectLinks>
          </motion.div>
        </ProjectHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectImage>
            <img src={project.image} alt={project.title} />
          </ProjectImage>
        </motion.div>
        
        <ProjectContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContentSection>
              <SectionTitle>Project Overview</SectionTitle>
              <ProjectDescription>{project.longDescription}</ProjectDescription>
            </ContentSection>
            
            {project.challenge && (
              <ContentSection>
                <SectionTitle>The Challenge</SectionTitle>
                <ProjectDescription>{project.challenge}</ProjectDescription>
              </ContentSection>
            )}
            
            {project.solution && (
              <ContentSection>
                <SectionTitle>The Solution</SectionTitle>
                <ProjectDescription>{project.solution}</ProjectDescription>
              </ContentSection>
            )}
            
            {project.outcome && (
              <ContentSection>
                <SectionTitle>The Outcome</SectionTitle>
                <ProjectDescription>{project.outcome}</ProjectDescription>
              </ContentSection>
            )}
            
            <ContentSection>
              <SectionTitle>Technologies Used</SectionTitle>
              <TechList>
                {project.technologies.map(tech => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </TechList>
            </ContentSection>
            
            {project.gallery && project.gallery.length > 0 && (
              <ContentSection>
                <SectionTitle>Project Gallery</SectionTitle>
                <GalleryGrid>
                  {project.gallery.map((image, index) => (
                    <GalleryImage key={index}>
                      <img src={image} alt={`${project.title} - Gallery ${index + 1}`} />
                    </GalleryImage>
                  ))}
                </GalleryGrid>
              </ContentSection>
            )}
          </motion.div>
        </ProjectContent>
        
        {relatedProjects.length > 0 && (
          <RelatedProjects>
            <RelatedTitle>Related Projects</RelatedTitle>
            <RelatedGrid>
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link to={`/projects/${relatedProject.id}`}>
                    <GalleryImage>
                      <img src={relatedProject.image} alt={relatedProject.title} />
                    </GalleryImage>
                    <h4 style={{ marginTop: '1rem' }}>{relatedProject.title}</h4>
                  </Link>
                </motion.div>
              ))}
            </RelatedGrid>
          </RelatedProjects>
        )}
      </ProjectContainer>
    </Section>
  );
};

export default ProjectDetailPage;
