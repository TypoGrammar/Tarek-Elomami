import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { GRAMMAR_TOPICS } from '../constants/grammarTopics';
import { ArticleHeading, ArticleParagraph } from '../components/ArticleComponents';

const ProgressPage: React.FC = () => {
  const { progress } = useProgress();
  const totalTopics = GRAMMAR_TOPICS.length;
  const completedCount = progress.completedTopics.length;
  const progressPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const uncompletedTopics = GRAMMAR_TOPICS.filter(topic => !progress.completedTopics.includes(topic.id));
  const recommendedTopics = uncompletedTopics.slice(0, 4);

  const completedTopicsDetails = GRAMMAR_TOPICS.filter(topic => progress.completedTopics.includes(topic.id));

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Your Learning Progress</h1>
        <ArticleParagraph>
            Track your completed topics, view quiz scores, and discover what to learn next on your journey to mastering English grammar.
        </ArticleParagraph>
      </div>

      {/* Overall Progress */}
      <div className="p-8 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <ArticleHeading>Overall Progress</ArticleHeading>
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2 font-body">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Topics Completed</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">{completedCount} / {totalTopics}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-4 dark:bg-slate-700">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Recommended Topics */}
      <div className="p-8 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <ArticleHeading>What to Learn Next</ArticleHeading>
         {recommendedTopics.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {recommendedTopics.map(topic => (
                    <Link 
                        key={topic.id} 
                        to={`/topics/${topic.id}`}
                        className="group block p-6 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-blue-300 hover:shadow-lg transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500"
                    >
                        <p className="font-semibold font-body text-slate-800 group-hover:text-blue-600 transition-colors dark:text-slate-200 dark:group-hover:text-blue-400 text-lg">{topic.title}</p>
                        <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{topic.category}</p>
                    </Link>
                ))}
            </div>
         ) : (
            <div className="mt-6 text-center p-8 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/30 dark:border-green-500/50">
                <h3 className="font-heading text-2xl font-bold text-green-700 dark:text-green-300">Congratulations!</h3>
                <p className="font-body text-green-600 mt-2 dark:text-green-400">You've completed all the grammar topics. Fantastic work!</p>
            </div>
         )}
      </div>

      {/* Completed Topics & Quiz Scores */}
      {(completedTopicsDetails.length > 0 || Object.keys(progress.quizScores).length > 0) && (
        <div className="p-8 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
            <ArticleHeading>Review Your Progress</ArticleHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-6">
                {/* Completed Topics List */}
                <div>
                    <h4 className="font-heading text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">Completed Topics</h4>
                    {completedTopicsDetails.length > 0 ? (
                        <ul className="space-y-3">
                            {completedTopicsDetails.map(topic => (
                                <li key={topic.id} className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <Link to={`/topics/${topic.id}`} className="font-body text-slate-600 hover:text-blue-600 hover:underline dark:text-slate-400 dark:hover:text-blue-400">
                                        {topic.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="font-body text-slate-500 dark:text-slate-400">You haven't completed any topics yet. Visit a topic page and mark it as complete!</p>
                    )}
                </div>

                {/* Quiz Scores List */}
                <div>
                     <h4 className="font-heading text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">Best Quiz Scores</h4>
                     {Object.keys(progress.quizScores).length > 0 ? (
                        <ul className="space-y-3">
                            {Object.entries(progress.quizScores).map(([quizId, result]) => {
                                const topic = GRAMMAR_TOPICS.find(t => t.id === quizId);
                                const quizTitle = topic ? topic.title : quizId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                                return (
                                <li key={quizId} className="flex justify-between items-center font-body">
                                    <span className="text-slate-600 dark:text-slate-400">{quizTitle}</span>
                                    <span className="font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm dark:bg-blue-900/50 dark:text-blue-300">{result.score}/{result.total}</span>
                                </li>
                                )
                            })}
                        </ul>
                     ) : (
                         <p className="font-body text-slate-500 dark:text-slate-400">You haven't taken any quizzes yet. Find them at the end of each topic page.</p>
                     )}
                </div>
            </div>
        </div>
      )}

    </article>
  );
};

export default ProgressPage;
