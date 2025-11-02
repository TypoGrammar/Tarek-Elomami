import React, { useState } from 'react';
import { ArticleHeading, ArticleParagraph } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const TeacherPage: React.FC = () => {
  usePageMetadata({
    title: 'Prompts for Teachers | TypoGrammar',
    description: 'A collection of curated prompts for English teachers to use with AI language models like ChatGPT to generate lesson plans, materials, and ideas.'
  });

  const [copySuccess, setCopySuccess] = useState('');
  const [copySuccess2, setCopySuccess2] = useState('');
  const [copySuccess3, setCopySuccess3] = useState('');
  const [copySuccess4, setCopySuccess4] = useState('');
  const [copySuccess5, setCopySuccess5] = useState('');
  const [copySuccess6, setCopySuccess6] = useState('');
  const [copySuccess7, setCopySuccess7] = useState('');

  const promptText = "For the duration of this conversation, act as an English teacher expert in English language and teaching specializing in English language arts. Your first task is to design a comprehensive curriculum that effectively teaches students the fundamentals of English language and literature. Be sure to include a variety of teaching methods and materials that cater to different learning styles and abilities. Additionally, consider incorporating technology and real-world examples to make the curriculum engaging and relevant to students. Your curriculum should cover grammar, vocabulary, reading comprehension, writing skills, and literary analysis. Provide clear learning objectives and assessments to measure student progress and adjust the curriculum accordingly.";
  const promptText2 = "Suggest five interactive activities for teaching A2 level students about ‘[Insert topic]’";
  const promptText3 = "Create a vocabulary worksheet for A2 level students on the topic of ‘[Insert topic]’. Include matching, fill-in-the-blank, and multiple-choice questions";
  const promptText4 = "Write a short reading passage for A1 level students about ‘[Insert topic]’ and create five comprehension questions.”";
  const promptText5 = "Generate a grammar exercise for A2 level students to practice ‘[Insert grammar topic]’";
  const promptText6 = "Suggest three homework activities for A2 level students to reinforce their learning about ‘[Insert topic]’.”";
  const promptText7 = "Give me some tips on how to manage a classroom of A1 level students effectively.”";

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, () => {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText(promptText2).then(() => {
      setCopySuccess2('Copied!');
      setTimeout(() => setCopySuccess2(''), 2000);
    }, () => {
      setCopySuccess2('Failed to copy');
      setTimeout(() => setCopySuccess2(''), 2000);
    });
  };

  const handleCopy3 = () => {
    navigator.clipboard.writeText(promptText3).then(() => {
      setCopySuccess3('Copied!');
      setTimeout(() => setCopySuccess3(''), 2000);
    }, () => {
      setCopySuccess3('Failed to copy');
      setTimeout(() => setCopySuccess3(''), 2000);
    });
  };
  
    const handleCopy4 = () => {
    navigator.clipboard.writeText(promptText4).then(() => {
      setCopySuccess4('Copied!');
      setTimeout(() => setCopySuccess4(''), 2000);
    }, () => {
      setCopySuccess4('Failed to copy');
      setTimeout(() => setCopySuccess4(''), 2000);
    });
  };
  
    const handleCopy5 = () => {
    navigator.clipboard.writeText(promptText5).then(() => {
      setCopySuccess5('Copied!');
      setTimeout(() => setCopySuccess5(''), 2000);
    }, () => {
      setCopySuccess5('Failed to copy');
      setTimeout(() => setCopySuccess5(''), 2000);
    });
  };

  const handleCopy6 = () => {
    navigator.clipboard.writeText(promptText6).then(() => {
      setCopySuccess6('Copied!');
      setTimeout(() => setCopySuccess6(''), 2000);
    }, () => {
      setCopySuccess6('Failed to copy');
      setTimeout(() => setCopySuccess6(''), 2000);
    });
  };

  const handleCopy7 = () => {
    navigator.clipboard.writeText(promptText7).then(() => {
      setCopySuccess7('Copied!');
      setTimeout(() => setCopySuccess7(''), 2000);
    }, () => {
      setCopySuccess7('Failed to copy');
      setTimeout(() => setCopySuccess7(''), 2000);
    });
  };


  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Prompts for Teachers</h1>
      </div>
      
      <ArticleParagraph>
        Here are some curated prompts designed for teachers to use with AI language models like ChatGPT. You can copy these prompts to generate lesson plans, teaching materials, and creative ideas for your classroom.
      </ArticleParagraph>

      <ArticleHeading>Comprehensive English Curriculum Design</ArticleHeading>

      <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 my-6 dark:bg-slate-800 dark:border-slate-700">
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2"
          aria-live="polite"
        >
          {copySuccess ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{copySuccess}</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Prompt</span>
            </>
          )}
        </button>
        <p className="font-code text-slate-700 leading-relaxed text-base dark:text-slate-300 pr-32">
          {promptText}
        </p>
      </div>

      <ArticleHeading>Interactive Activities for A2 Students</ArticleHeading>

      <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 my-6 dark:bg-slate-800 dark:border-slate-700">
        <button
          onClick={handleCopy2}
          className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2"
          aria-live="polite"
        >
          {copySuccess2 ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{copySuccess2}</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Prompt</span>
            </>
          )}
        </button>
        <p className="font-code text-slate-700 leading-relaxed text-base dark:text-slate-300 pr-32">
          {promptText2}
        </p>
      </div>

       <ArticleHeading>Vocabulary Worksheet for A2 Students</ArticleHeading>

      <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 my-6 dark:bg-slate-800 dark:border-slate-700">
        <button
          onClick={handleCopy3}
          className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2"
          aria-live="polite"
        >
          {copySuccess3 ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{copySuccess3}</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Prompt</span>
            </>
          )}
        </button>
        <p className="font-code text-slate-700 leading-relaxed text-base dark:text-slate-300 pr-32">
          {promptText3}
        </p>
      </div>

      <ArticleHeading>Reading Comprehension for A1 Students</ArticleHeading>

      <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 my-6 dark:bg-slate-800 dark:border-slate-700">
        <button
          onClick={handleCopy4}
          className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2"
          aria-live="polite"
        >
          {copySuccess4 ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{copySuccess4}</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Prompt</span>
            </>
          )}
        </button>
        <p className="font-code text-slate-700 leading-relaxed text-base dark:text-slate-300 pr-32">
          {promptText4}
        </p>
      </div>
      
      <ArticleHeading>Grammar Exercise for A2 Students</ArticleHeading>

      <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 my-6 dark:bg-slate-800 dark:border-slate-700">
        <button
          onClick={handleCopy5}
          className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2"
          aria-live="polite"
        >
          {copySuccess5 ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{copySuccess5}</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Prompt</span>
            </>
          )}
        </button>
        <p className="font-code text-slate-700 leading-relaxed text-base dark:text-slate-300 pr-32">
          {promptText5}
        </p>
      </div>

      <ArticleHeading>Homework Suggestions</ArticleHeading>

      <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 my-6 dark:bg-slate-800 dark:border-slate-700">
        <button
          onClick={handleCopy6}
          className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2"
          aria-live="polite"
        >
          {copySuccess6 ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{copySuccess6}</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Prompt</span>
            </>
          )}
        </button>
        <p className="font-code text-slate-700 leading-relaxed text-base dark:text-slate-300 pr-32">
          {promptText6}
        </p>
      </div>

      <ArticleHeading>Classroom Management Tips</ArticleHeading>

      <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 my-6 dark:bg-slate-800 dark:border-slate-700">
        <button
          onClick={handleCopy7}
          className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2"
          aria-live="polite"
        >
          {copySuccess7 ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{copySuccess7}</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Prompt</span>
            </>
          )}
        </button>
        <p className="font-code text-slate-700 leading-relaxed text-base dark:text-slate-300 pr-32">
          {promptText7}
        </p>
      </div>
    </article>
  );
};

export default TeacherPage;
