// Hero variants — four distinct hero treatments for the same brand.

function HeroShell({ children, bg = SK.paper, density, navStyle, headline }) {
  return (
    <div style={{ width: '100%', height: '100%', background: bg, position: 'relative', overflow: 'hidden', fontFamily: SK.sans }}>
      <SNav style={navStyle} density={density} />
      <SDivider style={{ marginLeft: density === 'tight' ? 18 : 28, marginRight: density === 'tight' ? 18 : 28 }} />
      {children}
    </div>
  );
}

// A — Editorial: huge headline, lots of air
function HeroA({ density, navStyle, headline, motif }) {
  return (
    <HeroShell density={density} navStyle={navStyle}>
      <div style={{ padding: density === 'tight' ? '56px 18px 32px 32px' : '110px 88px 60px 88px', position: 'relative' }}>
        <STag>Intelligent systems · est 2024</STag>
        <div style={{
          fontFamily: '"Space Grotesk", system-ui', fontSize: 86, lineHeight: 0.98,
          letterSpacing: -3.2, fontWeight: 500, color: SK.ink,
          marginTop: 18, maxWidth: 1080,
        }}>
          {headline.split('\n').map((l, i) => <div key={i}>{l}</div>)}
        </div>
        <div style={{ marginTop: 28, color: SK.inkSoft, fontSize: 17, lineHeight: 1.55, maxWidth: 520 }}>
          ZENEX builds AI automation, web platforms, and integrations for teams
          that take operations seriously. We replace busywork with quiet systems.
        </div>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, alignItems: 'center' }}>
          <SBtn primary>Book a call →</SBtn>
          <SBtn>See our work</SBtn>
          <span style={{ fontFamily: SK.mono, fontSize: 10, color: SK.inkSoft, marginLeft: 14, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            avg · 4-week pilot
          </span>
        </div>
        {motif > 0 && (
          <div style={{ position: 'absolute', right: 88, top: 110, width: 240, opacity: 0.7 }}>
            <Azulejo h={240} intensity={motif} />
          </div>
        )}
        <Annot x={520} y={250} w={170} tilt={-3} arrow={{ dir: 'tl' }}>
          80–96px display · -3 letter-spacing. quiet authority.
        </Annot>
      </div>
    </HeroShell>
  );
}

// B — Split: copy left, system diagram right
function HeroB({ density, navStyle, headline, motif }) {
  return (
    <HeroShell density={density} navStyle={navStyle}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.05fr 1fr',
        gap: 60, padding: density === 'tight' ? '40px 24px' : '80px 88px',
        alignItems: 'center',
      }}>
        <div>
          <STag>Operations · automation · web</STag>
          <div style={{
            fontFamily: '"Space Grotesk", system-ui', fontSize: 62, lineHeight: 1.02,
            letterSpacing: -2, fontWeight: 500, marginTop: 16,
          }}>
            {headline.split('\n').map((l, i) => <div key={i}>{l}</div>)}
          </div>
          <div style={{ marginTop: 22, color: SK.inkSoft, fontSize: 16, lineHeight: 1.55, maxWidth: 460 }}>
            Intelligent automation, web platforms, and integration for teams
            that need their tools to actually work together.
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 10 }}>
            <SBtn primary>Start a project</SBtn>
            <SBtn>How it works</SBtn>
          </div>
        </div>
        {/* System diagram */}
        <div style={{ position: 'relative', height: 380 }}>
          <SystemDiagram motif={motif} />
        </div>
      </div>
      <Annot x={620} y={120} w={150} tilt={4} arrow={{ dir: 'bl' }}>
        diagram nods at "system integration" — not literal
      </Annot>
    </HeroShell>
  );
}

function SystemDiagram({ motif }) {
  const node = (x, y, label, big) => (
    <g key={label}>
      <rect x={x - (big ? 38 : 28)} y={y - 14} width={big ? 76 : 56} height={28} rx={14}
        fill={big ? SK.navy : SK.paper} stroke={SK.ink} strokeWidth="1.2" />
      <text x={x} y={y + 4} textAnchor="middle" fontFamily={SK.mono} fontSize="9"
        fill={big ? SK.paper : SK.ink} letterSpacing="1" style={{ textTransform: 'uppercase' }}>{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 460 380" width="100%" height="100%">
      {/* connection lines */}
      <path d="M 80 80 C 160 80, 180 180, 230 190" stroke={SK.inkSoft} strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M 80 180 C 160 180, 180 190, 230 190" stroke={SK.inkSoft} strokeWidth="1" fill="none" />
      <path d="M 80 280 C 160 280, 180 200, 230 190" stroke={SK.inkSoft} strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M 230 190 C 300 180, 320 100, 400 80" stroke={SK.navy} strokeWidth="1.4" fill="none" />
      <path d="M 230 190 C 300 200, 320 200, 400 200" stroke={SK.navy} strokeWidth="1.4" fill="none" />
      <path d="M 230 190 C 300 220, 320 300, 400 320" stroke={SK.navy} strokeWidth="1.4" fill="none" />

      {node(80, 80, 'CRM')}
      {node(80, 180, 'Email')}
      {node(80, 280, 'Sheets')}
      {node(230, 190, 'ZENEX', true)}
      {node(400, 80, 'Slack')}
      {node(400, 200, 'API')}
      {node(400, 320, 'Brief')}

      {/* pulse dot on central node */}
      <circle cx="230" cy="190" r="3.5" fill={SK.cyan}>
        <animate attributeName="r" values="3.5;6;3.5" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {motif > 0 && (
        <g opacity={motif === 1 ? 0.18 : 0.4}>
          <path d="M 40 350 Q 230 320 420 350" stroke={SK.navy} strokeWidth="0.8" fill="none" />
          <path d="M 40 360 Q 230 330 420 360" stroke={SK.navy} strokeWidth="0.8" fill="none" />
        </g>
      )}
    </svg>
  );
}

// C — Full-bleed flowing background, headline anchored bottom-left
function HeroC({ density, navStyle, headline, motif }) {
  return (
    <div style={{ width: '100%', height: '100%', background: SK.navy, position: 'relative', overflow: 'hidden', fontFamily: SK.sans, color: SK.paper }}>
      {/* abstract flowing background */}
      <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7 }}>
        <defs>
          <linearGradient id="hc-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0b1f3a" />
            <stop offset="0.5" stopColor="#143a66" />
            <stop offset="1" stopColor="#0b1f3a" />
          </linearGradient>
        </defs>
        <rect width="1280" height="720" fill="url(#hc-grad)" />
        {[...Array(14)].map((_, i) => (
          <path key={i}
            d={`M -50 ${120 + i * 38} Q 320 ${60 + i * 38} 640 ${180 + i * 38} T 1330 ${140 + i * 38}`}
            stroke={SK.cyan} strokeWidth="0.6" fill="none" opacity={0.15 + (i % 3) * 0.08} />
        ))}
        {[...Array(14)].map((_, i) => (
          <path key={`b-${i}`}
            d={`M -50 ${320 + i * 28} Q 420 ${280 + i * 28} 720 ${380 + i * 28} T 1330 ${340 + i * 28}`}
            stroke={SK.paper} strokeWidth="0.4" fill="none" opacity={0.06 + (i % 4) * 0.04} />
        ))}
        <circle cx="980" cy="280" r="180" fill="none" stroke={SK.cyan} strokeWidth="0.6" opacity="0.4" />
        <circle cx="980" cy="280" r="120" fill="none" stroke={SK.cyan} strokeWidth="0.6" opacity="0.6" />
      </svg>
      {/* dark nav */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ padding: density === 'tight' ? '14px 24px' : '20px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: SK.paper }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FlowMark size={20} stroke={SK.paper} weight={1.5} />
            <span style={{ fontWeight: 600, letterSpacing: 3, fontSize: 14 }}>ZENEX</span>
          </div>
          <div style={{ display: 'flex', gap: 22, fontSize: 11, opacity: 0.75 }}>
            <span>Services</span><span>How it works</span><span>Work</span><span>Studio</span>
          </div>
          <span style={{
            padding: '8px 14px', fontSize: 12, fontWeight: 500,
            border: `1.5px solid ${SK.paper}`, borderRadius: 999, color: SK.paper,
          }}>Book a call</span>
        </div>
      </div>
      {/* anchored copy */}
      <div style={{ position: 'absolute', left: density === 'tight' ? 24 : 88, bottom: density === 'tight' ? 40 : 80, zIndex: 2, maxWidth: 640 }}>
        <span style={{ fontFamily: SK.mono, fontSize: 10, letterSpacing: 2.5, color: SK.cyan, textTransform: 'uppercase' }}>· The shape of intelligence</span>
        <div style={{
          fontFamily: '"Space Grotesk", system-ui', fontSize: 72, lineHeight: 1.02,
          letterSpacing: -2.4, fontWeight: 400, marginTop: 14, color: SK.paper,
        }}>
          {headline.split('\n').map((l, i) => <div key={i}>{l}</div>)}
        </div>
        <div style={{ marginTop: 18, fontSize: 15, lineHeight: 1.55, opacity: 0.7, maxWidth: 480 }}>
          AI automation, web, and integration — for teams that demand precision.
        </div>
        <div style={{ marginTop: 26, display: 'flex', gap: 10 }}>
          <span style={{
            padding: '10px 18px', fontSize: 13, fontWeight: 500,
            background: SK.paper, color: SK.navy, borderRadius: 999,
          }}>Start a project →</span>
          <span style={{ padding: '10px 18px', fontSize: 13, color: SK.paper, opacity: 0.8 }}>See our work</span>
        </div>
      </div>
      <Annot x={140} y={140} w={170} tilt={-3} arrow={{ dir: 'br' }}>
        full-bleed flowing currents — feels oceanic without being literal
      </Annot>
    </div>
  );
}

// D — Quiet anchored: tiny copy bottom, oversized mark in center
function HeroD({ density, navStyle, headline, motif }) {
  return (
    <HeroShell density={density} navStyle={navStyle}>
      <div style={{ position: 'relative', height: 'calc(100% - 60px)', padding: density === 'tight' ? '12px 24px' : '24px 88px' }}>
        {/* oversized horizon mark, centered */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="380" height="380" viewBox="0 0 380 380">
            <circle cx="190" cy="190" r="170" stroke={SK.ink} strokeWidth="1.2" fill="none" />
            <path d="M 20 190 A 170 170 0 0 0 360 190 Z" fill={SK.navy} opacity="0.92" />
            <path d="M 20 190 Q 190 130 360 190" stroke={SK.paper} strokeWidth="1.5" fill="none" opacity="0.5" />
            {motif > 0 && [...Array(6)].map((_, i) => (
              <circle key={i} cx="190" cy="190" r={170 - (i + 1) * 18}
                stroke={SK.inkFaint} strokeWidth="0.5" fill="none" opacity={motif === 1 ? 0.15 : 0.3} />
            ))}
          </svg>
        </div>
        {/* small headline floating top-left */}
        <div style={{ position: 'relative', maxWidth: 360 }}>
          <STag>Premium systems studio</STag>
          <div style={{
            fontFamily: '"Space Grotesk", system-ui', fontSize: 32, lineHeight: 1.1,
            letterSpacing: -0.6, fontWeight: 500, marginTop: 12,
          }}>
            {headline.split('\n').map((l, i) => <div key={i}>{l}</div>)}
          </div>
        </div>
        {/* bottom-right corner copy + CTA */}
        <div style={{ position: 'absolute', right: density === 'tight' ? 24 : 88, bottom: 24, textAlign: 'right' }}>
          <div style={{ color: SK.inkSoft, fontSize: 14, lineHeight: 1.45, maxWidth: 320, marginLeft: 'auto' }}>
            AI automation and integration, delivered with the calm of an
            engineering firm — not a tech vendor.
          </div>
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <SBtn>Studio</SBtn>
            <SBtn primary>Book a call →</SBtn>
          </div>
        </div>
        <Annot x={50} y={250} w={150} tilt={2} arrow={{ dir: 'br' }}>
          the mark IS the hero. copy steps aside.
        </Annot>
      </div>
    </HeroShell>
  );
}

Object.assign(window, { HeroA, HeroB, HeroC, HeroD });
