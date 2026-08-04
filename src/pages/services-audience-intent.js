function whoCard(title, description) {
  return `<div class="card bg-white flex flex-col h-full">
    <h3 class="text-xl mb-3">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed">${description}</p>
  </div>`;
}

function processStep(c, num, title, description) {
  return `<div class="card bg-cream flex flex-col h-full">
    <span class="font-heading text-leather-light/70 text-sm mb-4">0${num}</span>
    <h3 class="text-lg mb-3">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed flex-1">${description}</p>
  </div>`;
}

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Data & Intent Audiences",
    title: "Your CPA didn't go up because your offer got worse.",
    lede: "You're not losing to competitors. You're losing to the learning phase.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16">
      <article class="lg:col-span-8 space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        ${c.eyebrow("Why")}
        <p>Your creative hasn't changed. Your offer hasn't changed. Your funnel hasn't changed. But your cost per acquisition keeps climbing anyway — and it's not because your business got worse at converting people. It's because the platform's read on who your customer is keeps shifting underneath you, and every shift costs money before it ever shows up as a result.</p>
        <p>Every time you launch a new campaign, refresh an audience, or a platform quietly changes how its algorithm works, you're re-entering a learning phase — a stretch where Meta or Google is essentially guessing who to show your ad to while it relearns your customer from scratch. That guessing isn't free. It's billed straight to your ad account, one wasted impression at a time, and there's no line item on your invoice that tells you it happened.</p>
        <p>The frustrating part isn't just the cost. It's that you have no visibility into why it's happening and no way to stop it. Your targeting quality is entirely dependent on decisions made inside a system you can't see, can't audit, and didn't agree to. When the algorithm updates, you don't get a vote — you get a bill.</p>
        <p>That's the problem an independent intent signal solves. Instead of waiting for a platform to relearn who your customer is every time something changes on their end, you already know — because that signal was never tied to their algorithm in the first place.</p>
      </article>
      <aside class="lg:col-span-4" data-reveal data-reveal-y="24">
        <div class="card bg-cream sticky top-32">
          <p class="eyebrow mb-4">In Short</p>
          <p class="text-text-dark/70 leading-relaxed">Rising CPAs usually aren't a sign your offer is failing — they're the cost of platforms constantly re-learning who to show it to. An independent signal breaks that cycle.</p>
          <a href="/services/audience-intent/cost-benefit-calculator/" class="btn-primary w-full mt-8">Calculate Your Revenue</a>
        </div>
      </aside>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("What")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">An intent signal that doesn't live inside the algorithm.</h2>
      <p class="font-body italic text-text-dark/60 text-lg mb-8" data-reveal data-reveal-y="16">Know who's ready to buy — without waiting for a platform to tell you.</p>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Audience resolution is how fragmented, anonymous behavior — a search here, a competitor site visit there, a product page someone lingered on — gets turned into one real, actionable profile. Instead of a platform guessing at "people who might be interested," you get a specific read on who is actively in-market right now, built from what they actually did, not what a category checkbox says about them.</p>
        <p>This isn't another targeting option inside Meta or Google. It's a layer that sits underneath both — continuously watching real buying behavior across a wide network of sites and search activity, independent of whichever platform you're running ads on that week. When the algorithm changes, this signal doesn't reset, because it was never built on top of the algorithm in the first place.</p>
        <p>The result is simple: instead of "people interested in [category]," you're targeting people who searched for exactly what you sell in the last few days and spent real time comparing it against alternatives. Same ad budget. A completely different starting point.</p>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("Who It's For")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Built for B2B and B2C alike.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-grid-reveal>
        ${whoCard("B2B", "Firmographic and verified decision-maker data that supports account-based marketing and real-time sales alerts on high-value accounts.")}
        ${whoCard("B2C", "Verified consumer profiles with behavioral and purchase-intent signal, built for direct-to-consumer targeting.")}
      </div>
    </div>
  </section>

  <section class="relative bg-diagonal-green text-cream section overflow-hidden">
    <div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.06", size: 480 })}</div>
    <div class="container-page relative z-10 text-center max-w-2xl mx-auto">
      ${c.eyebrow("When", { light: true })}
      <p class="font-heading font-bold text-3xl sm:text-4xl mt-5 mb-5 text-balance" data-reveal data-reveal-y="20">"Searched this morning.<br />Not checked a box two years ago."</p>
      <p class="text-cream/65 leading-relaxed" data-reveal data-reveal-y="16">Real-time, continuously refreshed signal — not stale interest categories someone checked once, years ago.</p>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("Where")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">From raw signal to your CRM.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-grid-reveal>
        ${whoCard("Sourcing", "Bid-stream data, search activity, a wide publisher network, and data partnerships — continuously monitored, not sampled once.")}
        ${whoCard("Activation", "Pushed directly into Meta, Google, your CRM, outbound tools, or direct mail — wherever your team already works.")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How It Works")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Six steps from raw signal to a verified contact.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(c, 1, "Source Aggregation", "Signal pulled from bid-stream data, transaction history, search activity, and data partnerships into one pipeline.")}
        ${processStep(c, 2, "Context Analysis", "Each signal is checked against the industry or topic it claims to be about.")}
        ${processStep(c, 3, "Activity Monitoring", "Engagement is tracked over time, not judged on a single touch.")}
        ${processStep(c, 4, "Intent Verification", "Confirms the person is actively searching for a solution now, not just browsing.")}
        ${processStep(c, 5, "Profile Matching", "Business and personal data points are connected into one profile.")}
        ${processStep(c, 6, "Real-Time Validation", "Contact details are checked and re-verified before delivery.")}
      </div>
    </div>
  </section>

  <section class="section bg-cream">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("Why Triple O")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Set up by an agency that also runs your campaigns.</h2>
        <p class="text-text-dark/65 mt-4 leading-relaxed">Most identification and intent tools hand you a dashboard and leave. We install it, tune it around your ideal customer, and fold the data straight into the outreach and media work we're already doing for you.</p>
      </div>
      <div class="overflow-x-auto" data-reveal data-reveal-y="20">
        <table class="w-full text-left border-collapse min-w-[520px]">
          <thead>
            <tr>
              <th class="font-heading font-semibold uppercase text-leather tracking-eyebrow text-xs py-4 pr-6 border-b border-deep-green/15">Consideration</th>
              <th class="font-heading font-semibold uppercase text-leather tracking-eyebrow text-xs py-4 pr-6 border-b border-deep-green/15">Typical Vendor</th>
              <th class="font-heading font-semibold uppercase text-leather tracking-eyebrow text-xs py-4 border-b border-deep-green/15">Triple O Agency</th>
            </tr>
          </thead>
          <tbody class="text-text-dark/75">
            <tr><td class="py-4 pr-6 border-b border-deep-green/10">Setup</td><td class="py-4 pr-6 border-b border-deep-green/10 text-text-dark/50">Self-serve, self-taught</td><td class="py-4 border-b border-deep-green/10 font-semibold text-deep-green">Done with you</td></tr>
            <tr><td class="py-4 pr-6 border-b border-deep-green/10">Alert tuning</td><td class="py-4 pr-6 border-b border-deep-green/10 text-text-dark/50">Default rules</td><td class="py-4 border-b border-deep-green/10 font-semibold text-deep-green">Built around your ICP</td></tr>
            <tr><td class="py-4 pr-6 border-b border-deep-green/10">Data use</td><td class="py-4 pr-6 border-b border-deep-green/10 text-text-dark/50">Dashboard only</td><td class="py-4 border-b border-deep-green/10 font-semibold text-deep-green">Fed into live campaigns</td></tr>
            <tr><td class="py-4 pr-6">Ongoing support</td><td class="py-4 pr-6 text-text-dark/50">Ticket queue</td><td class="py-4 font-semibold text-deep-green">Your account team</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "Visitor Identification", href: "/services/audience-intent/visitor-identification/" },
        { label: "SEO", href: "/services/seo/" },
        { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Ready When You Are",
    title: "Book a 15-minute call.",
    body: "We'll show you what audiences we can build for your business.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
    secondary: { label: "See Visitor Identification", href: "/services/audience-intent/visitor-identification/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Data & Intent Audiences | Triple O Agency",
    description: "An independent intent signal that doesn't live inside the ad platform's algorithm — know who's ready to buy without waiting for a learning phase to catch up.",
    path: "/services/audience-intent/",
  },
  body,
};
