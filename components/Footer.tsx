
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto dark:bg-slate-900/80 dark:border-slate-700">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="font-body text-slate-500 text-base dark:text-slate-400">
              &copy; {currentYear} TypoGrammar. All Rights Reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link to="/about" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              About
            </Link>
            <Link to="/faq" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              FAQ
            </Link>
            <Link to="/contact" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Contact
            </Link>
            <Link to="/privacy-policy" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Privacy & Policy
            </Link>
            <Link to="/terms-of-service" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Terms of Service
            </Link>
            <a
              href="https://buymeacoffee.com/quiztarek2k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Support the creator"
              className="text-slate-500 hover:text-pink-600 transition-colors dark:text-slate-400 dark:hover:text-pink-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://x.com/Typo_Grammar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TypoGrammar on X"
              className="text-slate-500 hover:text-slate-800 transition-colors dark:text-slate-400 dark:hover:text-slate-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@TypoGrammar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TypoGrammar YouTube Channel"
              className="text-slate-500 hover:text-red-600 transition-colors dark:text-slate-400 dark:hover:text-red-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.484 3.43.039 5.882.039 12c0 6.118.445 8.57 4.346 8.816 3.6.245 11.626.246 15.23 0C23.516 20.57 23.961 18.118 23.961 12c0-6.118-.445-8.57-4.346-8.816zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583183701358"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TypoGrammar on Facebook"
              className="text-slate-500 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
              </svg>
            </a>
            <a
              href="https://t.me/TypoGrammar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TypoGrammar on Telegram"
              className="text-slate-500 hover:text-sky-500 transition-colors dark:text-slate-400 dark:hover:text-sky-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.57c-.28 1.1-.86 1.32-1.74.84l-4.9-3.57-2.43 2.35c-.22.22-.41.42-.83.42z"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
