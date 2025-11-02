
import React from 'react';
import { GrammarTopic } from '../types';
import { ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList } from '../components/ArticleComponents';
import { SentenceTransformationDiagram, TimelineDiagram } from '../components/VisualAids';

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // Tenses
  {
    id: 'present-simple',
    title: 'Present Simple Tense',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Present Simple is the most basic tense in English. We use it to talk about things that are generally true, habits, routines, and scheduled future events.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Present Simple"
          summary="Used for habits, routines, and general truths that happen repeatedly."
          events={[
            { type: 'recurring', position: 20, label: 'Habit' },
            { type: 'recurring', position: 40, label: 'Habit' },
            { type: 'now', position: 60, label: 'Now' },
            { type: 'recurring', position: 60, label: 'Habit' },
            { type: 'recurring', position: 80, label: 'Habit' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          The structure is quite straightforward. For most subjects, you use the base form of the verb. For third-person singular subjects (he, she, it), you add an -s or -es.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + verb (base / -s)

// Negative
Subject + do/does + not + verb (base)

// Question
Do/Does + subject + verb (base)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. For Habits and Routines:</strong></ArticleParagraph>
        <ExampleList items={["I drink coffee every morning.", "She goes to the gym on weekends."]} />
        <ArticleParagraph><strong>2. For General Truths or Facts:</strong></ArticleParagraph>
        <ExampleList items={["The Earth revolves around the Sun.", "Water boils at 100 degrees Celsius."]} />
        <ArticleParagraph><strong>3. For Scheduled Future Events (like timetables):</strong></ArticleParagraph>
        <ExampleList items={["The train leaves at 7 AM tomorrow.", "The conference starts next Monday."]} />
      </>
    ),
  },
  {
    id: 'present-progressive',
    title: 'Present Progressive Tense',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Present Progressive tense is used for actions happening at the moment of speaking, temporary situations, and planned future arrangements. It emphasizes the ongoing nature of an action.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Present Progressive"
          summary="Used for an action happening at the exact moment of speaking."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'duration', start: 55, end: 65, label: 'Happening Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>This tense is formed using the present tense of the verb "to be" (<InlineCode>am</InlineCode>/<InlineCode>is</InlineCode>/<InlineCode>are</InlineCode>) and the present participle of the main verb (<InlineCode>-ing</InlineCode> form).</ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + am/is/are + verb(-ing)

// Negative
Subject + am/is/are + not + verb(-ing)

// Question
Am/Is/Are + subject + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Actions Happening Now:</strong></ArticleParagraph>
        <ExampleList items={["I am writing an email right now.", "Listen! Someone is playing the piano."]} />
        <ArticleParagraph><strong>2. Temporary Situations:</strong></ArticleParagraph>
        <ExampleList items={["She is living in London for a few months.", "We are studying a lot for our final exams."]} />
        <ArticleParagraph><strong>3. Planned Future Arrangements:</strong></ArticleParagraph>
        <ExampleList items={["I am meeting my friends for dinner tonight.", "They are flying to Paris next week."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Some verbs describe states or conditions, not actions. These "stative" verbs are generally not used in progressive tenses. Common examples include <InlineCode>know</InlineCode>, <InlineCode>believe</InlineCode>, <InlineCode>love</InlineCode>, <InlineCode>hate</InlineCode>, <InlineCode>own</InlineCode>, <InlineCode>seem</InlineCode>, and <InlineCode>understand</InlineCode>.
        </ArticleParagraph>
         <ExampleList items={["Incorrect: I am knowing the answer.", "Correct: I know the answer."]} />
      </>
    ),
  },
    {
    id: 'past-simple',
    title: 'Past Simple Tense',
    category: 'Present & Past Tenses',
    content: (
       <>
        <ArticleParagraph>
          The Past Simple tense is used to talk about completed actions, states, or habits in the past. The action is finished.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Past Simple"
          summary="Used for a completed action at a specific point in the past."
          events={[
            { type: 'point', position: 30, label: 'Finished Action' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          For regular verbs, add <InlineCode>-ed</InlineCode> to the base form. Many common verbs are irregular and have unique past tense forms.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + verb(-ed or irregular form)

// Negative
Subject + did + not + verb (base)

// Question
Did + subject + verb (base)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Completed Action in the Past:</strong></ArticleParagraph>
        <ExampleList items={["I visited Japan last year.", "She finished her work an hour ago."]} />
        <ArticleParagraph><strong>2. Series of Completed Actions:</strong></ArticleParagraph>
        <ExampleList items={["He woke up, brushed his teeth, and made breakfast."]} />
         <ArticleParagraph><strong>3. Irregular Verbs:</strong></ArticleParagraph>
        <ExampleList items={["They went to the cinema. (go -> went)", "I saw a great movie. (see -> saw)"]}/>
      </>
    )
  },
  {
    id: 'past-progressive',
    title: 'Past Progressive Tense',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
            The Past Progressive tense describes actions or events that were in progress at a specific time in the past. It emphasizes the duration of an action.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Past Progressive"
          summary="An ongoing action in the past, often interrupted by another event."
          events={[
            { type: 'duration', start: 20, end: 40, label: 'Ongoing Past Action' },
            { type: 'point', position: 35, label: 'Interruption' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
            This tense is formed using the past tense of the verb "to be" (<InlineCode>was</InlineCode>/<InlineCode>were</InlineCode>) and the present participle of the main verb (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + was/were + verb(-ing)

// Negative
Subject + was/were + not + verb(-ing)

// Question
Was/Were + subject + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Action in Progress at a Past Time:</strong></ArticleParagraph>
        <ExampleList items={["At 8 PM last night, I was watching a movie.", "They were still working at midnight."]} />
        <ArticleParagraph><strong>2. Interrupted Action in the Past:</strong></ArticleParagraph>
        <ExampleList items={["I was reading when the phone rang.", "He was driving to work when he saw the accident."]} />
        <ArticleParagraph><strong>3. Parallel Actions in the Past:</strong></ArticleParagraph>
        <ExampleList items={["While she was cooking, he was setting the table."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Some verbs describe states or conditions, not actions. These "stative" verbs are generally not used in progressive tenses. Common examples include <InlineCode>know</InlineCode>, <InlineCode>believe</InlineCode>, <InlineCode>love</InlineCode>, <InlineCode>hate</InlineCode>, <InlineCode>own</InlineCode>, <InlineCode>seem</InlineCode>, and <InlineCode>understand</InlineCode>.
        </ArticleParagraph>
         <ExampleList items={["Incorrect: He was wanting a new car.", "Correct: He wanted a new car."]} />
      </>
    ),
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect Tense',
    category: 'Present & Past Tenses',
    content: (
       <>
        <ArticleParagraph>
          The Present Perfect tense is used to describe actions that happened at an unspecified time in the past, or actions that began in the past and continue to the present. It connects the past with the present.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Present Perfect"
          summary="An action that started in the past and continues to the present, or an action with a result in the present."
          events={[
            { type: 'arrow', start: 20, end: 60, label: '' },
            { type: 'point', position: 20, label: 'Action Started' },
            { type: 'now', position: 60, label: 'Now (Still True)' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed using the verb "to have" (<InlineCode>has</InlineCode>/<InlineCode>have</InlineCode>) and the past participle of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + has/have + past participle

// Negative
Subject + has/have + not + past participle

// Question
Has/Have + subject + past participle?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Unspecified Past Action (Life Experience):</strong></ArticleParagraph>
        <ExampleList items={["I have been to Spain.", "She has seen that movie before."]} />
        <ArticleParagraph><strong>2. Action Started in the Past, Continuing to Present:</strong></ArticleParagraph>
        <ExampleList items={["They have lived here for ten years.", "He has worked as a teacher since 2015."]} />
        <ArticleParagraph><strong>3. Recent Past Action with Present Result:</strong></ArticleParagraph>
        <ExampleList items={["I have lost my keys. (I can't find them now).", "She has just finished her homework."]} />
      </>
    )
  },
  {
    id: 'present-perfect-progressive',
    title: 'Present Perfect Progressive',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
            The Present Perfect Progressive emphasizes the duration of an action that started in the past and is still continuing, or has only recently stopped.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Present Perfect Progressive"
          summary="An ongoing action that started in the past and continues right up to the present moment."
          events={[
            { type: 'duration', start: 20, end: 60, label: 'Ongoing Action' },
            { type: 'point', position: 20, label: 'Started' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
            This tense is formed with <InlineCode>has/have</InlineCode> + <InlineCode>been</InlineCode> + the present participle (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + has/have + been + verb(-ing)

// Negative
Subject + has/have + not + been + verb(-ing)

// Question
Has/Have + subject + been + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Action Started in Past, Continuing Now:</strong></ArticleParagraph>
        <ExampleList items={["I have been waiting for two hours.", "She has been working on this report all day."]} />
        <ArticleParagraph><strong>2. Recently Stopped Action with Present Result:</strong></ArticleParagraph>
        <ExampleList items={["It has been raining (the ground is wet).", "I'm tired because I have been studying."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Remember, stative verbs (like <InlineCode>know</InlineCode>, <InlineCode>love</InlineCode>, <InlineCode>own</InlineCode>) describe states, not actions, and are not typically used in progressive tenses.
        </ArticleParagraph>
         <ExampleList items={["Incorrect: I have been knowing him for years.", "Correct: I have known him for years."]} />
      </>
    ),
  },
  {
    id: 'past-perfect',
    title: 'Past Perfect Tense',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Past Perfect tense is used to talk about an action that was completed before another point or action in the past. It clarifies that one event happened earlier than another. Think of it as the "past in the past."
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Past Perfect"
          summary="An action that happened before another action in the past."
          events={[
            { type: 'point', position: 20, label: 'Past Action 1' },
            { type: 'point', position: 40, label: 'Past Action 2' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed using the auxiliary verb <InlineCode>had</InlineCode> and the past participle of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + had + past participle

// Negative
Subject + had + not + past participle

// Question
Had + subject + past participle?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. An Action Completed Before Another Past Action:</strong></ArticleParagraph>
        <ExampleList items={["The train had already left when I arrived at the station.", "She told me she had studied French before."]} />
        <ArticleParagraph><strong>2. With Time Expressions:</strong> Used with expressions like 'before', 'after', 'by the time'.</ArticleParagraph>
        <ExampleList items={["By the time he got a job, he had graduated from college.", "He hadn't seen snow before he moved to Canada."]} />
      </>
    ),
  },
   {
    id: 'past-perfect-progressive',
    title: 'Past Perfect Progressive',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Past Perfect Progressive describes the duration of an action that was in progress before another action or event in the past. It focuses on the "how long".
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Past Perfect Progressive"
          summary="An ongoing past action that was happening before another past event occurred."
          events={[
            { type: 'duration', start: 10, end: 30, label: 'Ongoing Past Action' },
            { type: 'point', position: 30, label: 'Second Past Action' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed with <InlineCode>had</InlineCode> + <InlineCode>been</InlineCode> + the present participle (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + had + been + verb(-ing)

// Negative
Subject + had + not + been + verb(-ing)

// Question
Had + subject + been + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Duration Before a Past Event:</strong></ArticleParagraph>
        <ExampleList items={["They had been playing tennis for two hours before it started to rain.", "He was tired because he had been working all night."]} />
        <ArticleParagraph><strong>2. Cause of a Past Action:</strong></ArticleParagraph>
        <ExampleList items={["Her eyes were red because she had been crying."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Stative verbs describe states, not actions, and are not typically used in progressive tenses.
        </ArticleParagraph>
         <ExampleList items={["Incorrect: We had been owning the car for a year when it broke down.", "Correct: We had owned the car for a year when it broke down."]} />
      </>
    ),
  },
  // Future Tenses
  {
    id: 'future-simple',
    title: 'Future Simple Tense',
    category: 'Future Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Future Simple tense is used to talk about the future. It's often used for predictions, promises, and spontaneous decisions made at the moment of speaking.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Future Simple"
          summary="An action or event that will happen at some point in the future."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'point', position: 85, label: 'Future Action' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          The Future Simple is formed with the modal auxiliary verb <InlineCode>will</InlineCode> followed by the base form of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + will + verb (base)

// Negative
Subject + will + not (won't) + verb (base)

// Question
Will + subject + verb (base)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Predictions:</strong></ArticleParagraph>
        <ExampleList items={["It will be sunny tomorrow.", "I think the blue team will win the game."]} />
        <ArticleParagraph><strong>2. Spontaneous Decisions:</strong></ArticleParagraph>
        <ExampleList items={["The phone is ringing. I'll get it.", "It's cold in here. I'll close the window."]} />
        <ArticleParagraph><strong>3. Promises, Offers, and Requests:</strong></ArticleParagraph>
        <ExampleList items={["I will help you with your homework.", "Will you marry me?"]}/>
      </>
    ),
  },
  {
    id: 'future-progressive',
    title: 'Future Progressive Tense',
    category: 'Future Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Future Progressive tense describes an ongoing action that will be in progress at a specific time in the future.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Future Progressive"
          summary="An ongoing action at a specific point in the future."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'duration', start: 80, end: 90, label: 'Ongoing Future Action' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed with <InlineCode>will</InlineCode> + <InlineCode>be</InlineCode> + the present participle (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + will + be + verb(-ing)

// Negative
Subject + will + not (won't) + be + verb(-ing)

// Question
Will + subject + be + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Action in Progress at a Future Time:</strong></ArticleParagraph>
        <ExampleList items={["This time next week, I will be relaxing on a beach.", "At 10 PM tonight, she will be studying for her exam."]} />
        <ArticleParagraph><strong>2. Interrupted Future Action:</strong></ArticleParagraph>
        <ExampleList items={["When you arrive, I will be cooking dinner."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            As with other progressive tenses, stative verbs (like <InlineCode>believe</InlineCode>, <InlineCode>seem</InlineCode>, <InlineCode>understand</InlineCode>) are generally not used in the Future Progressive form.
        </ArticleParagraph>
        <ExampleList items={["Incorrect: At this time tomorrow, I will be knowing the result.", "Correct: At this time tomorrow, I will know the result."]} />
      </>
    ),
  },
  {
    id: 'future-perfect',
    title: 'Future Perfect Tense',
    category: 'Future Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Future Perfect tense is used to describe an action that will be completed before a specific point in the future.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Future Perfect"
          summary="An action that will be finished before a certain time in the future."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'point', position: 80, label: 'Completed Action' },
            { type: 'point', position: 90, label: 'Future Point' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed with <InlineCode>will</InlineCode> + <InlineCode>have</InlineCode> + the past participle of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + will + have + past participle

// Negative
Subject + will + not (won't) + have + past participle

// Question
Will + subject + have + past participle?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Action Completed Before a Future Time:</strong></ArticleParagraph>
        <ExampleList items={["By 10 PM, I will have finished my homework.", "By the time you read this, I will have left."]} />
        <ArticleParagraph><strong>2. Duration Up to a Future Point:</strong></ArticleParagraph>
        <ExampleList items={["Next month, we will have been married for five years."]} />
      </>
    ),
  },
  {
    id: 'future-perfect-progressive',
    title: 'Future Perfect Progressive',
    category: 'Future Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Future Perfect Progressive tense is used to emphasize the duration of an action that will be in progress up to a specific point in the future.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Future Perfect Progressive"
          summary="An ongoing action that will continue up to a specific point in the future."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'duration', start: 70, end: 90, label: 'Ongoing Action' },
            { type: 'point', position: 90, label: 'Future Point' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed with <InlineCode>will</InlineCode> + <InlineCode>have</InlineCode> + <InlineCode>been</InlineCode> + the present participle (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + will + have + been + verb(-ing)

// Negative
Subject + will + not (won't) + have + been + verb(-ing)

// Question
Will + subject + have + been + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Duration Up to a Future Event:</strong></ArticleParagraph>
        <ExampleList items={["By the time you arrive, I will have been waiting for two hours.", "In November, she will have been teaching for 20 years."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Remember that stative verbs, which describe states rather than actions, are not used in progressive tenses.
        </ArticleParagraph>
        <ExampleList items={["Incorrect: By next year, I will have been owning this house for a decade.", "Correct: By next year, I will have owned this house for a decade."]} />
      </>
    ),
  },

  // Nouns & Determiners
  {
    id: 'articles',
    title: 'Articles: A, An, The',
    category: 'Nouns & Determiners',
    content: (
      <>
        <ArticleParagraph>
          Articles are determiners that specify the grammatical definiteness of a noun. English has two types: the indefinite article (<InlineCode>a</InlineCode>/<InlineCode>an</InlineCode>) and the definite article (<InlineCode>the</InlineCode>).
        </ArticleParagraph>
        <ArticleHeading>Indefinite Article (a/an)</ArticleHeading>
        <ArticleParagraph>
            We use <InlineCode>a</InlineCode> or <InlineCode>an</InlineCode> with singular, countable nouns when we are talking about them in a general sense, or when the listener doesn't know which specific one we mean. Use <InlineCode>a</InlineCode> before a consonant sound and <InlineCode>an</InlineCode> before a vowel sound.
        </ArticleParagraph>
        <ExampleList items={["I need a new phone.", "She is an excellent teacher.", "He saw a university (starts with 'y' sound)."]} />
        <ArticleHeading>Definite Article (the)</ArticleHeading>
        <ArticleParagraph>
            We use <InlineCode>the</InlineCode> when we are talking about a specific noun that both the speaker and listener know.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Previously Mentioned:</strong> <InlineCode>I bought a shirt and a pair of shoes. The shirt was expensive.</InlineCode></>,
            <><strong>Unique Things:</strong> <InlineCode>The sun is very bright today.</InlineCode></>,
            <><strong>Specific Noun:</strong> <InlineCode>Can you pass me the salt? (the salt on the table)</InlineCode></>,
        ]}/>
      </>
    )
  },
  {
    id: 'countable-uncountable-nouns',
    title: 'Countable & Uncountable Nouns',
    category: 'Nouns & Determiners',
    content: (
        <>
            <ArticleParagraph>
                In English, nouns can be classified as either countable or uncountable. This distinction is important because it affects which articles and quantifiers can be used with them.
            </ArticleParagraph>
            <ArticleHeading>Countable Nouns</ArticleHeading>
            <ArticleParagraph>
                Countable nouns are things we can count using numbers. They have both singular and plural forms.
            </ArticleParagraph>
            <ExampleList items={["one book, two books", "a friend, many friends"]} />
            <ArticleHeading>Uncountable Nouns</ArticleHeading>
            <ArticleParagraph>
                Uncountable nouns are things we cannot count with numbers. They are often abstract ideas, liquids, or materials. They do not have a plural form.
            </ArticleParagraph>
            <ExampleList items={["water (not 'waters')", "advice (not 'advices')", "information"]} />
             <ArticleParagraph>
                To quantify uncountable nouns, we use phrases like <InlineCode>a piece of</InlineCode>, <InlineCode>a bottle of</InlineCode>, or <InlineCode>a lot of</InlineCode>.
            </ArticleParagraph>
             <ExampleList items={["a piece of advice", "two bottles of water"]} />
        </>
    )
  },
    {
    id: 'pronouns',
    title: 'Pronouns',
    category: 'Nouns & Determiners',
    content: (
        <>
            <ArticleParagraph>
                A pronoun is a word that replaces a noun in a sentence to avoid repetition. There are several types of pronouns.
            </ArticleParagraph>
            <ArticleHeading>Subject & Object Pronouns</ArticleHeading>
            <BulletList items={[
                <><strong>Subject Pronouns</strong> perform the action: <InlineCode>I, you, he, she, it, we, they</InlineCode>.</>,
                <><strong>Object Pronouns</strong> receive the action: <InlineCode>me, you, him, her, it, us, them</InlineCode>.</>
            ]} />
             <ExampleList items={["She is a doctor.", "He called me yesterday."]} />
            <ArticleHeading>Possessive Pronouns</ArticleHeading>
             <ArticleParagraph>
               Possessive pronouns show ownership. They are <InlineCode>mine</InlineCode>, <InlineCode>yours</InlineCode>, <InlineCode>his</InlineCode>, <InlineCode>hers</InlineCode>, <InlineCode>its</InlineCode>, <InlineCode>ours</InlineCode>, and <InlineCode>theirs</InlineCode>.
            </ArticleParagraph>
             <ExampleList items={["That book is mine.", "The car is theirs."]} />
        </>
    )
  },

  // Adjectives & Adverbs
  {
    id: 'adjectives-adverbs',
    title: 'Adjectives & Adverbs',
    category: 'Adjectives & Adverbs',
    content: (
      <>
        <ArticleParagraph>
          Adjectives and adverbs are descriptive words that make your writing more vivid and precise. While they both add detail, they modify different parts of a sentence.
        </ArticleParagraph>
        <ArticleHeading>Adjectives</ArticleHeading>
        <ArticleParagraph>
          An adjective describes or modifies a noun or a pronoun. It answers questions like: What kind? How many? Which one?
        </ArticleParagraph>
        <ExampleList items={["The quick brown fox jumps over the lazy dog. ('quick', 'brown', and 'lazy' are adjectives)", "She wore a beautiful dress. ('beautiful' describes the dress)", "He is smart. ('smart' describes the pronoun 'he')"]} />
        <ArticleHeading>Adverbs</ArticleHeading>
        <ArticleParagraph>
          An adverb describes or modifies a verb, an adjective, or another adverb. Adverbs often end in <InlineCode>-ly</InlineCode> and answer questions like: How? When? Where? How often?
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Modifying a verb:</strong> <InlineCode>He speaks slowly. (How does he speak?)</InlineCode></>,
            <><strong>Modifying an adjective:</strong> <InlineCode>She is very tall. (How tall is she?)</InlineCode></>,
            <><strong>Modifying another adverb:</strong> <InlineCode>The race finished too quickly. (How quickly did it finish?)</InlineCode></>,
        ]}/>
        <ArticleHeading>Common Confusion: Good vs. Well</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Good</InlineCode> is an adjective. It modifies nouns.
          <br />
          <InlineCode>Well</InlineCode> is an adverb. It modifies verbs.
        </ArticleParagraph>
        <ExampleList items={["You did a good job. ('good' describes the noun 'job')", "You did the job well. ('well' describes the verb 'did')"]} />
        
        <ArticleHeading>Types of Adverbs</ArticleHeading>
        <ArticleParagraph>
          Adverbs can be grouped into several categories based on the type of information they provide.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Adverbs of Manner:</strong> These describe *how* an action is performed. They often end in -ly. (e.g., <InlineCode>slowly</InlineCode>, <InlineCode>carefully</InlineCode>, <InlineCode>beautifully</InlineCode>)</>,
            <><strong>Adverbs of Place:</strong> These describe *where* an action happens. (e.g., <InlineCode>here</InlineCode>, <InlineCode>there</InlineCode>, <InlineCode>outside</InlineCode>, <InlineCode>everywhere</InlineCode>)</>,
            <><strong>Adverbs of Time:</strong> These describe *when* an action happens. (e.g., <InlineCode>now</InlineCode>, <InlineCode>yesterday</InlineCode>, <InlineCode>soon</InlineCode>, <InlineCode>later</InlineCode>)</>,
            <><strong>Adverbs of Frequency:</strong> These describe *how often* an action happens. (e.g., <InlineCode>always</InlineCode>, <InlineCode>sometimes</InlineCode>, <InlineCode>never</InlineCode>, <InlineCode>usually</InlineCode>)</>,
        ]} />

        <ArticleHeading>Comparative & Superlative Adverbs</ArticleHeading>
        <ArticleParagraph>
          Just like adjectives, many adverbs can be used to make comparisons.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Comparative Adverbs:</strong> For short adverbs (often those without an -ly ending), add <InlineCode>-er</InlineCode>. For adverbs ending in <InlineCode>-ly</InlineCode>, use <InlineCode>more</InlineCode>. (e.g., <InlineCode>He runs faster than me.</InlineCode>, <InlineCode>She speaks more clearly than her brother.</InlineCode>)</>,
            <><strong>Superlative Adverbs:</strong> For short adverbs, add <InlineCode>-est</InlineCode>. For adverbs ending in <InlineCode>-ly</InlineCode>, use <InlineCode>most</InlineCode>. (e.g., <InlineCode>He runs the fastest of all.</InlineCode>, <InlineCode>She speaks the most clearly in the class.</InlineCode>)</>
        ]} />
        <ArticleParagraph>
            Some adverbs have irregular forms:
        </ArticleParagraph>
        <CodeBlock>{`well -> better -> best
badly -> worse -> worst
far -> farther/further -> farthest/furthest`}</CodeBlock>
      </>
    ),
  },
  {
    id: 'comparative-superlative',
    title: 'Comparatives & Superlatives',
    category: 'Adjectives & Adverbs',
    content: (
      <>
        <ArticleParagraph>
          Comparatives and superlatives are special forms of adjectives and adverbs used to compare things.
        </ArticleParagraph>
        <ArticleHeading>Comparative Form</ArticleHeading>
        <ArticleParagraph>
          The comparative form is used to compare two things. For short adjectives, we usually add <InlineCode>-er</InlineCode>. For longer adjectives, we use the word <InlineCode>more</InlineCode>.
        </ArticleParagraph>
        <ExampleList items={["She is taller than her brother.", "This book is more interesting than the last one."]} />

        <ArticleHeading>Superlative Form</ArticleHeading>
        <ArticleParagraph>
          The superlative form is used to compare three or more things and to show which is the best or has the highest degree of a quality. For short adjectives, we add <InlineCode>-est</InlineCode>. For longer adjectives, we use <InlineCode>most</InlineCode>.
        </ArticleParagraph>
        <ExampleList items={["He is the tallest student in the class.", "This is the most exciting movie I have ever seen."]} />

        <ArticleHeading>Irregular Forms</ArticleHeading>
        <ArticleParagraph>Some common adjectives have irregular comparative and superlative forms that you just have to memorize.</ArticleParagraph>
        <CodeBlock>{`good -> better -> best
bad -> worse -> worst
far -> farther/further -> farthest/furthest`}</CodeBlock>
      </>
    ),
  },

  // Verbs
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    category: 'Verbs',
    content: (
        <>
            <ArticleParagraph>
                Modal verbs are auxiliary verbs that express necessity, possibility, permission, or ability. The main modal verbs are <InlineCode>can</InlineCode>, <InlineCode>could</InlineCode>, <InlineCode>may</InlineCode>, <InlineCode>might</InlineCode>, <InlineCode>must</InlineCode>, <InlineCode>should</InlineCode>, <InlineCode>will</InlineCode>, and <InlineCode>would</InlineCode>.
            </ArticleParagraph>
             <ArticleHeading>Key Characteristics</ArticleHeading>
             <BulletList items={[
                "They are followed by the base form of a verb.",
                "They do not add -s in the third person.",
                "To make questions, you invert the subject and the modal verb."
             ]}/>
            <ArticleHeading>Usage & Examples</ArticleHeading>
             <ArticleParagraph><strong>Ability:</strong> (<InlineCode>can</InlineCode>, <InlineCode>could</InlineCode>)</ArticleParagraph>
            <ExampleList items={["I can speak English.", "She could swim when she was five."]} />
             <ArticleParagraph><strong>Permission:</strong> (<InlineCode>can</InlineCode>, <InlineCode>may</InlineCode>)</ArticleParagraph>
            <ExampleList items={["Can I borrow your pen?", "You may begin the exam now."]} />
             <ArticleParagraph><strong>Obligation / Advice:</strong> (<InlineCode>must</InlineCode>, <InlineCode>should</InlineCode>)</ArticleParagraph>
            <ExampleList items={["You must wear a seatbelt.", "You should see a doctor."]} />
        </>
    )
  },
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds & Infinitives',
    category: 'Verbs',
    content: (
      <>
        <ArticleParagraph>
          Gerunds and infinitives are verb forms that can take the place of a noun in a sentence. Knowing when to use each can be tricky.
        </ArticleParagraph>
        <ArticleHeading>Gerunds</ArticleHeading>
        <ArticleParagraph>
          A gerund is the <InlineCode>-ing</InlineCode> form of a verb that functions as a noun.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>As the subject of a sentence:</strong> <InlineCode>Swimming is my favorite hobby.</InlineCode></>,
            <><strong>After certain verbs (e.g., enjoy, avoid, finish):</strong> <InlineCode>I enjoy reading.</InlineCode></>,
            <><strong>After a preposition:</strong> <InlineCode>I am interested in learning more.</InlineCode></>,
        ]}/>
        <ArticleHeading>Infinitives</ArticleHeading>
        <ArticleParagraph>
          An infinitive is the base form of a verb, usually preceded by <InlineCode>to</InlineCode>.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>After certain verbs (e.g., want, decide, hope):</strong> <InlineCode>She wants to leave.</InlineCode></>,
            <><strong>After many adjectives:</strong> <InlineCode>It is important to be on time.</InlineCode></>,
            <><strong>To show purpose:</strong> <InlineCode>He went to the store to buy milk.</InlineCode></>,
        ]}/>
      </>
    ),
  },

  // Prepositions & Conjunctions
  {
    id: 'prepositions',
    title: 'Prepositions',
    category: 'Prepositions & Conjunctions',
    content: (
      <>
        <ArticleParagraph>
          Prepositions are small words that show the relationship between a noun (or pronoun) and other words in a sentence. They often indicate location, time, or direction.
        </ArticleParagraph>
        <ArticleHeading>Prepositions of Time</ArticleHeading>
        <BulletList items={[
            <><strong>At:</strong> Used for a precise time. <InlineCode>at 3 o'clock, at night</InlineCode></>,
            <><strong>In:</strong> Used for months, years, centuries, and long periods. <InlineCode>in May, in 2023, in the morning</InlineCode></>,
            <><strong>On:</strong> Used for days and dates. <InlineCode>on Sunday, on June 5th</InlineCode></>,
        ]}/>
        <ArticleHeading>Prepositions of Place</ArticleHeading>
        <BulletList items={[
            <><strong>At:</strong> Used for a specific point or location. <InlineCode>at the corner, at the bus stop</InlineCode></>,
            <><strong>In:</strong> Used for an enclosed space or larger area. <InlineCode>in the garden, in London</InlineCode></>,
            <><strong>On:</strong> Used for a surface. <InlineCode>on the table, on the wall</InlineCode></>,
        ]}/>
        <ArticleHeading>Prepositions of Movement</ArticleHeading>
         <BulletList items={[
            <><strong>To:</strong> Movement towards a destination. <InlineCode>We went to the cinema.</InlineCode></>,
            <><strong>From:</strong> Movement starting at a point. <InlineCode>He came from Paris.</InlineCode></>,
            <><strong>Into:</strong> Movement to the inside of something. <InlineCode>The cat jumped into the box.</InlineCode></>,
        ]}/>
      </>
    ),
  },
  {
    id: 'conjunctions',
    title: 'Conjunctions',
    category: 'Prepositions & Conjunctions',
    content: (
      <>
        <ArticleParagraph>
          Conjunctions are words that link other words, phrases, or clauses together. They are essential for creating complex and fluent sentences.
        </ArticleParagraph>
        <ArticleHeading>Coordinating Conjunctions</ArticleHeading>
        <ArticleParagraph>
          These join words, phrases, and independent clauses of equal grammatical rank. You can remember them with the acronym FANBOYS.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>For:</strong> Explains reason or purpose (like 'because').</>,
            <><strong>And:</strong> Adds one thing to another.</>,
            <><strong>Nor:</strong> Used to present an additional negative idea.</>,
            <><strong>But:</strong> Shows contrast.</>,
            <><strong>Or:</strong> Presents an alternative or a choice.</>,
            <><strong>Yet:</strong> Introduces a contrasting idea that follows logically.</>,
            <><strong>So:</strong> Indicates effect, result, or consequence.</>,
        ]}/>
        <ExampleList items={["I went to the store, and I bought some bread.", "She studied hard, but she failed the exam."]} />
        <ArticleHeading>Subordinating Conjunctions</ArticleHeading>
        <ArticleParagraph>
          These join an independent clause with a dependent clause. They show a relationship (like cause-and-effect, time, or contrast) between the clauses. Common examples include <InlineCode>because</InlineCode>, <InlineCode>since</InlineCode>, <InlineCode>although</InlineCode>, <InlineCode>while</InlineCode>, <InlineCode>if</InlineCode>, and <InlineCode>when</InlineCode>.
        </ArticleParagraph>
        <ExampleList items={["I stayed home because it was raining.", "Although he was tired, he finished the race."]} />
      </>
    ),
  },

  // Sentence Structure
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
            In an active voice sentence, the subject performs the action. In a passive voice sentence, the subject receives the action. The passive voice is used to emphasize the action or the object of the action rather than the person who performs it.
        </ArticleParagraph>
        <SentenceTransformationDiagram active="John writes the report." passive="The report is written by John." />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
            The passive voice is formed using the verb "to be" in the appropriate tense, followed by the past participle of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`Subject + to be (conjugated) + past participle (+ by + agent)`}</CodeBlock>
        <ArticleHeading>When to Use the Passive Voice</ArticleHeading>
        <ArticleParagraph>Use the passive when the agent (the person doing the action) is unknown, unimportant, or obvious from the context.</ArticleParagraph>
        <ExampleList items={["My car was stolen last night. (We don't know who stole it).", "This bridge was built in 1950."]} />
      </>
    )
  },
  {
    id: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          Subject-verb agreement is a fundamental rule of English grammar. The basic idea is that a singular subject must have a singular verb, and a plural subject must have a plural verb.
        </ArticleParagraph>
        <ArticleHeading>Basic Rule</ArticleHeading>
        <ExampleList items={["The dog barks. (Singular subject 'dog', singular verb 'barks')", "The dogs bark. (Plural subject 'dogs', plural verb 'bark')"]} />
        <ArticleHeading>Tricky Cases</ArticleHeading>
        <BulletList items={[
            <><strong>Compound subjects with 'and':</strong> Usually take a plural verb. <InlineCode>The cat and the dog are friends.</InlineCode></>,
            <><strong>Subjects with 'or'/'nor':</strong> The verb agrees with the subject closest to it. <InlineCode>Either my brothers or my sister is coming.</InlineCode></>,
            <><strong>Collective nouns (team, family, group):</strong> Can be singular or plural, depending on whether they act as a single unit or as individuals. <InlineCode>The team is winning. / The team are arguing among themselves.</InlineCode></>,
            <><strong>Indefinite pronouns (each, everyone, nobody):</strong> These are usually singular. <InlineCode>Everyone is here.</InlineCode></>,
        ]}/>
      </>
    )
  },
  {
    id: 'question-formation',
    title: 'Question Formation',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          Knowing how to form questions correctly is essential for communication. There are two main types of questions in English.
        </ArticleParagraph>
        <ArticleHeading>Yes/No Questions</ArticleHeading>
        <ArticleParagraph>
          These are questions that can be answered with a simple "yes" or "no". They are formed by inverting the subject and the auxiliary verb (be, have, do, or a modal verb).
        </ArticleParagraph>
        <ExampleList items={["Statement: She is a doctor. -> Question: Is she a doctor?", "Statement: They have finished. -> Question: Have they finished?", "Statement: You play guitar. -> Question: Do you play guitar?"]} />
        <ArticleHeading>Wh- Questions</ArticleHeading>
        <ArticleParagraph>
          These questions use a question word (<InlineCode>who</InlineCode>, <InlineCode>what</InlineCode>, <InlineCode>where</InlineCode>, <InlineCode>when</InlineCode>, <InlineCode>why</InlineCode>, <InlineCode>how</InlineCode>) to ask for specific information. The structure is typically: Question Word + Auxiliary Verb + Subject + Main Verb.
        </ArticleParagraph>
        <ExampleList items={["Where are you going?", "Why did he leave early?"]} />
        <ArticleHeading>Tag Questions</ArticleHeading>
        <ArticleParagraph>
            These are mini-questions added to the end of a statement to ask for confirmation. If the statement is positive, the tag is negative, and vice versa.
        </ArticleParagraph>
        <ExampleList items={["It's a beautiful day, isn't it?", "You haven't seen my keys, have you?"]} />
      </>
    ),
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          Reported speech (also called indirect speech) is how we report what someone else has said without using their exact words. This often involves changes in tense, pronouns, and time expressions.
        </ArticleParagraph>
        <ArticleHeading>Tense Backshift</ArticleHeading>
        <ArticleParagraph>
          When the reporting verb (e.g., <InlineCode>said</InlineCode>, <InlineCode>told</InlineCode>) is in the past, the tense in the reported clause usually moves one step back into the past.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Present Simple -> Past Simple:</strong> <InlineCode>"I am happy." -> He said he was happy.</InlineCode></>,
            <><strong>Past Simple -> Past Perfect:</strong> <InlineCode>"I saw a movie." -> She said she had seen a movie.</InlineCode></>,
            <><strong>Present Perfect -> Past Perfect:</strong> <InlineCode>"I have finished." -> He said he had finished.</InlineCode></>,
        ]}/>
        <ArticleHeading>Pronoun and Time Changes</ArticleHeading>
        <ArticleParagraph>
          Pronouns and time/place words often need to change to reflect the new perspective.
        </ArticleParagraph>
        <ExampleList items={['"I will see you tomorrow." -> She said she would see me the next day.']} />
      </>
    )
  },
  {
    id: 'direct-and-indirect-speech',
    title: 'Direct & Indirect Speech',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          When we want to report what someone said, we can do it in two ways: by quoting their exact words (direct speech) or by reporting the meaning of what they said (indirect or reported speech). Understanding the difference is key to structuring clear sentences.
        </ArticleParagraph>
        <ArticleHeading>Direct Speech (Quoted Speech)</ArticleHeading>
        <ArticleParagraph>
          Direct speech uses the speaker's exact words. It is often used in stories and journalism to be precise.
        </ArticleParagraph>
        <BulletList items={[
          "The exact words are enclosed in quotation marks (\" \").",
          "The quote is often separated from the rest of the sentence by a comma.",
          "The first word of the quote begins with a capital letter.",
        ]}/>
        <ExampleList items={['"I am going to the library," she said.', 'He asked, "Have you finished your homework?"']} />
        
        <ArticleHeading>Indirect Speech (Reported Speech)</ArticleHeading>
        <ArticleParagraph>
          Indirect speech reports the meaning of what someone said, without using their exact words. Quotation marks are not used. The word <InlineCode>that</InlineCode> is often used to introduce the reported words, but it can be omitted.
        </ArticleParagraph>
        <ArticleParagraph>
            When changing from direct to indirect speech, you often need to change tenses, pronouns, and words related to time and place.
        </ArticleParagraph>
        <CodeBlock>{`// Transformation Example
Direct: He said, "I am studying now."
Indirect: He said that he was studying then.`}</CodeBlock>
        <ArticleParagraph>
          For a detailed guide on the grammatical changes involved (like tense backshift), please see our topic on <strong>Reported Speech</strong>.
        </ArticleParagraph>
      </>
    )
  },
  {
    id: 'sentence-fragments',
    title: 'Sentence Fragments',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          A sentence fragment is an incomplete sentence that is punctuated as if it were a complete sentence. It lacks a subject, a complete verb, or doesn't express a complete thought. While sometimes used for stylistic effect in creative writing, they are considered errors in formal and academic writing.
        </ArticleParagraph>
        <ArticleParagraph>
          A complete sentence must have three things: a <strong>subject</strong> (who or what the sentence is about), a <strong>verb</strong> (the action or state of being), and a <strong>complete thought</strong>.
        </ArticleParagraph>
        <ArticleHeading>Common Types of Fragments</ArticleHeading>
        <BulletList items={[
          <><strong>Dependent Clause Fragments:</strong> These have a subject and a verb, but they start with a subordinating word (like <InlineCode>because</InlineCode>, <InlineCode>although</InlineCode>, <InlineCode>since</InlineCode>, <InlineCode>while</InlineCode>) that makes them unable to stand alone. <br/><em>Fragment:</em> Because I forgot my keys. <br/><em>Correction:</em> I was late because I forgot my keys.</>,
          <><strong>-ing Fragments:</strong> A word ending in <InlineCode>-ing</InlineCode> needs a helping verb (like <InlineCode>is</InlineCode>, <InlineCode>was</InlineCode>, <InlineCode>are</InlineCode>) to function as the main verb. <br/><em>Fragment:</em> Running down the street. <br/><em>Correction:</em> He was running down the street.</>,
          <><strong>Missing Subject or Verb:</strong> The fragment is missing one of the essential components of a sentence. <br/><em>Fragment:</em> The big red car in the driveway. (Missing a verb) <br/><em>Correction:</em> The big red car in the driveway is mine.</>,
        ]} />
        <ArticleHeading>How to Fix Sentence Fragments</ArticleHeading>
        <ArticleParagraph>
          Fixing fragments usually involves one of two main strategies:
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Add what's missing:</strong> Add the missing subject, verb, or helping verb to make it a complete thought.</>,
            <><strong>Connect it:</strong> Attach the fragment to a nearby independent clause. Often, a fragment is just a piece of the sentence before or after it.</>,
        ]}/>
      </>
    )
  },
  {
    id: 'simple-and-complex-sentences',
    title: 'Simple & Complex Sentences',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          Understanding the difference between simple and complex sentences is fundamental to improving your writing style and clarity. A simple sentence contains a single, complete thought, while a complex sentence can express more intricate relationships between ideas.
        </ArticleParagraph>
        
        <ArticleHeading>The Building Blocks: Clauses</ArticleHeading>
        <ArticleParagraph>
          Before diving into sentence types, you need to understand clauses. A clause is a group of words with a subject and a verb.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Independent Clause:</strong> Expresses a complete thought and can stand alone as a sentence. (e.g., <InlineCode>The dog barked.</InlineCode>)</>,
          <><strong>Dependent (or Subordinate) Clause:</strong> Has a subject and a verb, but does not express a complete thought and cannot stand alone. It often begins with a subordinating conjunction. (e.g., <InlineCode>because the dog was hungry.</InlineCode>)</>,
        ]}/>

        <ArticleHeading>Simple Sentences</ArticleHeading>
        <ArticleParagraph>
          A simple sentence consists of just one independent clause. It has a subject and a verb and expresses a single, complete thought. It can have compound subjects or verbs, but it still only has one main clause.
        </ArticleParagraph>
        <ExampleList items={[
          "The train arrived.",
          "Maria and Sam laughed and danced.",
          "The sun shines brightly in the summer."
        ]} />
        
        <ArticleHeading>Complex Sentences</ArticleHeading>
        <ArticleParagraph>
          A complex sentence is made up of one independent clause and one or more dependent clauses. The dependent clause is linked to the independent clause by a subordinating conjunction.
        </ArticleParagraph>
        <CodeBlock>{`Independent Clause + Dependent Clause
// or
Dependent Clause, + Independent Clause`}</CodeBlock>
        <ArticleParagraph>
          Common subordinating conjunctions include:
        </ArticleParagraph>
        <ExampleList items={["after, although, as, because, before, if, since, unless, until, when, while"]} />
        <ArticleHeading>Punctuation Note</ArticleHeading>
        <ArticleParagraph>
            When the dependent clause comes before the independent clause, you must use a comma to separate them. If the independent clause comes first, no comma is needed.
        </ArticleParagraph>
        <ExampleList items={[
          "Although it was raining, we went to the park.",
          "We went to the park although it was raining."
        ]} />
      </>
    )
  },

  // Clauses
  {
    id: 'conditionals',
    title: 'Conditionals (If Clauses)',
    category: 'Clauses',
    content: (
       <>
        <ArticleParagraph>
            Conditional sentences are used to express that the action in the main clause (without if) can only take place if a certain condition (in the clause with if) is fulfilled. There are four main types.
        </ArticleParagraph>
        <ArticleHeading>Zero Conditional</ArticleHeading>
        <ArticleParagraph>Used for general truths and scientific facts. Structure: <InlineCode>If + present simple, ... present simple</InlineCode>.</ArticleParagraph>
        <ExampleList items={["If you heat water to 100 degrees, it boils."]} />

        <ArticleHeading>First Conditional</ArticleHeading>
        <ArticleParagraph>Used for a possible or likely situation in the future. Structure: <InlineCode>If + present simple, ... will + base verb</InlineCode>.</ArticleParagraph>
        <ExampleList items={["If it rains tomorrow, we will stay home."]} />
        
        <ArticleHeading>Second Conditional</ArticleHeading>
        <ArticleParagraph>Used for hypothetical or unlikely situations. Structure: <InlineCode>If + past simple, ... would + base verb</InlineCode>.</ArticleParagraph>
        <ExampleList items={["If I won the lottery, I would buy a big house."]} />

        <ArticleHeading>Third Conditional</ArticleHeading>
        <ArticleParagraph>Used to talk about a hypothetical past situation that did not happen. Structure: <InlineCode>If + past perfect, ... would have + past participle</InlineCode>.</ArticleParagraph>
        <ExampleList items={["If you had studied, you would have passed the exam."]} />
       </>
    )
  },
  {
    id: 'relative-clauses',
    title: 'Relative Clauses',
    category: 'Clauses',
    content: (
        <>
            <ArticleParagraph>
                Relative clauses are used to give additional information about a noun in the main sentence without starting a new sentence. They are introduced by relative pronouns like <InlineCode>who</InlineCode>, <InlineCode>whom</InlineCode>, <InlineCode>whose</InlineCode>, <InlineCode>which</InlineCode>, and <InlineCode>that</InlineCode>.
            </ArticleParagraph>
            <ArticleHeading>Restrictive vs. Non-Restrictive Clauses</ArticleHeading>
            <ArticleParagraph>
                The most important distinction with relative clauses is whether they are restrictive (essential) or non-restrictive (non-essential). This determines whether or not you use commas.
            </ArticleParagraph>
            <ArticleParagraph><strong>Restrictive (or Defining) Clauses</strong> provide essential information that identifies the noun. The sentence would have a different meaning without this clause. <strong>No commas are used.</strong></ArticleParagraph>
            <ExampleList items={["The man who lives next door is a doctor."]} />
            <ArticleParagraph>In this example, "who lives next door" is essential. Without it, we wouldn't know which man is being discussed.</ArticleParagraph>
            
            <ArticleParagraph><strong>Non-Restrictive (or Non-Defining) Clauses</strong> give extra, non-essential information. The meaning of the sentence is clear without the clause. <strong>Commas are always used</strong> to set the clause apart.</ArticleParagraph>
            <ExampleList items={["My brother, who is an engineer, lives in London."]} />
            <ArticleParagraph>Here, "who is an engineer" is extra information. The main point is that "My brother lives in London." We assume the speaker has only one brother.</ArticleParagraph>
            
            <ArticleHeading>When to Use Commas</ArticleHeading>
            <ArticleParagraph>
                The rule is simple: use commas to separate non-restrictive clauses, but do not use them for restrictive clauses. The presence or absence of commas can change the meaning of the sentence.
            </ArticleParagraph>
            <BulletList items={[
                <><strong>Without Commas (Restrictive):</strong> <InlineCode>The students who passed the exam can move to the next level.</InlineCode><br/>(This implies that *only* the students who passed can move on. The clause identifies a specific group of students.)</>,
                <><strong>With Commas (Non-Restrictive):</strong> <InlineCode>The students, who passed the exam, can move to the next level.</InlineCode><br/>(This implies that *all* the students passed the exam, and they can all move on. The fact that they passed is extra information.)</>
            ]}/>

            <ArticleHeading>Relative Pronouns</ArticleHeading>
            <BulletList items={[
                <><strong>Who/That:</strong> Used for people. <InlineCode>The student who/that won the prize is smart.</InlineCode></>,
                <><strong>Which/That:</strong> Used for things. <InlineCode>This is the laptop which/that I bought.</InlineCode></>,
                <><strong>Whose:</strong> Used for possession. <InlineCode>She's the artist whose paintings are popular.</InlineCode></>,
            ]}/>
        </>
    )
  },

  // Punctuation
  {
    id: 'commas',
    title: 'Commas',
    category: 'Punctuation',
    content: (
        <>
            <ArticleParagraph>
                The comma is one of the most common punctuation marks, but it can be tricky to use correctly. It is used to separate elements in a sentence.
            </ArticleParagraph>
            <ArticleHeading>Main Uses</ArticleHeading>
            <BulletList items={[
                <><strong>Separating Items in a List:</strong> <InlineCode>I need to buy apples, bananas, and oranges.</InlineCode></>,
                <><strong>Separating Independent Clauses:</strong> With a conjunction. <InlineCode>I wanted to go, but it started to rain.</InlineCode></>,
                <><strong>Separating Introductory Elements:</strong> <InlineCode>After the movie, we went out for dinner.</InlineCode></>,
                <><strong>Separating Non-Defining Clauses:</strong> <InlineCode>My sister, who lives in New York, is a writer.</InlineCode></>,
            ]}/>
        </>
    )
  },
  {
    id: 'apostrophes',
    title: 'Apostrophes',
    category: 'Punctuation',
    content: (
      <>
        <ArticleParagraph>
          The apostrophe has two main uses in English: to show possession and to indicate a contraction.
        </ArticleParagraph>
        <ArticleHeading>Possession</ArticleHeading>
        <ArticleParagraph>Apostrophes are used to show that something belongs to someone or something.</ArticleParagraph>
        <BulletList items={[
            <><strong>Singular nouns:</strong> Add <InlineCode>'s</InlineCode>. <InlineCode>the dog's bone, the student's book</InlineCode></>,
            <><strong>Plural nouns ending in -s:</strong> Add only an apostrophe. <InlineCode>the dogs' bones, the students' books</InlineCode></>,
            <><strong>Plural nouns not ending in -s:</strong> Add <InlineCode>'s</InlineCode>. <InlineCode>the children's toys, the women's meeting</InlineCode></>,
        ]}/>
        <ArticleHeading>Contractions</ArticleHeading>
        <ArticleParagraph>
          An apostrophe is used to show where letters have been omitted in a contraction.
        </ArticleParagraph>
        <ExampleList items={["it's (it is)", "don't (do not)", "you're (you are)", "can't (cannot)"]} />
        <ArticleParagraph>
          Be careful not to confuse <InlineCode>its</InlineCode> (possessive) with <InlineCode>it's</InlineCode> (contraction).
        </ArticleParagraph>
      </>
    ),
  },
  {
    id: 'semicolons-colons',
    title: 'Semicolons & Colons',
    category: 'Punctuation',
    content: (
      <>
        <ArticleParagraph>
          Semicolons (;) and colons (:) are punctuation marks used to connect and separate parts of a sentence.
        </ArticleParagraph>
        <ArticleHeading>Semicolons (;)</ArticleHeading>
        <BulletList items={[
          <><strong>To join two related independent clauses:</strong> They can replace a period if the two sentences are closely linked in thought. <InlineCode>I have a big test tomorrow; I can't go out tonight.</InlineCode></>,
          <><strong>To separate items in a complex list:</strong> Use a semicolon to separate items in a list when the items themselves contain commas. <InlineCode>The conference has people from London, England; Paris, France; and Tokyo, Japan.</InlineCode></>,
        ]}/>
        <ArticleHeading>Colons (:)</ArticleHeading>
        <BulletList items={[
          <><strong>To introduce a list:</strong> The clause before the colon must be a complete sentence. <InlineCode>I need three things from the store: milk, bread, and eggs.</InlineCode></>,
          <><strong>To introduce an explanation or quotation:</strong> <InlineCode>He had one goal in mind: to win.</InlineCode></>,
        ]}/>
      </>
    ),
  },
  {
    id: 'quotation-marks',
    title: 'Quotation Marks',
    category: 'Punctuation',
    content: (
      <>
        <ArticleParagraph>
          Quotation marks (" ") are used to set off direct quotations and certain titles.
        </ArticleParagraph>
        <ArticleHeading>Direct Quotations</ArticleHeading>
        <ArticleParagraph>
          Use quotation marks to enclose the exact words of a speaker.
        </ArticleParagraph>
        <ExampleList items={['"I am going to the library," she said.', 'He asked, "Have you finished your homework?"']} />
        <ArticleHeading>Punctuation with Quotation Marks</ArticleHeading>
        <ArticleParagraph>
          In American English, commas and periods always go inside the closing quotation mark.
        </ArticleParagraph>
        <ExampleList items={['"I don\'t know," he replied.']} />
        <ArticleHeading>Titles of Short Works</ArticleHeading>
        <ArticleParagraph>
          Use quotation marks for the titles of short works like articles, essays, poems, songs, and short stories.
        </ArticleParagraph>
        <ExampleList items={['My favorite poem is "The Raven" by Edgar Allan Poe.']} />
      </>
    ),
  },
];
