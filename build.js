#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const c = require("./src/lib/components");

const DIST = path.join(__dirname, "dist");

const PAGES = [
  { out: "index.html", activeSlug: "home", mod: "home" },

  { out: "about/index.html", activeSlug: "about", mod: "about" },
  { out: "about/our-story/index.html", activeSlug: "about", mod: "about-our-story" },
  { out: "about/our-team/index.html", activeSlug: "about", mod: "about-our-team" },
  { out: "about/our-philosophy/index.html", activeSlug: "about", mod: "about-our-philosophy" },
  { out: "about/process/index.html", activeSlug: "about", mod: "about-process" },

  { out: "services/index.html", activeSlug: "services", mod: "services" },
  { out: "services/seo/index.html", activeSlug: "services", mod: "services-seo" },
  { out: "services/seo/aeo/index.html", activeSlug: "services", mod: "services-seo-aeo" },
  { out: "services/paid-ads/index.html", activeSlug: "services", mod: "services-paid-ads" },
  { out: "services/paid-ads/b2c/index.html", activeSlug: "services", mod: "services-paid-ads-b2c" },
  { out: "services/paid-ads/b2b/index.html", activeSlug: "services", mod: "services-paid-ads-b2b" },
  { out: "services/branding/index.html", activeSlug: "services", mod: "services-branding" },
  { out: "services/audience-intent/index.html", activeSlug: "services", mod: "services-audience-intent" },
  { out: "services/audience-intent/visitor-identification/index.html", activeSlug: "services", mod: "services-audience-intent-visitor-id" },
  { out: "services/consulting/index.html", activeSlug: "services", mod: "services-consulting" },
  { out: "services/consulting/fractional-cmo/index.html", activeSlug: "services", mod: "services-consulting-fractional-cmo" },

  { out: "work/index.html", activeSlug: "work", mod: "work" },
  { out: "work/arrival-3d/index.html", activeSlug: "work", mod: "work-arrival-3d" },
  { out: "work/lifespan-fitness/index.html", activeSlug: "work", mod: "work-lifespan-fitness" },
  { out: "work/utah-climate-pros/index.html", activeSlug: "work", mod: "work-utah-climate-pros" },

  { out: "framework/index.html", activeSlug: "framework", mod: "framework" },
  { out: "framework/optics/index.html", activeSlug: "framework", mod: "framework-optics" },
  { out: "framework/optimization/index.html", activeSlug: "framework", mod: "framework-optimization" },
  { out: "framework/omnipresence/index.html", activeSlug: "framework", mod: "framework-omnipresence" },

  { out: "contact/index.html", activeSlug: "contact", mod: "contact" },
  { out: "insights/index.html", activeSlug: "insights", mod: "insights" },
  { out: "privacy-policy/index.html", activeSlug: "", mod: "privacy-policy" },
  { out: "terms/index.html", activeSlug: "", mod: "terms" },
  { out: "404.html", activeSlug: "", mod: "404" },
];

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

let count = 0;
for (const entry of PAGES) {
  const modPath = path.join(__dirname, "src", "pages", entry.mod + ".js");
  if (!fs.existsSync(modPath)) {
    console.warn(`⚠︎  Skipping "${entry.out}" — missing src/pages/${entry.mod}.js`);
    continue;
  }
  delete require.cache[require.resolve(modPath)];
  const mod = require(modPath);
  const meta = mod.meta;
  const bodyHtml = mod.body(c);

  const html = c.page({
    title: meta.title,
    description: meta.description,
    path: meta.path,
    activeSlug: entry.activeSlug,
    isHome: entry.activeSlug === "home",
    bodyHtml,
  });

  const outFile = path.join(DIST, entry.out);
  ensureDir(outFile);
  fs.writeFileSync(outFile, html, "utf-8");
  count++;
}

console.log(`✔ Built ${count}/${PAGES.length} pages into dist/`);
