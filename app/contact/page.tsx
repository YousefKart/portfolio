'use client';

import { cn, hover } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const contactInfo = [
  {
    label: 'Email',
    value: 'yousefkart21@gmail.com',
    href: 'mailto:yousefkart21@gmail.com',
  },
  { label: 'Phone', value: '+1 (519) 991-6921', href: 'tel:+15199916921' },
];

function InfoCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      variants={fadeUp}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group flex w-full flex-col items-start justify-between gap-4 rounded-xl border border-border/60 bg-background/60 px-5 py-5 text-sm text-muted-foreground transition-colors',
        'sm:flex-row sm:items-center',
        'hover:bg-background/70 hover:text-foreground',
        hover,
        'outline-none focus-visible:ring-1 focus-visible:ring-ring/50'
      )}
    >
      <div className="flex flex-col gap-1 text-left">
        <span className="text-[10px] font-normal uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        <span className="text-base font-light tracking-[0.01em] text-foreground">
          {value}
        </span>
      </div>
      <ArrowRight
        className="hidden h-4 w-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 sm:inline-flex"
        aria-hidden="true"
      />
    </motion.a>
  );
}

export default function ContactPage({ className }: { className?: string }) {
  return (
    <motion.section
      className={cn(
        'flex min-h-dvh w-full items-center justify-center px-6 py-24',
        className
      )}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="flex w-full max-w-[560px] flex-col items-center text-center">
        {/* Eyeline */}
        <motion.div className="mb-10 flex items-center gap-3" variants={fadeUp}>
          <div className="h-px w-6 bg-border/40" />
          <span className="text-xs font-normal uppercase tracking-[0.2em] text-muted-foreground">
            Get in touch
          </span>
          <div className="h-px w-6 bg-border/40" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="mb-7 text-[clamp(3rem,10vw,5.2rem)] leading-[0.95] tracking-[-0.02em] text-foreground"
          variants={fadeUp}
        >
          Contact
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="mb-12 max-w-[380px] text-sm font-light leading-[1.75] tracking-[0.01em] text-muted-foreground"
          variants={fadeUp}
        >
          Open to new opportunities, collaborations, and&nbsp;conversations.
          Reach out directly below.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="mb-7 h-px w-full bg-border/40"
          variants={fadeUp}
        />

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={fadeUp}
        >
          {contactInfo.map((item) => (
            <InfoCard key={item.label} {...item} />
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          className="mt-8 text-xs tracking-[0.05em] text-muted-foreground"
          variants={fadeUp}
        >
          Talk to you soon.
        </motion.p>
      </div>
    </motion.section>
  );
}
