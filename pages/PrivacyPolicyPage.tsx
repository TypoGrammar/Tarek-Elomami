import React from 'react';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Privacy Policy</h1>
      </div>
      
      <p className="font-body text-slate-500 mb-6 dark:text-slate-400">Last Updated: October 26, 2023</p>

      <ArticleParagraph>
        Welcome to TypoGrammar ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we handle information on our website. Since our application is purely for educational purposes and does not require user accounts, our data collection practices are minimal.
      </ArticleParagraph>

      <ArticleHeading>Information We Collect</ArticleHeading>
      <ArticleParagraph>
        We do not collect any personally identifiable information (PII) from our users.
      </ArticleParagraph>
      <BulletList items={[
          "We do not require you to create an account or provide your name, email address, or any other personal details.",
          "We do not use cookies to track your activity across different websites.",
          "We do not collect information about your device, IP address, or location.",
      ]} />


      <ArticleHeading>How We Use Information</ArticleHeading>
       <ArticleParagraph>
        As we do not collect personal information, we do not use it for any purpose. The search functionality and navigation history are handled entirely within your browser and are not sent to our servers.
      </ArticleParagraph>

      <ArticleHeading>Third-Party Services</ArticleHeading>
       <ArticleParagraph>
        This website is a self-contained application and does not integrate with any third-party services for analytics, advertising, or other purposes that would involve sharing data.
      </ArticleParagraph>

      <ArticleHeading>Changes to This Privacy Policy</ArticleHeading>
       <ArticleParagraph>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
      </ArticleParagraph>

       <ArticleHeading>Contact Us</ArticleHeading>
       <ArticleParagraph>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@typogrammar.com" className="text-blue-600 hover:underline font-semibold dark:text-blue-400">contact@typogrammar.com</a>.
      </ArticleParagraph>
    </article>
  );
};

export default PrivacyPolicyPage;