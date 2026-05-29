// Low-fi sketch primitives. Wobbly borders, handwritten labels, post-it annotations.
// All wireframe artboards compose these.

const SK = {
  ink: '#1a1614',
  inkSoft: '#5a534e',
  inkFaint: '#a59f99',
  paper: '#faf7f1',
  paperAlt: '#f3efe6',
  navy: '#0b1f3a',
  cyan: '#4cc6d6',
  gold: '#c8a85a',
  postit: '#ffe98a',
  postitInk: '#5a4a1a',
  hand: '"Caveat", "Comic Sans MS", cursive',
  mono: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
  sans: '"Inter", system-ui, sans-serif',
};

// Sketchy box: dashed/solid border with a tiny rotation, optional fill.
function SBox({ children, style = {}, fill = 'transparent', stroke = SK.ink, dash, w, h, radius = 4, tilt = 0, thick = 1.5, ...rest }) {
  return (
    <div
      style={{
        position: 'relative',
        background: fill,
        border: `${thick}px ${dash ? 'dashed' : 'solid'} ${stroke}`,
        borderRadius: radius,
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        width: w, height: h,
        boxSizing: 'border-box',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

// Sketchy horizontal line (placeholder text bar).
function SLine({ w = '100%', h = 6, gap = 8, alt, style = {} }) {
  return (
    <div style={{
      width: w, height: h,
      background: alt ? SK.inkFaint : SK.inkSoft,
      borderRadius: h,
      marginBottom: gap,
      opacity: alt ? 0.4 : 0.75,
      ...style,
    }} />
  );
}

// Multiple placeholder lines stacked.
function SLines({ count = 3, last = 0.6, w = '100%', h = 5, gap = 7, alt, style = {} }) {
  return (
    <div style={style}>
      {Array.from({ length: count }).map((_, i) => (
        <SLine
          key={i}
          w={i === count - 1 ? `${last * 100}%` : w}
          h={h}
          gap={i === count - 1 ? 0 : gap}
          alt={alt}
        />
      ))}
    </div>
  );
}

// Hand-written label, leaning at a slight angle.
function HLabel({ children, size = 16, color = SK.ink, tilt = -1, style = {} }) {
  return (
    <span style={{
      fontFamily: SK.hand,
      fontSize: size,
      color,
      lineHeight: 1.05,
      letterSpacing: 0.2,
      display: 'inline-block',
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      ...style,
    }}>{children}</span>
  );
}

// Mono caption (used for annotations callouts & dimensions).
function MCaption({ children, size = 10, color = SK.inkSoft, style = {} }) {
  return (
    <span style={{
      fontFamily: SK.mono,
      fontSize: size,
      color,
      letterSpacing: 0.4,
      textTransform: 'uppercase',
      ...style,
    }}>{children}</span>
  );
}

// Context-driven flag for annotation visibility.
const AnnotsCtx = React.createContext(true);

// Post-it style annotation. Position absolutely from the parent.
function Annot({ children, x, y, w = 130, tilt = -2, arrow, color = SK.postit }) {
  const show = React.useContext(AnnotsCtx);
  if (!show) return null;
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width: w,
      background: color,
      color: SK.postitInk,
      padding: '6px 9px 7px',
      fontFamily: SK.hand,
      fontSize: 14, lineHeight: 1.1,
      transform: `rotate(${tilt}deg)`,
      boxShadow: '0 2px 0 rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)',
      zIndex: 5,
      pointerEvents: 'none',
    }}>
      {children}
      {arrow && (
        <svg width="40" height="40" style={{
          position: 'absolute',
          ...(arrow.dir === 'br' ? { right: -36, bottom: -30 } : arrow.dir === 'bl' ? { left: -36, bottom: -30 } : arrow.dir === 'tr' ? { right: -36, top: -30 } : { left: -36, top: -30 }),
          transform: arrow.flip ? 'scaleX(-1)' : undefined,
        }}>
          <path d={arrow.path || 'M 4 4 Q 20 8 34 30'} stroke={SK.postitInk} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 30 26 L 34 30 L 30 32" stroke={SK.postitInk} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}

// Sketchy button.
function SBtn({ children, primary, w, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '8px 14px', fontFamily: SK.sans, fontSize: 12, fontWeight: 500,
      border: `1.5px solid ${SK.ink}`,
      borderRadius: 999,
      background: primary ? SK.ink : 'transparent',
      color: primary ? SK.paper : SK.ink,
      width: w,
      boxShadow: primary ? '2px 2px 0 ' + SK.ink : 'none',
      ...style,
    }}>{children}</span>
  );
}

// X-marked placeholder image box.
function SImage({ w = '100%', h = 100, label = 'image', tilt = 0, style = {} }) {
  return (
    <div style={{
      width: w, height: h, position: 'relative',
      border: `1.2px solid ${SK.inkSoft}`,
      background: SK.paperAlt,
      borderRadius: 3,
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      overflow: 'hidden',
      ...style,
    }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={SK.inkSoft} strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={SK.inkSoft} strokeWidth="1" />
      </svg>
      <span style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: SK.mono, fontSize: 10, color: SK.inkSoft, letterSpacing: 0.5, textTransform: 'uppercase',
      }}>{label}</span>
    </div>
  );
}

// Azulejo-pattern tile strip (for Portuguese motif). Intensity 0-2.
function Azulejo({ w = '100%', h = 40, intensity = 1, style = {} }) {
  if (intensity === 0) return null;
  const op = intensity === 1 ? 0.18 : 0.45;
  const c = intensity === 1 ? SK.navy : SK.navy;
  return (
    <div style={{ width: w, height: h, overflow: 'hidden', opacity: op, ...style }}>
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 200 40">
        <defs>
          <pattern id={`az-${intensity}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" />
            <path d="M 10 2 Q 18 10 10 18 Q 2 10 10 2 Z" fill="none" stroke={c} strokeWidth="0.7" />
            <circle cx="10" cy="10" r="1" fill={c} />
            <path d="M 0 0 L 20 20 M 20 0 L 0 20" stroke={c} strokeWidth="0.3" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="40" fill={`url(#az-${intensity})`} />
      </svg>
    </div>
  );
}

// Wave / flow SVG marker for ZENEX brand motif.
function FlowMark({ size = 40, stroke = SK.ink, weight = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <path d="M 4 24 Q 12 8 20 20 Q 28 32 36 16" stroke={stroke} strokeWidth={weight} fill="none" strokeLinecap="round" />
      <path d="M 4 30 Q 12 14 20 26 Q 28 38 36 22" stroke={stroke} strokeWidth={weight} fill="none" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

// Generic wireframe nav row. Style A: classic horizontal, B: centered minimal, C: sidebar dot.
function SNav({ style: navStyle = 'A', logo = 'ZENEX', density = 'loose' }) {
  const pad = density === 'tight' ? '10px 18px' : '16px 28px';
  if (navStyle === 'C') {
    return (
      <div style={{ padding: pad, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FlowMark size={20} weight={1.5} />
          <span style={{ fontFamily: SK.sans, fontWeight: 600, letterSpacing: 3, fontSize: 13 }}>{logo}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {['•', '•', '•', '•'].map((d, i) => <span key={i} style={{ fontSize: 8, color: SK.inkSoft }}>{d}</span>)}
          <SBtn primary>Start →</SBtn>
        </div>
      </div>
    );
  }
  if (navStyle === 'B') {
    return (
      <div style={{ padding: pad, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <span style={{ fontFamily: SK.sans, fontWeight: 600, letterSpacing: 4, fontSize: 14 }}>{logo}</span>
        <div style={{ display: 'flex', gap: 16, fontFamily: SK.sans, fontSize: 11, color: SK.inkSoft }}>
          <span>Services</span><span>Work</span><span>Studio</span><span>Contact</span>
        </div>
      </div>
    );
  }
  // A — classic
  return (
    <div style={{ padding: pad, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <FlowMark size={18} weight={1.5} />
        <span style={{ fontFamily: SK.sans, fontWeight: 600, letterSpacing: 2, fontSize: 13 }}>{logo}</span>
      </div>
      <div style={{ display: 'flex', gap: 18, fontFamily: SK.sans, fontSize: 11, color: SK.inkSoft }}>
        <span>Services</span><span>How it works</span><span>Work</span><span>Studio</span>
      </div>
      <SBtn primary>Book a call</SBtn>
    </div>
  );
}

// Subtle divider line (sketchy).
function SDivider({ color = SK.inkFaint, style = {} }) {
  return <div style={{ height: 1, background: color, opacity: 0.5, ...style }} />;
}

// Section label tag (top-left of an artboard region).
function STag({ children, color = SK.navy }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: SK.mono, fontSize: 9, letterSpacing: 1.5,
      color, textTransform: 'uppercase',
    }}>
      <span style={{ width: 14, height: 1, background: color }} />
      {children}
    </div>
  );
}

Object.assign(window, { SK, SBox, SLine, SLines, HLabel, MCaption, Annot, AnnotsCtx, SBtn, SImage, Azulejo, FlowMark, SNav, SDivider, STag });
