const STEPS = [
  { title: "Discover", description: "We start by understanding your business — your customers, your competitors, and what actually makes you different." },
  { title: "Strategize", description: "We build a plan around Optics, Optimization, and Omnipresence — prioritized around what will move the needle fastest." },
  { title: "Execute", description: "We bring the strategy to life across the channels that matter — branding, content, paid media, and beyond." },
  { title: "Optimize", description: "We measure everything, report on what's working, and keep refining — marketing is never really 'done.'" },
];

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Our Process",
    title: "The process that makes us Triple O Agency.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Process", href: "/about/process/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-grid-reveal>
        ${STEPS.map(
          (s, i) => `<div class="card bg-cream flex flex-col h-full">
            <span class="font-heading text-leather-light/70 text-sm mb-4">0${i + 1}</span>
            <h3 class="text-xl mb-3">${s.title}</h3>
            <p class="text-text-dark/65 leading-relaxed flex-1">${s.description}</p>
          </div>`
        ).join("")}
      </div>
    </div>
  </section>

  ${c.ctaBand({})}
  `;
}

module.exports = {
  meta: {
    title: "Our Process | Triple O Agency",
    description: "The process that makes us Triple O Agency — discover, strategize, execute, optimize.",
    path: "/about/process/",
  },
  body,
};
