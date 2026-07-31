const SERVICES = [
  "Brand strategy and positioning",
  "Messaging and copywriting",
  "Website design and user experience",
  "Photography and video production",
  "Visual identity and brand standards",
  "Review and reputation strategy",
  "Local SEO foundations",
  "Sales collateral and proposal design",
  "Social media content",
  "Marketing audits and brand consistency reviews",
];

const QUESTIONS = [
  "If someone discovered your business today, what impression would they leave with after five minutes?",
  "Does your website reflect the quality of the work you deliver in person?",
  "Would your reviews reinforce the promises your marketing is making?",
  "Do your branding, messaging, and customer experience tell the same story, or are they sending mixed signals?",
  "If a competitor delivered the same level of service, would customers immediately understand why they should choose you instead?",
];

function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "The Triple O Framework / Optics",
    title: "Optics",
    lede: "Trust begins with perception.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Framework", href: "/framework/" },
      { label: "Optics", href: "/framework/optics/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
      <p>Before a customer experiences the quality of your work, they experience your business.</p>
      <p>That experience might begin with a Google search, a recommendation from a friend, a social media post, your website, a service vehicle driving through their neighborhood, or a review they read while comparing companies. However it begins, people start forming opinions long before they ever contact you.</p>
      <p>Those opinions matter because they become the lens through which everything else is judged.</p>
      <p>At Triple O Agency, we call that Optics.</p>
      <p>Optics isn't about appearances for the sake of appearances. It's about making sure every interaction accurately reflects the quality, professionalism, and integrity of the business behind it.</p>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Your Customers Only Know What You Show Them</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>One of the most important lessons I've learned is that customers rarely have enough information to evaluate a business objectively.</p>
        <p>They don't know how talented your technicians are. They don't know how much experience your team has or how much pride you take in your work. Until they've actually become a customer, they can't judge the quality of what happens behind the scenes.</p>
        <p>Instead, they rely on the evidence that's available to them.</p>
        <p>They notice whether your website feels current or outdated. They read your reviews. They pay attention to your photography, your messaging, and how clearly you explain what you do. They notice whether your brand feels consistent and whether your business appears established or uncertain.</p>
        <p>None of those things prove that you're the best choice. They simply help answer a question every customer is asking: <span class="font-body italic">"Does this business feel trustworthy?"</span></p>
        <p>That's why perception matters. In the absence of firsthand experience, perception becomes the evidence people use to make decisions.</p>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Every Interaction Tells a Story</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>Many business owners think branding begins and ends with a logo.</p>
        <p>In reality, your brand is the collection of experiences people have with your business. Your logo is part of that story, but so is your website. So are your reviews. Your trucks. Your invoices. Your photography. Your proposals. Your social media. The way your phone is answered. The speed of your follow-up. The cleanliness of a technician's uniform.</p>
        <p>Every one of those moments communicates something, even if you never intended it to.</p>
        <p>Customers rarely remember each interaction individually. They combine them into an overall impression of your business. That impression becomes your reputation long before they've had the opportunity to judge the quality of your work.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Consistency Builds Confidence</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>One polished marketing piece won't overcome a dozen inconsistent experiences.</p>
        <p>Likewise, you don't need every part of your business to be extraordinary in order to earn trust. What people respond to most is consistency.</p>
        <p>When your website reflects the professionalism of your team, your messaging matches your customer experience, and your reviews reinforce the promises you make, customers stop wondering whether your business is legitimate. Instead, they begin wondering what it would be like to work with you.</p>
        <p>That's an important shift.</p>
        <p>Great optics don't convince people to trust you. They remove the uncertainty that keeps people from trusting you.</p>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl sm:text-3xl mb-6 text-balance" data-reveal data-reveal-y="20">Optics Extend Far Beyond Marketing</h2>
      <div class="space-y-6 text-text-dark/75 leading-relaxed text-lg" data-reveal data-reveal-y="20">
        <p>This is where our perspective differs from many agencies.</p>
        <p>We don't believe Optics lives inside the marketing department. It belongs to the entire business.</p>
        <p>Marketing can bring people to your website, but it can't make your receptionist sound more welcoming. Advertising can generate phone calls, but it can't make an estimate easier to understand. Great photography can showcase your work, but it can't replace an inconsistent customer experience.</p>
        <p>That's why we think about Optics as a business principle rather than a marketing service.</p>
        <p>Every department contributes to the way customers perceive your company, whether they're involved in marketing or not. When everyone understands that every interaction shapes trust, better decisions naturally follow.</p>
      </div>
    </div>
  </section>

  <section class="section bg-soft-grey">
    <div class="container-page">
      <div class="max-w-2xl mb-10" data-reveal data-reveal-y="20">
        ${c.eyebrow("How We Help")}
        <h2 class="text-2xl sm:text-3xl mt-5 text-balance">How We Help Businesses Improve Their Optics</h2>
        <p class="text-text-dark/65 mt-4 leading-relaxed">Every business has strengths worth highlighting. Sometimes those strengths simply aren't being communicated as clearly as they could be. Our role isn't to reinvent who you are — it's to make sure the business your customers see accurately reflects the business you've worked so hard to build. Depending on your goals, that may include:</p>
      </div>
      ${c.checklist(SERVICES, { cols: 2 })}
      <p class="text-text-dark/60 mt-8 max-w-2xl">Every recommendation is made with the same objective in mind: helping your business create stronger first impressions that lead to greater confidence.</p>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container-page max-w-3xl">
      <div class="mb-10" data-reveal data-reveal-y="20">
        ${c.eyebrow("Questions We Ask")}
        <h2 class="text-2xl sm:text-3xl mt-5 text-balance">Before we recommend any change related to Optics</h2>
      </div>
      ${c.questionsList(QUESTIONS)}
      <p class="text-text-dark/60 mt-8">The answers to those questions often reveal opportunities that analytics alone never will.</p>
    </div>
  </section>

  ${c.principleQuote(
    "Customers begin deciding whether they trust your business long before they become your customer. Every interaction contributes to that decision, which is why every interaction deserves intention."
  )}

  <section class="section bg-white">
    <div class="container-page">
      ${c.relatedLinks("Related", [
        { label: "Optimization", href: "/framework/optimization/" },
        { label: "Omnipresence", href: "/framework/omnipresence/" },
        { label: "Branding & PR", href: "/services/branding/" },
      ])}
    </div>
  </section>

  ${c.ctaBand({ secondary: { label: "Back to the Framework", href: "/framework/" } })}
  `;
}

module.exports = {
  meta: {
    title: "Optics | The Triple O Framework | Triple O Agency",
    description: "Optics: how your brand is seen and perceived. Trust begins with perception — one of the three pillars of the Triple O Framework.",
    path: "/framework/optics/",
  },
  body,
};
