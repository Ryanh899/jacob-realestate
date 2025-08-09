// app/terms-of-use/page.jsx
import React from "react";

export const metadata = {
  title: "Terms of Use | Jacob Hazzard Real Estate",
  description: "Terms of use for Jacob Hazzard Real Estate website.",
};

export default function TermsOfUse() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800 bg-[#f9f7f4]">
      <h1 className="text-3xl md:text-4xl font-heading mb-4">Terms of Use</h1>
      <p className="text-sm text-gray-600 mb-6">
        Effective date: <strong>[Effective Date]</strong>. Please read these Terms of Use (&quot;Terms&quot;) carefully before using the website at <strong>jacobhazzardrealestate.com</strong> (the &quot;Site&quot;). These Terms govern your access to and use of the Site and services provided by <strong>[Business Name / Jacob Hazzard]</strong>.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="text-base text-gray-700">
          By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, do not use the Site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Permitted Use</h2>
        <p className="text-base text-gray-700">
          The Site and its content are for personal, non-commercial use only. You may not copy, reproduce, republish, upload, post, transmit or distribute any material from the Site for commercial purposes without prior written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Submissions</h2>
        <p className="text-base text-gray-700">
          If you submit content (for example through contact forms or valuation requests), you grant us a non-exclusive, royalty-free, worldwide license to use and display that content for the purposes of responding and providing services. Do not submit confidential or sensitive information through public forms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. No Professional Advice; Accuracy</h2>
        <p className="text-base text-gray-700">
          Information on this Site is for general informational purposes only and does not constitute legal, tax, or financial advice. While we try to keep information accurate and up-to-date, we make no warranties about completeness, reliability, or accuracy. Always consult a qualified professional before acting on property, tax, legal, or financial decisions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Mortgage Calculator & Valuation Requests</h2>
        <p className="text-base text-gray-700">
          The Site may include a mortgage calculator for estimation only — it does not save or transmit the numbers you enter. Valuation requests submitted via the Site will be responded to by email or phone; they may require follow-up and are not a formal appraisal.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Links & Services</h2>
        <p className="text-base text-gray-700">
          The Site may link to third-party services and use third-party tools (e.g., hosting, analytics, email providers). We are not responsible for their content, privacy practices, or policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
        <p className="text-base text-gray-700">
          All Site content (text, images, logos, layout) is owned or licensed by [Business Name]. You may not use our trademarks or copyrighted content without written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
        <p className="text-base text-gray-700">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, [BUSINESS NAME] WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE. OUR TOTAL AGGREGATE LIABILITY IS LIMITED TO THE AMOUNT, IF ANY, YOU PAID US IN THE PRIOR 12 MONTHS FOR ACCESS TO THE SITE.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Indemnification</h2>
        <p className="text-base text-gray-700">
          You agree to indemnify and hold harmless [Business Name], its affiliates, and their officers, directors, employees, and agents from any claims arising from your use of the Site or violation of these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
        <p className="text-base text-gray-700">
          These Terms are governed by the laws of the State of <strong>[Your State]</strong>, without regard to conflict of law principles. Any dispute will be resolved in the state or federal courts located in <strong>[Your County, Your State]</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Changes to Terms</h2>
        <p className="text-base text-gray-700">
          We may update these Terms from time to time. We will post the updated Terms here with a new effective date. Continued use of the Site after changes constitutes acceptance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">12. Contact</h2>
        <p className="text-base text-gray-700">
          Questions about these Terms: <br />
          Email: <a href="mailto:[contact@example.com]" className="underline">[contact@example.com]</a><br />
          Address: [Business address — optional]
        </p>
      </section>

      <p className="text-xs text-gray-500">
        NOTE: This Terms of Use is a general template. It is recommended you have these Terms reviewed by your attorney and replace placeholders (bracketed items) with actual business details.
      </p>
    </main>
  );
}
