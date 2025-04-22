import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Section from '../components/ui/Section';
import ContactForm from '../components/ui/ContactForm';
import { personalInfo } from '../data';
import { media } from '../styles/media';

const ContactContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  ${media.up('lg')} {
    grid-template-columns: 1fr 2fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
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

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: var(--primary-color);
    font-size: 1.25rem;
  }
`;

const ContactText = styled.div`
  h4 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  p {
    color: var(--secondary-color);
  }

  a {
    color: var(--text-color);

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

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

const MapContainer = styled.div`
  height: 250px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-top: 1.5rem;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
`;

const ContactPage = () => {
  return (
    <Section title="Contact Me" subtitle="Have a question or want to work together? Feel free to get in touch!">
      <ContactContainer>
        <ContactGrid>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfo>
              <ContactCard>
                <ContactTitle>Contact Information</ContactTitle>
                <ContactItems>
                  <ContactItem>
                    <FaMapMarkerAlt />
                    <ContactText>
                      <h4>Location</h4>
                      <p>{personalInfo.location}</p>
                    </ContactText>
                  </ContactItem>

                  <ContactItem>
                    <FaEnvelope />
                    <ContactText>
                      <h4>Email</h4>
                      <p>
                        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                      </p>
                    </ContactText>
                  </ContactItem>

                  <ContactItem>
                    <FaPhone />
                    <ContactText>
                      <h4>Phone</h4>
                      <p>
                        <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                      </p>
                    </ContactText>
                  </ContactItem>
                </ContactItems>

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
              </ContactCard>

              <ContactCard>
                <ContactTitle>My Location</ContactTitle>
                <p style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>
                  Based in {personalInfo.location}, available for remote work and local projects.
                </p>

                <MapContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-122.41941661501328!3d37.7749295151438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1623772695211!5m2!1sen!2s"
                    allowFullScreen
                    loading="lazy"
                    title="My Location"
                  />
                </MapContainer>
              </ContactCard>
            </ContactInfo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FormContainer>
              <ContactTitle>Send Me a Message</ContactTitle>
              <p style={{ marginBottom: '2rem', color: 'var(--secondary-color)' }}>
                Have a project in mind or want to discuss opportunities? Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <ContactForm />
            </FormContainer>
          </motion.div>
        </ContactGrid>
      </ContactContainer>
    </Section>
  );
};

export default ContactPage;
