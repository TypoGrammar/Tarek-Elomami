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
        <ExampleList items={["They went to the cinema. (go → went)", "I saw a great movie. (see → saw)"]}/>
      </>
    )
  },
];
