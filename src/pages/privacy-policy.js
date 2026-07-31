function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Legal",
    title: "Privacy Policy",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page max-w-3xl space-y-8 text-text-dark/75 leading-relaxed">
      <p class="text-sm text-text-dark/50">Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <p>Triple O Agency ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit tripleoagency.com or contact us through this site.</p>

      <h2 class="text-2xl text-text-dark pt-4">Information We Collect</h2>
      <p>When you submit our contact form, we collect the information you provide directly — such as your name, email address, company, and message. We may also collect standard analytics data (such as pages visited and general location) through tools like Google Analytics.</p>

      <h2 class="text-2xl text-text-dark pt-4">How We Use Information</h2>
      <p>We use the information you provide to respond to inquiries, deliver services you've requested, and improve our website and marketing. We do not sell your personal information to third parties.</p>

      <h2 class="text-2xl text-text-dark pt-4">Cookies &amp; Analytics</h2>
      <p>Our website may use cookies and similar technologies to understand how visitors use the site. You can control cookies through your browser settings.</p>

      <h2 class="text-2xl text-text-dark pt-4">Data Security</h2>
      <p>We take reasonable measures to protect information submitted to us, but no method of transmission over the internet is 100% secure.</p>

      <h2 class="text-2xl text-text-dark pt-4">Your Choices</h2>
      <p>You may request that we delete information you've submitted to us by contacting <a href="mailto:garrett@tripleoagency.com" class="text-leather underline underline-offset-4">garrett@tripleoagency.com</a>.</p>

      <h2 class="text-2xl text-text-dark pt-4">Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

      <h2 class="text-2xl text-text-dark pt-4">Contact Us</h2>
      <p>Questions about this policy can be sent to <a href="mailto:garrett@tripleoagency.com" class="text-leather underline underline-offset-4">garrett@tripleoagency.com</a> or 801-201-6376.</p>
    </div>
  </section>
  `;
}

module.exports = {
  meta: {
    title: "Privacy Policy | Triple O Agency",
    description: "Privacy policy for Triple O Agency.",
    path: "/privacy-policy/",
  },
  body,
};
