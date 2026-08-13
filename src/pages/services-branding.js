function outcomeCard(title, description) {
  return `<div class="card bg-white flex flex-col h-full" data-reveal data-reveal-y="24">
    <h3 class="text-lg mb-3">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed">${description}</p>
  </div>`;
}

function processStep(num, title, description) {
  return `<div class="card bg-cream flex flex-col h-full" data-reveal data-reveal-y="24">
    <span class="font-heading text-leather-light/70 text-sm mb-4">0${num}</span>
    <h3 class="text-lg mb-3">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed flex-1">${description}</p>
  </div>`;
}

function faqItem(q, a) {
  return `<div class="border-b border-deep-green/10 py-8">
    <h3 class="text-lg font-heading font-semibold mb-3">${q}</h3>
    <p class="text-text-dark/65 leading-relaxed">${a}</p>
  </div>`;
}

function swatch(hex, label) {
  return `<div class="w-20">
    <div class="w-20 h-20 rounded-full border border-deep-green/10 mb-2" style="background:${hex};"></div>
    <span class="font-heading text-[10px] tracking-wide text-text-dark/60 text-center block">${label}</span>
  </div>`;
}

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Branding & PR",
    title: "Branding that reads like it's already established.",
    lede: "Positioning, identity, and voice built with the weight of an institution — not a template with your logo swapped in.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Branding & PR", href: "/services/branding/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("The Problem")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">Most brands look like every other brand in their category.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>That's not an accident — it's how they were built. A logo generator, a Canva template, a mood board pulled from the same twenty Pinterest boards everyone else in the industry is using too. The result looks fine and means nothing, because there was no real decision behind any of it.</p>
        <p>We build identity systems the way an institution builds its image: deliberately, with a real point of view behind every choice, meant to hold up for a decade instead of a fiscal quarter.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mx-auto text-center mb-14" data-reveal data-reveal-y="20">
        ${c.eyebrow("Proof of the Approach", { light: false })}
        <h2 class="text-3xl sm:text-4xl text-balance mt-5">You're already looking at an example of it.</h2>
        <p class="text-text-dark/65 mt-4 leading-relaxed">The palette, the type pairing, the mark on this page — this is Triple O's own identity system, built the same way we build one for a client. No stock kit, no template. Every decision was made on purpose.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 border border-deep-green/10 bg-white" data-reveal data-reveal-y="24">
        <div class="p-10 sm:border-r border-deep-green/10">
          <p class="eyebrow mb-5">Type System</p>
          <p class="text-3xl font-heading font-bold text-deep-green mb-1">Aa — Montserrat</p>
          <p class="font-body italic text-lg text-text-dark/60">Aa — Lora, for everything meant to be read closely.</p>
        </div>
        <div class="p-10 bg-soft-grey">
          <p class="eyebrow mb-5">Color Palette</p>
          <div class="flex gap-5 flex-wrap">
            ${swatch("#FFFFFF", "#FFFFFF")}
            ${swatch("#E8E4D9", "#E8E4D9")}
            ${swatch("#2E3D36", "#2E3D36")}
            ${swatch("#6B4423", "#6B4423")}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("The Outcomes")}
        <h2 class="text-3xl sm:text-4xl text-balance">What actually changes once the identity is real.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${outcomeCard("Recognized Before They Read the Name", "A visual system distinct enough that color, shape, and type alone signal who you are, before anyone reads a word of copy.")}
        ${outcomeCard("Consistent Everywhere It Shows Up", "Website, decks, social, print — all pulling from the same system, so nothing looks like it was made by a different company on a different day.")}
        ${outcomeCard("Positioning That Actually Differentiates", "Messaging built around what genuinely makes you different, not the same category claims every competitor's homepage already makes.")}
        ${outcomeCard("A Team That Can Move Without You", "Documented guidelines mean anyone touching the brand — a new hire, a freelancer, another vendor — gets it right without you checking every asset.")}
        ${outcomeCard("Built to Last, Not Trend-Chase", "Decisions made to hold up for years — not an identity that looks dated the moment the trend it borrowed from moves on.")}
        ${outcomeCard("Fully Yours", "No templates, no stock kits, no assets licensed from a marketplace. Everything delivered outright, source files included.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-12">
        ${c.eyebrow("What's Included")}
        <h2 class="text-3xl sm:text-4xl mt-5 mb-8 text-balance max-w-xl" data-reveal data-reveal-y="20">Everything it takes to make it real and usable.</h2>
      </div>
      <div class="lg:col-span-12">
        ${c.checklist(
          [
            "Brand strategy &amp; positioning — what you stand for, and who it's for",
            "Naming, when a new name or product line needs one",
            "Visual identity system — mark, color palette, typography",
            "Brand voice &amp; messaging guide — how you sound in writing, everywhere",
            "Brand guidelines document — the rulebook everyone else works from",
            "Core templates — social, presentation deck, and stationery starting points",
          ],
          { cols: 2 }
        )}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Work")}
        <h2 class="text-3xl sm:text-4xl text-balance">Position it. Design it. Document it.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Position", "We figure out what actually makes you different before any visual work starts — a brand without a position is just decoration.")}
        ${processStep(2, "Design", "Mark, palette, type, and voice — built together as one system, not a logo followed by unrelated decisions later.")}
        ${processStep(3, "Document", "Packaged into guidelines clear enough that anyone can apply it correctly the day we hand it off.")}
      </div>
    </div>
  </section>

  <section class="section bg-cream">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div class="lg:col-span-8">
        ${c.eyebrow("Beyond the Identity")}
        <h2 class="text-3xl sm:text-4xl mb-5 text-balance" data-reveal data-reveal-y="20">A brand only earns its keep once it's out in the world.</h2>
        <p class="text-text-dark/65 leading-relaxed mb-8" data-reveal data-reveal-y="16">Once the identity's built, it needs somewhere to work — SEO and content that sound like you, paid campaigns that look unmistakably like you, and, if it's missing, a marketing leader making sure it all stays consistent as you grow.</p>
      </div>
      <div class="lg:col-span-4 flex flex-col gap-4">
        <a href="/services/seo/" class="btn-primary w-full">SEO Service</a>
        <a href="/services/consulting/fractional-cmo/" class="btn-outline w-full">Fractional CMO</a>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions")}
        <h2 class="text-3xl sm:text-4xl text-balance">What clients ask before signing on.</h2>
      </div>
      <div data-reveal-group="branding-faq">
        ${faqItem("Do you do full rebrands, or just refreshes?", "Both. A refresh keeps what's already working — usually the name and core recognition — and rebuilds the system around it. A full rebrand starts from the positioning up. We'll recommend which one you actually need after hearing where things stand.")}
        ${faqItem("How long does a branding engagement take?", "A full identity system typically runs several weeks from positioning through final guidelines. Refreshes move faster. We'll give you a real timeline once we understand the scope.")}
        ${faqItem("What if we already have a logo we like?", "That's fine — we can build the rest of the system around it, or use it as a starting point for a more refined version, rather than starting from zero.")}
        ${faqItem("Do you design our website too?", "Brand guidelines are built to hand off cleanly to whoever builds your site, and we can take that on directly as a separate engagement if it's useful to keep it in one place.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "SEO", href: "/services/seo/" },
        { label: "Fractional CMO / Consulting", href: "/services/consulting/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Get Started",
    title: "Let's build something that looks like it means it.",
    body: "Book a 15-minute call — no pitch deck, just a straight conversation about where things stand.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Branding & PR | Triple O Agency",
    description: "Branding and identity services from Triple O Agency — positioning, visual identity, brand voice, and guidelines built to hold up for years.",
    path: "/services/branding/",
  },
  body,
};
