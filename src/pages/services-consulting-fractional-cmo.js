function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Consulting / Fractional CMO",
    title: "Fractional CMO.",
    lede: "A dedicated marketing executive, sized to fit your budget.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Consulting", href: "/services/consulting/" },
      { label: "Fractional CMO", href: "/services/consulting/fractional-cmo/" },
    ],
  })}

  ${c.serviceDetail({
    intro:
      "A Fractional CMO engagement puts a senior marketing executive at the table — setting strategy, running point on major decisions, and holding every channel accountable to the same goals — for a fraction of the cost of a full-time hire.",
    features: [
      "Ongoing strategic leadership across all marketing channels",
      "Direct involvement in major campaigns, launches, and rebrands",
      "Team &amp; agency management so every vendor is pulling in the same direction",
      "Board- and leadership-level reporting on marketing performance",
      "Flexible engagement — scale up during launches, scale down between them",
    ],
    forWho: "Businesses between $1M–$50M in revenue that have outgrown ad-hoc marketing but aren't ready for a full executive team.",
    related: [
      { label: "Consulting", href: "/services/consulting/" },
      { label: "Our Philosophy", href: "/about/our-philosophy/" },
    ],
  })}
  `;
}

module.exports = {
  meta: {
    title: "Fractional CMO | Triple O Agency",
    description: "Fractional CMO services from Triple O Agency — senior marketing leadership sized to fit your budget.",
    path: "/services/consulting/fractional-cmo/",
  },
  body,
};
