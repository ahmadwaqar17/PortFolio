import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaLaptopCode, FaBlog, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { media } from '../../styles/media';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--card-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--box-shadow);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  will-change: transform, background-color, box-shadow;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  max-width: var(--max-width);
  margin: 0 auto;

  ${media.down('sm')} {
    padding: 0 1rem;
  }
`;

const Logo = styled(motion(Link))`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  position: relative;
  padding: 0.5rem 0;
  will-change: transform;

  span {
    color: var(--accent-color);
    position: relative;
    display: inline-block;
    will-change: transform;
  }

  &:hover span {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 4px;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const NavMenu = styled(motion.nav)<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${media.down('lg')} {
    position: fixed;
    top: var(--header-height);
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 280px;
    height: calc(100vh - var(--header-height));
    background-color: var(--card-bg);
    box-shadow: var(--box-shadow);
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    z-index: 1000;
    will-change: right;
    overscroll-behavior: contain; /* Prevents scroll chaining */
  }
`;

const NavItem = styled(motion.div)<{ active: boolean }>`
  margin: 0 0.25rem;

  ${media.down('lg')} {
    margin: 0.75rem 0;
    width: 100%;
  }

  a {
    color: ${({ active }) => (active ? 'var(--primary-color)' : 'var(--text-color)')};
    font-weight: ${({ active }) => (active ? '600' : '500')};
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: var(--border-radius);
    transition: all 0.2s ease;
    background-color: ${({ active }) => (active ? 'rgba(0, 112, 243, 0.1)' : 'transparent')};
    will-change: transform, color, background-color;

    svg {
      font-size: 1rem;
      opacity: ${({ active }) => (active ? '1' : '0.8')};
      transition: opacity 0.2s ease;
    }

    &:hover {
      color: var(--primary-color);
      background-color: rgba(0, 112, 243, 0.05);
      transform: translateY(-2px);

      svg {
        opacity: 1;
      }
    }

    &:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    ${media.down('lg')} {
      padding: 0.75rem 1rem;
      border-radius: var(--border-radius);
      width: 100%;
      justify-content: flex-start;

      &:hover {
        transform: translateX(5px);
      }
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none; /* Hidden by default */
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--text-color);
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  will-change: transform, background-color, color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--primary-color);
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Only show on mobile/tablet */
  ${media.down('lg')} {
    display: flex;
  }
`;



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaUser /> },
    { path: '/skills', label: 'Skills', icon: <FaCode /> },
    { path: '/projects', label: 'Projects', icon: <FaLaptopCode /> },
    { path: '/blog', label: 'Blog', icon: <FaBlog /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
    { path: '/resume', label: 'Resume', icon: <FaFileAlt /> },

  ];

  return (
    <HeaderContainer
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.3 }}
      layout
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.08)' : 'none',
      }}
    >
      <HeaderContent>
        <Logo
          to="/"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Home"
        >
          Ahmad's <span>Portfolio</span>
        </Logo>

        <MobileMenuButton
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavMenu
          isOpen={isMenuOpen}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          aria-label="Main Navigation"
        >
          {navItems.map((item, index) => (
            <NavItem
              key={item.path}
              active={location.pathname === item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.03, 0.3) }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to={item.path}>
                {item.icon}
                {item.label}
              </Link>
            </NavItem>
          ))}
        </NavMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
