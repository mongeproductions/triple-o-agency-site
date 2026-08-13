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

function pathCard({ tag, title, description, href, label, dark = false }) {
  return `<div class="card ${dark ? "bg-diagonal-green text-cream border-l-4 border-leather-light" : "bg-cream"} flex flex-col h-full" data-reveal data-reveal-y="24">
    <span class="font-heading text-xs font-semibold uppercase tracking-eyebrow ${dark ? "text-leather-light" : "text-leather"} mb-4">${tag}</span>
    <h3 class="text-xl mb-3 ${dark ? "text-cream" : ""}">${title}</h3>
    <p class="${dark ? "text-cream/75" : "text-text-dark/65"} leading-relaxed flex-1">${description}</p>
    <a href="${href}" class="btn-primary w-full mt-8">${label}</a>
  </div>`;
}

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Paid Ads",
    title: "Ad spend that has to earn its keep.",
    lede: "Campaigns live in days, budget moves itself toward what's converting, and every dollar that isn't earning its keep gets found and reassigned — automatically, not at the end of the month.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("The Problem")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">Most ad accounts are leaking money nobody's watching.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>A budget gets set, campaigns launch, and then they just run. Nobody's shifting spend off the keyword that stopped converting three weeks ago, or noticing the ad set quietly burning through the daily budget on clicks that never turn into customers.</p>
        <p>Triple O runs paid media the way it should be run: watched daily, adjusted constantly, and reported on in terms of revenue and cost per result — not clicks and impressions dressed up to look like progress.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("The Outcomes")}
        <h2 class="text-3xl sm:text-4xl text-balance">What actually changes when we take this over.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${outcomeCard("Campaigns Live in Days", "New offers, products, or promotions don't sit in a queue waiting on a media buyer. Structure, copy, and targeting come together fast enough to actually catch the moment.")}
        ${outcomeCard("Wasted Spend Gets Found and Cut", "Underperforming keywords, placements, and audiences are identified and pulled continuously — not discovered three months later in a quarterly review.")}
        ${outcomeCard("Budget Moves Toward What Converts", "Spend shifts toward the campaigns and audiences actually producing results, and away from the ones just producing activity — daily, not whenever someone gets around to it.")}
        ${outcomeCard("Lost Visitors Get a Second Chance", "Retargeting brings back the people who almost converted and didn't, turning a bounce into a second opportunity instead of a sunk cost.")}
        ${outcomeCard("Reporting You Can Bring to Leadership", "Cost, conversions, and return are laid out in terms that matter to the business — not a wall of impressions and click-through rates nobody upstairs actually cares about.")}
        ${outcomeCard("Growth Without Proportional Effort", "Once a campaign proves itself, it gets scaled — deliberately and immediately — instead of sitting at the same budget for six months because nobody revisited it.")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Work")}
        <h2 class="text-3xl sm:text-4xl text-balance">Launch it. Reallocate. Scale what works.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Launch", "Campaigns are structured, written, and launched around your actual offer — fast enough to matter, not fast enough to be sloppy.")}
        ${processStep(2, "Reallocate", "Spend is monitored daily and shifted away from what's burning budget and toward what's actually converting.")}
        ${processStep(3, "Scale", "Once a campaign proves itself, budget follows it — so growth compounds instead of plateauing at the original plan.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mx-auto text-center mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("Built for How You Sell", { light: false })}
        <h2 class="text-3xl sm:text-4xl text-balance mt-5">B2C and B2B don't buy the same way. Your ads shouldn't run the same way either.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-grid-reveal>
        ${pathCard({
          tag: "For Consumer Brands",
          title: "Paid Ads for B2C",
          description: "High-volume, fast-decision buying. Focused on more purchases at a lower cost, recovering cart abandoners, and scaling cleanly through peak seasons.",
          href: "/services/paid-ads/b2c/",
          label: "See B2C Outcomes",
          dark: false,
        })}
        ${pathCard({
          tag: "For B2B & Professional Services",
          title: "Paid Ads for B2B",
          description: "Longer consideration cycles, fewer and higher-value conversions. Focused on cost per qualified lead, nurture, and pipeline your sales team can actually use.",
          href: "/services/paid-ads/b2b/",
          label: "See B2B Outcomes",
          dark: true,
        })}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions")}
        <h2 class="text-3xl sm:text-4xl text-balance">What clients ask before signing on.</h2>
      </div>
      <div data-reveal-group="paidads-faq">
        ${faqItem("How fast will I see results?", "Campaigns typically launch within days. Meaningful shifts in cost per result usually show up within the first few weeks as spend gets reallocated toward what's converting — we'll set real expectations after reviewing your account or market.")}
        ${faqItem("Do you work with smaller ad budgets?", "Yes. The size of the account changes the pace of testing, not whether budget gets watched and reallocated daily — that discipline applies at any spend level.")}
        ${faqItem("How is this different from a media buyer?", "A media buyer checks in on a schedule. Our approach monitors and reallocates spend continuously, so underperforming budget gets caught the day it happens instead of at the next review meeting.")}
        ${faqItem("What platforms do you run ads on?", "Google Ads is our core focus, with Meta and other channels layered in where they make sense for your audience and goals — we'll recommend a mix after understanding where your buyers actually are.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "B2C Lead Generation", href: "/services/paid-ads/b2c/" },
        { label: "B2B Lead Generation", href: "/services/paid-ads/b2b/" },
        { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Get Started",
    title: "Let's find out what your ad spend is actually doing.",
    body: "Book a 15-minute call and we'll audit your current campaigns — free.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Paid Ads Management | Triple O Agency",
    description: "Paid media and lead generation services from Triple O Agency, spanning B2C and B2B campaigns across Google, Meta, and LinkedIn.",
    path: "/services/paid-ads/",
  },
  body,
};
