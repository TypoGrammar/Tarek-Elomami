import React from 'react';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';

const AboutPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">About TypoGrammar</h1>
      </div>
      
      <ArticleParagraph>
        TypoGrammar was born from a simple idea: learning English grammar shouldn't be complicated or boring. We believe that a clean, beautiful, and intuitive interface can make a world of difference in the learning experience. Our goal is to provide clear, concise, and accurate grammar explanations that are easy to understand and a joy to read.
      </ArticleParagraph>

      <ArticleHeading>Our Philosophy</ArticleHeading>
      <ArticleParagraph>
        <strong>Clarity First:</strong> We break down complex grammar rules into simple, digestible pieces. Our examples are practical and designed to illustrate the concepts in real-world contexts.
      </ArticleParagraph>
       <ArticleParagraph>
        <strong>Design Matters:</strong> We are passionate about good typography and clean design. A well-presented page reduces cognitive load and helps you focus on what's important: the content. We've carefully chosen fonts and layouts to create a comfortable reading environment.
      </ArticleParagraph>
       <ArticleParagraph>
        <strong>Accessible to All:</strong> This is a free resource for English learners around the globe. Whether you're a student, a professional, or just someone looking to brush up on your skills, TypoGrammar is here to help.
      </ArticleParagraph>

      <ArticleHeading>Our Mission</ArticleHeading>
      <ArticleParagraph>
        Our mission is to empower learners to communicate more effectively and confidently in English. We aim to be a reliable and friendly guide on your journey to mastering the intricacies of the English language. Thank you for joining our community!
      </ArticleParagraph>
    </article>
  );
};

export default AboutPage;