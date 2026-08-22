function pillarCard(title, items) {
  return `<div class="card bg-white flex flex-col h-full" data-reveal data-reveal-y="24">
    <h3 class="text-lg mb-4">${title}</h3>
    <ul class="space-y-3">
      ${items
        .map(
          (item) => `<li class="flex items-start gap-3 text-text-dark/65 leading-relaxed text-[15px]"><span class="text-leather mt-0.5">&mdash;</span><span>${item}</span></li>`
        )
        .join("")}
    </ul>
  </div>`;
}

function exclusion(text) {
  return `<p class="flex items-start gap-3 font-heading text-sm text-text-dark/75"><span class="text-leather">&mdash;</span><span>${text}</span></p>`;
}

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / SEO / GBP & Reputation",
    title: "Own the map. Own the reviews. Own what search says about you.",
    lede: "A focused, ongoing program built around the four things that actually move local rankings — your Google Business Profile, your reviews, your citations, and knowing what's working.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "SEO", href: "/services/seo/" },
      { label: "GBP & Reputation", href: "/services/seo/gbp-reputation/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-2xl text-center mx-auto" data-reveal data-reveal-y="20">
      <h2 class="text-3xl sm:text-4xl mb-4 text-balance">Not a website project. A presence project.</h2>
      <p class="text-text-dark/65 leading-relaxed text-lg">This isn't about rebuilding your site. It's dedicated management of the profile, reputation, and data that determine whether you show up first — on Google Maps, in the local pack, and increasingly in AI search results.</p>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mx-auto text-center mb-14" data-reveal data-reveal-y="20">
        ${c.eyebrow("Three Levers, One System")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Presence. Reputation. Visibility.</h2>
      </div>
      <div class="flex justify-center mb-12" data-reveal data-reveal-y="16">
        <svg viewBox="0 0 300 140" class="w-full max-w-md" aria-hidden="true">
          <circle cx="110" cy="70" r="58" fill="none" stroke="#2E3D36" stroke-width="9" opacity="0.9"/>
          <circle cx="150" cy="70" r="58" fill="none" stroke="#6B4423" stroke-width="9" opacity="0.9"/>
          <circle cx="190" cy="70" r="58" fill="none" stroke="#3A4F45" stroke-width="9" opacity="0.9"/>
        </svg>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center" data-grid-reveal>
        <div>
          <h4 class="font-heading font-semibold text-sm uppercase tracking-wide mb-2 text-deep-green">Presence</h4>
          <p class="text-text-dark/65 text-sm leading-relaxed">Your Google Business Profile, fully built out and kept current.</p>
        </div>
        <div>
          <h4 class="font-heading font-semibold text-sm uppercase tracking-wide mb-2 text-leather">Reputation</h4>
          <p class="text-text-dark/65 text-sm leading-relaxed">Reviews requested, answered, and monitored — every week.</p>
        </div>
        <div>
          <h4 class="font-heading font-semibold text-sm uppercase tracking-wide mb-2 text-green-light">Visibility</h4>
          <p class="text-text-dark/65 text-sm leading-relaxed">Citations kept consistent, rankings tracked, results reported.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-cream">
    <div class="container-page">
      <div class="max-w-2xl mb-14" data-reveal data-reveal-y="20">
        ${c.eyebrow("What's Included")}
        <h2 class="text-3xl sm:text-4xl mt-5 mb-4 text-balance">Four levers. Managed every month.</h2>
        <p class="text-text-dark/65 leading-relaxed">Each piece supports the others — a strong profile earns more reviews, more reviews strengthen your citations' credibility, and reporting tells you which of it is actually paying off.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-grid-reveal>
        ${pillarCard("Google Business Profile Management", [
          "Full optimization of categories, services, descriptions, and attributes",
          "Regular posts, offers, and photo updates to keep the profile active",
          "Monitoring for unauthorized edits or missing information",
          "Strategy adjusted to what's actually working in your market",
        ])}
        ${pillarCard("Reviews &amp; Reputation Management", [
          "Review requests sent to customers at the right moment",
          "Thoughtful, on-brand replies to every review, good or bad",
          "Ongoing monitoring and flagging of reviews that break Google's policies",
          "Monthly visibility into volume, sentiment, and where you're losing reviews",
        ])}
        ${pillarCard("Citation Building &amp; Consistency", [
          "Business information built and corrected across the directories Google checks",
          "Duplicate and outdated listings found and cleaned up",
          "One consistent name, address, and phone number everywhere it matters",
          "A clean source of truth your profile can be measured against",
        ])}
        ${pillarCard("Tracking &amp; Reporting", [
          "Keyword rank tracking across your target service area",
          "Before-and-after visibility snapshots, not just vanity metrics",
          "A monthly report that states plainly what moved, and why",
          "Direct access to ask questions — never a black box",
        ])}
      </div>
    </div>
  </section>

  <section class="relative bg-diagonal-green text-cream section overflow-hidden">
    <div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.06", size: 480 })}</div>
    <div class="container-page relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
      <div data-reveal data-reveal-y="16">
        <p class="eyebrow-light mb-3">Reported Monthly</p>
        <p class="text-cream/70 leading-relaxed">A plain-language summary of profile activity, review performance, and ranking movement — sent every month, not buried in a dashboard.</p>
      </div>
      <div data-reveal data-reveal-y="16">
        <p class="eyebrow-light mb-3">Tracked By Keyword</p>
        <p class="text-cream/70 leading-relaxed">Your priority search terms are monitored across your service area so you know exactly where you stand, and where you're gaining or losing ground.</p>
      </div>
      <div data-reveal data-reveal-y="16">
        <p class="eyebrow-light mb-3">Backed By A Person</p>
        <p class="text-cream/70 leading-relaxed">Every recommendation and change comes with a reason. If you want to ask why something was done, you can — and someone will answer.</p>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-xl text-center mx-auto" data-reveal data-reveal-y="20">
      ${c.eyebrow("Scope, Plainly", {})}
      <h2 class="text-2xl sm:text-3xl mb-4 text-balance">What this program doesn't touch</h2>
      <p class="text-text-dark/65 leading-relaxed mb-8">We keep this offering narrow on purpose, so it stays sharp. If you also want work done on your website, that's a separate conversation and a separate scope.</p>
      <div class="inline-flex flex-col gap-3 text-left">
        ${exclusion("No website redesign, development, or hosting")}
        ${exclusion("No on-page website copy or blog content")}
        ${exclusion("No paid advertising management")}
        ${exclusion("Runs alongside your existing site exactly as it is today")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "SEO", href: "/services/seo/" },
        { label: "AEO", href: "/services/seo/aeo/" },
        { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Get Started",
    title: "Let's find out where you're actually standing on Google.",
    body: "We'll start with a straightforward look at your current profile, reviews, and citations, then tell you what's realistic to fix first.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
    secondary: { label: "Back to SEO Services", href: "/services/seo/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Google Business Profile, Reviews & Citations Management | Triple O Agency",
    description: "Ongoing management of your Google Business Profile, reviews, citations, and local search reporting — from Triple O Agency.",
    path: "/services/seo/gbp-reputation/",
  },
  body,
};
