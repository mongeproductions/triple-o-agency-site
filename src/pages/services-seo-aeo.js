function outcomeCard(title, description, link) {
  return `<div class="card bg-white flex flex-col h-full" data-reveal data-reveal-y="24">
    <h3 class="text-lg mb-3">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed flex-1">${description}</p>
    ${link ? `<a href="${link.href}" class="inline-flex items-center gap-2 mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-leather hover:gap-3 transition-all duration-200">${link.label} ${c_iconArrow()}</a>` : ""}
  </div>`;
}
function c_iconArrow() {
  return `<svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10h11M10.5 4.5 16 10l-5.5 5.5"/></svg>`;
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
    eyebrow: "Services / SEO / AEO",
    title: "Be the answer, not just the link.",
    lede: "Answer Engine Optimization gets your brand cited inside ChatGPT, Gemini, Perplexity, and Google's AI Overviews — tracked, structured, and corrected the same way we handle traditional rankings.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "SEO", href: "/services/seo/" },
      { label: "AEO", href: "/services/seo/aeo/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("A Different Game")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">A different scoreboard, not just a new tactic.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Ranking #1 on Google doesn't guarantee anything once the answer comes from an AI model instead of a results page. Large language models decide what to cite, what to summarize, and what to leave out entirely — and most brands have zero visibility into where they stand.</p>
        <p>Triple O's AEO service treats AI visibility as its own discipline: we structure your content to be citation-ready, monitor how AI platforms actually describe your brand, and fix it the moment something's wrong — inaccurate, outdated, or missing altogether.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("The Distinction")}
        <h2 class="text-3xl sm:text-4xl text-balance">SEO earns a position. AEO earns a mention.</h2>
      </div>
      <div class="overflow-x-auto" data-reveal data-reveal-y="20">
        <table class="w-full text-left border-collapse min-w-[520px]">
          <thead>
            <tr>
              <th class="font-heading font-semibold uppercase text-leather tracking-eyebrow text-xs py-4 pr-6 border-b border-deep-green/15">Consideration</th>
              <th class="font-heading font-semibold uppercase text-leather tracking-eyebrow text-xs py-4 pr-6 border-b border-deep-green/15">Traditional SEO</th>
              <th class="font-heading font-semibold uppercase text-leather tracking-eyebrow text-xs py-4 border-b border-deep-green/15">Answer Engine Optimization</th>
            </tr>
          </thead>
          <tbody class="text-text-dark/75">
            <tr><td class="py-4 pr-6 border-b border-deep-green/10">Success looks like</td><td class="py-4 pr-6 border-b border-deep-green/10 text-text-dark/50">Ranking position on a results page</td><td class="py-4 border-b border-deep-green/10 font-semibold text-deep-green">Being the source an AI answer cites</td></tr>
            <tr><td class="py-4 pr-6 border-b border-deep-green/10">Optimizes for</td><td class="py-4 pr-6 border-b border-deep-green/10 text-text-dark/50">Keywords and search intent</td><td class="py-4 border-b border-deep-green/10 font-semibold text-deep-green">Extractability and semantic clarity</td></tr>
            <tr><td class="py-4 pr-6 border-b border-deep-green/10">Measured by</td><td class="py-4 pr-6 border-b border-deep-green/10 text-text-dark/50">Clicks, impressions, and rank</td><td class="py-4 border-b border-deep-green/10 font-semibold text-deep-green">Citation share and mention accuracy</td></tr>
            <tr><td class="py-4 pr-6">Your position</td><td class="py-4 pr-6 text-text-dark/50">One result among ten blue links</td><td class="py-4 font-semibold text-deep-green">One of very few sources quoted directly</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("What's Included")}
        <h2 class="text-3xl sm:text-4xl text-balance">Everything it takes to earn the citation.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${outcomeCard("AI Visibility Tracking", "We monitor where and how often your brand appears across ChatGPT, Gemini, Perplexity, and Google's AI Overviews — an ongoing read on your standing, not a one-time snapshot.")}
        ${outcomeCard("Answer-Ready Content Structuring", "We rebuild key pages around the way models actually extract information — clear Q&A framing, direct answers up top, and semantic structure that's easy to quote and hard to misread.")}
        ${outcomeCard("Brand Accuracy Monitoring", "AI models get things wrong. We watch for outdated pricing, misattributed claims, or outright hallucinations about your brand, and get them corrected at the source before they spread.")}
        ${outcomeCard("Competitor AI Benchmarking", "See exactly how often you're cited versus the competitors you're actually losing deals to — and which questions they're winning that you aren't showing up for at all.")}
        ${outcomeCard("Structured Data for Machine Readers", "Schema markup implemented across your site so AI crawlers can parse who you are, what you offer, and why you're a credible source.")}
        ${outcomeCard("One Dashboard, Both Scoreboards", "AI citation data lives alongside your traditional SEO reporting, so you're never juggling two vendors or two logins to understand your full search presence.", { label: "See the full SEO service", href: "/services/seo/" })}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Work")}
        <h2 class="text-3xl sm:text-4xl text-balance">Structure it. Monitor it. Refine it.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Structure", "We rebuild your highest-value pages and schema so AI models can parse, quote, and correctly attribute your content.")}
        ${processStep(2, "Monitor", "Ongoing tracking across major LLMs and AI search surfaces shows exactly where you're cited, missing, or misrepresented.")}
        ${processStep(3, "Refine", "We fix inaccuracies at the source and push into new questions and topics where you should be the cited answer but aren't yet.")}
      </div>
    </div>
  </section>

  <section class="relative bg-diagonal-green text-cream section overflow-hidden">
    <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.05", size: 560 })}</div>
    <div class="container-page relative z-10 text-center">
      ${c.eyebrow("Where We Track You", { light: true })}
      <h2 class="text-3xl sm:text-4xl text-balance max-w-2xl mx-auto mb-10" data-reveal data-reveal-y="20">The surfaces your customers are actually asking.</h2>
      <div class="flex flex-wrap justify-center gap-3" data-grid-reveal>
        ${["ChatGPT", "Google AI Overviews", "Gemini", "Perplexity", "Copilot"]
          .map((chip) => `<span class="inline-block border border-cream/25 px-6 py-3 text-sm font-heading font-semibold text-cream rounded-sm">${chip}</span>`)
          .join("")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions")}
        <h2 class="text-3xl sm:text-4xl text-balance">What clients ask before signing on.</h2>
      </div>
      <div data-reveal-group="aeo-faq">
        ${faqItem("What exactly is Answer Engine Optimization?", "AEO is the practice of optimizing your content and site so AI systems — like ChatGPT, Gemini, and Perplexity — cite you directly when someone asks a question in your space. It's the AI-era counterpart to ranking on a search results page.")}
        ${faqItem("How is success measured if there's no ranking position?", "We track citation frequency and share of voice across the platforms that matter to your business — how often you're mentioned, how accurately, and how that compares to competitors over time.")}
        ${faqItem("Do I need to already be working with Triple O on SEO?", "No. AEO is available as a standalone engagement. That said, AI models still lean on traditional web signals, so clients running both services together tend to see faster, more durable results.")}
        ${faqItem("What happens if an AI platform says something wrong about my brand?", "We flag it as part of ongoing monitoring and work to correct it at the source — updating structured data, publishing clarifying content, and tracking whether the correction actually took.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "SEO", href: "/services/seo/" },
        { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Get Started",
    title: "Let's find out where AI is already talking about you.",
    body: "Book a 15-minute call and we'll run a free AI visibility snapshot for your brand.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
    secondary: { label: "See the full SEO service", href: "/services/seo/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "AEO — Answer Engine Optimization | Triple O Agency",
    description: "Answer Engine Optimization from Triple O Agency — get your brand cited inside ChatGPT, Gemini, Perplexity, and Google's AI Overviews.",
    path: "/services/seo/aeo/",
  },
  body,
};
