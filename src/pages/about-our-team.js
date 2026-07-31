function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Meet the Founder",
    title: "Meet the people behind Triple O Agency.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Our Team", href: "/about/our-team/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div class="lg:col-span-4" data-reveal data-reveal-y="24">
          <div class="relative aspect-square rounded-sm overflow-hidden shadow-warm-lg border border-deep-green/10">
            <img src="/assets/img/team/garrett-founder.jpg" alt="Garrett Jensen, Founder of Triple O Agency" width="725" height="1000" class="w-full h-full object-cover object-top" />
          </div>
        </div>
        <div class="lg:col-span-8" data-reveal data-reveal-y="24">
          <p class="eyebrow mb-4">Founder</p>
          <h2 class="text-3xl sm:text-4xl mb-2">Garrett Jensen</h2>
          <p class="font-body italic text-leather text-lg mb-5">Built from Experience. Focused on What Works.</p>
          <div class="space-y-4 text-text-dark/70 leading-relaxed">
            <p>I'm Garrett Jensen, founder of Triple O Agency.</p>
            <p>My path into marketing was shaped by years of hands-on experience across strategy, paid media, websites, photography, creative work, and business growth.</p>
            <p>Over time, I noticed the same problem again and again: businesses were investing in marketing, but the pieces were not working together. The website said one thing, the ads said another, and the strategy was often missing altogether.</p>
            <p>I started Triple O Agency to offer a more practical approach.</p>
          </div>
          <a href="mailto:garrett@tripleoagency.com" class="btn-outline mt-6">Email Garrett</a>
        </div>
      </div>

      <div class="rule mb-20"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto" data-grid-reveal>
        <div>
          <h3 class="text-xl mb-4">Why Triple O Exists</h3>
          <div class="space-y-4 text-text-dark/70 leading-relaxed">
            <p>Triple O was built to help businesses make smarter marketing decisions without the unnecessary complexity.</p>
            <p>Sometimes the answer is a new website or a better advertising campaign. Other times, the real problem is the offer, the message, or the customer experience.</p>
            <p>My job is to help identify what is working, what is getting in the way, and what deserves attention next. I believe in recommending what makes sense for the business — not what creates the largest invoice.</p>
          </div>
        </div>
        <div>
          <h3 class="text-xl mb-4">Creative Thinking. Clear Strategy.</h3>
          <div class="space-y-4 text-text-dark/70 leading-relaxed">
            <p>I have always been drawn to the creative side of business: photography, branding, storytelling, design, and the details that shape how people see a company.</p>
            <p>But good marketing cannot stop at looking polished. It should communicate clearly, earn attention, build trust, and lead people toward action.</p>
            <p>That balance between creativity and strategy is at the center of how I work.</p>
          </div>
        </div>
        <div class="md:col-span-2">
          <h3 class="text-xl mb-4">What It Is Like to Work with Me</h3>
          <div class="space-y-4 text-text-dark/70 leading-relaxed max-w-2xl">
            <p>When you work with Triple O, you work directly with me. There are no layers of account managers, no vague handoffs, and no disappearing act after the contract is signed.</p>
            <p>I value honest communication, thoughtful work, and straightforward advice. I will tell you what I believe will work, where I see risk, and when I think an idea needs to be reconsidered.</p>
            <p>My goal is not to make marketing feel more complicated. It is to give you a clearer path forward.</p>
          </div>
        </div>
      </div>

      <div class="rule my-20"></div>

      <div class="max-w-2xl mb-10" data-reveal data-reveal-y="20">
        ${c.eyebrow("Growing")}
        <h2 class="text-2xl sm:text-3xl mt-5 text-balance">More of the team, coming soon.</h2>
        <p class="text-text-dark/65 mt-4 leading-relaxed">As Triple O grows, this page will grow with it. Check back for the specialists behind SEO, paid media, and creative.</p>
      </div>
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Let's Build Something That Works",
    title: "Whether you're launching something new or improving an established business,",
    body: "I'd be glad to learn more about what you're building.",
    secondary: { label: "Our Philosophy", href: "/about/our-philosophy/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Meet the Founder | Triple O Agency",
    description: "Meet Garrett Jensen, founder of Triple O Agency — built from experience, focused on what works.",
    path: "/about/our-team/",
  },
  body,
};
