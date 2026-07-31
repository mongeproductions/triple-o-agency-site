function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / SEO / AI Search",
    title: "AI Answer & Generative Engine Optimization.",
    lede: "Search didn't disappear — it moved into ChatGPT, Perplexity, and Google's AI Overviews.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "SEO", href: "/services/seo/" },
      { label: "AI AEO & GEO", href: "/services/seo/aeo/" },
    ],
  })}

  ${c.serviceDetail({
    intro:
      "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are how you show up when your customers ask an AI assistant instead of typing into a search box. The rules are different — it's less about ten blue links and more about being the source an AI trusts enough to cite. We build content and structure specifically for that shift.",
    features: [
      "Content structured for direct extraction by AI answer engines",
      "Structured data &amp; schema markup that makes your site machine-readable",
      "Entity &amp; authority building so AI models associate your brand with your expertise",
      "Monitoring for brand visibility across ChatGPT, Perplexity, and AI Overviews",
      "Traditional SEO foundations, since strong technical SEO underpins both",
    ],
    forWho: "Businesses who want to be found in the next generation of search — not just the one we've had for twenty years.",
    related: [
      { label: "SEO", href: "/services/seo/" },
      { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
    ],
  })}
  `;
}

module.exports = {
  meta: {
    title: "AEO & GEO | Triple O Agency",
    description: "AI Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) services from Triple O Agency.",
    path: "/services/seo/aeo/",
  },
  body,
};
