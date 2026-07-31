const SERVICES = [
  { title: "SEO", description: "Technical, content, and authority-building SEO that compounds — plus AI Answer & Generative Engine Optimization for how people search now.", href: "/services/seo/" },
  { title: "Paid Ads / Lead Gen", description: "B2C and B2B paid media built around real buying behavior — engineered to fill your pipeline, not just your dashboard.", href: "/services/paid-ads/" },
  { title: "Branding & PR", description: "Positioning, messaging, and visual identity that make you unmistakable — then the press and partnerships to carry it further.", href: "/services/branding/" },
  { title: "Data & Intent Audiences", description: "First-party data and intent signals turned into audiences you can actually target — sharper spend, fewer wasted impressions.", href: "/services/audience-intent/" },
  { title: "Fractional CMO / Consulting", description: "Senior marketing leadership on demand — strategy, oversight, and accountability without a six-figure executive hire.", href: "/services/consulting/" },
];

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services",
    title: "Overview of all service offerings.",
    lede: "Full-funnel marketing, built around Optics, Optimization, and Omnipresence.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${SERVICES.map((s, i) => c.serviceCard({ ...s, index: i + 1 })).join("")}
      </div>
    </div>
  </section>

  ${c.ctaBand({ title: "Not sure where to start?", body: "Book a free consultation and we'll map out the highest-leverage place to begin." })}
  `;
}

module.exports = {
  meta: {
    title: "Services | Triple O Agency",
    description: "Overview of all Triple O Agency service offerings: SEO, paid ads and lead generation, branding and PR, data and intent audiences, and fractional CMO consulting.",
    path: "/services/",
  },
  body,
};
