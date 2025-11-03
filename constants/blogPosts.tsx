import React from 'react';
import { BlogPost } from '../types';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList } from '../components/ArticleComponents';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '5-common-grammar-mistakes',
    title: '5 Common Grammar Mistakes and How to Avoid Them',
    author: 'The TypoGrammar Team',
    date: 'October 25, 2023',
    summary: 'Even native speakers make these mistakes. Learn how to identify and correct some of the most common errors in English grammar.',
    category: 'Grammar',
    content: (
      <>
        <ArticleParagraph>
          Mastering English grammar is a journey, and along the way, it's easy to pick up a few common mistakes. The good news is that once you're aware of them, they're easy to fix. Here are five of the most frequent errors we see, along with simple ways to get them right every time.
        </ArticleParagraph>
        <ArticleHeading>1. Your vs. You're</ArticleHeading>
        <ArticleParagraph>This is a classic. <InlineCode>Your</InlineCode> is a possessive adjective used to show that something belongs to "you." <InlineCode>You're</InlineCode> is a contraction of "you are."</ArticleParagraph>
        <BulletList items={[<>Correct: Is this <strong>your</strong> book?</>, <>Correct: <strong>You're</strong> going to be late.</>]} />
        <ArticleParagraph><strong>Quick Tip:</strong> If you can replace the word with "you are," use <InlineCode>you're</InlineCode>. Otherwise, use <InlineCode>your</InlineCode>.</ArticleParagraph>
        
        <ArticleHeading>2. Their vs. They're vs. There</ArticleHeading>
        <ArticleParagraph>These three homophones are a common source of confusion.</ArticleParagraph>
        <BulletList items={[
            <><strong>Their:</strong> Possessive, belonging to them. (e.g., The students finished <strong>their</strong> homework.)</>,
            <><strong>They're:</strong> Contraction of 'they are'. (e.g., <strong>They're</strong> coming over for dinner.)</>,
            <><strong>There:</strong> Refers to a place or is used to start a sentence. (e.g., Please put the bag over <strong>there</strong>. <strong>There</strong> is a problem.)</>
        ]}/>

        <ArticleHeading>3. Its vs. It's</ArticleHeading>
        <ArticleParagraph>Similar to "your/you're," this is about possession versus contraction. <InlineCode>Its</InlineCode> is possessive. <InlineCode>It's</InlineCode> is a contraction of "it is" or "it has."</ArticleParagraph>
        <BulletList items={[<>Correct: The dog wagged <strong>its</strong> tail.</>, <>Correct: <strong>It's</strong> a beautiful day.</>]} />
        <ArticleParagraph><strong>Quick Tip:</strong> Unlike with regular nouns, possessive pronouns like <InlineCode>its</InlineCode> do not use an apostrophe.</ArticleParagraph>

        <ArticleHeading>4. Less vs. Fewer</ArticleHeading>
        <ArticleParagraph>Use <InlineCode>fewer</InlineCode> for things you can count (countable nouns). Use <InlineCode>less</InlineCode> for things you can't count (uncountable nouns).</ArticleParagraph>
        <BulletList items={[<>Correct: I have <strong>fewer</strong> coins than you.</>, <>Correct: I have <strong>less</strong> money than you.</>]} />

        <ArticleHeading>5. Affect vs. Effect</ArticleHeading>
        <ArticleParagraph>Generally, <InlineCode>affect</InlineCode> is a verb meaning "to influence," and <InlineCode>effect</InlineCode> is a noun meaning "a result."</ArticleParagraph>
        <BulletList items={[<>Correct: The rain will <strong>affect</strong> the traffic.</>, <>Correct: The rain had a negative <strong>effect</strong> on the traffic.</>]} />
      </>
    )
  },
  {
    slug: 'whom-modern-usage',
    title: "Is 'Whom' Still a Thing? A Guide to Modern Usage",
    author: 'The TypoGrammar Team',
    date: 'October 22, 2023',
    summary: "'Whom' often feels formal or even outdated. We break down when you should still use it and when it's okay to just use 'who'.",
    category: 'Style & Usage',
    content: (
       <>
        <ArticleParagraph>
          The word <InlineCode>whom</InlineCode> can make writers and speakers pause, uncertain if they are using it correctly. In modern, informal English, <InlineCode>who</InlineCode> has largely taken over, but in formal writing and specific grammatical constructions, <InlineCode>whom</InlineCode> is still the correct choice.
        </ArticleParagraph>
        <ArticleHeading>The Basic Rule</ArticleHeading>
        <ArticleParagraph>
          The rule is actually quite simple. Use <InlineCode>who</InlineCode> when you are referring to the subject of a clause. Use <InlineCode>whom</InlineCode> when you are referring to the object of a verb or preposition.
        </ArticleParagraph>
        <ArticleParagraph><strong>Quick Tip:</strong> Try substituting <InlineCode>he/him</InlineCode> or <InlineCode>she/her</InlineCode>. If <InlineCode>he</InlineCode> or <InlineCode>she</InlineCode> would fit, use <InlineCode>who</InlineCode>. If <InlineCode>him</InlineCode> or <InlineCode>her</InlineCode> would fit, use <InlineCode>whom</InlineCode>.</ArticleParagraph>
        <BulletList items={[
            <><strong>Who</strong>/Whom wrote the letter? -&gt; <strong>He</strong> wrote the letter. -&gt; Correct: <strong>Who</strong> wrote the letter?</>,
            <>For <strong>who</strong>/whom should I vote? -&gt; Should I vote for <strong>him</strong>? -&gt; Correct: For <strong>whom</strong> should I vote?</>,
        ]} />
       </>
    )
  },
    {
    slug: 'mastering-the-comma-splice',
    title: 'Mastering the Art of the Comma Splice',
    author: 'The TypoGrammar Team',
    date: 'October 19, 2023',
    summary: 'A comma splice is a common writing error that can confuse readers. Learn three easy ways to identify and fix it for clearer sentences.',
    category: 'Punctuation',
    content: (
       <>
        <ArticleParagraph>
          A comma splice occurs when you join two independent clauses (two complete sentences) with only a comma. This creates a run-on sentence that can make your writing unclear.
        </ArticleParagraph>
        <ArticleParagraph><strong>Incorrect Example:</strong> <InlineCode>I went to the store, I bought some milk.</InlineCode></ArticleParagraph>
        <ArticleHeading>How to Fix a Comma Splice</ArticleHeading>
        <BulletList items={[
            <><strong>1. Use a Period:</strong> The simplest fix is to separate the clauses into two sentences. <br/>Correct: <InlineCode>I went to the store. I bought some milk.</InlineCode></>,
            <><strong>2. Use a Semicolon:</strong> If the two clauses are closely related, you can join them with a semicolon. <br/>Correct: <InlineCode>I went to the store; I bought some milk.</InlineCode></>,
            <><strong>3. Use a Comma and a Coordinating Conjunction:</strong> You can use a comma followed by a conjunction (for, and, nor, but, or, yet, so). <br/>Correct: <InlineCode>I went to the store, and I bought some milk.</InlineCode></>,
        ]} />
       </>
    )
  },
  {
    slug: 'stronger-adjectives',
    title: "Beyond 'Very': 10 Stronger Adjectives to Elevate Your Writing",
    author: 'The TypoGrammar Team',
    date: 'October 15, 2023',
    summary: "The word 'very' is often used as a crutch. Swapping it out for more precise, powerful adjectives can make your writing more dynamic and engaging.",
    category: 'Writing Skills',
    content: (
       <>
        <ArticleParagraph>
          The adverb 'very' is a utility word, but it often weakens our writing by taking the place of a more descriptive adjective. By choosing stronger words, you can paint a more vivid picture for your reader.
        </ArticleParagraph>
        <ArticleHeading>Try These Swaps</ArticleHeading>
        <BulletList items={[
            <>Instead of 'very tired', try <strong>exhausted</strong>.</>,
            <>Instead of 'very hungry', try <strong>ravenous</strong> or <strong>famished</strong>.</>,
            <>Instead of 'very cold', try <strong>freezing</strong>.</>,
            <>Instead of 'very angry', try <strong>furious</strong> or <strong>irate</strong>.</>,
            <>Instead of 'very big', try <strong>enormous</strong>, <strong>immense</strong>, or <strong>colossal</strong>.</>,
            <>Instead of 'very small', try <strong>tiny</strong> or <strong>minuscule</strong>.</>,
            <>Instead of 'very good', try <strong>excellent</strong>, <strong>superb</strong>, or <strong>magnificent</strong>.</>,
            <>Instead of 'very bad', try <strong>awful</strong>, <strong>terrible</strong>, or <strong>atrocious</strong>.</>,
            <>Instead of 'very smart', try <strong>brilliant</strong> or <strong>intelligent</strong>.</>,
            <>Instead of 'very beautiful', try <strong>gorgeous</strong>, <strong>stunning</strong>, or <strong>exquisite</strong>.</>,
        ]} />
       </>
    )
  },
  {
    slug: 'history-of-hello',
    title: "The Surprising History of the Word 'Hello'",
    author: 'The TypoGrammar Team',
    date: 'October 11, 2023',
    summary: "It's one of the first words we learn in English, but 'hello' wasn't a common greeting until the invention of the telephone. Dive into its history.",
    category: 'Etymology',
    content: (
       <>
        <ArticleParagraph>
          'Hello' is arguably one of the most common words in the English language, but its history is surprisingly short. It didn't become a popular greeting until the late 19th century, and its rise is directly tied to the invention of the telephone.
        </ArticleParagraph>
        <ArticleParagraph>
          Before the telephone, people used greetings like 'Good morning,' 'How do you do?,' or simply a person's name. The word 'hello' existed but was typically used to express surprise, like 'Hello, what's this?'
        </ArticleParagraph>
        <ArticleHeading>The Telephone Changes Everything</ArticleHeading>
        <ArticleParagraph>
          When the telephone was invented, a standard greeting was needed to announce your presence on the line. Alexander Graham Bell, the inventor, famously preferred the nautical term 'Ahoy!'. However, it was his rival, Thomas Edison, who championed 'Hello'. Edison used it in his correspondence and urged telephone operators to use it when answering calls. His influence won out, and 'hello' quickly became the standard, eventually seeping into everyday, face-to-face conversation.
        </ArticleParagraph>
       </>
    )
  },
  {
    slug: 'phrasal-verbs-native-speaker',
    title: 'Phrasal Verbs: Your Secret Weapon for Sounding Like a Native Speaker',
    author: 'The TypoGrammar Team',
    date: 'October 8, 2023',
    summary: 'Phrasal verbs are everywhere in spoken English. Understanding and using them correctly can significantly boost your fluency and confidence.',
    category: 'Verbs',
    content: (
       <>
        <ArticleParagraph>
          If you want to sound more natural when speaking English, mastering phrasal verbs is key. A phrasal verb is a combination of a standard verb (like 'get', 'put', 'take') and one or two particles (usually a preposition or adverb). This combination creates a new meaning that is often idiomatic.
        </ArticleParagraph>
        <ArticleHeading>Why They Are Important</ArticleHeading>
        <ArticleParagraph>
          Native speakers use phrasal verbs constantly in informal conversation. While you could say "I will collect you at 7 PM," it's far more common to hear "I'll <strong>pick you up</strong> at 7 PM." Learning them helps you understand everyday speech and makes your own English sound less like a textbook.
        </ArticleParagraph>
        <ArticleHeading>Tips for Learning</ArticleHeading>
        <BulletList items={[
            <><strong>Learn them in context:</strong> Don't just memorize lists. Pay attention to how they are used in movies, songs, and conversations.</>,
            <><strong>Group them by verb:</strong> Try learning several phrasal verbs with 'get' at once (get up, get over, get along, get away).</>,
            <><strong>Keep a journal:</strong> When you learn a new one, write it down with its meaning and an example sentence that is relevant to your life.</>,
        ]} />
       </>
    )
  },
  {
    slug: 'reading-fiction-improves-vocabulary',
    title: 'How Reading Fiction Can Dramatically Improve Your Vocabulary',
    author: 'The TypoGrammar Team',
    date: 'October 4, 2023',
    summary: 'Looking for a fun way to learn new words? Reading stories is one of the most effective methods for vocabulary acquisition. Here’s why.',
    category: 'Learning Tips',
     content: (
       <>
        <ArticleParagraph>
          While flashcards and vocabulary lists have their place, one of the most effective and enjoyable ways to expand your vocabulary is by reading fiction. Stories provide a rich context that makes new words more memorable and easier to understand.
        </ArticleParagraph>
        <ArticleHeading>Context is King</ArticleHeading>
        <ArticleParagraph>
          When you encounter a new word in a novel, you see it in a full sentence, surrounded by other words that provide clues to its meaning. This context helps you understand the word's nuances and how it's used naturally, which is something a simple dictionary definition can't always provide.
        </ArticleParagraph>
        <ArticleHeading>Repetition and Emotion</ArticleHeading>
        <ArticleParagraph>
          Authors often reuse specific words or themes throughout a book, giving you multiple exposures to new vocabulary in slightly different contexts. Furthermore, because stories engage our emotions, we are more likely to remember words associated with a character we love or a plot twist that surprised us. The emotional connection helps cement the word in our memory.
        </ArticleParagraph>
       </>
    )
  },
  {
    slug: 'active-vs-passive-voice',
    title: 'Active vs. Passive Voice: When and Why to Use Each',
    author: 'The TypoGrammar Team',
    date: 'September 30, 2023',
    summary: 'Active voice usually makes for stronger, clearer writing, but the passive voice has its own important uses. Learn to distinguish between them and choose the right one for your purpose.',
    category: 'Sentence Structure',
    content: (
       <>
        <ArticleParagraph>
          Understanding the difference between active and passive voice can significantly improve the clarity and impact of your writing.
        </ArticleParagraph>
        <ArticleHeading>Active Voice</ArticleHeading>
        <ArticleParagraph>
          In the active voice, the subject of the sentence performs the action. The structure is straightforward: Subject + Verb + Object. This voice is generally preferred for most writing because it's direct, concise, and energetic.
        </ArticleParagraph>
        <BulletList items={[<>Example: <strong>The dog chased</strong> the ball.</>]} />
        <ArticleHeading>Passive Voice</ArticleHeading>
        <ArticleParagraph>
          In the passive voice, the subject receives the action. The structure is: Object + Verb (to be + past participle) + by + Subject.
        </ArticleParagraph>
        <BulletList items={[<>Example: The ball <strong>was chased by</strong> the dog.</>]} />
        <ArticleHeading>When to Use Passive Voice</ArticleHeading>
        <BulletList items={[
            <>When the actor is unknown or unimportant: 'My car <strong>was stolen</strong>.' (We don't know who stole it).</>,
            <>To emphasize the object of the action: 'The Mona Lisa <strong>was painted</strong> by Leonardo da Vinci.' (The focus is on the painting).</>,
            <>In scientific and technical writing for an objective tone: 'The solution <strong>was heated</strong> to 100°C.'</>
        ]} />
       </>
    )
  },
  {
    slug: 'english-pronunciation-tips',
    title: 'Tips for Non-Native Speakers to Nail English Pronunciation',
    author: 'The TypoGrammar Team',
    date: 'September 26, 2023',
    summary: "Pronunciation can be one of the trickiest parts of learning English. These practical tips can help you speak more clearly and confidently.",
    category: 'Speaking',
    content: (
       <>
        <ArticleParagraph>
          English pronunciation can be challenging due to its non-phonetic spelling and wide range of vowel sounds. However, with consistent practice, you can make great progress.
        </ArticleParagraph>
        <ArticleHeading>Practical Tips for Improvement</ArticleHeading>
        <BulletList items={[
            <><strong>Listen and Imitate:</strong> Listen carefully to native speakers (through movies, podcasts, or music) and try to mimic their intonation and rhythm.</>,
            <><strong>Record Yourself:</strong> Record yourself speaking and compare it to a native speaker. This helps you identify areas you need to work on.</>,
            <><strong>Focus on Minimal Pairs:</strong> Practice words that differ by only one sound, like 'ship' and 'sheep'. This will train your ear and mouth to notice and produce subtle differences.</>,
            <><strong>Learn the Phonemic Chart:</strong> Understanding the symbols of the International Phonetic Alphabet (IPA) can help you correctly pronounce words you look up in the dictionary.</>,
        ]} />
       </>
    )
  },
  {
    slug: 'the-oxford-comma',
    title: 'The Oxford Comma: A Hill Worth Dying On?',
    author: 'The TypoGrammar Team',
    date: 'September 21, 2023',
    summary: 'Few punctuation marks stir as much debate as the Oxford comma. We explain what it is, why it matters, and when you should use it.',
    category: 'Punctuation',
    content: (
       <>
        <ArticleParagraph>
          The Oxford comma (or serial comma) is the final comma in a list of three or more items, placed before the 'and' or 'or'. For example: "I like apples, bananas, <strong>and</strong> oranges."
        </ArticleParagraph>
        <ArticleHeading>The Argument For</ArticleHeading>
        <ArticleParagraph>
          The primary reason to use the Oxford comma is to avoid ambiguity. Consider this famous example: "I'd like to thank my parents, Ayn Rand and God." Without the Oxford comma after 'Rand', it sounds like the speaker's parents are Ayn Rand and God. With it, they become three separate entities in the list.
        </ArticleParagraph>
        <ArticleParagraph>Corrected: "I'd like to thank my parents, Ayn Rand, <strong>and</strong> God."</ArticleParagraph>
        <ArticleHeading>The Argument Against</ArticleHeading>
        <ArticleParagraph>
          Those who oppose the Oxford comma argue that it's often unnecessary and can clutter a sentence. Many journalistic style guides, like the AP Stylebook, omit it to save space.
        </ArticleParagraph>
        <ArticleHeading>Our Recommendation</ArticleHeading>
        <ArticleParagraph>
          For clarity and precision, especially in academic and formal writing, we recommend using the Oxford comma. The most important thing is to be consistent with your choice throughout a piece of writing.
        </ArticleParagraph>
       </>
    )
  },
];