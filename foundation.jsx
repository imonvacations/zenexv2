// ZENEX wireframe exploration — main app.
// Lays out logo / hero / homepage / mobile / brand-system artboards on a design canvas.

const HEADLINES = [
  "Systems\nthat think.",
  "Intelligent\nautomation, calmly\nengineered.",
  "The shape\nof intelligence.",
  "Quiet systems\nfor serious teams.",
];

const HEADLINE_LABELS = ['Bold · "Systems that think."', 'Quiet · "Intelligent automation…"', 'Poetic · "The shape of intelligence."', 'Plainspoken · "Quiet systems…"'];

const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "annotations": true,
  "navStyle": "A",
  "density": "loose",
  "motif": 1,
  "headlineIdx": 0,
  "featuredHero": "A"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULS);
  const headline = HEADLINES[t.headlineIdx] || HEADLINES[0];
  const common = { density: t.density, navStyle: t.navStyle, headline, motif: t.motif };

  const FeaturedHero = { A: HeroA, B: HeroB, C: HeroC, D: HeroD }[t.featuredHero] || HeroA;

  return (
    <AnnotsCtx.Provider value={t.annotations}>
      <DesignCanvas>
        <DCSection id="intro" title="ZENEX · wireframe exploration"
          subtitle="Low-fi sketches across logo, color, type, hero, full homepage, and mobile. Toggle the Tweaks panel to swap variants live.">
          <DCArtboard id="readme" label="00 · Read me" width={760} height={520}>
            <ReadmeCard />
          </DCArtboard>
          <DCArtboard id="position" label="01 · Positioning" width={760} height={520}>
            <PositioningCard />
          </DCArtboard>
        </DCSection>

        <DCSection id="brand" title="Brand foundation" subtitle="Palette, typography, and UI primitives.">
          <DCArtboard id="color" label="A · Palette" width={760} height={520}>
            <ColorCard />
          </DCArtboard>
          <DCArtboard id="type" label="B · Type" width={620} height={520}>
            <TypeCard />
          </DCArtboard>
          <DCArtboard id="ui" label="C · UI rules" width={820} height={520}>
            <UIRulesCard />
          </DCArtboard>
        </DCSection>

        <DCSection id="logos" title="Logo mark — six directions"
          subtitle="From a literal Z monogram to azulejo-inspired symmetry to wordmark only. Pick one to develop further.">
          <DCArtboard id="lg-1" label="01 · Flow" width={340} height={360}><LogoWave /></DCArtboard>
          <DCArtboard id="lg-2" label="02 · Monogram" width={340} height={360}><LogoMonogram /></DCArtboard>
          <DCArtboard id="lg-3" label="03 · Horizon" width={340} height={360}><LogoSphere /></DCArtboard>
          <DCArtboard id="lg-4" label="04 · Azulejo" width={340} height={360}><LogoAzulejo /></DCArtboard>
          <DCArtboard id="lg-5" label="05 · Negative" width={340} height={360}><LogoNeg /></DCArtboard>
          <DCArtboard id="lg-6" label="06 · Wordmark" width={340} height={360}><LogoWordmark /></DCArtboard>
        </DCSection>

        <DCSection id="heroes" title="Hero — four treatments"
          subtitle="Same product, four very different first impressions. Use the Tweaks panel to pick one as featured.">
          <DCArtboard id="hero-A" label="A · Editorial" width={1280} height={720}><HeroA {...common} /></DCArtboard>
          <DCArtboard id="hero-B" label="B · System diagram" width={1280} height={720}><HeroB {...common} /></DCArtboard>
          <DCArtboard id="hero-C" label="C · Full-bleed flow" width={1280} height={720}><HeroC {...common} /></DCArtboard>
          <DCArtboard id="hero-D" label="D · Quiet anchored" width={1280} height={720}><HeroD {...common} /></DCArtboard>
        </DCSection>

        <DCSection id="featured-hero" title="Featured hero · large preview"
          subtitle="Whichever hero you choose in Tweaks shows here at full size. Helpful for reviewing.">
          <DCArtboard id="hero-featured" label={`Featured · variant ${t.featuredHero}`} width={1600} height={900}>
            <FeaturedHero {...common} />
          </DCArtboard>
        </DCSection>

        <DCSection id="homepage" title="Full homepage — two directions"
          subtitle="The same content, two structural arguments. Scroll inside an artboard to read; expand for full view.">
          <DCArtboard id="hp-editorial" label="Direction 1 · Editorial" width={1280} height={3400}>
            <HomepageEditorial {...common} />
          </DCArtboard>
          <DCArtboard id="hp-system" label="Direction 2 · System" width={1280} height={3200}>
            <HomepageSystem {...common} />
          </DCArtboard>
        </DCSection>

        <DCSection id="mobile" title="Mobile homepage"
          subtitle="Translated to a 390-wide column. Same hierarchy, denser rhythm.">
          <DCArtboard id="mobile-1" label="Mobile · Editorial" width={390} height={2400}>
            <HomepageMobile {...common} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Headline">
          <TweakSelect
            label="Tone"
            value={String(t.headlineIdx)}
            onChange={(v) => setTweak('headlineIdx', Number(v))}
            options={HEADLINE_LABELS.map((label, i) => ({ value: String(i), label }))}
          />
        </TweakSection>

        <TweakSection label="Nav style">
          <TweakRadio
            label="Layout"
            value={t.navStyle}
            onChange={(v) => setTweak('navStyle', v)}
            options={[
              { value: 'A', label: 'Classic' },
              { value: 'B', label: 'Centered' },
              { value: 'C', label: 'Dots' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Density">
          <TweakRadio
            label="Padding"
            value={t.density}
            onChange={(v) => setTweak('density', v)}
            options={[
              { value: 'loose', label: 'Loose' },
              { value: 'tight', label: 'Tight' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Portuguese motif">
          <TweakRadio
            label="Intensity"
            value={String(t.motif)}
            onChange={(v) => setTweak('motif', Number(v))}
            options={[
              { value: '0', label: 'Off' },
              { value: '1', label: 'Subtle' },
              { value: '2', label: 'Strong' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Featured hero">
          <TweakRadio
            label="Variant"
            value={t.featuredHero}
            onChange={(v) => setTweak('featuredHero', v)}
            options={[
              { value: 'A', label: 'A' },
              { value: 'B', label: 'B' },
              { value: 'C', label: 'C' },
              { value: 'D', label: 'D' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Annotations">
          <TweakToggle
            label="Show sticky notes"
            value={t.annotations}
            onChange={(v) => setTweak('annotations', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </AnnotsCtx.Provider>
  );
}

function ReadmeCard() {
  return (
    <div style={{
      width: '100%', height: '100%', padding: '40px 48px',
      background: SK.paper, fontFamily: SK.sans, position: 'relative', overflow: 'hidden',
    }}>
      <STag>v0.1 · wireframes</STag>
      <div style={{ fontFamily: '"Space Grotesk", system-ui', fontSize: 42, lineHeight: 1.05, letterSpacing: -1.2, fontWeight: 500, marginTop: 18 }}>
        ZENEX · low-fi exploration.
      </div>
      <div style={{ fontSize: 14, color: SK.inkSoft, lineHeight: 1.6, marginTop: 18, maxWidth: 560 }}>
        Six directions for the logo. Four hero treatments. Two full homepage structures.
        A mobile pass. Plus the brand foundation — palette, type, UI rules. All sketched,
        meant for fast feedback, not production.
      </div>
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, maxWidth: 580 }}>
        <div>
          <MCaption>How to use this</MCaption>
          <div style={{ fontSize: 13, color: SK.inkSoft, marginTop: 6, lineHeight: 1.5 }}>
            Pan/zoom the canvas. Double-click any card to expand. Open the Tweaks panel to swap nav, density, headline, motif intensity, and the featured hero.
          </div>
        </div>
        <div>
          <MCaption>What's next</MCaption>
          <div style={{ fontSize: 13, color: SK.inkSoft, marginTop: 6, lineHeight: 1.5 }}>
            Pick a logo direction, a hero treatment, and a homepage structure. I'll take that combo to hi-fi.
          </div>
        </div>
      </div>
      <Annot x={490} y={50} w={200} tilt={-4} arrow={{ dir: 'bl' }}>
        toggle annotations off when you want to see it "clean"
      </Annot>
      <div style={{ position: 'absolute', bottom: 28, left: 48, right: 48, borderTop: `1px dashed ${SK.inkFaint}`, paddingTop: 14, display: 'flex', justifyContent: 'space-between', fontFamily: SK.mono, fontSize: 10, color: SK.inkSoft, letterSpacing: 1.5, textTransform: 'uppercase' }}>
        <span>ZENEX studio</span>
        <span>v0.1 · sketches</span>
        <span>Lisboa</span>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
