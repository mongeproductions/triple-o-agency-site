const SUBPAGES = [
  { title: "Our Story", description: "How Triple O Agency got started, and the belief that shaped everything since.", href: "/about/our-story/" },
  { title: "Meet the Founder", description: "Built from experience, focused on what works — meet Garrett Jensen.", href: "/about/our-team/" },
  { title: "Our Philosophy", description: "How we think and how we work — the principles behind every recommendation.", href: "/about/our-philosophy/" },
  { title: "Our Process", description: "The process that makes us Triple O Agency, from first conversation to ongoing optimization.", href: "/about/process/" },
];

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "About Triple O Agency",
    title: "Marketing evolves. Principles endure.",
    lede: "Agency story, mission, and team.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <p class="text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">Triple O Agency was built on a simple idea: while marketing tools and trends constantly change, the fundamentals that drive real business growth remain the same. With over 16+ years of experience, we've helped small and medium-sized businesses cut through the noise and focus on what actually works.</p>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-14" data-reveal data-reveal-y="20">
        ${c.eyebrow("Learn More")}
        <h2 class="text-3xl sm:text-4xl mt-5 text-balance">Get to know Triple O.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-grid-reveal>
        ${SUBPAGES.map((s, i) => c.serviceCard({ ...s, index: i + 1 })).join("")}
      </div>
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Book a Consultation",
    title: "Let's see if we're a fit.",
    body: "No pressure, no pitch deck theater — just an honest conversation about where your marketing stands and where it could go.",
  })}
  `;
}

module.exports = {
  meta: {
    title: "About Triple O Agency | Salt Lake City Marketing Agency",
    description: "Agency story, mission, and team behind Triple O Agency — a Salt Lake City marketing agency built on principles, not trends.",
    path: "/about/",
  },
  body,
};
