// Logo mark explorations — six distinct directions.
// All sketched, on paper-tone background, with handwritten notes.

function LogoFrame({ title, subtitle, children, note }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: SK.paper, padding: 24, position: 'relative',
      display: 'flex', flexDirection: 'column',
      fontFamily: SK.sans,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <STag>{title}</STag>
        <MCaption>v0.1</MCaption>
      </div>
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '12px 0',
      }}>
        {children}
      </div>
      <div style={{ borderTop: `1px dashed ${SK.inkFaint}`, paddingTop: 10 }}>
        <div style={{ fontFamily: SK.sans, fontSize: 13, fontWeight: 500, color: SK.ink }}>{subtitle}</div>
        <div style={{ fontFamily: SK.hand, fontSize: 14, color: SK.inkSoft, marginTop: 4, lineHeight: 1.2 }}>{note}</div>
      </div>
    </div>
  );
}

// 1. Wave / flow mark — soft horizon line, oceanic
function LogoWave() {
  return (
    <LogoFrame
      title="01 · Flow"
      subtitle="Wave / horizon"
      note="two waves meeting — ocean + system signal"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <svg width="120" height="60" viewBox="0 0 120 60">
          <path d="M 8 38 Q 30 14 52 38 Q 74 62 96 38" stroke={SK.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 8 46 Q 30 22 52 46 Q 74 70 96 46" stroke={SK.ink} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.35" />
          <circle cx="104" cy="38" r="3" fill={SK.navy} />
        </svg>
        <div style={{ fontFamily: '"Space Grotesk", system-ui', fontSize: 30, fontWeight: 600, letterSpacing: 4 }}>ZENEX</div>
      </div>
    </LogoFrame>
  );
}

// 2. Z monogram — sharp + curved corner
function LogoMonogram() {
  return (
    <LogoFrame
      title="02 · Monogram"
      subtitle="Z mark"
      note="sharp + soft — top angle squared, bottom curls"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <svg width="70" height="70" viewBox="0 0 70 70">
          <rect x="2" y="2" width="66" height="66" rx="14" fill={SK.navy} />
          <path d="M 18 22 L 50 22 L 22 50 Q 22 50 50 50" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="miter" />
        </svg>
        <div style={{ fontFamily: '"Space Grotesk", system-ui', fontSize: 30, fontWeight: 600, letterSpacing: 3, color: SK.ink }}>ZENEX</div>
      </div>
    </LogoFrame>
  );
}

// 3. Sphere with horizon — calmer, planetary
function LogoSphere() {
  return (
    <LogoFrame
      title="03 · Horizon"
      subtitle="Sphere · bisected"
      note="ocean meeting sky — premium, calm"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <svg width="76" height="76" viewBox="0 0 76 76">
          <circle cx="38" cy="38" r="32" stroke={SK.ink} strokeWidth="2" fill="none" />
          <path d="M 6 38 Q 38 22 70 38" stroke={SK.ink} strokeWidth="2" fill="none" />
          <path d="M 6 38 A 32 32 0 0 0 70 38 Z" fill={SK.navy} opacity="0.85" />
        </svg>
        <div style={{ fontFamily: '"Space Grotesk", system-ui', fontSize: 26, fontWeight: 500, letterSpacing: 6 }}>ZENEX</div>
      </div>
    </LogoFrame>
  );
}

// 4. Azulejo-inspired — two tiles meeting
function LogoAzulejo() {
  return (
    <LogoFrame
      title="04 · Azulejo"
      subtitle="Tile pair"
      note="portuguese tile DNA — two halves, perfect symmetry"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <svg width="84" height="42" viewBox="0 0 84 42">
          <rect x="0" y="0" width="40" height="40" stroke={SK.ink} strokeWidth="1.5" fill={SK.paper} />
          <path d="M 20 4 Q 36 20 20 36 Q 4 20 20 4 Z" stroke={SK.navy} strokeWidth="1.5" fill="none" />
          <circle cx="20" cy="20" r="2" fill={SK.navy} />
          <rect x="44" y="0" width="40" height="40" stroke={SK.ink} strokeWidth="1.5" fill={SK.navy} />
          <path d="M 64 4 Q 80 20 64 36 Q 48 20 64 4 Z" stroke={SK.paper} strokeWidth="1.5" fill="none" />
          <circle cx="64" cy="20" r="2" fill={SK.paper} />
        </svg>
        <div style={{ fontFamily: '"Space Grotesk", system-ui', fontSize: 26, fontWeight: 500, letterSpacing: 4 }}>ZENEX</div>
      </div>
    </LogoFrame>
  );
}

// 5. Negative space Z inside circle
function LogoNeg() {
  return (
    <LogoFrame
      title="05 · Negative"
      subtitle="Z in disc"
      note="all weight, scales to a favicon cleanly"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="32" fill={SK.ink} />
          <path d="M 18 22 L 54 22 Q 54 22 18 50 L 54 50" stroke={SK.paper} strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
        <div style={{ fontFamily: '"Space Grotesk", system-ui', fontSize: 30, fontWeight: 600, letterSpacing: 2, color: SK.ink }}>ZENEX</div>
      </div>
    </LogoFrame>
  );
}

// 6. Wordmark only — confident, no mark
function LogoWordmark() {
  return (
    <LogoFrame
      title="06 · Wordmark"
      subtitle="Type only"
      note="confidence move — let the type carry it"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <div style={{ fontFamily: '"Space Grotesk", system-ui', fontSize: 50, fontWeight: 500, letterSpacing: -1, color: SK.ink }}>
          zenex<span style={{ color: SK.navy }}>.</span>
        </div>
        <div style={{ fontFamily: SK.mono, fontSize: 10, color: SK.inkSoft, letterSpacing: 4, textTransform: 'uppercase' }}>Systems Studio · LX</div>
      </div>
    </LogoFrame>
  );
}

Object.assign(window, { LogoWave, LogoMonogram, LogoSphere, LogoAzulejo, LogoNeg, LogoWordmark });
