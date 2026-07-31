const SERVICES = [
  {
    title: "SEO",
    description: "Technical, content, and authority-building SEO that compounds — plus AI Answer & Generative Engine Optimization for how people search now.",
    href: "/services/seo/",
  },
  {
    title: "Paid Ads / Lead Gen",
    description: "B2C and B2B paid media built around real buying behavior, not vanity impressions — engineered to fill your pipeline, not just your dashboard.",
    href: "/services/paid-ads/",
  },
  {
    title: "Branding & PR",
    description: "Positioning, messaging, and visual identity that make you unmistakable — then the press and partnerships to carry it further.",
    href: "/services/branding/",
  },
  {
    title: "Data & Intent Audiences",
    description: "First-party data and intent signals turned into audiences you can actually target — sharper spend, fewer wasted impressions.",
    href: "/services/audience-intent/",
  },
  {
    title: "Fractional CMO / Consulting",
    description: "Senior marketing leadership on demand — strategy, oversight, and accountability without a six-figure executive hire.",
    href: "/services/consulting/",
  },
];

const FRAMEWORK = [
  { letter: "O", title: "Optics", description: "How people perceive your business before they ever become a customer.", href: "/framework/optics/" },
  { letter: "O", title: "Optimization", description: "How small, intentional improvements compound into lasting growth.", href: "/framework/optimization/" },
  { letter: "O", title: "Omnipresence", description: "How consistent visibility creates familiarity, confidence, and trust.", href: "/framework/omnipresence/" },
];

function body(c) {
  return `
  <!-- HERO -->
  <section class="relative bg-deep-green text-cream min-h-[92vh] flex items-center overflow-hidden pt-28 bg-cover bg-center" style="background-image:url('/assets/img/hero/telescope/frame-001.jpg')" data-hero>
    <canvas id="hero-scroll-canvas" class="absolute inset-0 w-full h-full" data-frame-count="88" data-frame-path="/assets/img/hero/telescope" aria-hidden="true"></canvas>
    <div class="absolute inset-0 bg-gradient-to-b from-deep-green/85 via-deep-green/55 to-deep-green/90"></div>
    <div class="container-page relative z-10 py-20">
      <p class="eyebrow-light mb-6" data-reveal data-reveal-y="14">Salt Lake City Marketing Agency</p>
      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl text-balance" data-reveal data-reveal-y="28">Outthink.<br />Outperform.</h1>
      <p class="font-body italic text-cream/75 text-xl md:text-2xl max-w-xl mt-8" data-reveal data-reveal-y="20">Marketing evolves. Principles endure.</p>
      <p class="text-cream/60 max-w-lg mt-4 leading-relaxed" data-reveal data-reveal-y="16">Triple O Agency helps small and medium-sized businesses cut through the noise with strategy built on what actually works — not whatever's trending this quarter.</p>
      <div class="flex flex-col sm:flex-row gap-4 mt-10" data-reveal data-reveal-y="16">
        <a href="/contact/" class="btn-primary">Book a Consultation</a>
        <a href="/work/" class="btn-outline-on-dark">View Our Work</a>
      </div>
      <div class="flex items-center gap-4 mt-16" data-reveal data-reveal-y="12">
        <p class="font-heading font-bold text-3xl text-cream" data-count="16" data-count-suffix="+">0</p>
        <p class="eyebrow-light !text-cream/50 max-w-[10rem] leading-snug !normal-case !tracking-normal font-body italic text-sm">Years building marketing that lasts</p>
      </div>
    </div>
  </section>

  <!-- ABOUT TEASER -->
  <section class="section bg-white">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-5" data-reveal data-reveal-y="20">
        ${c.eyebrow("Who We Are")}
        <h2 class="text-3xl sm:text-4xl mt-5 mb-6 text-balance">We started Triple O to give business owners a better option.</h2>
        <p class="text-text-dark/70 leading-relaxed mb-4">Instead of chasing every new trend or copying competitors, we focus on understanding your business, identifying what makes you unique, and building a strategy that's designed to last.</p>
        <p class="text-text-dark/70 leading-relaxed mb-8">Because at the end of the day, marketing isn't about chasing attention — it's about earning trust, telling your story, and building something that lasts.</p>
        <a href="/about/our-story/" class="btn-outline">Read Our Story</a>
      </div>
      <div class="lg:col-span-7" data-reveal data-reveal-y="24">
        <div class="relative rounded-sm overflow-hidden shadow-warm-lg aspect-[4/3] border border-deep-green/10">
          <img src="/assets/img/team/office.jpg" alt="Modern office workspace" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-16" data-reveal data-reveal-y="20">
        ${c.eyebrow("What We Do")}
        <h2 class="text-3xl sm:text-4xl md:text-5xl mt-5 text-balance">Full-funnel marketing, built around three pillars.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${SERVICES.map((s, i) => c.serviceCard({ ...s, index: i + 1 })).join("")}
      </div>
      <div class="mt-12 text-center" data-reveal data-reveal-y="12">
        <a href="/services/" class="btn-outline">View All Services</a>
      </div>
    </div>
  </section>

  <!-- FRAMEWORK -->
  <section class="section bg-cream">
    <div class="container-page">
      <div class="max-w-2xl mb-16" data-reveal data-reveal-y="20">
        ${c.eyebrow("The Triple O Framework")}
        <h2 class="text-3xl sm:text-4xl md:text-5xl mt-5 text-balance">Optics. Optimization. Omnipresence.</h2>
        <p class="text-text-dark/65 mt-5 leading-relaxed">We combine proven marketing principles with modern, data-driven strategy — everything we do maps back to one of three pillars.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${FRAMEWORK.map((f) => c.pillarCard(f)).join("")}
      </div>
      <div class="mt-12 text-center" data-reveal data-reveal-y="12">
        <a href="/framework/" class="btn-outline">Explore the Framework</a>
      </div>
    </div>
  </section>

  <!-- WORK TEASER -->
  <section class="section bg-white">
    <div class="container-page">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14" data-reveal data-reveal-y="20">
        <div>
          ${c.eyebrow("Selected Work")}
          <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Real businesses. Real results.</h2>
        </div>
        <a href="/work/" class="btn-outline shrink-0">View Our Work</a>
      </div>
      <a href="/work/arrival-3d/" class="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-deep-green rounded-sm overflow-hidden shadow-warm-lg" data-reveal data-reveal-y="28">
        <div class="p-10 sm:p-14 flex flex-col justify-center text-cream">
          <p class="eyebrow-light mb-4">Branding &amp; Web / Lead Flow</p>
          <h3 class="text-3xl sm:text-4xl mb-4">Arrival 3D</h3>
          <p class="text-cream/70 leading-relaxed mb-6">A complete branding and website overhaul, paired with updated messaging and an automated CRM lead flow — built to convert, not just look good.</p>
          <span class="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-leather group-hover:gap-3 transition-all duration-200">View Case Study ${c.iconArrow()}</span>
        </div>
        <div class="relative min-h-[260px] bg-soft-grey flex items-center justify-center overflow-hidden p-10">
          <img src="/assets/img/clients/arrival-3d-logo.png" alt="Arrival 3D logo" class="max-h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
      </a>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-16" data-reveal data-reveal-y="20">
        ${c.eyebrow("What Clients Say")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Trust, earned one campaign at a time.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${c.testimonialCard({ quote: "Triple O didn't just run our ads — they rebuilt how we think about our brand. The lead flow alone paid for the engagement.", name: "Founder", company: "E-Commerce & Retail" })}
        ${c.testimonialCard({ quote: "We'd tried three agencies before this one. Triple O was the first that actually asked what made us different before touching a single campaign.", name: "Owner", company: "Home Services" })}
        ${c.testimonialCard({ quote: "Fractional CMO support gave us senior-level strategy without the overhead. Worth every dollar.", name: "CEO", company: "Professional Services" })}
      </div>
    </div>
  </section>

  ${c.ctaBand({})}
  `;
}

module.exports = {
  meta: {
    title: "Triple O Agency | Salt Lake City Marketing Agency — Outthink. Outperform.",
    description: "Triple O Agency is a Salt Lake City marketing agency helping small and medium-sized businesses grow with SEO, paid media, branding, and fractional CMO strategy built to last.",
    path: "/",
  },
  body,
};
