import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import PageTransition from '../ui/PageTransition';

const Main = styled.main`
  min-height: calc(100vh - var(--footer-height));
  margin-top: var(--header-height);
`;

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Main>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
