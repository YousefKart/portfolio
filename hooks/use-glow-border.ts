'use client';

import { useRef, useMemo } from 'react';

export type GlowOptions = {
  borderWidth?: number; // px
  radius?: number | string;
  color?: string;
  colorSecondary?: string;
  size?: number; // px
  blur?: number; // px
  opacity?: number; // 0..1
};

/**
 * useGlowBorder: add cursor-following border glow to any element.
 *
 * Usage:
 *   const glow = useGlowBorder({ size: 220 });
 *   return (
 *     <div {...glow.props} className={cn("glow-border rounded-xl border p-6")}>...</div>
 *   );
 */
export function useGlowBorder(options: GlowOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);

  const handlers = useMemo(() => {
    const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--glow-x', `${x}px`);
      el.style.setProperty('--glow-y', `${y}px`);
    };
    const onMouseEnter = () => ref.current?.setAttribute('data-hover', 'true');
    const onMouseLeave = () => {
      const el = ref.current;
      if (!el) return;
      el.removeAttribute('data-hover');
      el.style.setProperty('--glow-x', `-999px`);
      el.style.setProperty('--glow-y', `-999px`);
    };
    return { onMouseMove, onMouseEnter, onMouseLeave };
  }, []);

  const styleVars: React.CSSProperties &
    Record<string, string | number | undefined> = {
    '--glow-border-width': options.borderWidth
      ? `${options.borderWidth}px`
      : undefined,
    '--glow-radius':
      options.radius !== undefined
        ? typeof options.radius === 'number'
          ? `${options.radius}px`
          : String(options.radius)
        : undefined,
    '--glow-color': options.color,
    '--glow-color2': options.colorSecondary,
    '--glow-size': options.size ? `${options.size}px` : undefined,
    '--glow-blur': options.blur ? `${options.blur}px` : undefined,
    '--glow-opacity':
      options.opacity !== undefined ? String(options.opacity) : undefined,
  };

  return {
    ref: ref as unknown as React.Ref<any>,
    props: {
      ref: ref as unknown as React.Ref<any>,
      ...handlers,
      style: styleVars,
    },
  } as const;
}

export default useGlowBorder;
