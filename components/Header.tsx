
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, theme, onThemeToggle }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-20 dark:bg-slate-900/80 dark:border-slate-700">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-4 flex justify-between items-center h-[69px]">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Open navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <Link to="/">
            <div>
              <h1 className="font-heading text-3xl font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
                Typo<span className="text-blue-600 dark:text-blue-500">Grammar</span>
              </h1>
              <p className="font-body text-xs text-slate-500 dark:text-slate-400 mt-1 hidden sm:block">
                From Confused to Confident in English
              </p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://buymeacoffee.com/quiztarek2k"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:text-pink-500 dark:focus:ring-offset-slate-900"
            aria-label="Support the creator"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </a>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <a
            href="https://x.com/Typo_Grammar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:text-slate-200 dark:focus:ring-offset-slate-900"
            aria-label="TypoGrammar on X"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@TypoGrammar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:text-red-500 dark:focus:ring-offset-slate-900"
            aria-label="TypoGrammar YouTube Channel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.484 3.43.039 5.882.039 12c0 6.118.445 8.57 4.346 8.816 3.6.245 11.626.246 15.23 0C23.516 20.57 23.961 18.118 23.961 12c0-6.118-.445-8.57-4.346-8.816zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61583183701358"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:text-blue-500 dark:focus:ring-offset-slate-900"
            aria-label="TypoGrammar on Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
            </svg>
          </a>
          <a
            href="https://t.me/TypoGrammar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:text-sky-400 dark:focus:ring-offset-slate-900"
            aria-label="TypoGrammar on Telegram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.57c-.28 1.1-.86 1.32-1.74.84l-4.9-3.57-2.43 2.35c-.22.22-.41.42-.83.42z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
