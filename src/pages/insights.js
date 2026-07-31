function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Insights",
    title: "Articles, industry insight, and agency news.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Insights", href: "/insights/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-2xl text-center mx-auto">
      <img src="/assets/img/logo-mark-dark.svg" alt="" class="w-14 h-14 mx-auto opacity-20 mb-8" data-reveal data-reveal-y="16" />
      <h2 class="text-3xl sm:text-4xl mb-5 text-balance" data-reveal data-reveal-y="20">Insights are on the way.</h2>
      <p class="text-text-dark/65 leading-relaxed mb-10" data-reveal data-reveal-y="16">We're building out a library of articles on marketing principles, case studies, and what's actually working right now. Check back soon — or follow along on social in the meantime.</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-reveal data-reveal-y="12">
        <a href="/contact/" class="btn-primary">Get in Touch</a>
        <a href="https://www.linkedin.com/company/tripleoagency/" target="_blank" rel="noopener noreferrer" class="btn-outline">Follow on LinkedIn</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = {
  meta: {
    title: "Insights | Triple O Agency",
    description: "Articles, industry insight, and agency news from Triple O Agency.",
    path: "/insights/",
  },
  body,
};
