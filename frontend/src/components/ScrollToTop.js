import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll restoration for route changes.
 * Keeps navigation behavior intuitive on desktop and mobile.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
