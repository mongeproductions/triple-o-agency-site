function outcomeCard(title, description) {
  return `<div class="card bg-white flex flex-col h-full" data-reveal data-reveal-y="24">
    <h3 class="text-lg mb-3">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed">${description}</p>
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
    eyebrow: "Services / Consulting / Fractional CMO",
    title: "Senior leadership, fractional commitment.",
    lede: "A marketing executive who sets strategy, holds every channel accountable, and reports straight to leadership — without the full-time salary, the equity, or the year it takes to find and hire one.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Consulting", href: "/services/consulting/" },
      { label: "Fractional CMO", href: "/services/consulting/fractional-cmo/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      ${c.eyebrow("The Gap")}
      <h2 class="text-3xl sm:text-4xl mt-5 mb-3 text-balance" data-reveal data-reveal-y="20">"Doing marketing" isn't the same as having marketing leadership.</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Most growing companies have people doing marketing — running ads, writing content, managing a website — without anyone actually owning the strategy those efforts are supposed to serve. That gap is expensive: it shows up as channels working against each other, decisions nobody's really accountable for, and a budget that grows without a clear return.</p>
        <p>A Fractional CMO closes that gap without the year-long search, the six-figure salary, or the risk of a bad senior hire.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("The Outcomes")}
        <h2 class="text-3xl sm:text-4xl text-balance">What actually changes with someone senior in the room.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-grid-reveal>
        ${outcomeCard("One Person Owns the Whole Strategy", "Every channel — SEO, paid, content, brand — answers to a single strategy instead of running as disconnected efforts pointed in different directions.")}
        ${outcomeCard("Decisions Get Made, Not Deferred", "Someone senior enough to actually make the call, instead of a decision sitting in limbo waiting on the next leadership meeting.")}
        ${outcomeCard("A Direct Line to Leadership", "Reports and recommendations go straight to you or your board — no account manager layer translating in between.")}
        ${outcomeCard("Your In-House Team Gets Direction", "Existing marketing hires get a senior person to report to and learn from, instead of operating without oversight or a clear priority list.")}
        ${outcomeCard("Budget Gets Spent With a Reason", "Every dollar across every channel ties back to the same strategy, so spend stops getting justified after the fact.")}
        ${outcomeCard("A Faster Start Than a Full-Time Hire", "Engaged in weeks, not the six-to-twelve months a real CMO search usually takes — without the risk of a senior hire that doesn't work out.")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-12">
        ${c.eyebrow("Who This Is For")}
        <h2 class="text-3xl sm:text-4xl mt-5 mb-8 text-balance max-w-xl" data-reveal data-reveal-y="20">You're probably a fit if any of this sounds familiar.</h2>
      </div>
      <div class="lg:col-span-12">
        ${c.checklist(
          [
            "You've outgrown \"whoever's available handles marketing.\"",
            "You raised recently or grew fast, and still don't have a marketing leader.",
            "You're running SEO, paid, and content — but nothing's tying them together.",
            "You're the founder, and you're currently the de facto CMO. You'd like that time back.",
          ],
          { cols: 2 }
        )}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Work")}
        <h2 class="text-3xl sm:text-4xl text-balance">Diagnose. Direct. Oversee.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Diagnose", "A full read on current channels, team, budget, and positioning within the first weeks of the engagement.")}
        ${processStep(2, "Direct", "Priorities and a plan that every existing effort — internal or outside agency — has to align to from here forward.")}
        ${processStep(3, "Oversee", "An ongoing cadence with leadership, holding your team and any agencies — including channels we don't run ourselves — to the plan.")}
      </div>
    </div>
  </section>

  <section class="relative bg-diagonal-green text-cream section overflow-hidden">
    <div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.06", size: 480 })}</div>
    <div class="container-page relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-8">
        ${c.eyebrow("Already Working With Us?", { light: true })}
        <h2 class="text-3xl sm:text-4xl text-balance mb-4" data-reveal data-reveal-y="20">If we're already running your SEO or paid ads, this ties it together.</h2>
        <p class="text-cream/70 leading-relaxed max-w-xl" data-reveal data-reveal-y="16">A Fractional CMO engagement sits above the channel-level work — reviewing what's happening in SEO, AEO, and paid, and making sure it's all pulling toward the same strategy instead of running as separate efforts.</p>
      </div>
      <div class="lg:col-span-4 flex flex-col gap-4">
        <a href="/services/seo/" class="btn-primary w-full">SEO Service</a>
        <a href="/services/paid-ads/" class="btn-outline-on-dark w-full">Paid Ads Service</a>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions")}
        <h2 class="text-3xl sm:text-4xl text-balance">What clients ask before signing on.</h2>
      </div>
      <div data-reveal-group="fcmo-faq">
        ${faqItem("How much time will you actually spend with us?", "We agree on a set cadence upfront — typically a standing weekly sync with leadership plus ongoing availability between sessions. It's structured, not occasional check-ins whenever there's time.")}
        ${faqItem("How is this priced compared to a full-time CMO?", "A full-time CMO typically comes with a six-figure salary plus equity and benefits. Fractional engagements run on a monthly retainer scaled to the time commitment — we'll walk through the actual numbers on a call once we understand the scope.")}
        ${faqItem("Will you manage our existing marketing hires or agencies?", "Yes. Part of the role is holding your existing team and any outside vendors accountable to the same strategy — whether or not Triple O is the one executing the work.")}
        ${faqItem("What happens if we eventually want to hire a full-time CMO?", "We'll help you get there — building the job description, sitting in on interviews, and handing off a clean strategy and documentation instead of protecting the role for ourselves.")}
        ${faqItem("Do you take on multiple clients at once?", "Yes — that's the nature of a fractional role. We keep the roster deliberately limited so every client gets real attention, not a name on a long list.")}
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "Consulting", href: "/services/consulting/" },
        { label: "Our Philosophy", href: "/about/our-philosophy/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Get Started",
    title: "Let's talk about what leadership is actually missing.",
    body: "Book a 15-minute call — no pitch deck, just a straight conversation about where things stand.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Fractional CMO | Triple O Agency",
    description: "Fractional CMO services from Triple O Agency — senior marketing leadership, fractional commitment, direct accountability to your leadership team.",
    path: "/services/consulting/fractional-cmo/",
  },
  body,
};
