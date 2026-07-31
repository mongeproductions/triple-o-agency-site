function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Paid Ads",
    title: "Paid media that fills the pipeline, not the dashboard.",
    lede: "Every dollar tied to a lead, a lifecycle stage, and a return.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
    ],
  })}

  ${c.serviceDetail({
    intro:
      "Paid media is only as good as what happens after the click. We build campaigns across Google, Meta, and LinkedIn around real buying behavior and intent — then connect them to the CRM and lead flow so nothing falls through the cracks. Strategy differs sharply depending on whether you're selling to consumers or businesses, which is why we run B2C and B2B lead generation as distinct disciplines.",
    features: [
      "Campaign strategy &amp; management across Google, Meta, and LinkedIn Ads",
      "Landing pages built to convert, not just look good",
      "CRM &amp; automated lead flow setup so leads are followed up on, every time",
      "Audience &amp; creative testing based on real performance data",
      "Transparent reporting tied to cost-per-lead and pipeline value, not just clicks",
    ],
    forWho: "Businesses ready to turn ad spend into a predictable, measurable pipeline instead of a line item they can't explain.",
    related: [
      { label: "B2C Lead Generation", href: "/services/paid-ads/b2c/" },
      { label: "B2B Lead Generation", href: "/services/paid-ads/b2b/" },
      { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
    ],
  })}
  `;
}

module.exports = {
  meta: {
    title: "Paid Ads Management | Triple O Agency",
    description: "Paid media and lead generation services from Triple O Agency, spanning B2C and B2B campaigns across Google, Meta, and LinkedIn.",
    path: "/services/paid-ads/",
  },
  body,
};
