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
    title: "Terms of Service",
    lede: `Last updated: ${updated}`,
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Terms of Service", href: "/terms/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl">

      <div class="card bg-cream mb-14" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-4">In Plain English</p>
        <ul class="space-y-3 text-text-dark/75 leading-relaxed">
          <li class="flex items-start gap-3"><span class="text-leather mt-0.5">•</span><span>These terms cover using our website. Actual client work is governed by the separate agreement or proposal you sign with us — this page doesn't replace that.</span></li>
          <li class="flex items-start gap-3"><span class="text-leather mt-0.5">•</span><span>Everything on this site is ours (or licensed to us) — don't copy the site itself.</span></li>
          <li class="flex items-start gap-3"><span class="text-leather mt-0.5">•</span><span>We can't guarantee specific marketing results like rankings, traffic, or revenue — nobody honest can.</span></li>
          <li class="flex items-start gap-3"><span class="text-leather mt-0.5">•</span><span>Standard liability limits apply, as they would with any professional services firm.</span></li>
        </ul>
      </div>

      <div class="bg-soft-grey border border-deep-green/10 p-8 mb-14" data-reveal data-reveal-y="20">
        <p class="eyebrow mb-4">On This Page</p>
        <ol class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-decimal list-inside text-sm text-deep-green">
          <li><a href="#acceptance" class="hover:text-leather transition-colors">Acceptance of Terms</a></li>
          <li><a href="#services" class="hover:text-leather transition-colors">Description of Services</a></li>
          <li><a href="#use" class="hover:text-leather transition-colors">Use of the Website</a></li>
          <li><a href="#ip" class="hover:text-leather transition-colors">Intellectual Property</a></li>
          <li><a href="#engagements" class="hover:text-leather transition-colors">Client Engagements</a></li>
          <li><a href="#disclaimer" class="hover:text-leather transition-colors">Disclaimers &amp; No Guarantee of Results</a></li>
          <li><a href="#liability" class="hover:text-leather transition-colors">Limitation of Liability</a></li>
          <li><a href="#termination" class="hover:text-leather transition-colors">Termination</a></li>
          <li><a href="#law" class="hover:text-leather transition-colors">Governing Law</a></li>
          <li><a href="#changes" class="hover:text-leather transition-colors">Changes to These Terms</a></li>
          <li><a href="#contact" class="hover:text-leather transition-colors">Contact Us</a></li>
        </ol>
      </div>

      <p class="text-text-dark/75 leading-relaxed mb-10">These Terms of Service ("Terms") govern your use of tripleoagency.com (the "Site"), operated by Triple O Agency ("Triple O," "we," "us," or "our"). By accessing or using the Site, you agree to these Terms. If you don't agree, please don't use the Site.</p>

      ${docSection(
        "acceptance",
        "1. Acceptance of Terms",
        `<p>By browsing the Site, submitting a form, or otherwise using it, you confirm that you have the authority to agree to these Terms on your own behalf or on behalf of the organization you represent.</p>`
      )}

      ${docSection(
        "services",
        "2. Description of Services",
        `<p>Triple O provides marketing services including SEO, Answer Engine Optimization (AEO), paid advertising, branding, and consulting (the "Services"). Information about the Services on the Site is provided for general informational purposes and does not itself constitute an offer or contract for services.</p>`
      )}

      ${docSection(
        "use",
        "3. Use of the Website",
        `<p>You agree to use the Site only for lawful purposes. You may not attempt to interfere with the Site's normal operation, access it through automated means beyond standard search engine indexing, or use it to transmit anything harmful or unlawful.</p>`
      )}

      ${docSection(
        "ip",
        "4. Intellectual Property",
        `<p>All content on the Site — including text, graphics, the Triple O name and mark, and page layouts — is owned by Triple O or used under license, and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from Site content without our written permission.</p>`
      )}

      ${docSection(
        "engagements",
        "5. Client Engagements",
        `<p>These Terms govern use of the Site only. Any actual engagement for the Services — scope, deliverables, timelines, fees, and payment terms — is governed by a separate signed proposal, statement of work, or services agreement between Triple O and the client. In the event of a conflict between these Terms and a signed services agreement, the services agreement controls.</p>`
      )}

      ${docSection(
        "disclaimer",
        "6. Disclaimers &amp; No Guarantee of Results",
        `<p>Marketing outcomes — including search rankings, traffic, leads, conversions, or revenue — depend on factors outside our control, including search engine and ad platform algorithms, market conditions, and competitor activity. Triple O does not guarantee specific rankings, results, or timelines, and any figures referenced on the Site or in proposals are illustrative unless explicitly stated otherwise in a signed agreement.</p>
        <p>The Site and its content are provided "as is" without warranties of any kind, express or implied.</p>`
      )}

      ${docSection(
        "liability",
        "7. Limitation of Liability",
        `<p>To the fullest extent permitted by law, Triple O and its owners, employees, and contractors will not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site. Our total liability for any claim arising from the Site will not exceed the amount, if any, you paid to us in connection with the Site itself.</p>`
      )}

      ${docSection(
        "termination",
        "8. Termination",
        `<p>We may suspend or restrict access to the Site at our discretion, for example in response to misuse. Termination of an active client engagement is governed by the applicable services agreement, not these Terms.</p>`
      )}

      ${docSection(
        "law",
        "9. Governing Law",
        `<p>These Terms are governed by the laws of the State of Utah, without regard to conflict-of-law principles.</p>`
      )}

      ${docSection(
        "changes",
        "10. Changes to These Terms",
        `<p>We may update these Terms from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the updated Terms.</p>`
      )}

      <div class="bg-diagonal-green text-cream p-10 mt-4" id="contact" data-reveal data-reveal-y="20">
        <h2 class="text-xl text-cream mb-3">11. Contact Us</h2>
        <p class="text-cream/70 leading-relaxed">Questions about these Terms? Reach us at <a href="mailto:garrett@tripleoagency.com" class="text-leather-light underline underline-offset-4">garrett@tripleoagency.com</a> or <a href="tel:+18012016376" class="text-leather-light underline underline-offset-4">801-201-6376</a>.</p>
      </div>

    </div>
  </section>
  `;
}

module.exports = {
  meta: {
    title: "Terms of Service | Triple O Agency",
    description: "Terms of service for Triple O Agency, governing use of tripleoagency.com.",
    path: "/terms/",
  },
  body,
};
