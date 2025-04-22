import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaReact, FaJs, FaHtml5, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaLaptopCode, FaRocket, FaLightbulb, FaCode, FaUserTie, FaChartLine, FaTools, FaGraduationCap, FaAward, FaStar, FaPython, FaDatabase, FaServer, FaDesktop, FaFileCode, FaTerminal, FaWindows, FaMicrosoft, FaLaptop, FaCodeBranch, FaHashtag, FaCogs, FaNetworkWired } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiPostgresql } from 'react-icons/si';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import SkillCard from '../components/ui/SkillCard';

import BlogCard from '../components/ui/BlogCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import Badge from '../components/ui/Badge';
import IconButton from '../components/ui/IconButton';
import Tooltip from '../components/ui/Tooltip';
import { projects, skills, blogPosts, personalInfo } from '../data';
import { media } from '../styles/media';

const HeroSection = styled.section`
  height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 112, 243, 0.1) 0%, rgba(255, 152, 0, 0.1) 100%);
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.up('lg')} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeroText = styled.div`
  max-width: 600px;

  ${media.up('lg')} {
    flex: 1;
    padding-right: 2rem;
  }
`;

const HeroImage = styled.div`
  display: none;

  ${media.up('lg')} {
    display: block;
    flex: 1;
    max-width: 400px;

    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: var(--box-shadow);
    }
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  ${media.up('lg')} {
    font-size: 4rem;
  }

  span {
    color: var(--primary-color);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);

  ${media.up('lg')} {
    font-size: 1.5rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--text-color);
    transition: var(--transition);

    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  ${media.up('md')} {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--secondary-color);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

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



const BlogGrid = styled.div`
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

const SectionLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
  font-weight: 500;
  color: var(--primary-color);

  &:hover {
    text-decoration: underline;
  }
`;

const HomePage = () => {


  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const topSkills = skills.slice(0, 8);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm <span>{personalInfo.name}</span>
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {personalInfo.role}
              <Badge
                variant="accent"
                size="small"
                icon={<FaLaptopCode />}
                style={{ marginLeft: '10px' }}
              >
                Available for hire
              </Badge>
            </HeroSubtitle>
            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button as={Link} to="/contact">
                <FaEnvelope style={{ marginRight: '8px' }} /> Contact Me
              </Button>
              <Button as={Link} to="/projects" variant="outline">
                <FaRocket style={{ marginRight: '8px' }} /> View Projects
              </Button>
            </HeroButtons>
            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="https://github.com/ahmadwaqar17" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-waqar-05413021b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:ahmedwaqar2002@gmail.com">
                <FaEnvelope />
              </a>
            </SocialLinks>
          </HeroText>
          <HeroImage>
            <motion.img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </HeroImage>
        </HeroContent>
      </HeroSection>

      <Section id="about" title="About Me" background="light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            {personalInfo.bio}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button as={Link} to="/about">
              Learn More About Me
            </Button>
          </div>
        </motion.div>
      </Section>

      <Section id="projects" title="Featured Projects" background="dark">
        <SectionSubtitle>
          Check out some of my recent projects that showcase my skills and expertise.
        </SectionSubtitle>
        <ProjectsGrid>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
        <SectionLink to="/projects">
          View All Projects <FaArrowRight />
        </SectionLink>
      </Section>

      <Section id="skills" title="My Skills" background="light">
        <SectionSubtitle>
          Here are some of the technologies and tools I work with.
        </SectionSubtitle>
        <SkillsGrid>
          {topSkills.map((skill, index) => {
            // Map icon names to components
            const iconMap = {
              'FaReact': FaReact,
              'FaJs': FaJs,
              'FaHtml5': FaHtml5,
              'FaNodeJs': FaNodeJs,
              'FaGitAlt': FaGitAlt,
              'FaDocker': FaDocker,
              'FaAws': FaAws,
              'FaPython': FaPython,
              'FaDatabase': FaDatabase,
              'FaServer': FaServer,
              'FaDesktop': FaDesktop,
              'FaFileCode': FaFileCode,
              'FaTerminal': FaTerminal,
              'FaCode': FaCode,
              'FaWindows': FaWindows,
              'FaMicrosoft': FaMicrosoft,
              'FaLaptop': FaLaptop,
              'FaCodeBranch': FaCodeBranch,
              'FaHashtag': FaHashtag,
              'FaCogs': FaCogs,
              'FaNetworkWired': FaNetworkWired,
              'SiTypescript': SiTypescript,
              'SiExpress': SiExpress,
              'SiPostgresql': SiPostgresql
            };

            const IconComponent = iconMap[skill.icon];

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard
                  icon={IconComponent ? <IconComponent /> : null}
                  title={skill.title}
                  level={skill.level}
                  color={skill.color}
                />
              </motion.div>
            );
          })}
        </SkillsGrid>
        <SectionLink to="/skills">
          View All Skills <FaArrowRight />
        </SectionLink>
      </Section>



      <Section id="blog" title="Latest Articles" background="light">
        <SectionSubtitle>
          Read my latest thoughts on web development, design, and technology.
        </SectionSubtitle>
        <BlogGrid>
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            </motion.div>
          ))}
        </BlogGrid>
        <SectionLink to="/blog">
          Read All Articles <FaArrowRight />
        </SectionLink>
      </Section>

      <Section id="contact" title="Get In Touch" background="dark">
        <SectionSubtitle>
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </SectionSubtitle>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button as={Link} to="/contact" size="large">
            Contact Me
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
