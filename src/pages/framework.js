const PRINCIPLES = [
  { letter: "O", title: "Optics", description: "How people perceive your business before they ever become a customer.", href: "/framework/optics/" },
  { letter: "O", title: "Optimization", description: "How small, intentional improvements compound into lasting growth.", href: "/framework/optimization/" },
  { letter: "O", title: "Omnipresence", description: "How consistent visibility creates familiarity, confidence, and trust.", href: "/framework/omnipresence/" },
];

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "The Triple O Framework",
    title: "Building businesses on principles that stand the test of time.",
    lede: "Every tool changes. The businesses that last are built on something that doesn't.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Framework", href: "/framework/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <h2 class="text-3xl sm:text-4xl mb-6 text-balance" data-reveal data-reveal-y="20">Marketing evolves. Principles endure.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Marketing has changed more in the last five years than in the twenty before it. Algorithms shift, platforms rise and fall, and the tactics that worked last quarter can stop working overnight. If you build your business on tactics, you're building on sand.</p>
        <p>That's why everything we do at Triple O Agency is built on something sturdier: a set of principles that don't depend on which platform is popular this year or how an algorithm happens to be feeling this week.</p>
        <p>We call it the Triple O Framework — three principles, one purpose. Optics. Optimization. Omnipresence. Together, they explain why some businesses earn trust quickly while others struggle to be believed, no matter how good their work actually is.</p>
        <p>This isn't a framework we borrowed from a textbook. It's the pattern we kept seeing, engagement after engagement, in businesses that were good at what they did but still struggling to grow — and in the ones that broke through. The difference was rarely talent. It was almost always one of these three principles, neglected long enough to become the bottleneck.</p>
        <p>Tactics will keep changing. Ad platforms will keep updating their algorithms. What won't change is that people buy from businesses they perceive well, that keep getting better, and that show up consistently enough to become familiar. That's the foundation everything else gets built on.</p>
      </div>
      <a href="#principles" class="btn-outline mt-10">Explore the Three Principles ↓</a>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-8" data-reveal data-reveal-y="20">
        ${c.eyebrow("Why We Built The Framework")}
        <h2 class="text-3xl sm:text-4xl mt-5 mb-6 text-balance">Why We Built the Framework</h2>
        <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg">
          <p>Over sixteen years, I kept seeing the same thing.</p>
          <p>A business owner would call, frustrated. They'd tried an agency — sometimes several. They'd run ads, hired an SEO company, maybe brought on a marketing coordinator. Some of it worked, for a while. Then it didn't, and nobody could quite explain why.</p>
          <p>The pattern became impossible to ignore. It was almost never a talent problem. The technicians were skilled. The service was genuinely good — in plenty of cases, better than the competitor down the street who was somehow winning more of the business.</p>
          <p>What separated the businesses that broke through from the ones that stayed stuck wasn't more marketing. It was that the businesses which grew consistently were, almost without exception, doing three things well — usually without realizing they'd built a system at all.</p>
          <p>They looked credible before a customer ever called. They kept getting a little better at the things that mattered, month over month. And they showed up often enough, in enough of the right places, that by the time someone needed what they sold, they were already the obvious choice.</p>
          <p>The businesses that struggled were usually missing one of those three things — sometimes all three. A contractor with beautiful work and a website that looked like it hadn't been touched in a decade. A company running great ads to a page that gave visitors no reason to trust them. A brand doing everything right but showing up so inconsistently that customers forgot they existed between projects.</p>
          <p>I started naming these patterns out loud in strategy meetings, long before I called it a "framework." Optics. Optimization. Omnipresence. Once I had the language for it, I couldn't stop seeing it — in our clients' businesses, in our competitors, in our own agency.</p>
          <p>Eventually it stopped being a way to diagnose problems and became the actual filter we run every recommendation through. If a tactic doesn't strengthen Optics, Optimization, or Omnipresence, we don't have a good reason to recommend it — no matter how popular it is this quarter.</p>
        </div>
      </div>
      <aside class="lg:col-span-4" data-reveal data-reveal-y="24">
        <div class="card bg-white sticky top-32">
          <p class="eyebrow mb-4">Garrett, Founder</p>
          <p class="text-text-dark/70 leading-relaxed">The framework isn't a marketing gimmick. It's the same filter we run every recommendation through — for our clients, and for our own agency.</p>
          <a href="/about/our-team/" class="btn-outline w-full mt-8">Meet the Founder</a>
        </div>
      </aside>
    </div>
  </section>

  <section class="section bg-diagonal-green text-cream relative overflow-hidden">
    <div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.06", size: 520 })}</div>
    <div class="container-page relative z-10 max-w-2xl">
      <p class="eyebrow-light mb-5" data-reveal data-reveal-y="12">The Foundation</p>
      <h2 class="text-3xl sm:text-4xl mb-6 text-balance" data-reveal data-reveal-y="20">It all starts with trust.</h2>
      <div class="space-y-6 text-cream/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Look closely at Optics, Optimization, and Omnipresence, and you'll notice they're not really about marketing at all. They're about trust.</p>
        <p>Optics is the trust a customer extends before they've ever worked with you, based purely on what they can see. Optimization is the trust you earn by consistently doing what you said you'd do, a little better each time. Omnipresence is the trust that builds through familiarity — the simple, human tendency to feel safer with something you recognize.</p>
        <p>Every marketing decision, when you strip away the platform and the tactic, comes down to one question:</p>
      </div>
      <p class="font-body italic text-3xl sm:text-4xl text-balance mt-8 mb-2" data-reveal data-reveal-y="20">"Will this build trust?"</p>
      <p class="text-cream/60 mt-6" data-reveal data-reveal-y="16">If the answer is yes, it's probably worth doing. If the answer is no — if a tactic only chases attention, or a shortcut only creates a short-term bump at the cost of long-term credibility — it's probably not.</p>
    </div>
  </section>

  <section id="principles" class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mx-auto mb-6 text-center" data-reveal data-reveal-y="16">
        <span class="inline-block eyebrow !text-leather border border-leather/30 rounded-full px-5 py-2">Trust</span>
      </div>
      <div class="flex justify-center mb-10" aria-hidden="true">
        <div class="w-px h-10 bg-deep-green/20"></div>
      </div>
      <div class="max-w-2xl mx-auto text-center mb-14" data-reveal data-reveal-y="20">
        ${c.eyebrow("The Three Principles")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Optics. Optimization. Omnipresence.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${PRINCIPLES.map((p) => c.pillarCard(p)).join("")}
      </div>
    </div>
  </section>

  <section class="section bg-cream">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("One System")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-6 text-balance" data-reveal data-reveal-y="20">Why They Work Together</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>It would be easy to treat Optics, Optimization, and Omnipresence as three separate services — pick one, fix it, move to the next. That's not how they actually work.</p>
        <p>They're not sequential steps. They're not a checklist to complete in order. They're one interconnected system, each one reinforcing the other two.</p>
        <p>Better Optics makes your Omnipresence more effective — showing up consistently only helps if what people see when they find you is credible. Optimization strengthens your Optics — a business that keeps getting better naturally starts looking more polished, more established, more trustworthy. And Omnipresence gives Optimization more surface area to work with — the more consistently you show up, the more chances you have to prove you're improving.</p>
        <p>Pull on any one, and the other two move with it.</p>
        <p>That's why every recommendation we make gets held against all three — not "will this get more clicks," but "does this strengthen Optics, Optimization, or Omnipresence, and ideally, more than one at once." It's a higher bar than most agencies hold themselves to, and it's exactly why the businesses we work with build something that lasts instead of a campaign that fades the moment the budget does.</p>
      </div>
    </div>
  </section>

  ${c.ctaBand({ title: "Ready to build on something that lasts?", secondary: { label: "Our Philosophy", href: "/about/our-philosophy/" } })}
  `;
}

module.exports = {
  meta: {
    title: "The Triple O Framework | Triple O Agency",
    description: "The Triple O Framework: Optics, Optimization, and Omnipresence — three interconnected principles built on trust, behind every Triple O Agency engagement.",
    path: "/framework/",
  },
  body,
};
