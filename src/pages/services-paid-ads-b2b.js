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
    eyebrow: "Services / Paid Ads / B2B",
    title: "Fewer, better leads. Lower cost to get them.",
    lede: "Built for long consideration cycles and high-stakes decisions. Budget is concentrated on the accounts and roles most likely to become real pipeline — not on volume for volume's sake.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
      { label: "B2B", href: "/services/paid-ads/b2b/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("The Approach")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">Nobody buys enterprise software on the first click.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>B2B decisions take weeks or months, involve more than one person, and rarely convert on the first visit — which makes a campaign optimized purely for cheap clicks actively counterproductive. Volume without qualification just hands your sales team a longer list to sort through.</p>
        <p>We run B2B paid media around the metric that actually matters: cost per qualified lead, not cost per click. Budget concentrates on the account profiles and roles most likely to become real opportunities, and nurture keeps you visible through a decision that isn't going to happen today.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("The Outcomes")}
        <h2 class="text-3xl sm:text-4xl text-balance">What actually changes for a B2B pipeline.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${outcomeCard("Lower Cost Per Qualified Lead", "Spend moves away from cheap-but-useless clicks and toward the sources actually producing leads your sales team follows up on.")}
        ${outcomeCard("Nobody Falls Through the Cracks", "Nurture and retargeting keep you visible to prospects still in the decision, so a long sales cycle doesn't mean you're forgotten by month two.")}
        ${outcomeCard("Reporting Leadership Actually Reads", "Performance shows up in terms of qualified leads, pipeline value, and cost of acquisition — the numbers your leadership team is already tracking, not a click-through rate.")}
        ${outcomeCard("Budget Concentrated on Real Buyers", "Spend targets the company profiles and job titles most likely to become genuine opportunities, instead of broad, consumer-style reach.")}
        ${outcomeCard("Faster Time to First Lead", "New offers, gated content, and campaigns don't sit in a queue — they're structured and live fast enough to start filling pipeline the same week.")}
        ${outcomeCard("Marketing and Sales, Finally Aligned", "Both teams see the same picture of what's producing leads worth a call, closing the usual gap between \"marketing says it's working\" and \"sales says it isn't.\"")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Work")}
        <h2 class="text-3xl sm:text-4xl text-balance">Launch. Reallocate. Compound the pipeline.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Launch", "Campaigns are structured around the account profiles and roles that actually make or influence the buying decision.")}
        ${processStep(2, "Reallocate", "Spend shifts toward sources producing leads sales actually wants, away from ones producing volume nobody follows up on.")}
        ${processStep(3, "Scale", "What's producing real opportunities gets more budget and more reach, so a strong quarter builds into a strong year.")}
      </div>
    </div>
  </section>

  <section class="section bg-cream">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div class="lg:col-span-8">
        ${c.eyebrow("Sell Directly to Consumers?")}
        <h2 class="text-3xl sm:text-4xl mb-5 text-balance" data-reveal data-reveal-y="20">B2C buying moves at a completely different speed.</h2>
        <p class="text-text-dark/65 leading-relaxed" data-reveal data-reveal-y="16">High volume, fast decisions, and a full product catalog to manage. If your customer is buying for themselves, not for a company, our B2C approach is built around purchase volume and cost per sale instead of lead quality.</p>
      </div>
      <div class="lg:col-span-4">
        <a href="/services/paid-ads/b2c/" class="btn-primary w-full">See B2C Outcomes</a>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions")}
        <h2 class="text-3xl sm:text-4xl text-balance">What B2B teams ask before signing on.</h2>
      </div>
      <div data-reveal-group="b2b-faq">
        ${faqItem("How do you actually measure lead quality?", "We define what a qualified lead looks like with you upfront — company size, role, intent signals — and optimize toward that definition, not just form fills.")}
        ${faqItem("Can this connect to our CRM or lead scoring?", "Yes. Connecting to your CRM lets us optimize based on what happens after the lead comes in — which sources actually turn into pipeline — instead of stopping at the form submission.")}
        ${faqItem("Our sales cycle is 6+ months. Does that change anything?", "It changes the timeline for measuring ROI, not the approach. Nurture and retargeting are built specifically to keep you visible across a long cycle, and reporting reflects pipeline stages, not just immediate conversions.")}
        ${faqItem("Do you support account-based marketing?", "Yes. Targeting can be built around specific named accounts and buying committees, not just broad job-title or industry criteria.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "B2C Lead Generation", href: "/services/paid-ads/b2c/" },
        { label: "Fractional CMO / Consulting", href: "/services/consulting/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Get Started",
    title: "Let's see what your pipeline could look like.",
    body: "Book a 15-minute call and we'll audit your current campaigns — free.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "B2B Lead Generation | Triple O Agency",
    description: "B2B lead generation and paid media services from Triple O Agency, built around considered sales cycles, qualified pipeline, and cost per qualified lead.",
    path: "/services/paid-ads/b2b/",
  },
  body,
};
