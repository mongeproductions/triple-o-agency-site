function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Paid Ads / B2B",
    title: "B2B Lead Generation.",
    lede: "Longer cycles, higher stakes, and buying committees — not impulse clicks.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
      { label: "B2B", href: "/services/paid-ads/b2b/" },
    ],
  })}

  ${c.serviceDetail({
    intro:
      "B2B buyers research extensively, involve multiple decision-makers, and rarely convert on the first touch. B2B lead generation campaigns are built around that longer cycle — targeting by role, company, and intent, then nurturing leads with the CRM automation to keep them warm until they're ready to talk.",
    features: [
      "LinkedIn &amp; Google Ads targeting by role, industry, and company size",
      "Intent-based targeting using firmographic and behavioral signals",
      "Lead magnets &amp; gated content built around real buyer questions",
      "CRM integration &amp; automated nurture sequences for longer sales cycles",
      "Sales &amp; marketing alignment so leads are followed up on consistently",
    ],
    forWho: "B2B companies with considered sales cycles who need a consistent, qualified pipeline — not just a spike in form fills.",
    related: [
      { label: "B2C Lead Generation", href: "/services/paid-ads/b2c/" },
      { label: "Fractional CMO / Consulting", href: "/services/consulting/" },
    ],
  })}
  `;
}

module.exports = {
  meta: {
    title: "B2B Lead Generation | Triple O Agency",
    description: "B2B lead generation and paid media services from Triple O Agency, built around considered sales cycles and buying committees.",
    path: "/services/paid-ads/b2b/",
  },
  body,
};
