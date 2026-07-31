function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Paid Ads / B2C",
    title: "B2C Lead Generation.",
    lede: "Reach consumers in the moment they're ready to buy.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
      { label: "B2C", href: "/services/paid-ads/b2c/" },
    ],
  })}

  ${c.serviceDetail({
    intro:
      "Consumer buying decisions are fast, emotional, and increasingly made on a phone. B2C lead generation campaigns are built for that reality — sharp creative, mobile-first landing pages, and audiences built on real purchase intent rather than broad demographic guesses.",
    features: [
      "Meta &amp; Google Ads campaigns tuned for consumer purchase behavior",
      "Mobile-first landing pages designed to convert in seconds, not minutes",
      "Creative testing across offers, imagery, and messaging",
      "Retargeting sequences that bring warm traffic back to convert",
      "Intent-based audience targeting instead of broad demographic spray",
    ],
    forWho: "Retail, home services, e-commerce, and other consumer-facing businesses that need a steady flow of qualified leads or sales.",
    related: [
      { label: "B2B Lead Generation", href: "/services/paid-ads/b2b/" },
      { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
    ],
  })}
  `;
}

module.exports = {
  meta: {
    title: "B2C Lead Generation | Triple O Agency",
    description: "B2C lead generation and paid media services from Triple O Agency, built around real consumer purchase intent.",
    path: "/services/paid-ads/b2c/",
  },
  body,
};
