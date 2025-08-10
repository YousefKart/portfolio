'use client';

import React, { useRef } from 'react';

type GlowBorderProps<T extends React.ElementType = 'div'> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
  /** Thickness of the glowing ring (in px). */
  borderWidth?: number;
  /** Optional border radius override. Inherits from parent by default. */
  radius?: number | string;
  /** Main glow color. Falls back to theme ring color. */
  color?: string;
  /** Secondary halo color. */
  colorSecondary?: string;
  /** Radius of the glow orb in pixels (visual reach). */
  size?: number;
  /** Additional blur for the glow (in px). */
  blur?: number;
  /** Controls max opacity of the glow when hovered (0..1). */
  opacity?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

/**
 * GlowBorder: wraps any element and adds a cursor-following glow that lights up only the border.
 * Works with rounded corners and respects the element's own border radius.
 *
 * Usage:
 *   <GlowBorder className="rounded-xl border">
 *     ...card content...
 *   </GlowBorder>
 */
export function GlowBorder<T extends React.ElementType = 'div'>(
  props: GlowBorderProps<T>
) {
  const {
    as,
    className,
    children,
    borderWidth = 2,
    radius,
    color,
    colorSecondary,
    size = 200,
    blur = 0.75,
    opacity = 1,
    ...rest
  } = props as GlowBorderProps;

  const Tag = (as || 'div') as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--glow-x', `${x}px`);
    el.style.setProperty('--glow-y', `${y}px`);
  };

  const handleEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.setAttribute('data-hover', 'true');
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.removeAttribute('data-hover');
    el.style.setProperty('--glow-x', `-999px`);
    el.style.setProperty('--glow-y', `-999px`);
  };

  const styleVars: React.CSSProperties &
    Record<string, string | number | undefined> = {
    // Mask thickness equals padding on the pseudo element
    // so the glow shows only where a border would.
    '--glow-border-width': `${borderWidth}px`,
    '--glow-radius':
      radius !== undefined
        ? typeof radius === 'number'
          ? `${radius}px`
          : String(radius)
        : undefined,
    '--glow-color': color,
    '--glow-color2': colorSecondary,
    '--glow-size': `${size}px`,
    '--glow-blur': `${blur}px`,
    '--glow-opacity': String(opacity),
  };

  return (
    <Tag
      className={['glow-border', className].filter(Boolean).join(' ')}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      ref={ref}
      style={styleVars}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default GlowBorder;
