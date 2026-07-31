function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Case Study",
    title: "Utah Climate Pros",
    lede: "Positioning a Wasatch Front HVAC company as a Utah leader — through SEO, paid media, and reputation.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Our Work", href: "/work/" },
      { label: "Utah Climate Pros", href: "/work/utah-climate-pros/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page">
      <img src="/assets/img/clients/utah-climate-pros-logo.png" alt="Utah Climate Pros logo" class="h-16 w-auto object-contain mb-14" data-reveal data-reveal-y="16" />
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 pb-16 border-b border-deep-green/10" data-grid-reveal>
        <div>
          <p class="eyebrow mb-2">Client</p>
          <p class="font-heading font-semibold text-lg">Utah Climate Pros</p>
          <p class="text-text-dark/55 text-sm mt-1">HVAC / Home Services</p>
        </div>
        <div>
          <p class="eyebrow mb-2">Services</p>
          <p class="font-heading font-semibold text-lg">SEO, Paid Media, Reputation Management</p>
        </div>
        <div>
          <p class="eyebrow mb-2">What We Did</p>
          <p class="font-heading font-semibold text-lg">Local Market Positioning</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <article class="lg:col-span-8 space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
          <h2 class="text-2xl sm:text-3xl text-text-dark">The Challenge</h2>
          <p>Utah Climate Pros installs and services heating and cooling systems across the Wasatch Front — a crowded market where dozens of HVAC companies compete for the same searches, the same ad placements, and the same trust signals. Being good at the work wasn't translating into being found, or into standing out once a homeowner was comparing options.</p>

          <h2 class="text-2xl sm:text-3xl text-text-dark pt-4">Our Approach</h2>
          <p>We overhauled their SEO from the ground up — technical fixes, local search optimization, and content built around the specific services and service areas homeowners across Utah were actually searching for. Alongside that, we rebuilt their paid media to generate consistent, qualified leads, and put a reputation management system in place to turn good service calls into the public reviews that actually move a homeowner's decision.</p>

          <h2 class="text-2xl sm:text-3xl text-text-dark pt-4">The Result</h2>
          <p>Utah Climate Pros now shows up where Wasatch Front homeowners are actually looking — backed by a stronger organic presence, a paid media engine built to convert, and a reputation that reinforces the "Utah HVAC leader" positioning at every touchpoint.</p>
        </article>
        <aside class="lg:col-span-4" data-reveal data-reveal-y="24">
          <div class="card bg-cream sticky top-32">
            <p class="eyebrow mb-4">What Changed</p>
            <ul class="space-y-4 text-text-dark/75">
              <li class="flex items-start gap-3">${c.iconCheck("w-5 h-5 text-leather mt-0.5")}<span>Full SEO overhaul, including local &amp; service-area optimization</span></li>
              <li class="flex items-start gap-3">${c.iconCheck("w-5 h-5 text-leather mt-0.5")}<span>Paid media rebuilt around qualified HVAC lead generation</span></li>
              <li class="flex items-start gap-3">${c.iconCheck("w-5 h-5 text-leather mt-0.5")}<span>Reputation management system for reviews &amp; response</span></li>
              <li class="flex items-start gap-3">${c.iconCheck("w-5 h-5 text-leather mt-0.5")}<span>Positioning built around being a trusted Utah HVAC leader</span></li>
            </ul>
            <a href="/contact/" class="btn-primary w-full mt-8">Start Your Project</a>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("More Work", [
        { label: "Arrival 3D", href: "/work/arrival-3d/" },
        { label: "LifeSpan Fitness", href: "/work/lifespan-fitness/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({ secondary: { label: "View Our Work", href: "/work/" } })}
  `;
}

module.exports = {
  meta: {
    title: "Utah Climate Pros | Triple O Agency",
    description: "Case study: positioning Utah Climate Pros as a Wasatch Front HVAC leader through SEO, paid media, and reputation management.",
    path: "/work/utah-climate-pros/",
  },
  body,
};
