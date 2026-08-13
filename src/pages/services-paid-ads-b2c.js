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
    eyebrow: "Services / Paid Ads / B2C",
    title: "More purchases. Lower cost per purchase.",
    lede: "Built for how consumers actually buy — fast decisions, high volume, and a full catalog. Budget finds what's selling and follows it, without someone manually checking every SKU.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
      { label: "B2C", href: "/services/paid-ads/b2c/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("The Approach")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">Retail buyers decide fast. Your ads need to keep up.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Consumer purchase decisions happen in minutes, not months — which means a slow-moving ad account is a leaking one. The products or promotions converting today aren't necessarily the ones that were converting last week, and nobody has time to check bid strategy on three hundred SKUs by hand.</p>
        <p>We run B2C paid media the way a retail floor gets managed: attention goes where the traffic is actually buying, restocked and re-promoted the moment something's working, and pulled back the moment it's not.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("The Outcomes")}
        <h2 class="text-3xl sm:text-4xl text-balance">What actually changes for a consumer brand.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${outcomeCard("Lower Cost Per Purchase", "Spend continuously shifts toward the products and audiences actually converting, so the average cost to win a sale trends down instead of drifting up.")}
        ${outcomeCard("Recovered Revenue from Cart Abandoners", "Shoppers who added to cart and left don't just disappear — retargeting brings a real share of them back to finish the purchase.")}
        ${outcomeCard("Peak Season Scaling Without the Scramble", "Spend flexes up cleanly for sales, holidays, and launch moments — and back down after — instead of a manual scramble every November.")}
        ${outcomeCard("Every Product Gets a Fair Shot", "Attention isn't limited to the handful of bestsellers someone remembers to check — the whole catalog gets watched and adjusted.")}
        ${outcomeCard("Return You Can Actually Trust", "Reporting ties back to real purchases and revenue — not clicks or impressions dressed up to look like a good week.")}
        ${outcomeCard("Faster Launch for New Drops and Promotions", "When there's a moment to capture — a new product, a flash sale, a seasonal push — campaigns are live fast enough to actually catch it.")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Work")}
        <h2 class="text-3xl sm:text-4xl text-balance">Launch. Follow the buyer. Push the winners.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Launch", "Campaigns launch around your actual catalog and calendar — fast enough to matter for a sale or a drop.")}
        ${processStep(2, "Reallocate", "Budget shifts daily toward the products and audiences converting right now, not the ones that converted last month.")}
        ${processStep(3, "Scale", "What's working gets more budget immediately, so a good week turns into a good quarter instead of a fluke.")}
      </div>
    </div>
  </section>

  <section class="section bg-cream">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div class="lg:col-span-8">
        ${c.eyebrow("Sell to Businesses Instead?")}
        <h2 class="text-3xl sm:text-4xl mb-5 text-balance" data-reveal data-reveal-y="20">B2B buying looks nothing like this.</h2>
        <p class="text-text-dark/65 leading-relaxed" data-reveal data-reveal-y="16">Longer sales cycles, fewer conversions, and a very different definition of a win. If your customer is a company, not a consumer, our B2B approach is built around lead quality and pipeline instead of purchase volume.</p>
      </div>
      <div class="lg:col-span-4">
        <a href="/services/paid-ads/b2b/" class="btn-primary w-full">See B2B Outcomes</a>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions")}
        <h2 class="text-3xl sm:text-4xl text-balance">What consumer brands ask before signing on.</h2>
      </div>
      <div data-reveal-group="b2c-faq">
        ${faqItem("Do you work with ecommerce platforms like Shopify?", "Yes. We connect directly to your store's product feed so campaigns stay in sync with real inventory, pricing, and availability without manual updates.")}
        ${faqItem("How do you handle holiday and seasonal spend?", "Budgets are planned around your seasonal calendar in advance, then adjusted daily during the actual event based on how traffic is converting in real time.")}
        ${faqItem("Is there a minimum budget to work with you?", "There's a practical floor where paid media stops being efficient to manage — we'll tell you plainly if your current budget is below it rather than take on an account we can't move the needle for.")}
        ${faqItem("Does retargeting actually work, or is it just noise?", "It works because it's targeted — people who viewed a specific product or abandoned a specific cart see ads relevant to that, not a generic brand message. That's what separates a recovered sale from an ignored ad.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "B2B Lead Generation", href: "/services/paid-ads/b2b/" },
        { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Get Started",
    title: "Let's see what your catalog could be earning.",
    body: "Book a 15-minute call and we'll audit your current campaigns — free.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "B2C Lead Generation | Triple O Agency",
    description: "B2C lead generation and paid media services from Triple O Agency, built around real consumer purchase behavior and cost per purchase.",
    path: "/services/paid-ads/b2c/",
  },
  body,
};
