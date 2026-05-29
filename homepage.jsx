// Brand foundation: positioning, color, type, UI rules.

function PositioningCard() {
  return (
    <div style={{
      width: '100%', height: '100%', padding: '36px 44px',
      background: SK.paper, position: 'relative', overflow: 'hidden',
      fontFamily: SK.sans,
    }}>
      <STag>Brand · positioning</STag>
      <div style={{
        marginTop: 22, fontFamily: SK.sans, fontSize: 26, lineHeight: 1.25,
        fontWeight: 500, letterSpacing: -0.4, color: SK.ink, maxWidth: 540,
      }}>
        ZENEX is an elite systems studio — building intelligent automation,
        web, and integration for businesses that take engineering seriously.
      </div>
      <div style={{ height: 1, background: SK.inkFaint, opacity: 0.4, margin: '24px 0', maxWidth: 540 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, maxWidth: 540 }}>
        <div>
          <MCaption>We are</MCaption>
          <div style={{ marginTop: 8, fontSize: 13, color: SK.inkSoft, lineHeight: 1.5 }}>
            calm · precise · engineered · refined · trustworthy
          </div>
        </div>
        <div>
          <MCaption>We aren't</MCaption>
          <div style={{ marginTop: 8, fontSize: 13, color: SK.inkSoft, lineHeight: 1.5 }}>
            loud · neon · futurist · gimmicky · stock-photo
          </div>
        </div>
        <div>
          <MCaption>Voice</MCaption>
          <div style={{ marginTop: 8, fontSize: 13, color: SK.inkSoft, lineHeight: 1.5 }}>
            Short sentences. Technical when useful, never jargon. Quiet authority.
          </div>
        </div>
        <div>
          <MCaption>Influence</MCaption>
          <div style={{ marginTop: 8, fontSize: 13, color: SK.inkSoft, lineHeight: 1.5 }}>
            Portuguese coastal calm — symmetry, rhythm, deep blues, soft light.
          </div>
        </div>
      </div>
      <Annot x={520} y={36} w={150} tilt={3} arrow={{ dir: 'bl' }}>
        the elevator pitch — say it out loud once
      </Annot>
    </div>
  );
}

function ColorCard() {
  const swatches = [
    { name: 'Abyssal', hex: '#0B1F3A', role: 'primary', text: '#fff' },
    { name: 'Ink', hex: '#1A1614', role: 'foreground', text: '#fff' },
    { name: 'Mist', hex: '#F3EFE6', role: 'surface', text: '#1a1614' },
    { name: 'Paper', hex: '#FAF7F1', role: 'background', text: '#1a1614' },
    { name: 'Tide', hex: '#4CC6D6', role: 'accent', text: '#0b1f3a' },
    { name: 'Coin', hex: '#C8A85A', role: 'accent · subtle', text: '#1a1614' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', padding: '36px 44px', background: SK.paper, fontFamily: SK.sans, position: 'relative' }}>
      <STag>Brand · palette</STag>
      <div style={{ marginTop: 20, fontSize: 22, fontWeight: 500, letterSpacing: -0.3 }}>Coastal navy. Mist. A flash of tide.</div>
      <div style={{ marginTop: 6, color: SK.inkSoft, fontSize: 13, maxWidth: 480 }}>
        Anchored in deep ocean navy + warm paper neutrals. Cyan only for emphasis, gold only as accent on premium surfaces.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 28 }}>
        {swatches.map((s) => (
          <div key={s.name} style={{ border: `1px solid ${SK.inkFaint}`, borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ background: s.hex, color: s.text, padding: '22px 14px 18px', minHeight: 78 }}>
              <div style={{ fontSize: 15, fontWeight: 500 }}>{s.name}</div>
              <div style={{ fontFamily: SK.mono, fontSize: 10, opacity: 0.75, marginTop: 2 }}>{s.hex}</div>
            </div>
            <div style={{ padding: '8px 12px', fontFamily: SK.mono, fontSize: 9, color: SK.inkSoft, textTransform: 'uppercase', letterSpacing: 1 }}>{s.role}</div>
          </div>
        ))}
      </div>
      <Annot x={490} y={250} w={150} tilt={2} arrow={{ dir: 'bl' }}>
        cyan ≤ 5% surface area. gold rarer.
      </Annot>
    </div>
  );
}

function TypeCard() {
  return (
    <div style={{ width: '100%', height: '100%', padding: '36px 44px', background: SK.paper, fontFamily: SK.sans, position: 'relative' }}>
      <STag>Brand · typography</STag>
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr', gap: 22 }}>
        <div>
          <MCaption>Display · Space Grotesk · 56/1.05 / -2%</MCaption>
          <div style={{ fontFamily: '"Space Grotesk", system-ui', fontSize: 50, fontWeight: 500, letterSpacing: -1.4, lineHeight: 1.02, marginTop: 6 }}>
            Systems<br/>that think.
          </div>
        </div>
        <div>
          <MCaption>Body · Inter · 16/1.55</MCaption>
          <div style={{ fontFamily: SK.sans, fontSize: 15, lineHeight: 1.55, color: SK.inkSoft, marginTop: 6, maxWidth: 480 }}>
            ZENEX designs and builds intelligent automation for operations, sales,
            and engineering teams — quietly engineered, calmly delivered.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <div>
            <MCaption>Mono · JetBrains Mono</MCaption>
            <div style={{ fontFamily: SK.mono, fontSize: 12, color: SK.ink, marginTop: 8, letterSpacing: 1 }}>
              EST · 2024 — LX, PT
            </div>
          </div>
          <div>
            <MCaption>Scale</MCaption>
            <div style={{ fontFamily: SK.mono, fontSize: 11, color: SK.inkSoft, marginTop: 8, lineHeight: 1.6 }}>
              12 · 14 · 16 · 20 · 28 · 40 · 56 · 80
            </div>
          </div>
        </div>
      </div>
      <Annot x={500} y={40} w={150} tilt={-2} arrow={{ dir: 'br' }}>
        Inter is fine but boring — Space Grotesk for display
      </Annot>
    </div>
  );
}

function UIRulesCard() {
  return (
    <div style={{ width: '100%', height: '100%', padding: '36px 44px', background: SK.paper, fontFamily: SK.sans, position: 'relative', overflow: 'hidden' }}>
      <STag>UI · style guide</STag>
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        {/* Buttons */}
        <div>
          <MCaption>Buttons</MCaption>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
            <SBtn primary>Book a call</SBtn>
            <SBtn>See our work →</SBtn>
            <span style={{ fontFamily: SK.sans, fontSize: 12, color: SK.navy, textDecoration: 'underline', textUnderlineOffset: 4 }}>Read the case study</span>
          </div>
        </div>
        {/* Cards */}
        <div>
          <MCaption>Card</MCaption>
          <div style={{
            marginTop: 10, padding: 14, border: `1px solid ${SK.inkFaint}`, borderRadius: 8,
            boxShadow: '0 1px 0 rgba(0,0,0,0.03)', background: SK.paper,
          }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: SK.navy, marginBottom: 8 }} />
            <div style={{ fontSize: 13, fontWeight: 500 }}>AI automation</div>
            <div style={{ fontSize: 11, color: SK.inkSoft, marginTop: 3, lineHeight: 1.4 }}>Workflows that act, not just notify.</div>
          </div>
        </div>
        {/* Spacing */}
        <div>
          <MCaption>Spacing · 4pt grid</MCaption>
          <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', marginTop: 10 }}>
            {[4, 8, 12, 16, 24, 32, 48].map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 14, height: s, background: SK.navy }} />
                <span style={{ fontFamily: SK.mono, fontSize: 9, color: SK.inkSoft }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Radius */}
        <div>
          <MCaption>Radius</MCaption>
          <div style={{ display: 'flex', gap: 8, marginTop: 10, alignItems: 'flex-end' }}>
            {[2, 6, 12, 999].map((r) => (
              <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 28, height: 28, background: SK.mist || SK.paperAlt, borderRadius: r, border: `1px solid ${SK.inkFaint}` }} />
                <span style={{ fontFamily: SK.mono, fontSize: 9, color: SK.inkSoft }}>{r === 999 ? 'pill' : r}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Layout */}
        <div style={{ gridColumn: '1 / -1' }}>
          <MCaption>Layout — 12-col grid · 88px margin desktop · 1280 max</MCaption>
          <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 4 }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{ height: 22, background: SK.paperAlt, border: `1px solid ${SK.inkFaint}`, borderRadius: 2 }} />
            ))}
          </div>
        </div>
      </div>
      <Annot x={36} y={300} w={180} tilt={-1.5}>
        soft shadows only. no glassmorph, no glow.
      </Annot>
    </div>
  );
}

Object.assign(window, { PositioningCard, ColorCard, TypeCard, UIRulesCard });
