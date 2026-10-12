import { ViewTransition } from "react";
import Link from "next/link";
import type { Topic } from "@/content/types";
import { availableModes, lessonHref, MODE_LABELS, type Mode } from "@/features/study/lib/modes";
import { StudyContent } from "./StudyContent";
import { ExamplesView } from "./ExamplesView";
import { ExercisesView } from "./ExercisesView";
import { MCQRunner } from "../practice/MCQRunner";
import { FillBlankRunner } from "../practice/FillBlankRunner";
import { TrueFalseRunner } from "../practice/TrueFalseRunner";
import { FlashcardDeck } from "../practice/FlashcardDeck";
import { TopicDoneToggle } from "./TopicDoneToggle";
import { TopicNotes } from "@/features/account/components/TopicNotes";
import { TopicBreadcrumb, TopicPager, type Neighbour, type TrailLink } from "./TopicTrail";

export function TopicView({
  subject,
  topic,
  mode = "read",
  trail,
  prev,
  next,
}: {
  subject: { id: string; short: string };
  topic: Topic;
  mode?: Mode;
  trail: TrailLink[];
  prev: Neighbour;
  next: Neighbour;
}) {
  const practice = { subjectId: subject.id, subjectShort: subject.short, topicId: topic.id, topicTitle: topic.title };
  return (
    <div className="space-y-7 p-4 sm:p-6 md:p-8 lg:p-12">
      <header className="motion-stagger max-w-4xl space-y-5 [&>*:nth-child(2)]:[--i:1] [&>*:nth-child(3)]:[--i:2] [&>*:nth-child(4)]:[--i:3]">
        <TopicBreadcrumb items={trail} />
        <ViewTransition name={`topic-title-${subject.id}-${topic.id}`} share="morph" default="none">
          <h1 className="max-w-5xl text-balance text-4xl text-foreground sm:text-5xl lg:text-7xl">{topic.title}</h1>
        </ViewTransition>
        <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-muted-foreground sm:text-xl">
          {topic.summary}
        </p>
        <TopicDoneToggle subjectId={subject.id} topicId={topic.id} />
      </header>
      <nav aria-label="Study mode" className="ink-segmented w-full overflow-x-auto sm:w-fit">
        {availableModes(topic).map((m) => (
          <Link
            key={m}
            href={lessonHref(subject.id, topic.id, m)}
            scroll={false}
            aria-current={mode === m ? "page" : undefined}
            className="ink-segment"
          >
            {MODE_LABELS[m]}
          </Link>
        ))}
      </nav>
      <div key={`${subject.id}-${topic.id}-${mode}`} className="motion-enter">
        {mode === "read" && (
          <div className="space-y-6">
            <StudyContent markdown={topic.content} />
            <TopicNotes subjectId={subject.id} topicId={topic.id} />
          </div>
        )}
        {mode === "examples" && topic.examples && <ExamplesView groups={topic.examples} />}
        {mode === "exercises" && topic.exercises && <ExercisesView items={topic.exercises} />}
        {mode === "flash" && <FlashcardDeck items={topic.flashcards} />}
        {mode === "mcq" && <MCQRunner items={topic.mcqs} practice={practice} />}
        {mode === "fill" && <FillBlankRunner items={topic.fillBlanks} practice={practice} />}
        {mode === "tf" && <TrueFalseRunner items={topic.trueFalse} practice={practice} />}
      </div>
      <TopicPager subjectId={subject.id} prev={prev} next={next} />
    </div>
  );
}
