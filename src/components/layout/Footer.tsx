import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { media } from '../../styles/media';

const FooterContainer = styled.footer`
  background-color: var(--dark-background);
  color: var(--light-text-color);
  padding: 3rem 0 1.5rem;
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  ${media.down('md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.down('sm')} {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.75rem;

      a {
        color: var(--light-text-color);
        transition: var(--transition);

        &:hover {
          color: var(--primary-color);
          padding-left: 5px;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--light-text-color);
    transition: var(--transition);

    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <h3>Ahmad's Portfolio</h3>
            <p>A showcase of my skills, projects, and professional journey as a Software Engineer.</p>
            <SocialLinks>
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
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Resources</h3>
            <ul>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/resume">Resume</Link></li>

              <li><a href="/sitemap.xml">Sitemap</a></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Contact Info</h3>
            <ul>
              <li>Email: ahmedwaqar2002@gmail.com</li>
              <li>Phone: +92-344-0479545</li>
              <li>Location: Lahore, Pakistan</li>
            </ul>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <p>&copy; {currentYear} Ahmad Waqar. All rights reserved.</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
