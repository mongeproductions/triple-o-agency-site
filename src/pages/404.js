function body(c) {
  return `
  <section class="relative bg-diagonal-green text-cream min-h-[85vh] flex items-center overflow-hidden pt-28">
    <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.08", size: 600 })}</div>
    <div class="container-page relative z-10 text-center">
      <p class="eyebrow-light mb-6" data-reveal data-reveal-y="12">Error 404</p>
      <h1 class="text-6xl sm:text-7xl md:text-8xl mb-6" data-reveal data-reveal-y="24">Lost the plot.</h1>
      <p class="font-body italic text-cream/70 text-xl max-w-lg mx-auto mb-10" data-reveal data-reveal-y="16">Even the best strategy occasionally hits a page that doesn't exist. Let's get you back on track.</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-reveal data-reveal-y="16">
        <a href="/" class="btn-primary">Back to Home</a>
        <a href="/contact/" class="btn-outline-on-dark">Contact Us</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = {
  meta: {
    title: "Page Not Found | Triple O Agency",
    description: "Custom 404 error page for Triple O Agency.",
    path: "/404",
  },
  body,
};
