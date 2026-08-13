function offeringCard({ tag, title, description, link, featured = false }) {
  const base = featured ? "bg-diagonal-green text-cream" : "bg-white";
  const tagCls = featured ? "text-leather-light" : "text-leather";
  const pCls = featured ? "text-cream/75" : "text-text-dark/65";
  return `<div class="card ${base} flex flex-col h-full ${featured ? "border-l-4 border-leather-light" : ""}" data-reveal data-reveal-y="24">
    <span class="font-heading text-xs font-semibold uppercase tracking-eyebrow ${tagCls} mb-4">${tag}</span>
    <h3 class="text-xl mb-3">${title}</h3>
    <p class="${pCls} leading-relaxed flex-1">${description}</p>
    ${link ? `<a href="${link.href}" class="inline-flex items-center gap-2 mt-6 font-heading text-sm font-semibold uppercase tracking-wide ${featured ? "text-leather-light" : "text-leather"} hover:gap-3 transition-all duration-200">${link.label} <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10h11M10.5 4.5 16 10l-5.5 5.5"/></svg></a>` : ""}
  </div>`;
}

function processStep(num, title, description) {
  return `<div class="card bg-cream flex flex-col h-full" data-reveal data-reveal-y="24">
    <span class="font-heading text-leather-light/70 text-sm mb-4">0${num}</span>
    <h3 class="text-lg mb-3">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed flex-1">${description}</p>
  </div>`;
}

function faqItem(q, a) {
  return `<div class="border-b border-deep-green/10 py-8">
    <h3 class="text-lg font-heading font-semibold mb-3">${q}</h3>
    <p class="text-text-dark/65 leading-relaxed">${a}</p>
  </div>`;
}

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Consulting",
    title: "Senior marketing judgment, when you need it.",
    lede: "Not every company needs a full department on payroll. Sometimes what's missing is one person in the room who's done this before — setting direction, keeping every channel pointed the same way, and making the calls nobody else is positioned to make.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Consulting", href: "/services/consulting/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("The Problem")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">Most marketing problems aren't tactical.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>A campaign underperforming is usually a symptom, not the disease. The real issue is upstream — no clear positioning, no agreed-upon priorities, channels running in different directions because nobody actually owns the whole picture.</p>
        <p>Triple O's consulting practice exists for that layer of the problem: the strategic decisions that determine whether tactics have anything solid to work with in the first place.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Help")}
        <h2 class="text-3xl sm:text-4xl text-balance">Consulting engagements we run.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-grid-reveal>
        ${offeringCard({
          tag: "Most Requested",
          title: "Fractional CMO",
          description: "Senior marketing leadership embedded in your business part-time — owning strategy and holding every channel accountable to it, without the cost or search time of a full-time hire.",
          link: { label: "See how this works", href: "/services/consulting/fractional-cmo/" },
          featured: true,
        })}
        ${offeringCard({
          tag: "Diagnostic",
          title: "Marketing Audits",
          description: "An outside, unsparing look at what's actually working across your current stack — SEO, paid, content, brand — before another dollar gets spent on any of it.",
        })}
        ${offeringCard({
          tag: "Strategy",
          title: "Go-to-Market Strategy",
          description: "Positioning, messaging, and channel strategy built before a launch, not patched together after one underperforms.",
        })}
        ${offeringCard({
          tag: "Capability Building",
          title: "Team Build-Out & Training",
          description: "Hiring plans, role definitions, and hands-on coaching for the in-house team you're building, so the function doesn't stay dependent on outside help forever.",
        })}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Work")}
        <h2 class="text-3xl sm:text-4xl text-balance">Diagnose. Direct. Oversee.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Diagnose", "A clear, unsparing look at where marketing actually stands today — no assumptions carried over from the last strategy deck.")}
        ${processStep(2, "Direct", "Positioning, priorities, and channel strategy that every other decision has to answer to from here forward.")}
        ${processStep(3, "Oversee", "Ongoing involvement to make sure execution actually matches the strategy, adjusting as real results come in.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions")}
        <h2 class="text-3xl sm:text-4xl text-balance">What clients ask before signing on.</h2>
      </div>
      <div data-reveal-group="consulting-faq">
        ${faqItem("What's the difference between consulting and a Fractional CMO?", "Consulting engagements are typically scoped and time-bound — an audit, a go-to-market plan, a training sprint. A Fractional CMO is an ongoing leadership role: someone accountable for your marketing strategy on a standing basis, month over month.")}
        ${faqItem("Do you replace our internal marketing team?", "No — we give it direction. Most engagements strengthen an existing team rather than replace it, providing the senior oversight and strategy that's often missing.")}
        ${faqItem("Can this pair with your SEO or Paid Ads services?", "Yes, and it often should. A consulting or Fractional CMO engagement is what ties channel-level work — SEO, AEO, paid — back to a single strategy instead of letting each one run independently.")}
        ${faqItem("How is an engagement structured?", "It depends on the offering — audits and go-to-market work are typically scoped projects with a defined end date, while Fractional CMO runs on an ongoing monthly retainer. We'll recommend the right fit after an initial conversation.")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "Fractional CMO", href: "/services/consulting/fractional-cmo/" },
        { label: "Branding & PR", href: "/services/branding/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Get Started",
    title: "Let's talk about what's actually missing.",
    body: "Book a 15-minute call — no pitch deck, just a straight conversation about where things stand.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Consulting | Triple O Agency",
    description: "Marketing consulting and Fractional CMO services from Triple O Agency — senior marketing leadership without the executive hire.",
    path: "/services/consulting/",
  },
  body,
};
