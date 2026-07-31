function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Contact",
    title: "Let's talk about where you're headed.",
    lede: "Contact form, address, and direct info — pick whatever's easiest.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-5" data-reveal data-reveal-y="20">
        ${c.eyebrow("Direct")}
        <h2 class="text-3xl sm:text-4xl mt-5 mb-8 text-balance">Salt Lake City, Utah</h2>
        <ul class="space-y-6">
          <li>
            <p class="eyebrow mb-1">Phone</p>
            <a href="tel:+18012016376" class="text-xl font-heading font-semibold text-deep-green hover:text-leather transition-colors">801-201-6376</a>
          </li>
          <li>
            <p class="eyebrow mb-1">Email</p>
            <a href="mailto:garrett@tripleoagency.com" class="text-xl font-heading font-semibold text-deep-green hover:text-leather transition-colors break-all">garrett@tripleoagency.com</a>
          </li>
          <li>
            <p class="eyebrow mb-1">Location</p>
            <p class="text-xl font-heading font-semibold text-deep-green">Salt Lake City, UT</p>
          </li>
        </ul>
        <div class="flex items-center gap-4 mt-10">
          <a href="https://www.linkedin.com/company/tripleoagency/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-11 h-11 rounded-full border border-deep-green/15 flex items-center justify-center text-deep-green/70 hover:text-leather hover:border-leather transition-colors duration-200"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.5h3.4V21H3.5V8.5Zm6.2 0h3.26v1.71h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.07 2.26 4.07 5.2V21h-3.4v-6.02c0-1.44-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.18V21h-3.39V8.5Z"/></svg></a>
          <a href="https://www.instagram.com/tripleoagency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-11 h-11 rounded-full border border-deep-green/15 flex items-center justify-center text-deep-green/70 hover:text-leather hover:border-leather transition-colors duration-200"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12.87 1.33Zm0 1.98c-3.15 0-3.5.01-4.73.07-1.14.05-1.76.24-2.17.39a3.5 3.5 0 0 0-1.3.85 3.5 3.5 0 0 0-.85 1.3c-.15.41-.34 1.03-.39 2.17-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.05 1.14.24 1.76.39 2.17.16.42.37.78.85 1.3.42.42.78.7 1.3.85.41.15 1.03.34 2.17.39 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c1.14-.05 1.76-.24 2.17-.39a3.5 3.5 0 0 0 1.3-.85 3.5 3.5 0 0 0 .85-1.3c.15-.41.34-1.03.39-2.17.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.05-1.14-.24-1.76-.39-2.17a3.5 3.5 0 0 0-.85-1.3 3.5 3.5 0 0 0-1.3-.85c-.41-.15-1.03-.34-2.17-.39-1.23-.06-1.58-.07-4.73-.07Zm0 3.37a4.45 4.45 0 1 1 0 8.9 4.45 4.45 0 0 1 0-8.9Zm0 1.98a2.47 2.47 0 1 0 0 4.94 2.47 2.47 0 0 0 0-4.94Zm4.63-2.2a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08Z"/></svg></a>
          <a href="https://www.facebook.com/p/Triple-O-Agency-61574977571467/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-11 h-11 rounded-full border border-deep-green/15 flex items-center justify-center text-deep-green/70 hover:text-leather hover:border-leather transition-colors duration-200"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8.1h2.72l.4-3.16h-3.12V7.72c0-.91.25-1.53 1.56-1.53h1.67V3.36C16.42 3.25 15.4 3.16 14.24 3.16c-2.4 0-4.05 1.47-4.05 4.16v2.42H7.46v3.16h2.73V21h3.31Z"/></svg></a>
        </div>
      </div>

      <div class="lg:col-span-7" data-reveal data-reveal-y="24">
        <div class="card bg-cream">
          <form id="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block font-heading text-sm font-semibold mb-2">Name <span class="text-leather">*</span></label>
                <input id="name" name="name" type="text" required class="w-full bg-white border border-deep-green/15 rounded-sm px-4 py-3 text-text-dark focus:border-leather focus:outline-none transition-colors" placeholder="Jane Smith" />
              </div>
              <div>
                <label for="email" class="block font-heading text-sm font-semibold mb-2">Email <span class="text-leather">*</span></label>
                <input id="email" name="email" type="email" required class="w-full bg-white border border-deep-green/15 rounded-sm px-4 py-3 text-text-dark focus:border-leather focus:outline-none transition-colors" placeholder="jane@company.com" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="phone" class="block font-heading text-sm font-semibold mb-2">Phone <span class="text-leather">*</span></label>
                <input id="phone" name="phone" type="tel" autocomplete="tel" required class="w-full bg-white border border-deep-green/15 rounded-sm px-4 py-3 text-text-dark focus:border-leather focus:outline-none transition-colors" placeholder="(801) 555-0123" />
              </div>
              <div>
                <label for="company" class="block font-heading text-sm font-semibold mb-2">Company</label>
                <input id="company" name="company" type="text" class="w-full bg-white border border-deep-green/15 rounded-sm px-4 py-3 text-text-dark focus:border-leather focus:outline-none transition-colors" placeholder="Company name" />
              </div>
            </div>

            <div>
              <label for="interest" class="block font-heading text-sm font-semibold mb-2">I'm interested in</label>
              <select id="interest" name="interest" class="w-full bg-white border border-deep-green/15 rounded-sm px-4 py-3 text-text-dark focus:border-leather focus:outline-none transition-colors">
                <option>SEO</option>
                <option>Paid Ads / Lead Gen</option>
                <option>Branding & PR</option>
                <option>Data & Intent Audiences</option>
                <option>Fractional CMO / Consulting</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label for="message" class="block font-heading text-sm font-semibold mb-2">Message <span class="text-leather">*</span></label>
              <textarea id="message" name="message" rows="5" required class="w-full bg-white border border-deep-green/15 rounded-sm px-4 py-3 text-text-dark focus:border-leather focus:outline-none transition-colors" placeholder="Tell us a bit about what you're working on."></textarea>
            </div>

            <button type="submit" class="btn-primary w-full sm:w-auto">Submit Form</button>

            <p id="form-error" class="hidden text-sm text-leather">Something went wrong submitting the form. Please email us directly at <a href="mailto:garrett@tripleoagency.com" class="underline">garrett@tripleoagency.com</a>.</p>
          </form>

          <div id="form-status" class="hidden text-center py-12">
            <p class="font-heading font-bold text-2xl text-deep-green mb-3">Thanks for reaching out.</p>
            <p class="text-text-dark/65">We'll get back to you within one business day.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = {
  meta: {
    title: "Contact | Triple O Agency",
    description: "Get in touch with Triple O Agency — Salt Lake City marketing agency.",
    path: "/contact/",
  },
  body,
};
