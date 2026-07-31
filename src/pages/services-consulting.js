function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Consulting",
    title: "Senior marketing leadership, without the executive hire.",
    lede: "Strategy and accountability from someone who's done this for 16+ years.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Consulting", href: "/services/consulting/" },
    ],
  })}

  ${c.serviceDetail({
    intro:
      "Not every business is ready for a full-time CMO — but every growing business needs senior marketing judgment. Our consulting and fractional CMO engagements give you strategy, oversight, and accountability across your entire marketing function, without the six-figure salary and benefits.",
    features: [
      "Marketing strategy &amp; roadmap development tied to business goals",
      "Oversight of existing agencies, freelancers, or in-house marketing staff",
      "Budget planning &amp; channel prioritization",
      "Regular reporting &amp; accountability so marketing stays tied to outcomes",
      "Hands-on guidance across branding, SEO, paid media, and lead generation",
    ],
    forWho: "Growing businesses that need senior marketing leadership but aren't ready — or don't want — to hire a full-time executive.",
    related: [
      { label: "Fractional CMO", href: "/services/consulting/fractional-cmo/" },
      { label: "Branding & PR", href: "/services/branding/" },
    ],
  })}
  `;
}

module.exports = {
  meta: {
    title: "Consulting | Triple O Agency",
    description: "Marketing consulting and fractional CMO services from Triple O Agency — senior marketing leadership without the executive hire.",
    path: "/services/consulting/",
  },
  body,
};
