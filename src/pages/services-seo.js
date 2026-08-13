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

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / SEO",
    title: "SEO built like an institution, not a hack.",
    lede: "Technical fixes, content, local listings, and authority — audited constantly and deployed the moment they're needed, not saved for a quarterly report.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "SEO", href: "/services/seo/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("The Approach")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">SEO managed like an asset, not a project.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Most SEO retainers hand you a monthly PDF and hope for the best. Triple O runs your search presence the way a standing operations team would — continuously watching your site, fixing what's broken, building what's missing, and reporting the results in language you can actually use.</p>
        <p>Every engagement starts with a full audit of your technical health, content, local presence, and backlink profile — then our team goes to work closing the gaps, in order of what will actually move rankings first.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("What's Included")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Everything running behind every page you publish.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${outcomeCard("Technical SEO, Fixed in Real Time", "We monitor your site around the clock and resolve the issues that quietly cap your rankings — broken links, missing schema, duplicate titles, orphaned pages, slow-indexing content.")}
        ${outcomeCard("Content Built From Real Search Demand", "Topical maps and briefs generated from what your market is actually searching for, then produced as long-form pages and on-page updates, reviewed by our team before anything goes live.")}
        ${outcomeCard("Local Rankings, Managed Everywhere at Once", "Google Business Profile updates, listing accuracy, review responses, and citation building — kept consistent across every location, with heatmap reporting that shows exactly where you rank block by block.")}
        ${outcomeCard("Authority You Can Point To", "Backlink acquisition and digital PR placements sourced from relevant, vetted publishers — not link farms — plus full visibility into your backlink profile and where competitors are earning links you're not.")}
        ${outcomeCard("Reporting You Can Actually Read", "Dashboards pull straight from Search Console and live rank tracking, prioritized by real impact rather than vanity metrics, so every recommendation ties back to something you can measure.")}
        ${outcomeCard("Built for Where Search Is Headed", "We track and optimize how your brand shows up in ChatGPT, Gemini, and Perplexity — not just Google's ten blue links.")}
      </div>
    </div>
  </section>

  <section class="section bg-white" id="how-it-works">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Work")}
        <h2 class="text-3xl sm:text-4xl text-balance">Find the ceiling. Remove it. Build past it.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Audit", "We map your technical health, content gaps, backlink profile, and local presence to establish a real baseline — not assumptions.")}
        ${processStep(2, "Fix & Build", "Fixes, schema, and content updates go live directly on your site, prioritized by live signals from Search Console.")}
        ${processStep(3, "Amplify", "Authority, local expansion, and content velocity compound month over month, tracked openly so you always know what moved.")}
      </div>
    </div>
  </section>

  <section class="relative bg-diagonal-green text-cream section overflow-hidden">
    <div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.06", size: 480 })}</div>
    <div class="container-page relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-8">
        ${c.eyebrow("Coming Next", { light: true })}
        <h2 class="text-3xl sm:text-4xl text-balance mb-4" data-reveal data-reveal-y="20">Search isn't just Google anymore.</h2>
        <p class="text-cream/70 leading-relaxed max-w-xl" data-reveal data-reveal-y="16">A growing share of your customers are asking ChatGPT and Perplexity before they ever open a search bar. Our AEO service makes sure you're the source those answers cite.</p>
      </div>
      <div class="lg:col-span-4">
        <a href="/services/seo/aeo/" class="btn-primary w-full" data-reveal data-reveal-y="16">Explore AEO</a>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions")}
        <h2 class="text-3xl sm:text-4xl text-balance">What clients ask before signing on.</h2>
      </div>
      <div data-reveal-group="seo-faq">
        ${faqItem("How is this different from a typical SEO retainer?", "Most agencies hand off recommendations and leave implementation to you. We deploy directly — technical fixes, schema, and content updates ship without waiting on your dev team's backlog.")}
        ${faqItem("How fast will we see results?", "Technical fixes typically go live within days of being identified. Rankings and traffic movement depend on your site's starting point and competitive landscape — we'll give you a realistic timeline after the initial audit.")}
        ${faqItem("Do you manage multi-location businesses?", "Yes. Local presence management scales across a single location or a large multi-location footprint from one dashboard.")}
        ${faqItem("Can this run alongside our existing website and CMS?", "Yes. Setup is a single lightweight install regardless of what your site is built on, and nothing changes live outside the parameters we agree to upfront.")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "AEO", href: "/services/seo/aeo/" },
        { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
        { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Ready When You Are",
    title: "Let's put your SEO on autopilot.",
    body: "Book a 15-minute call and we'll show you exactly what's underperforming.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
    secondary: { label: "Explore AEO", href: "/services/seo/aeo/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "SEO Services | Triple O Agency",
    description: "SEO services from Triple O Agency — technical SEO, content built from real search demand, local rankings, and authority, managed like an asset, not a project.",
    path: "/services/seo/",
  },
  body,
};
