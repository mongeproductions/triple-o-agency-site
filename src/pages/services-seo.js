function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / SEO",
    title: "SEO that compounds, not campaigns that expire.",
    lede: "Rank for what your customers are actually searching for — and stay there.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "SEO", href: "/services/seo/" },
    ],
  })}

  ${c.serviceDetail({
    intro:
      "Paid ads stop the moment you stop paying. SEO builds an asset that keeps working — technical foundations, content that answers real questions, and authority that search engines (and now, AI answer engines) trust. We treat SEO as a long-term compounding investment, not a one-time audit.",
    features: [
      "Technical SEO audits &amp; fixes — site speed, crawlability, indexing, structured data",
      "Keyword &amp; content strategy built around real search intent, not vanity volume",
      "On-page optimization for existing pages plus a content roadmap for new ones",
      "Local SEO &amp; Google Business Profile optimization for Salt Lake City and beyond",
      "Link building &amp; authority development through legitimate, sustainable outreach",
      "Monthly reporting tied to rankings, traffic, and — most importantly — leads",
    ],
    forWho: "Small and medium-sized businesses who are tired of renting attention through ads and want to own organic search real estate that keeps paying off.",
    related: [
      { label: "AI Search (AEO / GEO)", href: "/services/seo/aeo/" },
      { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
      { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
    ],
  })}
  `;
}

module.exports = {
  meta: {
    title: "SEO | Triple O Agency",
    description: "SEO services and tiers from Triple O Agency — technical, content, and authority-building SEO that compounds over time.",
    path: "/services/seo/",
  },
  body,
};
