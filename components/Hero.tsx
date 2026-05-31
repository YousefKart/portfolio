import { cn } from '@/lib/utils';
import { hover } from '@/lib/utils';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-[90vh] w-full scroll-mt-64 items-center justify-center px-4"
    >
      <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 animate-fade-up">
          <div className="h-px w-8 bg-border" />
          <span className="text-[11px] font-normal uppercase tracking-[0.18em] text-muted-foreground">
            Based in Canada
          </span>
          <div className="h-px w-8 bg-border" />
        </div>

        {/* Name */}
        <h1 className="text-[clamp(2.8rem,7vw,4.5rem)] font-normal leading-[1.1] tracking-tight animate-fade-up [animation-delay:120ms]">
          Yousef Kart
        </h1>

        {/* Role */}
        <p className="text-lg font-light text-muted-foreground animate-fade-up [animation-delay:220ms]">
          Software Developer &amp; 3D Modeler
        </p>

        {/* Credential */}
        <p className="text-sm tracking-wide text-muted-foreground/70 animate-fade-up [animation-delay:320ms]">
          Honours Computer Science · University of Windsor
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 animate-fade-up [animation-delay:520ms]">
          <a
            href="#experience"
            className={cn(
              'inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-colors',
              'border-border/60 bg-background/60 text-muted-foreground hover:bg-muted/30',
              hover
            )}
          >
            View my work →
          </a>
          <a
            href="#contact"
            className={cn(
              'inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-colors',
              'border-border/60 bg-background/60 text-muted-foreground hover:bg-muted/30',
              hover
            )}
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
