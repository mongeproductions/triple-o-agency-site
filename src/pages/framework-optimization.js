const SERVICES = [
  "Search engine optimization (SEO)",
  "Answer Engine Optimization (AEO) and AI visibility",
  "Google Ads and paid media management",
  "Conversion rate optimization (CRO)",
  "Website performance and technical improvements",
  "Analytics and reporting dashboards",
  "CRM implementation and automation",
  "Marketing attribution and tracking",
  "Email and SMS automation",
  "Lead nurturing workflows",
  "Marketing audits and performance reviews",
];

const QUESTIONS = [
  "Where is your business losing opportunities today?",
  "What process creates the most friction for customers or your team?",
  "Which marketing activities generate measurable results, and which simply consume time or budget?",
  "If you could improve one part of your customer journey by ten percent, where would it create the greatest impact?",
  "Are your decisions being guided by reliable data, or by assumptions that have never been tested?",
];

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "The Triple O Framework / Optimization",
    title: "Optimization",
    lede: "Sustainable growth is rarely the result of one big breakthrough.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Framework", href: "/framework/" },
      { label: "Optimization", href: "/framework/optimization/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
      <p>Most business owners spend a great deal of time looking for the next opportunity. The next marketing channel, the next advertising campaign, the next technology, or the next hire that will move the business forward.</p>
      <p>Those opportunities certainly exist, but after years of working with growing companies, I've found that meaningful growth usually comes from a different place.</p>
      <p>It comes from consistently improving the systems you already have.</p>
      <p>Small improvements made over time have a remarkable way of compounding. A website that converts a little better, a sales process that's a little smoother, an advertising campaign that's a little more efficient, or a customer experience that's a little more thoughtful may not seem significant on its own. Over months and years, those improvements become a meaningful competitive advantage.</p>
      <p>At Triple O Agency, we call that Optimization.</p>
      <p>Optimization isn't about chasing perfection. It's about creating a business that is always learning, adapting, and improving.</p>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Every Business Is Either Improving or Standing Still</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Markets change. Customer expectations evolve. Technology continues to advance. Your competitors are constantly making decisions that affect their position in the market.</p>
        <p>Standing still doesn't actually preserve the status quo. It slowly allows the gap between your business and the market to grow.</p>
        <p>The businesses that continue to earn trust over time aren't necessarily the ones that make the biggest changes. They're the ones that never stop making thoughtful ones.</p>
        <p>They review their numbers. They listen to customer feedback. They refine their processes. They ask better questions after every campaign, every sales conversation, and every customer interaction.</p>
        <p>Improvement becomes part of the culture instead of an occasional project.</p>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Decisions Should Be Guided by Evidence</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>One of the greatest advantages modern businesses have is access to information.</p>
        <p>Almost every customer interaction creates data that can help you make better decisions. Website analytics reveal where visitors lose interest. Advertising platforms show which messages resonate with your audience. Customer feedback highlights opportunities that may never appear in a spreadsheet.</p>
        <p>The challenge isn't collecting more data. It's knowing which information deserves your attention and which metrics simply create noise.</p>
        <p>Good optimization begins with asking the right questions. What is preventing customers from taking the next step? Where are opportunities being lost? What assumptions are we making that could be tested instead?</p>
        <p>When decisions are grounded in evidence rather than instinct alone, improvement becomes intentional instead of accidental.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Progress Compounds</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>One of my favorite principles in business is that small improvements rarely stay small.</p>
        <p>A website that converts one percent better doesn't just produce one percent more leads. Over time, that improvement affects every advertising dollar you spend. Faster page speeds improve user experience, search visibility, and paid advertising performance simultaneously. Better follow-up processes increase close rates without increasing advertising budgets.</p>
        <p>Optimization works because every improvement strengthens the next one.</p>
        <p>The goal isn't dramatic transformation overnight. It's creating systems that become stronger every month than they were the month before.</p>
        <p>That's how sustainable businesses are built.</p>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Optimization Is More Than Marketing</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Many agencies optimize campaigns. We believe businesses should optimize systems.</p>
        <p>Marketing performance is important, but it's only one piece of a much larger picture. Lead quality. Sales processes. Customer communication. Website performance. Search visibility. CRM automation. Reporting. Retention. Referral generation.</p>
        <p>Every one of these influences growth, and every one of them can be measured, refined, and improved.</p>
        <p>Optimization isn't confined to a dashboard. It's a mindset that encourages every part of the business to become a little more effective over time.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-10" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Help")}
        <h2 class="text-2xl sm:text-3xl mt-5 text-balance">How We Help Businesses Optimize</h2>
        <p class="text-text-dark/65 mt-4 leading-relaxed">No two businesses have the same opportunities for improvement, which is why we begin with understanding how your business operates before recommending solutions. Depending on your goals, our work may include:</p>
      </div>
      ${c.checklist(SERVICES, { cols: 2 })}
      <p class="text-text-dark/60 mt-8 max-w-2xl">Every recommendation is designed to create measurable improvements that continue to compound over time.</p>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-10" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions We Ask")}
        <h2 class="text-2xl sm:text-3xl mt-5 text-balance">Before recommending changes related to Optimization</h2>
      </div>
      ${c.questionsList(QUESTIONS)}
      <p class="text-text-dark/60 mt-8">The answers to those questions often reveal the highest-value opportunities for improvement.</p>
    </div>
  </section>

  ${c.principleQuote(
    "Businesses rarely transform because of a single breakthrough. They grow because they commit to improving the right things, consistently, over time. The greatest advantage is often not doing something entirely new — it's becoming a little better every day at what matters most."
  )}

  <section class="section bg-white">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "Optics", href: "/framework/optics/" },
        { label: "Omnipresence", href: "/framework/omnipresence/" },
        { label: "SEO", href: "/services/seo/" },
        { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({ secondary: { label: "Back to the Framework", href: "/framework/" } })}
  `;
}

module.exports = {
  meta: {
    title: "Optimization | The Triple O Framework | Triple O Agency",
    description: "Optimization: improving performance across every marketing effort. Sustainable growth is rarely the result of one big breakthrough — one of the three pillars of the Triple O Framework.",
    path: "/framework/optimization/",
  },
  body,
};
