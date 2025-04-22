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
  background-color: rgba(15, 23, 42, 0.95); /* Dark tech-inspired background */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2); /* Subtle tech accent border */
  will-change: transform, background-color, box-shadow;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color));
    background-size: 200% 100%;
    animation: gradientFlow 8s linear infinite;
  }

  @keyframes gradientFlow {
    0% { background-position: 0% 0; }
    100% { background-position: 200% 0; }
  }
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
  color: #ffffff;
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  position: relative;
  padding: 0.5rem 0;
  will-change: transform;
  font-family: 'Consolas', monospace;
  text-shadow: 0 0 10px rgba(0, 112, 243, 0.5);

  &:before {
    content: '<';
    color: var(--primary-color);
    margin-right: 2px;
    opacity: 0.8;
  }

  &:after {
    content: '/>';
    color: var(--primary-color);
    margin-left: 2px;
    opacity: 0.8;
  }

  span {
    color: var(--accent-color);
    position: relative;
    display: inline-block;
    will-change: transform;
  }

  &:hover {
    color: #ffffff;

    &:before, &:after {
      opacity: 1;
    }

    span {
      animation: typing 1.2s steps(10) infinite;
    }
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 4px;
  }

  @keyframes typing {
    0% { border-right: 2px solid transparent; }
    50% { border-right: 2px solid var(--accent-color); }
    100% { border-right: 2px solid transparent; }
  }
`;

const NavMenu = styled(motion.nav)<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:after {
    opacity: 1;
  }

  ${media.down('lg')} {
    position: fixed;
    top: var(--header-height);
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 280px;
    height: calc(100vh - var(--header-height));
    background-color: rgba(15, 23, 42, 0.98);
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    border-left: 1px solid rgba(99, 102, 241, 0.2);
    z-index: 1000;
    will-change: right;
    overscroll-behavior: contain; /* Prevents scroll chaining */

    &:after {
      display: none;
    }
  }
`;

const NavItem = styled(motion.div)<{ active: boolean }>`
  margin: 0 0.25rem;
  position: relative;

  ${media.down('lg')} {
    margin: 0.75rem 0;
    width: 100%;
  }

  a {
    color: ${({ active }) => (active ? '#ffffff' : 'rgba(255, 255, 255, 0.8)')};
    font-weight: ${({ active }) => (active ? '600' : '500')};
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: var(--border-radius);
    transition: all 0.2s ease;
    background-color: ${({ active }) => (active ? 'rgba(99, 102, 241, 0.2)' : 'transparent')};
    will-change: transform, color, background-color;
    font-family: 'Consolas', monospace;
    letter-spacing: 0.5px;
    border: 1px solid ${({ active }) => (active ? 'rgba(99, 102, 241, 0.3)' : 'transparent')};

    &:before {
      content: '{';
      position: absolute;
      left: -5px;
      top: 50%;
      transform: translateY(-50%);
      color: ${({ active }) => (active ? 'var(--primary-color)' : 'transparent')};
      opacity: ${({ active }) => (active ? '1' : '0')};
      transition: all 0.2s ease;
      font-size: 1.2rem;
    }

    &:after {
      content: '}';
      position: absolute;
      right: -5px;
      top: 50%;
      transform: translateY(-50%);
      color: ${({ active }) => (active ? 'var(--primary-color)' : 'transparent')};
      opacity: ${({ active }) => (active ? '1' : '0')};
      transition: all 0.2s ease;
      font-size: 1.2rem;
    }

    svg {
      font-size: 1rem;
      opacity: ${({ active }) => (active ? '1' : '0.8')};
      transition: opacity 0.2s ease;
      color: ${({ active }) => (active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.8)')};
    }

    &:hover {
      color: #ffffff;
      background-color: rgba(99, 102, 241, 0.15);
      transform: translateY(-2px);
      border-color: rgba(99, 102, 241, 0.2);

      &:before, &:after {
        opacity: 0.8;
        color: var(--primary-color);
      }

      svg {
        opacity: 1;
        color: var(--accent-color);
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
      color: rgba(255, 255, 255, 0.8);

      &:before, &:after {
        display: none;
      }

      &:hover {
        transform: translateX(5px);
        background-color: rgba(99, 102, 241, 0.15);
      }
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none; /* Hidden by default */
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  font-size: 1.25rem;
  color: #ffffff;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  will-change: transform, background-color, color;

  &:hover {
    background-color: rgba(99, 102, 241, 0.2);
    color: var(--accent-color);
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
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
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      <HeaderContent>
        <Logo
          to="/"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Home"
        >
Ahmad<span>Dev</span>
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
