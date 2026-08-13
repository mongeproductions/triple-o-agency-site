function docSection(id, title, html) {
  return `<div class="pb-10 mb-10 border-b border-deep-green/10" id="${id}">
    <h2 class="text-xl mb-4">${title}</h2>
    <div class="text-text-dark/70 leading-relaxed space-y-4">${html}</div>
  </div>`;
}

function body(c) {
  const updated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return `
  ${c.pageHero({
    eyebrow: "Legal",
    title: "Privacy Policy",
    lede: `Last updated: ${updated}`,
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">

      <div class="card bg-cream mb-14" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-4">In Plain English</p>
        <ul class="space-y-3 text-text-dark/75 leading-relaxed">
          <li class="flex items-start gap-3"><span class="text-leather mt-0.5">•</span><span>We collect basic contact info when you reach out, plus standard site analytics — nothing you didn't hand over yourself or that isn't normal for a business website.</span></li>
          <li class="flex items-start gap-3"><span class="text-leather mt-0.5">•</span><span>We use ad and analytics tools (like Google Analytics and Google/Meta ad pixels) that place cookies, which you can opt out of.</span></li>
          <li class="flex items-start gap-3"><span class="text-leather mt-0.5">•</span><span>We don't sell your personal information.</span></li>
          <li class="flex items-start gap-3"><span class="text-leather mt-0.5">•</span><span>You can ask us what we have on you, and ask us to delete it, at any time.</span></li>
        </ul>
      </div>

      <div class="bg-soft-grey border border-deep-green/10 p-8 mb-14" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-4">On This Page</p>
        <ol class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-decimal list-inside text-sm text-deep-green">
          <li><a href="#collect" class="hover:text-leather transition-colors">Information We Collect</a></li>
          <li><a href="#use" class="hover:text-leather transition-colors">How We Use Information</a></li>
          <li><a href="#cookies" class="hover:text-leather transition-colors">Cookies &amp; Tracking</a></li>
          <li><a href="#third-party" class="hover:text-leather transition-colors">Third-Party Services</a></li>
          <li><a href="#sharing" class="hover:text-leather transition-colors">Data Sharing &amp; Disclosure</a></li>
          <li><a href="#retention" class="hover:text-leather transition-colors">Data Retention</a></li>
          <li><a href="#rights" class="hover:text-leather transition-colors">Your Rights &amp; Choices</a></li>
          <li><a href="#security" class="hover:text-leather transition-colors">Data Security</a></li>
          <li><a href="#children" class="hover:text-leather transition-colors">Children's Privacy</a></li>
          <li><a href="#changes" class="hover:text-leather transition-colors">Changes to This Policy</a></li>
          <li><a href="#contact" class="hover:text-leather transition-colors">Contact Us</a></li>
        </ol>
      </div>

      <p class="text-text-dark/75 leading-relaxed mb-10">Triple O Agency ("Triple O," "we," "us," or "our") operates tripleoagency.com (the "Site") and provides marketing services including SEO, AEO, paid advertising, branding, and consulting (the "Services"). This Privacy Policy explains what information we collect through the Site, how we use it, and the choices you have. By using the Site, you agree to the practices described here.</p>

      ${docSection(
        "collect",
        "1. Information We Collect",
        `<p>We collect information in a few ways:</p>
        <ul class="list-disc list-inside space-y-2">
          <li><strong class="text-deep-green">Information you provide directly</strong> — your name, email address, phone number, company, and any details you share when you fill out a contact form, book a call, or email us.</li>
          <li><strong class="text-deep-green">Usage data</strong> — pages visited, time on site, referral source, browser and device type, and general location (city/region level), collected automatically through analytics tools.</li>
          <li><strong class="text-deep-green">Client account data</strong> — if you become a client, information related to your business's marketing accounts (e.g., Google Search Console, Google Ads, Google Business Profile) that you authorize us to access in order to deliver the Services.</li>
        </ul>`
      )}

      ${docSection(
        "use",
        "2. How We Use Information",
        `<ul class="list-disc list-inside space-y-2">
          <li>Respond to inquiries and schedule consultations</li>
          <li>Deliver, manage, and report on the Services for active clients</li>
          <li>Improve the Site and understand how visitors use it</li>
          <li>Send communications you've opted into, such as follow-ups after a form submission</li>
          <li>Meet legal, accounting, or contractual obligations</li>
        </ul>
        <p>We do not use the personal information you submit through the Site to make automated decisions that produce legal or similarly significant effects.</p>`
      )}

      ${docSection(
        "cookies",
        "3. Cookies &amp; Tracking Technologies",
        `<p>The Site uses cookies and similar technologies to remember basic preferences, measure traffic, and support advertising tools used in our own marketing (and, where applicable, tools used to manage client ad campaigns). You can disable cookies through your browser settings; doing so may affect how parts of the Site function.</p>`
      )}

      ${docSection(
        "third-party",
        "4. Third-Party Services",
        `<p>We use third-party tools to operate the Site and run our own marketing, which may collect data independently under their own privacy policies. These currently include analytics platforms (such as Google Analytics), advertising platforms (such as Google Ads and Meta Ads), and email or scheduling tools used to manage inquiries. We encourage you to review the privacy policies of these providers directly.</p>`
      )}

      ${docSection(
        "sharing",
        "5. Data Sharing &amp; Disclosure",
        `<p>We do not sell your personal information. We may share information with:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Service providers who help us operate the Site or deliver the Services (e.g., hosting, email, analytics, scheduling)</li>
          <li>Professional advisors, such as accountants or legal counsel, when necessary</li>
          <li>Authorities, if required by law, subpoena, or legal process</li>
          <li>A successor entity, in the event of a merger, acquisition, or sale of assets</li>
        </ul>`
      )}

      ${docSection(
        "retention",
        "6. Data Retention",
        `<p>We retain personal information for as long as needed to respond to your inquiry, fulfill an active client engagement, or comply with legal and accounting obligations, after which it is deleted or anonymized.</p>`
      )}

      ${docSection(
        "rights",
        "7. Your Rights &amp; Choices",
        `<p>Depending on where you're located, you may have the right to access, correct, delete, or restrict the use of your personal information, or to opt out of certain data uses. To exercise any of these rights, contact us using the details below and we will respond within a reasonable timeframe.</p>`
      )}

      ${docSection(
        "security",
        "8. Data Security",
        `<p>We take reasonable technical and organizational measures to protect the information we collect. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>`
      )}

      ${docSection(
        "children",
        "9. Children's Privacy",
        `<p>The Site and Services are directed at businesses and professionals, not children. We do not knowingly collect personal information from anyone under the age of 16.</p>`
      )}

      ${docSection(
        "changes",
        "10. Changes to This Policy",
        `<p>We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Material changes will be reflected here directly.</p>`
      )}

      <div class="bg-diagonal-green text-cream p-10 mt-4" id="contact" data-reveal data-reveal-y="20">
        <h2 class="text-xl text-cream mb-3">11. Contact Us</h2>
        <p class="text-cream/70 leading-relaxed">Questions about this policy or your information? Reach us at <a href="mailto:garrett@tripleoagency.com" class="text-leather-light underline underline-offset-4">garrett@tripleoagency.com</a> or <a href="tel:+18012016376" class="text-leather-light underline underline-offset-4">801-201-6376</a>.</p>
      </div>

    </div>
  </section>
  `;
}

module.exports = {
  meta: {
    title: "Privacy Policy | Triple O Agency",
    description: "Privacy policy for Triple O Agency — what information we collect, how we use it, and your rights and choices.",
    path: "/privacy-policy/",
  },
  body,
};
