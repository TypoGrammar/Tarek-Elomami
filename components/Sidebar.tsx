
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GRAMMAR_TOPICS } from '../constants/grammarTopics';
import { GrammarTopic } from '../types';
import { useProgress } from '../contexts/ProgressContext';
import DidYouKnow from './DidYouKnow';

interface SidebarProps {
  isMobileOpen: boolean;
  onClose: () => void;
}

// Helper component to highlight search terms
const Highlight: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-slate-900 rounded-sm px-0.5 py-0 dark:bg-yellow-500/50 dark:text-slate-100">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const SidebarContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { progress } = useProgress();

  const groupedTopics = GRAMMAR_TOPICS.reduce((acc, topic) => {
    (acc[topic.category] = acc[topic.category] || []).push(topic);
    return acc;
  }, {} as Record<string, GrammarTopic[]>);

  const activeLinkClass = 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-500 dark:bg-blue-900/50 dark:text-blue-400 dark:border-blue-500';
  const defaultLinkClass = 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 border-l-4 border-transparent hover:border-slate-300 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 dark:hover:border-slate-600';
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  const fundamentalsPages = [
    { path: '/grammar-fundamentals/basic-terminology', title: 'Basic Terminology' },
  ];

  const adjectiveAndAdverbPages = [
    { path: '/topics/adjectives-adverbs', title: 'Adjectives & Adverbs' },
    { path: '/topics/comparative-superlative', title: 'Comparatives & Superlatives' },
    { path: '/preposition-combinations', title: 'Preposition Combinations' },
  ];

  const vocabularyPages = [
    { path: '/idioms', title: 'Idioms & Expressions' },
    { path: '/commonly-confused-words', title: 'Commonly Confused Words' },
    { path: '/irregular-verbs', title: 'Irregular Verbs List' },
    { path: '/phrasal-verbs', title: 'Phrasal Verbs List' },
    { path: '/prefixes-suffixes', title: 'Prefixes & Suffixes' },
  ];

  const readingPages = [
    { path: '/reading/how-to-read-critically', title: 'How to Read Critically' },
    { path: '/reading/how-to-read-efficiently', title: 'How to Read Efficiently' },
    { path: '/reading/reading-comprehension-practice', title: 'Reading Comprehension Practice' },
  ];
  readingPages.sort((a, b) => a.title.localeCompare(b.title));

  const writingPages = [
    { path: '/writing/how-to-build-an-argument', title: 'How to Build an Argument' },
    { path: '/writing/how-to-paraphrase', title: 'How to Paraphrase & Avoid Plagiarism' },
    { path: '/writing/how-to-vary-sentence-structure', title: 'How to Vary Your Sentence Structure' },
    { path: '/writing/how-to-write-a-professional-email', title: 'How to Write a Professional Email' },
    { path: '/writing/how-to-write-an-essay', title: 'How to Write an Essay' },
  ];
  writingPages.sort((a, b) => a.title.localeCompare(b.title));
  
  const pronunciationPages = [
    { path: '/pronunciation-of-ed', title: 'Pronunciation of -ed' },
    { path: '/pronunciation', title: 'Pronunciation Practice' },
  ];
  
  const visualGuides = [
    { path: '/tense-visualizer', title: 'Tense Visualizer' },
  ];

  const teacherPages = [
    { path: '/teacher', title: 'Prompts for Teacher' }
  ];
  
  const filteredFundamentalsPages = fundamentalsPages.filter(page =>
    page.title.toLowerCase().includes(lowercasedSearchTerm)
  );

  const filteredAdjectiveAndAdverbPages = adjectiveAndAdverbPages.filter(page =>
    page.title.toLowerCase().includes(lowercasedSearchTerm)
  );

  const filteredVocabularyPages = vocabularyPages.filter(page => 
    page.title.toLowerCase().includes(lowercasedSearchTerm)
  );
  
  const filteredReadingPages = readingPages.filter(page =>
    page.title.toLowerCase().includes(lowercasedSearchTerm)
  );

  const filteredWritingPages = writingPages.filter(page =>
    page.title.toLowerCase().includes(lowercasedSearchTerm)
  );

  const filteredPronunciationPages = pronunciationPages.filter(page =>
    page.title.toLowerCase().includes(lowercasedSearchTerm)
  );
  
  const filteredVisualGuides = visualGuides.filter(page =>
    page.title.toLowerCase().includes(lowercasedSearchTerm)
  );

  const filteredTeacherPages = teacherPages.filter(page =>
    page.title.toLowerCase().includes(lowercasedSearchTerm)
  );

  const showFundamentalsSection = filteredFundamentalsPages.length > 0;
  const showAdjectiveAndAdverbSection = filteredAdjectiveAndAdverbPages.length > 0;
  const showVocabularySection = filteredVocabularyPages.length > 0;
  const showReadingSection = filteredReadingPages.length > 0;
  const showWritingSection = filteredWritingPages.length > 0;
  const showPronunciationSection = filteredPronunciationPages.length > 0;
  const showVisualGuidesSection = filteredVisualGuides.length > 0;
  const showTeacherSection = filteredTeacherPages.length > 0;

  return (
    <nav className="flex flex-col space-y-6">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          placeholder="Search topics..."
          className="w-full pl-10 pr-10 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-base transition-shadow duration-200 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search grammar topics"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            aria-label="Clear search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <div>
        <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 dark:text-slate-500">
          Main
        </h2>
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/"
              end
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10 0h3a1 1 0 001-1V10M9 20v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
              </svg>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/progress"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>Your Progress</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>FAQ</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {showFundamentalsSection && (
         <div key="grammar-fundamentals">
            <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between px-3 dark:text-slate-500">
            <span>Grammar Fundamentals</span>
          </h2>
          <ul className="space-y-1">
            {filteredFundamentalsPages.map(page => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  <Highlight text={page.title} highlight={searchTerm} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      {Object.entries(groupedTopics).map(([category, topics]) => {
        const categoryMatches = category.toLowerCase().includes(lowercasedSearchTerm);
        const filteredTopics = categoryMatches
          ? topics
          : topics.filter(topic => topic.title.toLowerCase().includes(lowercasedSearchTerm));
        
        // Hide this category because it's being handled in its own section now.
        if (category === 'Adjectives & Adverbs') return null;
        
        if (filteredTopics.length === 0) {
          return null;
        }

        return (
          <div key={category}>
            <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between px-3 dark:text-slate-500">
              <span><Highlight text={category} highlight={searchTerm} /></span>
              <span className="bg-slate-200 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-full dark:bg-slate-700 dark:text-slate-300">
                {filteredTopics.length}
              </span>
            </h2>
            <ul className="space-y-1">
              {filteredTopics.map(topic => (
                <li key={topic.id}>
                  <NavLink
                    to={`/topics/${topic.id}`}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                    }
                  >
                    <span><Highlight text={topic.title} highlight={searchTerm} /></span>
                    {progress.completedTopics.includes(topic.id) && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      {showAdjectiveAndAdverbSection && (
        <div key="adjectives-adverbs">
          <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 dark:text-slate-500">
            Adjectives & Adverbs
          </h2>
          <ul className="space-y-1">
            {filteredAdjectiveAndAdverbPages.map(page => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  <Highlight text={page.title} highlight={searchTerm} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showVocabularySection && (
        <div key="vocabulary">
            <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between px-3 dark:text-slate-500">
            <span>Vocabulary</span>
          </h2>
          <ul className="space-y-1">
            {filteredVocabularyPages.map(page => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  <Highlight text={page.title} highlight={searchTerm} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
       {showReadingSection && (
        <div key="reading-skills">
          <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 dark:text-slate-500">
            Reading Skills
          </h2>
          <ul className="space-y-1">
            {filteredReadingPages.map(page => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  <Highlight text={page.title} highlight={searchTerm} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showWritingSection && (
        <div key="writing-skills">
          <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 dark:text-slate-500">
            Writing Skills
          </h2>
          <ul className="space-y-1">
            {filteredWritingPages.map(page => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  <Highlight text={page.title} highlight={searchTerm} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showPronunciationSection && (
        <div key="pronunciation">
          <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 dark:text-slate-500">
            Pronunciation
          </h2>
          <ul className="space-y-1">
            {filteredPronunciationPages.map(page => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  {page.path === '/pronunciation-of-ed' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  )}
                  {page.path === '/pronunciation' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                  <span><Highlight text={page.title} highlight={searchTerm} /></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showVisualGuidesSection && (
        <div key="visual-guides">
          <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 dark:text-slate-500">
            Visual Guides
          </h2>
          <ul className="space-y-1">
            {filteredVisualGuides.map(page => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><Highlight text={page.title} highlight={searchTerm} /></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showTeacherSection && (
        <div key="teacher-resources">
          <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 dark:text-slate-500">
            For Teachers
          </h2>
          <ul className="space-y-1">
            {filteredTeacherPages.map(page => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-body transition-colors duration-200 ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span><Highlight text={page.title} highlight={searchTerm} /></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h2 className="font-heading text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3 dark:text-slate-500">
          Fun Fact
        </h2>
        <DidYouKnow />
      </div>
    </nav>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onClose }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-72 h-[calc(100vh-69px)] sticky top-[69px] bg-white border-r border-slate-200 p-6 overflow-y-auto hidden md:block dark:bg-slate-900 dark:border-slate-700">
        <SidebarContent onClose={() => {}} />
      </aside>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
          aria-hidden="true"
        ></div>
        {/* Sidebar Panel */}
        <div className={`relative w-72 h-full bg-white border-r border-slate-200 p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out dark:bg-slate-900 dark:border-slate-700 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center mb-6">
             <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200">Menu</h2>
             <button
               onClick={onClose}
               className="p-2 rounded-md text-slate-600 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800"
               aria-label="Close navigation menu"
             >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
          </div>
          <SidebarContent onClose={onClose} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
