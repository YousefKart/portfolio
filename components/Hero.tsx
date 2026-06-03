import { cn } from '@/lib/utils';
import { hover } from '@/lib/utils';
import { motion } from 'framer-motion';

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

export default function Hero({ className }: { className?: string }) {
  return (
    <motion.section
      id="hero"
      className={cn(
        'flex h-[90vh] w-full scroll-mt-64 items-center justify-center px-4',
        className
      )}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
        {/* Eyebrow */}
        <motion.div className="flex items-center gap-3" variants={fadeUp}>
          <div className="h-px w-8 bg-border" />
          <span className="text-[11px] font-normal uppercase tracking-[0.18em] text-muted-foreground">
            Based in Canada
          </span>
          <div className="h-px w-8 bg-border" />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-[clamp(2.8rem,7vw,4.5rem)] font-normal leading-[1.1] tracking-tight"
          variants={fadeUp}
        >
          Yousef Kart
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-lg font-light text-muted-foreground"
          variants={fadeUp}
        >
          Software Developer &amp; 3D Modeler
        </motion.p>

        {/* Credential */}
        <motion.p
          className="text-sm tracking-wide text-muted-foreground"
          variants={fadeUp}
        >
          Honours Computer Science · University of Windsor
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
          variants={fadeUp}
        >
          <motion.a
            href="#projects"
            className={cn(
              'inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-colors',
              'border-border/60 bg-background/60 text-muted-foreground',
              hover
            )}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View my work →
          </motion.a>
          <motion.a
            href="#contact"
            className={cn(
              'inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-colors',
              'border-border/60 bg-background/60 text-muted-foreground',
              hover
            )}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact me
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
