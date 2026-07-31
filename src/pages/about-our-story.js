function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Our Story",
    title: "Marketing evolves. Principles endure.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Our Story", href: "/about/our-story/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16">
      <article class="lg:col-span-8 space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Triple O Agency wasn't founded because the world needed another marketing agency. It was founded because, after more than 16 years in marketing, I kept seeing the same problem.</p>
        <p>Business owners were being pulled in every direction.</p>
        <p>One person told them they needed to be on every social platform. Another insisted SEO was all that mattered. Then came AI, automation, influencers, short-form video, and a constant stream of new tools promising to transform their business overnight. Marketing became less about building great businesses and more about trying to keep up with whatever everyone else was doing.</p>
        <p>Some of those innovations are genuinely valuable. Others are simply the latest shiny object. The challenge isn't knowing what's new — it's knowing what actually matters.</p>

        <h2 class="text-2xl sm:text-3xl pt-4 text-text-dark">What I've Learned Along the Way</h2>
        <p>Over the years, I've been fortunate to learn from incredible mentors, talented colleagues, business owners, and friends who helped shape the way I approach marketing. I've also learned just as much by watching businesses make costly mistakes — investing in tactics before strategy, chasing competitors instead of defining their own identity, or focusing so much on getting attention that they forgot to earn trust.</p>
        <p>Those experiences taught me something I still believe today: great marketing isn't built on trends. It's built on principles.</p>

        <h2 class="text-2xl sm:text-3xl pt-4 text-text-dark">What Doesn't Change</h2>
        <p>Technology will continue to evolve. Search engines will change. AI will reshape how people discover businesses. New platforms will emerge while others fade away. That's simply the nature of this industry, and staying current matters.</p>
        <p>But beneath every change are the same fundamentals that have always driven successful businesses. People still buy from companies they trust. They still connect with authentic stories. They still remember great experiences, recommend businesses that treat them well, and return to brands that consistently deliver on their promises.</p>
        <p>That's the foundation Triple O Agency was built on.</p>
        <p>Our job isn't to chase every trend or convince you that every new platform deserves your attention. Our job is to understand your business, identify what makes it different, and help you tell that story using both time-tested principles and modern strategies that have proven themselves through real-world results.</p>

        <h2 class="text-2xl sm:text-3xl pt-4 text-text-dark">What Our Name Means</h2>
        <p>That philosophy is reflected in our name.</p>
        <p><strong class="text-deep-green">Optics</strong> is about how your business is perceived. Every interaction, from your website and branding to your reviews and customer experience, shapes whether someone trusts you enough to take the next step.</p>
        <p><strong class="text-deep-green">Optimization</strong> is about making every part of your marketing work better. It's a commitment to continual improvement — refining your messaging, improving your website, measuring results, and making smarter decisions over time instead of relying on guesswork.</p>
        <p><strong class="text-deep-green">Omnipresence</strong> is about being consistently visible where your customers are looking. Not because your business needs to be everywhere, but because trust is built through repeated, meaningful interactions across the places that influence buying decisions.</p>
        <p>Together, these three pillars give us a framework for making decisions that are grounded in strategy instead of hype. <a href="/framework/" class="text-leather underline underline-offset-4 hover:text-leather-light">Explore the full Triple O Framework →</a></p>

        <p>At the end of the day, we don't want to be another agency sending monthly reports full of metrics that don't mean anything. We want to be the partner you can call when you're facing a tough decision, exploring a new opportunity, or simply trying to figure out where to invest your next marketing dollar.</p>
        <p>Because good marketing isn't about doing more. It's about doing the right things, for the right reasons, in the right order.</p>
        <p>That's what we've believed for more than sixteen years. And it's why our philosophy remains the same, no matter how much marketing changes.</p>
      </article>
      <aside class="lg:col-span-4" data-reveal data-reveal-y="24">
        <div class="card bg-cream sticky top-32">
          <p class="eyebrow mb-4">At a Glance</p>
          <ul class="space-y-4 text-text-dark/75">
            <li class="flex items-baseline gap-3"><span class="font-heading font-bold text-leather text-xl">16+</span><span>Years building marketing that lasts</span></li>
            <li class="flex items-baseline gap-3"><span class="font-heading font-bold text-leather text-xl">SLC</span><span>Based in Salt Lake City, Utah</span></li>
            <li class="flex items-baseline gap-3"><span class="font-heading font-bold text-leather text-xl">SMB</span><span>Focused on small &amp; medium-sized businesses</span></li>
          </ul>
          <a href="/contact/" class="btn-primary w-full mt-8">Book a Consultation</a>
        </div>
      </aside>
    </div>
  </section>

  ${c.principleQuote("Marketing evolves. Principles endure.", { eyebrow: "Our Philosophy" })}

  ${c.ctaBand({
    secondary: { label: "Meet the Founder", href: "/about/our-team/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Our Story | Triple O Agency",
    description: "How Triple O Agency got started and where we're headed — marketing built on principles that endure, not trends.",
    path: "/about/our-story/",
  },
  body,
};
