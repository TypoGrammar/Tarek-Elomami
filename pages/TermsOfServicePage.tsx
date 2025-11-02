import React from 'react';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const TermsOfServicePage: React.FC = () => {
  usePageMetadata({
    title: 'Terms of Service | TypoGrammar',
    description: 'Read the Terms of Service for using the TypoGrammar website and its resources.'
  });

  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Terms of Service</h1>
      </div>
      
      <p className="font-body text-slate-500 mb-6 dark:text-slate-400">Last Updated: October 26, 2023</p>

      <ArticleParagraph>
        Welcome to TypoGrammar. These terms and conditions outline the rules and regulations for the use of TypoGrammar's Website, located at this domain. By accessing this website we assume you accept these terms and conditions. Do not continue to use TypoGrammar if you do not agree to take all of the terms and conditions stated on this page.
      </ArticleParagraph>

      <ArticleHeading>License</ArticleHeading>
      <ArticleParagraph>
        Unless otherwise stated, TypoGrammar and/or its licensors own the intellectual property rights for all material on TypoGrammar. All intellectual property rights are reserved. You may access this from TypoGrammar for your own personal use subjected to restrictions set in these terms and conditions.
      </ArticleParagraph>
      <ArticleParagraph>
        You must not:
      </ArticleParagraph>
      <BulletList items={[
          "Republish material from TypoGrammar",
          "Sell, rent or sub-license material from TypoGrammar",
          "Reproduce, duplicate or copy material from TypoGrammar",
          "Redistribute content from TypoGrammar",
      ]} />
      <ArticleParagraph>
        This Agreement shall begin on the date hereof.
      </ArticleParagraph>

      <ArticleHeading>User Content</ArticleHeading>
       <ArticleParagraph>
        This website does not offer an opportunity for users to post and exchange opinions or information. TypoGrammar does not filter, edit, publish or review user-generated content.
      </ArticleParagraph>

      <ArticleHeading>Disclaimer</ArticleHeading>
       <ArticleParagraph>
        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
      </ArticleParagraph>
       <BulletList items={[
          "limit or exclude our or your liability for death or personal injury;",
          "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
          "limit any of our or your liabilities in any way that is not permitted under applicable law; or",
          "exclude any of our or your liabilities that may not be excluded under applicable law."
       ]} />
       <ArticleParagraph>
        As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
      </ArticleParagraph>
    </article>
  );
};

export default TermsOfServicePage;
