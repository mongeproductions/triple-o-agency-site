function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Case Study",
    title: "LifeSpan Fitness",
    lede: "Launch copy, imagery, and video for two new products — plus a foothold on Amazon and beyond.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Our Work", href: "/work/" },
      { label: "LifeSpan Fitness", href: "/work/lifespan-fitness/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page">
      <img src="/assets/img/clients/lifespan-fitness-logo.png" alt="LifeSpan Fitness logo" class="h-8 w-auto object-contain mb-14" data-reveal data-reveal-y="16" />
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 pb-16 border-b border-deep-green/10" data-grid-reveal>
        <div>
          <p class="eyebrow mb-2">Client</p>
          <p class="font-heading font-semibold text-lg">LifeSpan Fitness</p>
          <p class="text-text-dark/55 text-sm mt-1">Office Wellness &amp; Fitness Equipment</p>
        </div>
        <div>
          <p class="eyebrow mb-2">Services</p>
          <p class="font-heading font-semibold text-lg">Product Copy, Photography &amp; Video, Ecommerce Expansion</p>
        </div>
        <div>
          <p class="eyebrow mb-2">What We Did</p>
          <p class="font-heading font-semibold text-lg">Product Launch + Marketplace Rollout</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <article class="lg:col-span-8 space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
          <h2 class="text-2xl sm:text-3xl text-text-dark">The Challenge</h2>
          <p>LifeSpan Fitness builds under-desk treadmills, treadmill desks, and office wellness equipment designed to fight the effects of a sedentary workday. With two new products heading to launch, they needed copy, photography, and video that could carry the story across their own site — and then extend that same story into Amazon and other ecommerce marketplaces, each with their own format and content requirements.</p>

          <h2 class="text-2xl sm:text-3xl text-text-dark pt-4">Our Approach</h2>
          <p>We wrote the product copy for both launches — messaging built around LifeSpan's core promise of working movement into the workday without sacrificing productivity — and produced the supporting photography and video content needed to show the products in real use. From there, we helped get both products listed and optimized across Amazon and additional ecommerce channels, adapting content to fit each platform's requirements while keeping the brand story consistent everywhere it appeared.</p>

          <h2 class="text-2xl sm:text-3xl text-text-dark pt-4">The Result</h2>
          <p>Two product launches backed by consistent, conversion-focused copy and visuals across LifeSpan's own site and multiple ecommerce marketplaces — giving the products a coherent presence everywhere shoppers found them, not just on LifeSpan's own site.</p>
        </article>
        <aside class="lg:col-span-4" data-reveal data-reveal-y="24">
          <div class="card bg-cream sticky top-32">
            <p class="eyebrow mb-4">What Changed</p>
            <ul class="space-y-4 text-text-dark/75">
              <li class="flex items-start gap-3">${c.iconCheck("w-5 h-5 text-leather mt-0.5")}<span>Launch copy for two new product lines</span></li>
              <li class="flex items-start gap-3">${c.iconCheck("w-5 h-5 text-leather mt-0.5")}<span>Product photography &amp; video content production</span></li>
              <li class="flex items-start gap-3">${c.iconCheck("w-5 h-5 text-leather mt-0.5")}<span>Amazon listing setup &amp; optimization</span></li>
              <li class="flex items-start gap-3">${c.iconCheck("w-5 h-5 text-leather mt-0.5")}<span>Expansion onto additional ecommerce channels</span></li>
            </ul>
            <a href="/contact/" class="btn-primary w-full mt-8">Start Your Project</a>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("More Work", [
        { label: "Arrival 3D", href: "/work/arrival-3d/" },
        { label: "Utah Climate Pros", href: "/work/utah-climate-pros/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({ secondary: { label: "View Our Work", href: "/work/" } })}
  `;
}

module.exports = {
  meta: {
    title: "LifeSpan Fitness | Triple O Agency",
    description: "Case study: product launch copy, photography, and video for LifeSpan Fitness, plus expansion onto Amazon and other ecommerce channels.",
    path: "/work/lifespan-fitness/",
  },
  body,
};
