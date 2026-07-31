function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Branding & PR",
    title: "Branding that makes you unmistakable.",
    lede: "Positioning and identity that make the rest of your marketing easier.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Branding & PR", href: "/services/branding/" },
    ],
  })}

  ${c.serviceDetail({
    intro:
      "Strong branding isn't a logo — it's the clear positioning and story that makes every other marketing dollar work harder. We help you identify what makes your business genuinely different, then translate that into a visual identity, messaging, and public relations strategy that carries it further.",
    features: [
      "Brand positioning &amp; messaging strategy grounded in what makes you different",
      "Visual identity systems — logo, color, typography, and brand guidelines",
      "Website &amp; collateral design aligned to your new positioning",
      "PR strategy &amp; media outreach to build third-party credibility",
      "Brand voice guidelines so every channel sounds like the same company",
    ],
    forWho: "Businesses that look and sound like everyone else in their category, and are ready to change that.",
    related: [
      { label: "SEO", href: "/services/seo/" },
      { label: "Fractional CMO / Consulting", href: "/services/consulting/" },
    ],
  })}
  `;
}

module.exports = {
  meta: {
    title: "Branding | Triple O Agency",
    description: "Branding and PR services from Triple O Agency — positioning, messaging, and visual identity that make you unmistakable.",
    path: "/services/branding/",
  },
  body,
};
