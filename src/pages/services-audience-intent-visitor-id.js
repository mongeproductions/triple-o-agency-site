function statCard(num, label, description) {
  return `<div class="card bg-white">
    <p class="font-heading font-bold text-4xl text-deep-green">${num}</p>
    <p class="eyebrow mt-2 mb-4">${label}</p>
    <p class="text-text-dark/65 leading-relaxed">${description}</p>
  </div>`;
}

function featureCard(num, title, description) {
  return `<div class="border border-cream/15 p-8">
    <span class="eyebrow-light block mb-4">${String(num).padStart(2, "0")}</span>
    <h3 class="text-lg text-cream mb-3">${title}</h3>
    <p class="text-cream/70 leading-relaxed">${description}</p>
  </div>`;
}

function useCard(title, description, metric) {
  return `<div class="card bg-white flex flex-col h-full">
    <h3 class="text-xl mb-3">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed flex-1">${description}</p>
    <p class="font-heading font-semibold text-sm text-leather mt-6">${metric}</p>
  </div>`;
}

function processStep(num, title, description) {
  return `<div class="card bg-cream flex flex-col h-full">
    <span class="font-heading text-leather-light/70 text-sm mb-4">0${num}</span>
    <h3 class="text-xl mb-3">${title}</h3>
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
  <section class="relative bg-diagonal-green text-cream pt-40 pb-20 md:pt-48 overflow-hidden" data-hero>
    <div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">${c.ringsDecor({ color: "#E8E4D9", opacity: "0.07", size: 560 })}</div>
    <div class="container-page relative z-10">
      ${c.breadcrumbs([
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
        { label: "Visitor Identification", href: "/services/audience-intent/visitor-identification/" },
      ])}
      <p class="eyebrow-light mt-6 mb-5" data-reveal data-reveal-y="12">Visitor Identification</p>
      <h1 class="text-4xl sm:text-5xl md:text-6xl max-w-3xl text-balance" data-reveal data-reveal-y="20">Every guest who walks through the door leaves a name.</h1>
      <p class="font-body italic text-cream/75 text-lg md:text-xl max-w-2xl mt-6" data-reveal data-reveal-y="16">Most of the traffic hitting your site right now will never fill out a form — and never gets followed up with. We match your anonymous visitors to real names, titles, and companies, the moment they land, so no one leaves unaccounted for.</p>
      <div class="flex flex-col sm:flex-row gap-4 mt-8" data-reveal data-reveal-y="16">
        <a href="/contact/" class="btn-primary">Request a Sample Ledger</a>
        <a href="#how-it-works" class="btn-outline-on-dark">See How It Works</a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-cream/15 mt-16" data-reveal data-reveal-y="16">
        <div class="py-6 pr-6 border-r border-cream/15"><p class="font-heading font-bold text-2xl">Up to 65%</p><p class="eyebrow-light mt-2">Visitors Identified</p></div>
        <div class="py-6 pr-6 border-r border-cream/15"><p class="font-heading font-bold text-2xl">&lt; 2 sec</p><p class="eyebrow-light mt-2">Time to Match</p></div>
        <div class="py-6 pr-6 md:border-r border-cream/15"><p class="font-heading font-bold text-2xl">250M+</p><p class="eyebrow-light mt-2">Contacts on File</p></div>
        <div class="py-6"><p class="font-heading font-bold text-2xl">Live</p><p class="eyebrow-light mt-2">Alerts to Your Team</p></div>
      </div>

      <div class="max-w-md mt-14 bg-cream text-text-dark rounded-sm shadow-warm-lg overflow-hidden" data-reveal data-reveal-y="24">
        <div class="bg-deep-green text-cream px-6 py-3 flex items-center justify-between eyebrow-light !text-cream/80">
          <span class="inline-flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-leather-light inline-block"></span>Guest Ledger — Live Entry</span>
          <span>Just now</span>
        </div>
        <div class="p-6">
          <p class="font-heading font-bold text-lg">Marcus Whitfield</p>
          <p class="text-text-dark/60 text-sm mt-0.5">Head of Growth · Larkspur &amp; Co.</p>
          <span class="inline-block mt-3 text-xs font-heading font-semibold uppercase tracking-wide bg-leather text-cream px-3 py-1">High Intent</span>
          <div class="grid grid-cols-2 gap-x-6 gap-y-3 mt-5 text-sm">
            <div><span class="block text-xs uppercase tracking-wide text-text-dark/45 mb-1">Email</span>m.whitfield@larkspurco.com</div>
            <div><span class="block text-xs uppercase tracking-wide text-text-dark/45 mb-1">Company Size</span>150–300 employees</div>
            <div><span class="block text-xs uppercase tracking-wide text-text-dark/45 mb-1">Location</span>Denver, CO</div>
            <div><span class="block text-xs uppercase tracking-wide text-text-dark/45 mb-1">Category</span>Professional Services</div>
          </div>
          <div class="border-t border-dashed border-deep-green/25 mt-5 pt-4 space-y-2 text-sm text-text-dark/70">
            <div class="flex justify-between"><span>Viewed /pricing</span><span>4m 02s</span></div>
            <div class="flex justify-between"><span>Viewed /case-studies</span><span>1m 48s</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-14" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-5">The Problem</p>
        <h2 class="text-3xl sm:text-4xl text-balance">You've already paid for the introduction. You just never got the name.</h2>
        <p class="text-text-dark/65 mt-4 leading-relaxed">Ad spend, SEO, outbound — all of it drives someone to your door. Then they leave before you ever learn who they were.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${statCard("~95%", "Leave Unidentified", "Nearly every visitor browses, considers, and exits without ever completing a form — taking their intent with them.")}
        ${statCard("$40–180", "Per Qualified Click", "That's the going rate for the traffic that's arriving right now and disappearing just as fast, unlogged.")}
        ${statCard("48 hrs", "Before Interest Cools", "Buying intent has a shelf life. Wait too long to reach out and the moment — and the deal — has already moved on.")}
      </div>
    </div>
  </section>

  <section class="section bg-diagonal-green text-cream">
    <div class="container-page">
      <div class="max-w-2xl mb-14" data-reveal data-reveal-y="20">
        <p class="eyebrow-light mb-5">The Approach</p>
        <h2 class="text-3xl sm:text-4xl text-balance">We keep the ledger, so your team never works a cold room.</h2>
        <p class="text-cream/70 mt-4 leading-relaxed">Triple O's identification layer sits quietly on your site, cross-referencing every visitor against a live contact and intent graph — no popup, no form, no friction for the visitor.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/10" data-grid-reveal>
        ${featureCard(1, "Identified on Arrival", "The instant someone lands on your site, we're already checking who they are — well before they'd ever consider filling out a form.")}
        ${featureCard(2, "A Complete Introduction", "Name, title, company, direct email and phone, and a professional profile — delivered as a full dossier, not a partial guess.")}
        ${featureCard(3, "Read the Room", "Pages viewed, time spent, repeat visits — the behavioral cues that tell you whether someone is browsing or ready to buy.")}
        ${featureCard(4, "Notified While It Matters", "The moment a target account or high-intent visitor shows up, your team hears about it — while the interest is still warm.")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div class="lg:col-span-5" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-5">The Dossier</p>
        <h2 class="text-3xl sm:text-4xl mb-5 text-balance">Not a lead. A full introduction.</h2>
        <p class="text-text-dark/65 leading-relaxed mb-6">Every matched visitor arrives with the context your team would otherwise spend a week digging up — assembled before your first call, not after.</p>
        ${c.checklist([
          "Full name, title, department, and seniority",
          "Verified email and direct phone line",
          "Company size, industry, and revenue band",
          "Session history: pages viewed, time on site, return visits",
        ])}
      </div>
      <div class="lg:col-span-7" data-reveal data-reveal-y="24">
        <div class="bg-diagonal-green text-cream rounded-sm overflow-hidden shadow-warm-lg">
          <div class="px-6 py-4 border-b border-cream/15 flex justify-between eyebrow-light !text-leather-light">
            <span>Visitor Dossier</span><span>002 / Session Active</span>
          </div>
          <div class="p-8">
            <p class="font-heading font-bold text-2xl">Elena Cho</p>
            <p class="text-cream/60 text-sm mt-1">VP, Revenue Operations · Birchwood Group</p>
            <div class="grid grid-cols-2 gap-x-8 gap-y-5 mt-8 text-sm">
              <div><span class="block text-xs uppercase tracking-wide text-leather-light mb-2">Contact</span><span class="block text-cream/85">elena.cho@birchwoodgrp.com</span><span class="block text-cream/85">(555) 214-0099</span></div>
              <div><span class="block text-xs uppercase tracking-wide text-leather-light mb-2">Company</span><span class="block text-cream/85">500–1000 employees</span><span class="block text-cream/85">Financial Services</span></div>
              <div><span class="block text-xs uppercase tracking-wide text-leather-light mb-2">Location</span><span class="block text-cream/85">Chicago, IL</span></div>
              <div><span class="block text-xs uppercase tracking-wide text-leather-light mb-2">Signal</span><span class="block text-cream/85">Pricing page, 3 visits</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="how-it-works" class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-14" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-5">How It Works</p>
        <h2 class="text-3xl sm:text-4xl text-balance">Three steps. No engineering sprint required.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${processStep(1, "Install the Tag", "One line of code, added once. Your developer can drop it in during a coffee break — no redesign, no downtime.")}
        ${processStep(2, "We Open the Ledger", "Traffic starts matching against our contact graph immediately, enriched with company and intent data in real time.")}
        ${processStep(3, "Your Team Follows Up", "Entries sync straight to your CRM and alert channel, so outreach happens while the visit is still fresh.")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page">
      <div class="max-w-2xl mb-14" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-5">Who It's For</p>
        <h2 class="text-3xl sm:text-4xl text-balance">Built for the teams closest to revenue.</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-grid-reveal>
        ${useCard("Sales", "Get pinged the moment a target account is on your site, and reach out while they're still reading the pricing page.", "Faster First Touch")}
        ${useCard("Marketing", "Finally see who your campaigns actually attract — even the visitors who never converted on a form.", "True Campaign Attribution")}
        ${useCard("Account-Based Teams", "Track every stakeholder from a target account as they move through your site, and coordinate outreach across the buying group.", "Full Account Visibility")}
      </div>
    </div>
  </section>

  <section class="section bg-cream">
    <div class="container-page">
      <div class="max-w-2xl mb-12" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-5">Integrations</p>
        <h2 class="text-3xl sm:text-4xl text-balance">Fits into the stack you already run.</h2>
      </div>
      <div class="flex flex-wrap gap-3" data-grid-reveal>
        ${["Salesforce", "HubSpot", "Pipedrive", "Slack", "Zapier", "Marketo", "Outreach", "Salesloft", "Webhooks"]
          .map((chip) => `<span class="inline-block border border-deep-green/15 bg-white px-5 py-2.5 text-sm font-medium rounded-sm">${chip}</span>`)
          .join("")}
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-4" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-5">Questions</p>
        <h2 class="text-3xl sm:text-4xl text-balance">Before you ask, we'll answer.</h2>
      </div>
      <div data-reveal-group="visitor-id-faq">
        ${faqItem("How are visitors actually identified?", "We combine first-party signals from your site with a licensed contact and business graph to match anonymous sessions to real people — no forms required from the visitor.")}
        ${faqItem("What kind of match rate should I expect?", "It depends on your traffic mix, but B2B and professional audiences typically match at the higher end of the range — often well above general consumer traffic.")}
        ${faqItem("Is this compliant with privacy regulations?", "Yes. The service is built to operate within GDPR and CCPA requirements, and includes straightforward opt-out handling for visitors who request it.")}
        ${faqItem("How long does setup take?", "Most clients are live within a day of installing the tag. Your Triple O account team handles the alert and CRM configuration alongside you.")}
      </div>
    </div>
  </section>

  ${c.ctaBand({
    eyebrow: "Ready When You Are",
    title: "Stop letting your best visitors leave unlogged.",
    body: "We'll open the ledger on your own site and show you exactly who's been walking through, using real traffic — no commitment required.",
    primary: { label: "Book a Walkthrough", href: "/contact/" },
    secondary: { label: "Back to Data & Intent Audiences", href: "/services/audience-intent/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Visitor Identification | Triple O Agency",
    description: "Match your anonymous website visitors to real names, titles, and companies the moment they land — no form required.",
    path: "/services/audience-intent/visitor-identification/",
  },
  body,
};
