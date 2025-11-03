

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HorizontalAdBanner from './HorizontalAdBanner';
import Sidebar from './Sidebar';
import VerticalAdBanner from './VerticalAdBanner';

type Theme = 'light' | 'dark';

// Add type definition for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, config?: Record<string, any>) => void;
  }
}

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>(
    (localStorage.getItem('theme') as Theme) || 'light'
  );
  const location = useLocation();

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Add useEffect for analytics page view tracking in the SPA
  React.useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'UA-373317501-1', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
  
  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300">
      <Header 
        onMenuClick={toggleMobileMenu} 
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <div className="flex flex-1 w-full mx-auto">
        <Sidebar isMobileOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        <main className="flex-1 min-w-0 py-6 sm:py-8 md:py-12 px-6 md:px-10">
          <Outlet />
        </main>
        <aside className="hidden lg:block w-40 flex-shrink-0 py-12 px-4">
          <div className="sticky top-[85px]">
            <VerticalAdBanner />
          </div>
        </aside>
      </div>
      <HorizontalAdBanner />
      <Footer />
    </div>
  );
};

export default Layout;