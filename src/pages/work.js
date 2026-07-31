const CASE_STUDIES = [
  {
    href: "/work/arrival-3d/",
    logo: "/assets/img/clients/arrival-3d-logo.png",
    logoAlt: "Arrival 3D logo",
    eyebrow: "Branding / Lead Gen / CRM",
    title: "Arrival 3D",
    description: "Repositioning a 3D laser scanning specialist as a tech-forward industry leader, backed by a rebuilt paid and organic lead engine.",
  },
  {
    href: "/work/lifespan-fitness/",
    logo: "/assets/img/clients/lifespan-fitness-logo.png",
    logoAlt: "LifeSpan Fitness logo",
    eyebrow: "Copy / Photo & Video / Ecommerce",
    title: "LifeSpan Fitness",
    description: "Launch copy, photography, and video for two new products — plus a rollout onto Amazon and other ecommerce channels.",
  },
  {
    href: "/work/utah-climate-pros/",
    logo: "/assets/img/clients/utah-climate-pros-logo.png",
    logoAlt: "Utah Climate Pros logo",
    eyebrow: "SEO / Paid Media / Reputation",
    title: "Utah Climate Pros",
    description: "Positioning a Wasatch Front HVAC company as a Utah leader through SEO, paid media, and reputation management.",
  },
];

function caseStudyCard(c, cs) {
  return `<a href="${cs.href}" class="group relative rounded-sm overflow-hidden shadow-warm-lg bg-white flex flex-col border border-deep-green/10">
    <div class="relative min-h-[200px] bg-soft-grey flex items-center justify-center overflow-hidden p-10 border-b border-deep-green/10">
      <img src="${cs.logo}" alt="${cs.logoAlt}" class="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div class="p-8 flex-1 flex flex-col">
      <p class="eyebrow mb-3">${cs.eyebrow}</p>
      <h2 class="text-2xl mb-3 group-hover:text-leather transition-colors duration-200">${cs.title}</h2>
      <p class="text-text-dark/65 leading-relaxed flex-1">${cs.description}</p>
      <span class="inline-flex items-center gap-2 mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-deep-green group-hover:gap-3 group-hover:text-leather transition-all duration-200">View Case Study ${c.iconArrow()}</span>
    </div>
  </a>`;
}

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Our Work",
    title: "Selected client work and case studies.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Our Work", href: "/work/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-grid-reveal>
        ${CASE_STUDIES.map((cs) => caseStudyCard(c, cs)).join("")}
      </div>
    </div>
  </section>

  ${c.ctaBand({ title: "Want to be our next case study?", body: "Let's talk about what a Triple O engagement could look like for your business." })}
  `;
}

module.exports = {
  meta: {
    title: "Our Work | Triple O Agency",
    description: "Selected client work and case studies from Triple O Agency, spanning branding, lead generation, SEO, paid media, and ecommerce.",
    path: "/work/",
  },
  body,
};
