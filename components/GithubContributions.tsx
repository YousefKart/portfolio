'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import type { ContributionWeek } from '@/lib/github-contributions';

const levelStyles: Record<number, string> = {
  0: 'bg-primary/0 border-primary/0',
  1: 'bg-primary/20 border-primary/20',
  2: 'bg-primary/35 border-primary/35',
  3: 'bg-primary/55 border-primary/55',
  4: 'bg-primary/80 border-primary/80',
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

const weekVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.015,
      duration: 0.2,
      ease: 'easeOut',
    },
  }),
};

export function GithubContribution() {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadContributions() {
      try {
        const res = await fetch('/api/github-contributions', {
          signal: abortController.signal,
        });

        if (!res.ok) throw new Error('Failed request');

        const data = await res.json();

        if (!Array.isArray(data)) throw new Error('Unexpected response');

        setWeeks(data);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError('Unable to load GitHub contributions');
          console.error(err);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadContributions();

    return () => abortController.abort();
  }, []);

  if (error || isLoading) {
    return (
      <section className="mx-auto w-full">
        <div className="flex min-h-[180px] items-center justify-center rounded-2xl bg-muted/10 text-sm text-muted-foreground">
          {error ?? 'Loading contributions...'}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full overflow-hidden mt-8">
      <div className="flex w-full justify-center pb-1">
        <div
          className="
        grid grid-flow-col justify-center
        gap-[clamp(1px,0.35vw,4px)]
        px-0 py-2
      "
          style={{
            gridTemplateColumns: `repeat(${weeks.length}, clamp(5px, 1.05vw, 12px))`,
          }}
          aria-label="GitHub contribution graph"
        >
          {weeks.map((week, weekIndex) => (
            <motion.div
              key={weekIndex}
              className="grid grid-rows-7 gap-[clamp(1px,0.35vw,4px)]"
              custom={weekIndex}
              variants={weekVariants}
              initial="hidden"
              animate="visible"
            >
              {week.days.map((day) => (
                <div
                  key={day.date}
                  className={[
                    'aspect-square w-full border transition-all duration-200',
                    levelStyles[day.level],
                  ].join(' ')}
                  title={`${day.count} contribution${
                    day.count === 1 ? '' : 's'
                  } on ${formatDate(day.date)}`}
                  aria-label={`${day.count} contribution${
                    day.count === 1 ? '' : 's'
                  } on ${formatDate(day.date)}`}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
