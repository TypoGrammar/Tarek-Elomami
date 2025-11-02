
import React from 'react';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';

const ContactPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Contact Us</h1>
      
      <ArticleParagraph>
        We'd love to hear from you! Whether you have a question, a suggestion for a new topic, or have found an error, please don't hesitate to reach out. Your feedback is invaluable in helping us improve TypoGrammar for everyone.
      </ArticleParagraph>

      <ArticleHeading>Get in Touch</ArticleHeading>
      <ArticleParagraph>
        For all inquiries, please email us at:
      </ArticleParagraph>
      <p className="font-body text-slate-700 leading-relaxed mb-6 text-lg dark:text-slate-300">
        <a href="mailto:contact@typogrammar.com" className="text-blue-600 hover:underline font-semibold dark:text-blue-400">
          contact@typogrammar.com
        </a>
      </p>
      <ArticleParagraph>
        We do our best to respond to every message, but please allow a few business days for a reply. Thank you for your patience and for being a part of our community!
      </ArticleParagraph>
    </article>
  );
};

export default ContactPage;