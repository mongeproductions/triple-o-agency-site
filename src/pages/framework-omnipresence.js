const SERVICES = [
  "Local SEO and Google Business Profile optimization",
  "Search engine optimization (SEO)",
  "Answer Engine Optimization (AEO) and AI visibility",
  "Google Ads and paid media",
  "Social media strategy and content",
  "Video production and YouTube optimization",
  "Email marketing and customer communication",
  "Review generation and reputation management",
  "Community partnerships and local marketing initiatives",
  "Content strategy and thought leadership",
  "Public relations and brand awareness campaigns",
];

const QUESTIONS = [
  "Where do your customers begin their search for a business like yours?",
  "If someone compared three competitors today, would your business appear consistently across the channels they trust?",
  "Are you creating opportunities to be discovered before customers are ready to buy?",
  "Which channels reinforce your credibility, and which simply consume time without creating meaningful visibility?",
  "If a customer interacted with your business five different ways over six months, would every interaction tell the same story?",
];

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "The Triple O Framework / Omnipresence",
    title: "Omnipresence",
    lede: "Trust grows through familiarity.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Framework", href: "/framework/" },
      { label: "Omnipresence", href: "/framework/omnipresence/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
      <p>One of the simplest truths in business is that people are more comfortable buying from businesses they recognize.</p>
      <p>Recognition doesn't happen because a customer saw one advertisement or visited your website a single time. It develops through repeated, consistent interactions over time. Every encounter reinforces the last, gradually replacing uncertainty with familiarity.</p>
      <p>That process isn't accidental. It's the result of showing up consistently in the places your customers naturally spend their time.</p>
      <p>At Triple O Agency, we call that Omnipresence.</p>
      <p>Omnipresence isn't about being everywhere. It's about never being absent where it matters most.</p>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Customers Don't Search in Just One Place Anymore</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Not long ago, a customer's journey usually began with a Google search.</p>
        <p>Today, that journey is much more dynamic. Someone might ask ChatGPT for recommendations before they ever open a search engine. Another person may discover your business through a neighbor's Facebook post, a YouTube video, an online review, or a local community group. Some customers still begin with Google Maps, while others rely on referrals or social media.</p>
        <p>The path has changed, but the underlying principle hasn't.</p>
        <p>Customers develop confidence when they encounter the same business repeatedly across multiple trusted sources. Every credible appearance strengthens the impression that your business is established, active, and worthy of consideration.</p>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Familiarity Creates Confidence</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Psychologists have long observed that people naturally become more comfortable with things they encounter repeatedly. The first introduction creates awareness. Repeated, positive experiences create familiarity. Familiarity makes decisions feel less risky.</p>
        <p>Business works much the same way.</p>
        <p>A homeowner may see one of your service vehicles in the neighborhood, read several positive reviews a few weeks later, come across one of your educational videos while researching a problem, and eventually find your website when they're ready to request an estimate.</p>
        <p>No single interaction closed the sale. Together, they created confidence.</p>
        <p>That's why consistent visibility matters so much. Customers often feel like they already know your business before they've ever spoken with you.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Showing Up With Purpose</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Being visible doesn't mean trying to participate in every platform, trend, or marketing channel. In fact, doing too much often creates inconsistency.</p>
        <p>The goal isn't to be everywhere. The goal is to be consistently present in the places your customers naturally turn when they're looking for information, comparing businesses, or asking for recommendations.</p>
        <p>For one company, that may mean Google Search, Maps, and online reviews. For another, it may include YouTube, LinkedIn, trade publications, podcasts, or community events. The right channels depend on your audience. The principle remains the same.</p>
        <p>Show up consistently where your customers are already looking.</p>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Omnipresence Extends Beyond Digital Marketing</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Some of the strongest forms of visibility have nothing to do with advertising.</p>
        <p>They come from community involvement, word-of-mouth referrals, networking, partnerships, sponsorships, educational content, and the reputation you've built over years of serving customers well.</p>
        <p>Those interactions often create the most meaningful kind of presence because they occur within trusted relationships. Marketing can amplify that reputation, but it cannot replace it.</p>
        <p>We believe the strongest brands combine digital visibility with genuine involvement in the communities and industries they serve. When those two work together, recognition becomes much more than awareness. It becomes credibility.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-10" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Help")}
        <h2 class="text-2xl sm:text-3xl mt-5 text-balance">How We Help Businesses Build Omnipresence</h2>
        <p class="text-text-dark/65 mt-4 leading-relaxed">Every business deserves to be found where its customers are looking. Our role is to identify the channels that matter most, create consistency across those channels, and build a presence that reinforces trust over time. Depending on your goals, that may include:</p>
      </div>
      ${c.checklist(SERVICES, { cols: 2 })}
      <p class="text-text-dark/60 mt-8 max-w-2xl">Rather than trying to be everywhere, we focus on helping you become consistently visible in the places that matter most to your customers.</p>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-10" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions We Ask")}
        <h2 class="text-2xl sm:text-3xl mt-5 text-balance">Before recommending strategies related to Omnipresence</h2>
      </div>
      ${c.questionsList(QUESTIONS)}
      <p class="text-text-dark/60 mt-8">Those conversations help us focus on building meaningful visibility rather than simply increasing activity.</p>
    </div>
  </section>

  ${c.principleQuote(
    "Businesses become memorable by showing up consistently wherever their customers are looking. Familiarity creates confidence, confidence strengthens trust, and trust makes your business the natural choice when the time to buy finally arrives."
  )}

  <section class="section bg-white">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "Optics", href: "/framework/optics/" },
        { label: "Optimization", href: "/framework/optimization/" },
        { label: "SEO", href: "/services/seo/" },
        { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({ secondary: { label: "Back to the Framework", href: "/framework/" } })}
  `;
}

module.exports = {
  meta: {
    title: "Omnipresence | The Triple O Framework | Triple O Agency",
    description: "Omnipresence: showing up consistently where your customers already are. Trust grows through familiarity — one of the three pillars of the Triple O Framework.",
    path: "/framework/omnipresence/",
  },
  body,
};
