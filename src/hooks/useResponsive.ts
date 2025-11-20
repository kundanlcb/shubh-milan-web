import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@/constants';

type Breakpoint = keyof typeof BREAKPOINTS;

export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isBreakpoint = (breakpoint: Breakpoint): boolean => {
    return windowWidth >= BREAKPOINTS[breakpoint];
  };

  const isMobile = windowWidth < BREAKPOINTS.md;
  const isTablet = windowWidth >= BREAKPOINTS.md && windowWidth < BREAKPOINTS.lg;
  const isDesktop = windowWidth >= BREAKPOINTS.lg;

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
    isBreakpoint,
  };
};
