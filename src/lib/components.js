// Shared HTML component builders for the Triple O Agency static site.
// Plain functions returning HTML strings — no templating dependency needed.

const SITE_NAME = "Triple O Agency";
const SITE_URL = "https://tripleoagency.com";

const NAV_ITEMS = [
  { label: "About", slug: "about", href: "/about/" },
  {
    label: "Services",
    slug: "services",
    href: "/services/",
    children: [
      { label: "SEO", href: "/services/seo/" },
      { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
      { label: "Branding & PR", href: "/services/branding/" },
      { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
      { label: "Fractional CMO / Consulting", href: "/services/consulting/" },
    ],
  },
  { label: "Our Work", slug: "work", href: "/work/" },
  { label: "Framework", slug: "framework", href: "/framework/" },
  { label: "Contact", slug: "contact", href: "/contact/" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tripleoagency/",
    icon: `<path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.5h3.4V21H3.5V8.5Zm6.2 0h3.26v1.71h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.07 2.26 4.07 5.2V21h-3.4v-6.02c0-1.44-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.18V21h-3.39V8.5Z"/>`,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tripleoagency/",
    icon: `<path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12.87 1.33Zm0 1.98c-3.15 0-3.5.01-4.73.07-1.14.05-1.76.24-2.17.39a3.5 3.5 0 0 0-1.3.85 3.5 3.5 0 0 0-.85 1.3c-.15.41-.34 1.03-.39 2.17-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.05 1.14.24 1.76.39 2.17.16.42.37.78.85 1.3.42.42.78.7 1.3.85.41.15 1.03.34 2.17.39 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c1.14-.05 1.76-.24 2.17-.39a3.5 3.5 0 0 0 1.3-.85 3.5 3.5 0 0 0 .85-1.3c.15-.41.34-1.03.39-2.17.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.05-1.14-.24-1.76-.39-2.17a3.5 3.5 0 0 0-.85-1.3 3.5 3.5 0 0 0-1.3-.85c-.41-.15-1.03-.34-2.17-.39-1.23-.06-1.58-.07-4.73-.07Zm0 3.37a4.45 4.45 0 1 1 0 8.9 4.45 4.45 0 0 1 0-8.9Zm0 1.98a2.47 2.47 0 1 0 0 4.94 2.47 2.47 0 0 0 0-4.94Zm4.63-2.2a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08Z"/>`,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Triple-O-Agency-61574977571467/",
    icon: `<path d="M13.5 21v-8.1h2.72l.4-3.16h-3.12V7.72c0-.91.25-1.53 1.56-1.53h1.67V3.36C16.42 3.25 15.4 3.16 14.24 3.16c-2.4 0-4.05 1.47-4.05 4.16v2.42H7.46v3.16h2.73V21h3.31Z"/>`,
  },
];

function iconArrow(cls = "w-4 h-4") {
  return `<svg class="${cls}" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10h11M10.5 4.5 16 10l-5.5 5.5"/></svg>`;
}

/** Decorative interlocking-rings motif echoing the wordmark, used as a background flourish. */
function ringsDecor({ cls = "", opacity = "0.08", color = "currentColor", size = 480 } = {}) {
  const r = size * 0.22;
  const cy = size / 2;
  const c1 = size * 0.36;
  const c2 = size * 0.5;
  const c3 = size * 0.64;
  return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" style="opacity:${opacity}" aria-hidden="true">
    <circle cx="${c1}" cy="${cy}" r="${r}" stroke="${color}" stroke-width="1.5"/>
    <circle cx="${c2}" cy="${cy}" r="${r}" stroke="${color}" stroke-width="1.5"/>
    <circle cx="${c3}" cy="${cy}" r="${r}" stroke="${color}" stroke-width="1.5"/>
  </svg>`;
}

function head({ title, description, path }) {
  const canonical = `${SITE_URL}${path}`;
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/svg+xml" href="/assets/img/logo-mark-dark.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="/assets/css/style.css" />
  <style>
    @view-transition { navigation: auto; }
    ::view-transition-old(root) { animation-duration: 0.25s; }
    ::view-transition-new(root) { animation-duration: 0.3s; }
  </style>`;
}

function logoLockup({ theme = "dark", withWordmark = true, size = "h-9" } = {}) {
  const mark = theme === "dark" ? "/assets/img/logo-mark-cream.svg" : "/assets/img/logo-mark-dark.svg";
  const textColor = theme === "dark" ? "text-cream" : "text-deep-green";
  return `<span class="inline-flex items-center gap-3">
    <img src="${mark}" alt="Triple O Agency mark" class="${size} w-auto" width="36" height="36" />
    ${withWordmark ? `<span class="font-heading font-bold tracking-wide ${textColor} text-lg leading-none hidden xs:inline">TRIPLE O<span class="block text-[0.6rem] font-semibold tracking-eyebrow ${theme === "dark" ? "text-cream/60" : "text-deep-green/60"} mt-0.5">AGENCY</span></span>` : ""}
  </span>`;
}

function nav(activeSlug) {
  const desktopItems = NAV_ITEMS.map((item) => {
    const isActive = item.slug === activeSlug;
    const activeCls = isActive ? "text-leather" : "text-cream/90 hover:text-cream";
    if (item.children) {
      return `<div class="relative group">
        <a href="${item.href}" class="nav-link ${activeCls} flex items-center gap-1">
          ${item.label}
          <svg class="w-3 h-3 mt-0.5 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4.5 6 7.5 9 4.5"/></svg>
        </a>
        <div class="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out-expo z-50">
          <div class="bg-deep-green border border-cream/10 rounded-sm shadow-warm-lg py-2 min-w-[240px]">
            ${item.children
              .map(
                (c) => `<a href="${c.href}" class="block px-5 py-2.5 text-sm font-heading text-cream/85 hover:text-leather hover:bg-white/5 transition-colors duration-150">${c.label}</a>`
              )
              .join("")}
          </div>
        </div>
      </div>`;
    }
    return `<a href="${item.href}" class="nav-link ${activeCls}">${item.label}</a>`;
  }).join("");

  const mobileItems = NAV_ITEMS.map((item) => {
    if (item.children) {
      return `<div class="border-b border-cream/10">
        <button type="button" class="mobile-accordion-trigger w-full flex items-center justify-between py-4 font-heading text-cream text-base uppercase tracking-wide">
          ${item.label}
          <svg class="w-4 h-4 transition-transform duration-300" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4.5 6 7.5 9 4.5"/></svg>
        </button>
        <div class="mobile-accordion-panel overflow-hidden" style="max-height:0">
          <div class="pb-4 flex flex-col gap-1">
            ${item.children.map((c) => `<a href="${c.href}" class="py-2.5 pl-4 text-cream/70 font-body text-base border-l border-cream/20">${c.label}</a>`).join("")}
          </div>
        </div>
      </div>`;
    }
    return `<a href="${item.href}" class="block py-4 border-b border-cream/10 font-heading text-cream text-base uppercase tracking-wide">${item.label}</a>`;
  }).join("");

  return `<header id="site-nav" class="fixed top-0 inset-x-0 z-50 transition-all duration-300" data-nav>
    <nav class="container-page flex items-center justify-between py-5" aria-label="Primary">
      <a href="/" class="shrink-0 z-50" aria-label="${SITE_NAME} — Home">${logoLockup({ theme: "dark" })}</a>
      <div class="hidden lg:flex items-center gap-9">
        ${desktopItems}
      </div>
      <div class="hidden lg:block">
        <a href="/contact/" class="btn-primary text-xs px-6 py-3">Book a Consultation</a>
      </div>
      <button id="mobile-menu-btn" type="button" class="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <span class="sr-only">Menu</span>
        <div class="w-6 flex flex-col gap-1.5" id="burger">
          <span class="block h-0.5 w-full bg-cream transition-all duration-300 origin-center" data-line="1"></span>
          <span class="block h-0.5 w-full bg-cream transition-all duration-300" data-line="2"></span>
          <span class="block h-0.5 w-full bg-cream transition-all duration-300 origin-center" data-line="3"></span>
        </div>
      </button>
    </nav>
  </header>
  <div id="mobile-menu" class="lg:hidden fixed inset-0 bg-deep-green z-40 translate-x-full transition-transform duration-500 ease-out-expo">
    <div class="container-page pt-28 pb-10 h-full overflow-y-auto flex flex-col">
      <div class="flex-1">${mobileItems}</div>
      <a href="/contact/" class="btn-primary w-full mt-8">Book a Consultation</a>
    </div>
  </div>`;
}

function footer() {
  const year = new Date().getFullYear();
  const cols = [
    {
      title: "Services",
      links: [
        { label: "SEO", href: "/services/seo/" },
        { label: "Paid Ads / Lead Gen", href: "/services/paid-ads/" },
        { label: "Branding & PR", href: "/services/branding/" },
        { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
        { label: "Fractional CMO / Consulting", href: "/services/consulting/" },
      ],
    },
    {
      title: "Agency",
      links: [
        { label: "About", href: "/about/" },
        { label: "Our Story", href: "/about/our-story/" },
        { label: "Our Philosophy", href: "/about/our-philosophy/" },
        { label: "Our Work", href: "/work/" },
        { label: "The Triple O Framework", href: "/framework/" },
        { label: "Insights", href: "/insights/" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "801-201-6376", href: "tel:+18012016376" },
        { label: "garrett@tripleoagency.com", href: "mailto:garrett@tripleoagency.com" },
        { label: "Salt Lake City, Utah", href: "/contact/" },
      ],
    },
  ];

  return `<footer class="bg-diagonal-green text-cream relative overflow-hidden">
    <div class="container-page py-20 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-14">
        <div>
          <a href="/" class="inline-block mb-5">${logoLockup({ theme: "dark" })}</a>
          <p class="text-cream/65 max-w-sm leading-relaxed">Outthink. Outperform. Marketing built on principles that endure — for Salt Lake City businesses and beyond.</p>
          <div class="flex items-center gap-4 mt-6">
            ${SOCIALS.map(
              (s) => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" class="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-leather hover:border-leather transition-colors duration-200"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">${s.icon}</svg></a>`
            ).join("")}
          </div>
        </div>
        ${cols
          .map(
            (col) => `<div>
          <p class="eyebrow-light mb-5">${col.title}</p>
          <ul class="flex flex-col gap-3">
            ${col.links.map((l) => `<li><a href="${l.href}" class="text-cream/70 hover:text-leather transition-colors duration-200 text-[0.95rem]">${l.label}</a></li>`).join("")}
          </ul>
        </div>`
          )
          .join("")}
      </div>
      <div class="rule-light my-12"></div>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/50">
        <p>&copy; ${year} Triple O Agency. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="/privacy-policy/" class="hover:text-cream/80 transition-colors duration-200">Privacy Policy</a>
          <a href="/terms/" class="hover:text-cream/80 transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </div>
    <div class="absolute -right-20 -bottom-24 pointer-events-none">${ringsDecor({ color: "#E8E4D9", opacity: "0.06", size: 420 })}</div>
  </footer>`;
}

function eyebrow(text, { light = false } = {}) {
  return `<p class="${light ? "eyebrow-light" : "eyebrow"}" data-reveal data-reveal-y="12">${text}</p>`;
}

function breadcrumbs(items) {
  return `<nav aria-label="Breadcrumb" class="flex items-center flex-wrap gap-2 text-xs font-heading uppercase tracking-wide text-cream/50">
    ${items
      .map((item, i) => {
        const isLast = i === items.length - 1;
        return `${i > 0 ? `<span aria-hidden="true">/</span>` : ""}${
          isLast ? `<span class="text-cream/80">${item.label}</span>` : `<a href="${item.href}" class="hover:text-cream/80 transition-colors">${item.label}</a>`
        }`;
      })
      .join("")}
  </nav>`;
}

/** Hero for interior (non-home) pages: deep-green, breadcrumb, eyebrow, title, optional lede. */
function pageHero({ eyebrow: eb, title, lede, crumbItems }) {
  return `<section class="relative bg-diagonal-green text-cream pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
    <div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">${ringsDecor({ color: "#E8E4D9", opacity: "0.07", size: 560 })}</div>
    <div class="container-page relative z-10">
      ${crumbItems ? breadcrumbs(crumbItems) : ""}
      <p class="eyebrow-light mt-6 mb-5" data-reveal data-reveal-y="12">${eb}</p>
      <h1 class="text-4xl sm:text-5xl md:text-6xl max-w-3xl text-balance" data-reveal data-reveal-y="20">${title}</h1>
      ${lede ? `<p class="font-body italic text-cream/75 text-lg md:text-xl max-w-2xl mt-6" data-reveal data-reveal-y="16">${lede}</p>` : ""}
    </div>
  </section>`;
}

function ctaBand({ eyebrow: eb = "Let's Talk", title = "Ready to outthink and outperform?", body = "Book a free consultation and let's map out where Triple O can move the needle fastest.", primary = { label: "Book a Consultation", href: "/contact/" }, secondary = null } = {}) {
  return `<section class="relative bg-diagonal-green text-cream section overflow-hidden">
    <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">${ringsDecor({ color: "#E8E4D9", opacity: "0.05", size: 640 })}</div>
    <div class="container-page relative z-10 text-center max-w-2xl mx-auto">
      <p class="eyebrow-light mb-5" data-reveal data-reveal-y="12">${eb}</p>
      <h2 class="text-3xl sm:text-4xl md:text-5xl text-balance mb-6" data-reveal data-reveal-y="20">${title}</h2>
      <p class="text-cream/70 text-lg mb-10" data-reveal data-reveal-y="16">${body}</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-reveal data-reveal-y="16">
        <a href="${primary.href}" class="btn-primary">${primary.label}</a>
        ${secondary ? `<a href="${secondary.href}" class="btn-outline-on-dark">${secondary.label}</a>` : ""}
      </div>
    </div>
  </section>`;
}

function serviceCard({ title, description, href, index }) {
  const num = String(index).padStart(2, "0");
  return `<a href="${href}" class="card group flex flex-col h-full" data-reveal data-reveal-y="24">
    <span class="font-heading text-leather-light/70 text-sm mb-4">${num}</span>
    <h3 class="text-xl mb-3 group-hover:text-leather transition-colors duration-200">${title}</h3>
    <p class="text-text-dark/65 text-[0.95rem] leading-relaxed flex-1">${description}</p>
    <span class="inline-flex items-center gap-2 mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-deep-green group-hover:gap-3 group-hover:text-leather transition-all duration-200">Learn more ${iconArrow()}</span>
  </a>`;
}

function testimonialCard({ quote, name, company }) {
  return `<div class="card bg-cream" data-reveal data-reveal-y="24">
    <svg class="w-8 h-8 text-leather-light/40 mb-4" viewBox="0 0 32 32" fill="currentColor"><path d="M9.5 18c-2.8 0-5-2.2-5-5s2.2-5 5-5c.3 0 .6 0 .9.1C11.4 4.9 14.6 3 18 3v3.2c-2.4.6-4.2 2.4-4.7 4.6.4-.1.8-.1 1.2-.1 2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-2.7zm14 0c-2.8 0-5-2.2-5-5s2.2-5 5-5c.3 0 .6 0 .9.1C25.4 4.9 28.6 3 32 3v3.2c-2.4.6-4.2 2.4-4.7 4.6.4-.1.8-.1 1.2-.1 2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-2.7z" transform="translate(-9 -3) scale(0.7)"/></svg>
    <p class="font-body italic text-lg text-text-dark/80 leading-relaxed mb-6">&ldquo;${quote}&rdquo;</p>
    <p class="font-heading font-semibold text-sm">${name}</p>
    <p class="font-heading text-xs uppercase tracking-wide text-text-dark/50">${company}</p>
  </div>`;
}

function statBlock({ value, label }) {
  return `<div class="text-center" data-reveal data-reveal-y="16">
    <p class="font-heading font-bold text-4xl sm:text-5xl text-leather" data-count="${value}">0</p>
    <p class="eyebrow mt-3">${label}</p>
  </div>`;
}

function pillarCard({ letter, title, description, href }) {
  return `<a href="${href}" class="group relative card bg-white flex flex-col h-full" data-reveal data-reveal-y="24">
    <span class="font-heading font-bold text-6xl text-cream absolute top-4 right-6 select-none" style="-webkit-text-stroke:1.5px #6B4423; color:transparent;">${letter}</span>
    <h3 class="text-2xl mb-3 relative">${title}</h3>
    <p class="text-text-dark/65 leading-relaxed relative flex-1">${description}</p>
    <span class="inline-flex items-center gap-2 mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-deep-green group-hover:gap-3 group-hover:text-leather transition-all duration-200 relative">Explore ${iconArrow()}</span>
  </a>`;
}

function iconCheck(cls = "w-5 h-5") {
  return `<svg class="${cls} shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5 8 14.5 16 5.5"/></svg>`;
}

function checklist(items, { cols = 1 } = {}) {
  const colClass = cols === 2 ? "sm:grid-cols-2" : "";
  return `<ul class="grid grid-cols-1 ${colClass} gap-4" data-grid-reveal>
    ${items
      .map(
        (item) => `<li class="flex items-start gap-3 text-text-dark/75 leading-relaxed"><span class="text-leather mt-0.5">${iconCheck()}</span><span>${item}</span></li>`
      )
      .join("")}
  </ul>`;
}

function relatedLinks(title, items) {
  return `<div>
    <p class="eyebrow mb-5" data-reveal data-reveal-y="12">${title}</p>
    <div class="flex flex-wrap gap-3" data-grid-reveal>
      ${items
        .map(
          (l) => `<a href="${l.href}" class="inline-flex items-center gap-2 bg-white border border-deep-green/10 rounded-sm px-5 py-3 text-sm font-heading font-medium hover:border-leather hover:text-leather transition-colors duration-200">${l.label} ${iconArrow("w-3.5 h-3.5")}</a>`
        )
        .join("")}
    </div>
  </div>`;
}

/** Standard service-detail body: intro lede, feature checklist, "who it's for", related links. */
function serviceDetail({ intro, features, forWho, related }) {
  return `<section class="section bg-white">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-7">
        <p class="text-text-dark/75 leading-relaxed text-lg mb-10" data-reveal data-reveal-y="20">${intro}</p>
        ${checklist(features)}
      </div>
      <div class="lg:col-span-5">
        <div class="card bg-cream" data-reveal data-reveal-y="24">
          <p class="eyebrow mb-4">Who It's For</p>
          <p class="text-text-dark/70 leading-relaxed">${forWho}</p>
          <a href="/contact/" class="btn-primary w-full mt-8">Get Started</a>
        </div>
      </div>
    </div>
  </section>
  ${
    related
      ? `<section class="section bg-soft-grey"><div class="container-page">${relatedLinks("Related Services", related)}</div></section>`
      : ""
  }`;
}

function questionsList(items) {
  return `<div class="space-y-5" data-grid-reveal>
    ${items
      .map(
        (q) => `<div class="border-l-2 border-leather pl-6 py-1">
      <p class="font-body italic text-lg sm:text-xl text-text-dark/80 leading-relaxed">${q}</p>
    </div>`
      )
      .join("")}
  </div>`;
}

function principleQuote(text, { eyebrow: eb = "The Principle" } = {}) {
  return `<section class="relative bg-diagonal-green text-cream section overflow-hidden">
    <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">${ringsDecor({ color: "#E8E4D9", opacity: "0.05", size: 600 })}</div>
    <div class="container-page relative z-10 max-w-3xl mx-auto text-center">
      <p class="eyebrow-light mb-6" data-reveal data-reveal-y="12">${eb}</p>
      <p class="font-body italic text-2xl sm:text-3xl leading-relaxed text-balance" data-reveal data-reveal-y="20">${text}</p>
    </div>
  </section>`;
}

function page({ title, description, path, activeSlug, bodyHtml, isHome = false }) {
  return `<!doctype html>
<html lang="en">
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THJ7GLP9');</script>
<!-- End Google Tag Manager -->
${head({ title, description, path })}
</head>
<body class="bg-soft-grey"${isHome ? ' data-page="home"' : ""}>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THJ7GLP9"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
${nav(activeSlug)}
<main>
${bodyHtml}
</main>
${footer()}
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="/assets/js/main.js"></script>
</body>
</html>`;
}

module.exports = {
  SITE_NAME,
  SITE_URL,
  NAV_ITEMS,
  page,
  eyebrow,
  pageHero,
  ctaBand,
  serviceCard,
  testimonialCard,
  statBlock,
  pillarCard,
  breadcrumbs,
  ringsDecor,
  iconArrow,
  iconCheck,
  checklist,
  relatedLinks,
  serviceDetail,
  questionsList,
  principleQuote,
  logoLockup,
};
