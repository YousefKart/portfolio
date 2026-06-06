import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Yousef Kart - Software Developer & 3D Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Design tokens //
// bg-background        → #0a0a0a
// bg-card              → #111111
// text-foreground      → #fafafa
// text-muted-foreground→ #71717a
// border               → #27272a
// accent               → #e4e4e7
//

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Geist", "Inter", ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 2px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.45,
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '72px',
          right: '72px',
          height: '2px',
          zIndex: 5,
          background:
            'linear-gradient(90deg, transparent, rgba(228,228,231,0.75), transparent)',
        }}
      />

      {/* ── Top label — Portfolio */}
      <div
        style={{
          position: 'absolute',
          top: '112px',
          left: '72px',
          zIndex: 15,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            fontSize: '14px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#71717a',
            fontWeight: 500,
          }}
        >
          Portfolio
        </span>
      </div>

      {/* ── Centered main content ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0 72px',
          paddingBottom: '80px' /* offset for bottom bar */,
          height: '100%',
          position: 'relative',
          zIndex: 10,
          gap: '20px',
          marginTop: '48px',
        }}
      >
        {/* Name */}
        <span
          style={{
            fontSize: '86px',
            fontWeight: 700,
            color: '#fafafa',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          Yousef Kart
        </span>

        {/* Divider */}
        <div
          style={{
            width: '48px',
            height: '1px',
            background: '#27272a',
            display: 'flex',
          }}
        />

        {/* Role tags */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          {['Software Developer', '3D Modeler'].map((tag, i) => (
            <div
              key={tag}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              {i > 0 && (
                <span
                  style={{
                    color: '#3f3f46',
                    fontSize: '18px',
                    lineHeight: 1,
                    display: 'flex',
                  }}
                >
                  /
                </span>
              )}
              <span
                style={{
                  fontSize: '20px',
                  color: '#71717a',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '72px',
          borderTop: '1px solid #18181b',
          background: 'rgba(17,17,17,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 72px',
          zIndex: 20,
        }}
      >
        {/* Left — URL */}
        <span></span>

        {/* Center — tech stack pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {[
            'C++',
            'Python',
            'React',
            'Next.js',
            'Expo',
            'SQL',
            'OpenGL',
            'Qt',
            'ImGui',
            'OpenCV',
            'Git',
            'TypeScript',
            'Vercel',
            'CMake',
          ].map((tech) => (
            <div
              key={tech}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 12px',
                border: '1px solid #27272a',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  color: '#52525b',
                  letterSpacing: '0.04em',
                }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* Right — available badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
          }}
        ></div>
      </div>
    </div>,
    { ...size }
  );
}
