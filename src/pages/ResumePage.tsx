import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaServer, FaPalette, FaTools } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { personalInfo, experiences, education, skills } from '../data';
import { media } from '../styles/media';

const ResumeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ResumeHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const DownloadButton = styled(Button)`
  margin-top: 1.5rem;
`;

const ResumeSection = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--primary-color);
  }
  
  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: var(--border-color);
    margin-left: 1rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 16px;
    height: 100%;
    width: 2px;
    background-color: var(--border-color);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 60px;
  padding-bottom: 2.5rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 2px solid white;
  }
`;

const TimelineContent = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
`;

const TimelineHeader = styled.div`
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const TimelineDate = styled.div`
  font-size: 0.875rem;
  color: var(--secondary-color);
`;

const TimelineBody = styled.div`
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const TimelineList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: rgba(0, 112, 243, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${media.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCategory = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--primary-color);
  }
`;

const SkillItem = styled.div`
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillLevel = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div<{ $width: number }>`
  height: 100%;
  width: ${({ $width }) => `${$width}%`};
  background-color: var(--primary-color);
  border-radius: 4px;
  transition: width 1s ease-in-out;
`;

const ResumePage = () => {
  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const toolsSkills = skills.filter(skill => skill.category === 'tools' || skill.category === 'other');
  
  return (
    <Section title="Resume" subtitle="A summary of my education, work experience, and skills.">
      <ResumeContainer>
        <ResumeHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DownloadButton as="a" href={personalInfo.resume} download>
              <FaDownload /> Download Resume
            </DownloadButton>
          </motion.div>
        </ResumeHeader>
        
        <ResumeSection>
          <SectionTitle>
            <FaBriefcase /> Work Experience
          </SectionTitle>
          
          <TimelineContainer>
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTitle>{experience.role}</TimelineTitle>
                    <TimelineSubtitle>{experience.company}</TimelineSubtitle>
                    <TimelineDate>
                      {experience.startDate} - {experience.endDate || 'Present'}
                    </TimelineDate>
                  </TimelineHeader>
                  
                  <TimelineBody>
                    <p>{experience.description}</p>
                  </TimelineBody>
                  
                  <TimelineList>
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </TimelineList>
                  
                  <TechTags>
                    {experience.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechTags>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineContainer>
        </ResumeSection>
        
        <ResumeSection>
          <SectionTitle>
            <FaGraduationCap /> Education
          </SectionTitle>
          
          <TimelineContainer>
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTitle>{edu.degree} in {edu.field}</TimelineTitle>
                    <TimelineSubtitle>{edu.institution}</TimelineSubtitle>
                    <TimelineDate>
                      {edu.startDate} - {edu.endDate}
                    </TimelineDate>
                  </TimelineHeader>
                  
                  <TimelineBody>
                    <p>{edu.description}</p>
                  </TimelineBody>
                  
                  <TimelineList>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </TimelineList>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineContainer>
        </ResumeSection>
        
        <ResumeSection>
          <SectionTitle>
            <FaCode /> Skills
          </SectionTitle>
          
          <SkillsContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SkillCategory>
                <CategoryTitle>
                  <FaCode /> Frontend Development
                </CategoryTitle>
                
                {frontendSkills.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillInfo>
                      <SkillName>{skill.title}</SkillName>
                      <SkillLevel>{skill.level}%</SkillLevel>
                    </SkillInfo>
                    <ProgressBar>
                      <Progress $width={skill.level} />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillCategory>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SkillCategory>
                <CategoryTitle>
                  <FaServer /> Backend Development
                </CategoryTitle>
                
                {backendSkills.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillInfo>
                      <SkillName>{skill.title}</SkillName>
                      <SkillLevel>{skill.level}%</SkillLevel>
                    </SkillInfo>
                    <ProgressBar>
                      <Progress $width={skill.level} />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillCategory>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SkillCategory>
                <CategoryTitle>
                  <FaPalette /> Design
                </CategoryTitle>
                
                {designSkills.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillInfo>
                      <SkillName>{skill.title}</SkillName>
                      <SkillLevel>{skill.level}%</SkillLevel>
                    </SkillInfo>
                    <ProgressBar>
                      <Progress $width={skill.level} />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillCategory>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SkillCategory>
                <CategoryTitle>
                  <FaTools /> Tools & Others
                </CategoryTitle>
                
                {toolsSkills.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillInfo>
                      <SkillName>{skill.title}</SkillName>
                      <SkillLevel>{skill.level}%</SkillLevel>
                    </SkillInfo>
                    <ProgressBar>
                      <Progress $width={skill.level} />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillCategory>
            </motion.div>
          </SkillsContainer>
        </ResumeSection>
      </ResumeContainer>
    </Section>
  );
};

export default ResumePage;
