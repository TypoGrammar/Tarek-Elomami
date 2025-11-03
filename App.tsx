

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';
import IrregularVerbsPage from './pages/IrregularVerbsPage';
import PhrasalVerbsPage from './pages/PhrasalVerbsPage';
import WritingPage from './pages/WritingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FaqPage from './pages/FaqPage';
import CommonlyConfusedWordsPage from './pages/CommonlyConfusedWordsPage';
import ReadingPage from './pages/ReadingPage';
import TeacherPage from './pages/TeacherPage';
import { ProgressProvider } from './contexts/ProgressContext';
import ProfessionalEmailPage from './pages/ProfessionalEmailPage';
import BuildingArgumentPage from './pages/BuildingArgumentPage';
import PronunciationPage from './pages/PronunciationPage';
import ProgressPage from './pages/ProgressPage';
import IdiomsPage from './pages/IdiomsPage';
import PastTensePronunciationPage from './pages/PastTensePronunciationPage';
import ParaphrasingPage from './pages/ParaphrasingPage';
import ReadingComprehensionPage from './pages/ReadingComprehensionPage';
import PrefixesSuffixesPage from './pages/PrefixesSuffixesPage';
import BasicGrammarTerminologyPage from './pages/BasicGrammarTerminologyPage';
import PrepositionCombinationsPage from './pages/PrepositionCombinationsPage';
import VaryingSentenceStructurePage from './pages/VaryingSentenceStructurePage';
import CriticalReadingPage from './pages/CriticalReadingPage';
import TenseVisualizerPage from './pages/TenseVisualizerPage';

const App: React.FC = () => {
  return (
    <ProgressProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="topics/:topicId" element={<TopicPage />} />
          <Route path="tense-visualizer" element={<TenseVisualizerPage />} />
          <Route path="preposition-combinations" element={<PrepositionCombinationsPage />} />
          <Route path="grammar-fundamentals/basic-terminology" element={<BasicGrammarTerminologyPage />} />
          <Route path="idioms" element={<IdiomsPage />} />
          <Route path="irregular-verbs" element={<IrregularVerbsPage />} />
          <Route path="phrasal-verbs" element={<PhrasalVerbsPage />} />
          <Route path="prefixes-suffixes" element={<PrefixesSuffixesPage />} />
          <Route path="commonly-confused-words" element={<CommonlyConfusedWordsPage />} />
          <Route path="writing/how-to-write-an-essay" element={<WritingPage />} />
          <Route path="writing/how-to-write-a-professional-email" element={<ProfessionalEmailPage />} />
          <Route path="writing/how-to-build-an-argument" element={<BuildingArgumentPage />} />
          <Route path="writing/how-to-paraphrase" element={<ParaphrasingPage />} />
          <Route path="writing/how-to-vary-sentence-structure" element={<VaryingSentenceStructurePage />} />
          <Route path="reading/how-to-read-efficiently" element={<ReadingPage />} />
          <Route path="reading/reading-comprehension-practice" element={<ReadingComprehensionPage />} />
          <Route path="reading/how-to-read-critically" element={<CriticalReadingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="teacher" element={<TeacherPage />} />
          <Route path="pronunciation-of-ed" element={<PastTensePronunciationPage />} />
          <Route path="pronunciation" element={<PronunciationPage />} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
};

export default App;