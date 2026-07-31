function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Legal",
    title: "Terms of Service",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Terms of Service", href: "/terms/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl space-y-8 text-text-dark/75 leading-relaxed">
      <p class="text-sm text-text-dark/50">Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <p>These Terms of Service govern your use of tripleoagency.com. By using this site, you agree to these terms.</p>

      <h2 class="text-2xl text-text-dark pt-4">Use of Site</h2>
      <p>This website is provided for informational purposes about Triple O Agency's services. You agree not to misuse the site, attempt to gain unauthorized access, or use it for unlawful purposes.</p>

      <h2 class="text-2xl text-text-dark pt-4">Intellectual Property</h2>
      <p>All content on this site — including text, graphics, logos, and the Triple O Agency name and mark — is the property of Triple O Agency and may not be reproduced without written permission.</p>

      <h2 class="text-2xl text-text-dark pt-4">No Guarantee of Results</h2>
      <p>Marketing services described on this site are tailored to each engagement. Nothing on this website constitutes a guarantee of specific marketing results, rankings, or revenue outcomes.</p>

      <h2 class="text-2xl text-text-dark pt-4">Third-Party Links</h2>
      <p>This site may link to third-party websites (including social platforms). We are not responsible for the content or practices of those sites.</p>

      <h2 class="text-2xl text-text-dark pt-4">Limitation of Liability</h2>
      <p>Triple O Agency is not liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>

      <h2 class="text-2xl text-text-dark pt-4">Governing Law</h2>
      <p>These terms are governed by the laws of the State of Utah.</p>

      <h2 class="text-2xl text-text-dark pt-4">Contact Us</h2>
      <p>Questions about these terms can be sent to <a href="mailto:garrett@tripleoagency.com" class="text-leather underline underline-offset-4">garrett@tripleoagency.com</a>.</p>
    </div>
  </section>
  `;
}

module.exports = {
  meta: {
    title: "Terms of Service | Triple O Agency",
    description: "Terms of service for Triple O Agency.",
    path: "/terms/",
  },
  body,
};
