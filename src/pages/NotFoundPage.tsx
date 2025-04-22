import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';
import Button from '../components/ui/Button';
import { media } from '../styles/media';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  padding: 2rem;
  text-align: center;
`;

const NotFoundTitle = styled(motion.h1)`
  font-size: 8rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  line-height: 1;
  
  ${media.down('md')} {
    font-size: 6rem;
  }
  
  ${media.down('sm')} {
    font-size: 4rem;
  }
`;

const NotFoundSubtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  ${media.down('md')} {
    font-size: 1.5rem;
  }
`;

const NotFoundText = styled(motion.p)`
  font-size: 1.125rem;
  color: var(--secondary-color);
  max-width: 600px;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  ${media.down('sm')} {
    flex-direction: column;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </NotFoundTitle>
      
      <NotFoundSubtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Page Not Found
      </NotFoundSubtitle>
      
      <NotFoundText
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </NotFoundText>
      
      <ButtonContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button as={Link} to="/">
          <FaHome /> Go to Home
        </Button>
        
        <Button as={Link} to="/contact" variant="outline">
          <FaSearch /> Contact Support
        </Button>
      </ButtonContainer>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
