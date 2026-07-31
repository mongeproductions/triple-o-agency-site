function pillarSection({ title, tagline, paragraphs, href }) {
  return `<div data-reveal data-reveal-y="20">
    <h3 class="text-2xl sm:text-3xl mb-2">${title}</h3>
    <p class="font-body italic text-leather text-lg mb-5">${tagline}</p>
    <div class="space-y-5 text-text-dark/75 leading-relaxed">
      ${paragraphs.map((p) => `<p>${p}</p>`).join("")}
    </div>
    <a href="${href}" class="inline-flex items-center gap-2 mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-deep-green hover:gap-3 hover:text-leather transition-all duration-200">Learn more about this principle →</a>
  </div>`;
}

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Our Philosophy",
    title: "The Triple O Philosophy",
    lede: "Marketing evolves. Principles endure.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Our Philosophy", href: "/about/our-philosophy/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
      <p>The marketing industry has never stood still, and it never will.</p>
      <p>Every generation has experienced its own wave of innovation. Newspapers gave way to radio, radio evolved into television, television was transformed by the internet, and before long we were navigating search engines, social media, smartphones, automation, and now artificial intelligence. Every few years, we're told that everything has changed — and in many ways, that's true.</p>
      <p>The tools evolve. Consumer behavior shifts. New opportunities emerge while others fade away. As marketers, it's our responsibility to understand those changes and help businesses navigate them with confidence.</p>
      <p>What doesn't change is human nature.</p>
      <p>People still buy from businesses they trust. They still remember exceptional experiences, recommend companies that keep their promises, and gravitate toward brands that make them feel understood. Technology changes how we communicate, but it has never changed why people choose one business over another.</p>
      <p>That's the foundation of everything we believe at Triple O Agency.</p>
      <p>We embrace innovation because it's valuable. We embrace principles because they're timeless.</p>
    </div>
  </section>

  <section class="relative bg-diagonal-green text-cream section overflow-hidden">
    <div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.06", size: 520 })}</div>
    <div class="container-page relative z-10 max-w-3xl">
      <p class="eyebrow-light mb-5" data-reveal data-reveal-y="12">The Foundation</p>
      <h2 class="text-3xl sm:text-4xl mb-6 text-balance" data-reveal data-reveal-y="20">Everything Begins with Trust</h2>
      <div class="space-y-6 text-cream/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>When business owners think about marketing, the conversation usually revolves around leads, traffic, rankings, conversion rates, and return on investment. Those metrics matter, but they're all outcomes of something much more fundamental.</p>
        <p class="font-heading font-semibold text-cream text-xl">Trust.</p>
        <p>Customers don't choose your business simply because your website looks modern or because you rank first on Google. Those things create opportunity, but they aren't the reason someone decides to work with you. People choose businesses that make them feel confident. They choose businesses that appear credible, communicate clearly, and consistently deliver on their promises.</p>
        <p>Marketing doesn't create trust. It reveals it. It strengthens it. It communicates it.</p>
      </div>
      <p class="font-body italic text-2xl sm:text-3xl text-balance mt-8" data-reveal data-reveal-y="20">"Will this help build trust?"</p>
      <p class="text-cream/60 mt-5" data-reveal data-reveal-y="16">That's the question that begins every recommendation we make. If the answer is no, it's probably a distraction.</p>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
      ${c.eyebrow("The Triple O Framework")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-2 text-balance">Where it came from</h2>
      <p>Over the last sixteen years, I've had the opportunity to work alongside businesses in a wide variety of industries, from small local companies to nationally recognized brands. Every business was different, but over time one pattern became impossible to ignore.</p>
      <p>The companies that experienced sustainable growth weren't always the ones with the biggest budgets or the flashiest marketing. They were the ones that consistently earned trust.</p>
      <p>As I reflected on those experiences, I realized trust is rarely built through one great advertisement or one successful campaign. It's earned through hundreds of interactions that shape how people perceive your business, experience your brand, and remember you when it matters most.</p>
      <p>That realization became the foundation of Triple O Agency. The Triple O Framework isn't a checklist or another marketing process. It's a philosophy for evaluating every marketing decision through three principles that work together to build trust over time. <a href="/framework/" class="text-leather underline underline-offset-4 hover:text-leather-light">Explore the full framework →</a></p>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page space-y-16">
      ${pillarSection({
        title: "Optics",
        tagline: "Trust begins with perception.",
        href: "/framework/optics/",
        paragraphs: [
          "Whether we realize it or not, people begin forming opinions about our businesses long before they ever become customers. Your website, branding, photography, reviews, messaging, social media presence, trucks, uniforms, proposals, and even the way your team answers the phone all contribute to that first impression.",
          "Every interaction tells a story. The question is whether it's telling the story you want your customers to believe.",
          "Optics isn't about looking flashy or expensive. It's about creating confidence. When every touchpoint consistently reflects the quality of your work, people begin trusting your business before the first conversation ever takes place.",
        ],
      })}
      ${pillarSection({
        title: "Optimization",
        tagline: "Trust grows through consistency.",
        href: "/framework/optimization/",
        paragraphs: [
          "Making a great first impression is important, but keeping your promises is what creates lasting relationships.",
          "Optimization is the commitment to continuous improvement. It's refining your messaging, improving your website, measuring performance, simplifying the customer journey, strengthening follow-up, and making smarter decisions based on data instead of assumptions.",
          "Optimization isn't about chasing perfection. It's about becoming a little better today than you were yesterday. Customers notice that consistency, even if they can't explain why — and consistency builds confidence.",
        ],
      })}
      ${pillarSection({
        title: "Omnipresence",
        tagline: "Trust is reinforced through familiarity.",
        href: "/framework/omnipresence/",
        paragraphs: [
          "One of the biggest misconceptions in modern marketing is that omnipresence means being everywhere. It doesn't. It means being present where it matters.",
          "Today's customers don't follow a straight path to purchase. They search Google, ask AI assistants, watch YouTube videos, read reviews, scroll social media, compare competitors, ask friends for recommendations, and revisit your website multiple times before making a decision.",
          "When people encounter your business repeatedly across multiple trusted touchpoints, recognition becomes familiarity. Familiarity becomes confidence. Confidence becomes trust.",
        ],
      })}
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <h2 class="text-3xl sm:text-4xl mb-6 text-balance" data-reveal data-reveal-y="20">Why the Three Work Together</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Each pillar is valuable on its own, but none of them reach their full potential without the others.</p>
        <p>Great optics create strong first impressions, but they mean very little if the customer experience doesn't deliver. Optimization can improve every marketing metric you measure, but it can't compensate for a brand people don't trust. Omnipresence increases visibility, but visibility without credibility is simply more noise.</p>
        <p>Optics earns the first impression. Optimization earns confidence. Omnipresence earns familiarity. Together, they create trust — and trust is the foundation of every lasting business relationship.</p>
      </div>
    </div>
  </section>

  <section class="section bg-cream">
    <div class="container-page max-w-3xl">
      <h2 class="text-3xl sm:text-4xl mb-6 text-balance" data-reveal data-reveal-y="20">More Than Marketing</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Triple O Agency wasn't created to sell marketing services. It was created to become a trusted advisor for growing businesses.</p>
        <p>Sometimes that means recommending a new technology. Sometimes it means advising against one. Sometimes the answer is investing in AI or automation. Other times it's rewriting the headline on your homepage, improving your customer follow-up, or helping clarify the story your business has been trying to tell all along.</p>
        <p>We don't believe every business needs to be on every platform or adopt every new trend. We believe every business deserves honest advice, thoughtful strategy, and a partner who's willing to treat their business as if it were their own.</p>
        <p>Because our goal has never been to do more marketing. Our goal is to build stronger businesses.</p>
      </div>
    </div>
  </section>

  ${c.principleQuote(
    "The next decade of marketing will look different than the last. We'll keep learning, testing, and adapting — but we'll embrace innovation without abandoning the principles that have always made great businesses successful. Marketing has always evolved. And it always will. But trust never goes out of style.",
    { eyebrow: "Looking Forward" }
  )}

  ${c.ctaBand({ secondary: { label: "Our Process", href: "/about/process/" } })}
  `;
}

module.exports = {
  meta: {
    title: "The Triple O Philosophy | Triple O Agency",
    description: "Marketing evolves. Principles endure. How Triple O Agency thinks and works, and why everything begins with trust.",
    path: "/about/our-philosophy/",
  },
  body,
};
