import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  bgClass?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, bgClass = 'bg-surface' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`min-h-screen flex flex-col font-body-md text-on-surface ${bgClass} antialiased selection:bg-secondary-container`}>
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
