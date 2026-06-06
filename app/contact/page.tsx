'use client';

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

const contactInfo = [
  {
    label: 'Email',
    value: 'yousef@yousef.dev',
    href: 'mailto:yousef@yousef.dev',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (226) 000-0000',
    href: 'tel:+12260000000',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.32a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.41 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
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
        'flex items-center gap-4 rounded-xl border px-5 py-4 text-sm transition-colors',
        'border-border/60 bg-background/60',
        hover
      )}
    >
      <span className="text-muted-foreground/60">{icon}</span>
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] font-normal uppercase tracking-[0.14em] text-muted-foreground/50">
          {label}
        </span>
        <span className="font-light text-muted-foreground">{value}</span>
      </div>
    </motion.a>
  );
}

export default function ContactPage({ className }: { className?: string }) {
  return (
    <motion.section
      className={cn(
        'flex min-h-[90vh] w-full items-center justify-center px-4 py-24',
        className
      )}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="flex w-full max-w-2xl flex-col items-center gap-10 text-center">
        <motion.div className="flex items-center gap-3" variants={fadeUp}>
          <div className="h-px w-8 bg-border" />
          <span className="text-[11px] font-normal uppercase tracking-[0.18em] text-muted-foreground">
            Get in touch
          </span>
          <div className="h-px w-8 bg-border" />
        </motion.div>

        <motion.h1
          className="text-[clamp(2.4rem,6vw,3.8rem)] font-normal leading-[1.1] tracking-tight"
          variants={fadeUp}
        >
          Contact
        </motion.h1>

        <motion.p
          className="text-sm font-light leading-relaxed text-muted-foreground"
          variants={fadeUp}
        >
          I'm open to new opportunities, collaborations, and conversations.
          <br />
          Reach out directly through the contact options below.
        </motion.p>

        <motion.div
          className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2"
          variants={fadeUp}
        >
          {contactInfo.map((item) => (
            <InfoCard key={item.label} {...item} />
          ))}
        </motion.div>

        <motion.div className="w-full" variants={fadeUp}>
          <div className="h-px w-full bg-border/40" />
        </motion.div>
      </div>
    </motion.section>
  );
}
