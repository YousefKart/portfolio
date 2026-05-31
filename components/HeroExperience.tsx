import { cn } from '@/lib/utils';
import { hover } from '@/lib/utils';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Experience from './Experience';
import { ExperienceItem } from './ExperienceItem';
import { experienceData } from '@/lib/data/ExperienceData';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HeroExperience() {
  return (
    <motion.section
      id="home"
      className="mw-full scroll-mt-64 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="flex min-h-[90vh] w-full flex-col px-4 sm:px-6 py-8 items-center gap-16 sm:gap-32">
        <Hero className="w-full sm:max-w-[50vw] h-auto mt-16 sm:mt-64" />

        <div className="mt-8 w-full max-w-[80vw] flex-1 min-h-0">
          <Experience className="w-full mx-auto" />
        </div>
      </div>
    </motion.section>
  );
}
