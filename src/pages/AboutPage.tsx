import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaUserTie } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { personalInfo, experiences, education } from '../data';
import { media } from '../styles/media';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;

  ${media.up('md')} {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: var(--box-shadow);

  ${media.up('md')} {
    margin-right: 3rem;
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  ${media.up('md')} {
    flex: 1;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Role = styled.h2`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Bio = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: var(--primary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background-color: var(--border-color);

    ${media.up('md')} {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)<{ $isEven: boolean }>`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 60px;

  ${media.up('md')} {
    width: 50%;
    padding-left: ${({ $isEven }) => ($isEven ? '0' : '60px')};
    padding-right: ${({ $isEven }) => ($isEven ? '60px' : '0')};
    margin-left: ${({ $isEven }) => ($isEven ? '0' : 'auto')};
    text-align: ${({ $isEven }) => ($isEven ? 'right' : 'left')};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 2px solid white;

    ${media.up('md')} {
      left: ${({ $isEven }) => ($isEven ? 'auto' : '0')};
      right: ${({ $isEven }) => ($isEven ? '0' : 'auto')};
      transform: translateX(${({ $isEven }) => ($isEven ? '50%' : '-50%')});
    }
  }
`;

const TimelineContent = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const TimelineDate = styled.div`
  font-size: 0.875rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  margin-bottom: 1rem;
`;

const TimelineList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;

  li {
    margin-bottom: 0.5rem;
  }

  ${media.up('md')} {
    padding-left: ${({ dir }: { dir?: 'rtl' | 'ltr' }) => (dir === 'rtl' ? '0' : '1.5rem')};
    padding-right: ${({ dir }: { dir?: 'rtl' | 'ltr' }) => (dir === 'rtl' ? '1.5rem' : '0')};
    text-align: ${({ dir }: { dir?: 'rtl' | 'ltr' }) => (dir === 'rtl' ? 'right' : 'left')};
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  ${media.up('md')} {
    justify-content: ${({ dir }: { dir?: 'rtl' | 'ltr' }) => (dir === 'rtl' ? 'flex-end' : 'flex-start')};
  }
`;

const TechTag = styled.span`
  background-color: rgba(0, 112, 243, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const AboutPage = () => {
  return (
    <>
      <Section title="About Me" background="light">
        <AboutContainer>
          <AboutHeader>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileImage>
                <img src={personalInfo.avatar} alt={personalInfo.name} />
              </ProfileImage>
            </motion.div>

            <ProfileInfo>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Name>{personalInfo.name}</Name>
                <Role>{personalInfo.role}</Role>
                <Bio>{personalInfo.bio}</Bio>

                <ContactInfo>
                  <ContactItem>
                    <FaMapMarkerAlt />
                    <span>{personalInfo.location}</span>
                  </ContactItem>
                  <ContactItem>
                    <FaEnvelope />
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </ContactItem>
                  <ContactItem>
                    <FaPhone />
                    <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                  </ContactItem>
                </ContactInfo>

                <SocialLinks>
                  {personalInfo.socialLinks.map((link) => {
                    // Map icon names to components
                    const iconMap = {
                      'FaGithub': FaGithub,
                      'FaLinkedin': FaLinkedin,
                      'FaTwitter': FaTwitter
                    };

                    const IconComponent = iconMap[link.icon];

                    return (
                      <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                        {IconComponent && <IconComponent />}
                      </a>
                    );
                  })}
                </SocialLinks>

                <Button as="a" href={personalInfo.resume} download>
                  <FaDownload /> Download Resume
                </Button>
              </motion.div>
            </ProfileInfo>
          </AboutHeader>
        </AboutContainer>
      </Section>

      <Section title="Work Experience" background="dark">
        <TimelineContainer>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              $isEven={index % 2 === 0}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TimelineContent>
                <TimelineDate>
                  {experience.startDate} - {experience.endDate || 'Present'}
                </TimelineDate>
                <TimelineTitle>{experience.role}</TimelineTitle>
                <TimelineSubtitle>{experience.company}</TimelineSubtitle>
                <TimelineDescription>{experience.description}</TimelineDescription>

                <TimelineList dir={index % 2 === 0 ? 'rtl' : 'ltr'}>
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </TimelineList>

                <TechTags dir={index % 2 === 0 ? 'rtl' : 'ltr'}>
                  {experience.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechTags>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Section>

      <Section title="Education" background="light">
        <TimelineContainer>
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              $isEven={index % 2 === 0}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TimelineContent>
                <TimelineDate>
                  {edu.startDate} - {edu.endDate}
                </TimelineDate>
                <TimelineTitle>{edu.degree} in {edu.field}</TimelineTitle>
                <TimelineSubtitle>{edu.institution}</TimelineSubtitle>
                <TimelineDescription>{edu.description}</TimelineDescription>

                <TimelineList dir={index % 2 === 0 ? 'rtl' : 'ltr'}>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </TimelineList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Section>
    </>
  );
};

export default AboutPage;
