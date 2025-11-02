
import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

const HomePage: React.FC = () => {
  usePageMetadata({
    title: 'TypoGrammar: An English Learning Hub',
    description: 'Master English grammar with beautifully presented articles, examples, and quizzes. Your free and elegant guide to verb tenses, punctuation, and writing skills.'
  });

  return (
    <div>
      <div className="text-center p-8 bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 max-w-3xl mx-auto dark:from-slate-800 dark:to-slate-900 dark:border-slate-700 dark:shadow-slate-900/50">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full dark:bg-blue-900/40">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.906 59.906 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
        </div>
        <h2 className="font-heading text-5xl font-extrabold text-slate-800 mb-4 tracking-tight dark:text-slate-200">Welcome to TypoGrammar</h2>
        <p className="font-body text-xl text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
          Your personal guide to mastering English grammar. Explore topics like{' '}
          <Link to="/topics/present-simple" className="text-blue-600 hover:underline font-semibold dark:text-blue-400">
            Present Simple
          </Link>
          ,{' '}
          <Link to="/topics/passive-voice" className="text-blue-600 hover:underline font-semibold dark:text-blue-400">
            Passive Voice
          </Link>
          , or{' '}
          <Link to="/topics/conditionals" className="text-blue-600 hover:underline font-semibold dark:text-blue-400">
            Conditionals
          </Link>
          , or select a topic from the sidebar to begin.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
