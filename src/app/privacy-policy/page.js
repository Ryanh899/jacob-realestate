// app/privacy-policy/page.jsx
import React from "react";

export const metadata = {
  title: "Privacy Policy | Jacob Hazzard Real Estate",
  description: "Privacy Policy for Jacob Hazzard Real Estate website describing data collection and user rights.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800 bg-white">
      <h1 className="text-3xl md:text-4xl font-heading mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">
        Effective date: <strong>08/01/2025</strong>.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-base text-gray-700">
          Jacob Hazzard Real Estate respects your privacy and is committed to protecting it. This Privacy Policy explains what information we collect, how we use it, when we share it, and your choices. If you are located in a jurisdiction with additional privacy laws (for example, California's CCPA/CPRA or the EU's GDPR), some sections below describe rights available under those laws. For guidance on what to include in a privacy policy for form collection and website use, see resources from Termly and similar guides. 
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
          <li>
            <strong>Information you provide directly:</strong> When you use contact forms, request a property valuation, subscribe to marketing emails, or otherwise contact us, we collect the information you submit (for example: name, email, phone number, property address, and message). Contact forms typically collect personally identifiable information (PII). 
          </li>
          <li>
            <strong>Automatically collected information:</strong> We and our service providers may automatically collect technical data such as IP address, browser type, device identifiers, pages visited, and usage patterns via cookies and similar technologies.
          </li>
          <li>
            <strong>Sensitive data:</strong> Do not submit sensitive personal data (e.g., Social Security numbers, financial account numbers) through public forms unless specifically requested through secured means.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Mortgage Calculator & Valuation Requests</h2>
        <p className="text-base text-gray-700">
          The mortgage calculator provided on the Site performs client-side calculations and does not save or transmit the numeric inputs you enter. Valuation requests are transmitted to us (and/or our email provider) so we can follow up — they are not an official appraisal and any valuation provided by email is for informational purposes only.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. How We Use Information</h2>
        <p className="text-base text-gray-700">
          We use collected information to:
        </p>
        <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
          <li>Respond to inquiries and provide requested services (e.g., valuations, contact requests).</li>
          <li>Provide, maintain, and improve the Site and features (including analytics).</li>
          <li>Send marketing communications where you have consented (you may opt-out at any time).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies & Third-Party Services</h2>
        <p className="text-base text-gray-700">
          We use cookies and third-party services (for example: analytics, hosting like Vercel, email providers) that may collect information about your use of the Site. You can manage cookie preferences using your browser settings. We recommend disclosing cookies and where the policy link appears (contact forms, newsletter signups) in your UI. 
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Sharing & Disclosure</h2>
        <p className="text-base text-gray-700">
          We do not sell personal information. We may share information with service providers who perform functions on our behalf (hosting, email delivery, analytics). We may also disclose information when required by law, to protect our rights, or to respond to lawful requests from public authorities.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights & Choices</h2>
        <p className="text-base text-gray-700">
          Depending on your location, you may have rights to access, correct, delete, or receive a copy of your personal information, and to opt-out of certain processing or sales. California residents have additional rights under the CCPA/CPRA such as the right to request categories of information collected and the right to opt-out of sale where applicable. To exercise rights, contact us at the email below. 
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Data Retention & Security</h2>
        <p className="text-base text-gray-700">
          We retain personal information only as long as necessary to provide services and fulfill legal obligations. We implement reasonable security measures to protect data, but no system is perfect — we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Children</h2>
        <p className="text-base text-gray-700">
          The Site is not directed to children under 13 and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child provided us with personal information, contact us to request deletion.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. International Transfers</h2>
        <p className="text-base text-gray-700">
          If you are outside the United States, your information may be transferred to, stored, and processed in the United States or other jurisdictions. By using the Site, you consent to such transfers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Changes to This Policy</h2>
        <p className="text-base text-gray-700">
          We may update this Privacy Policy; we will post changes here with a new effective date. Please review it periodically.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">12. Contact</h2>
        <p className="text-base text-gray-700">
          For privacy questions or to exercise your rights, contact: <br />
          Email: <a href="mailto:jacob.hazzard@cbrealty.com" className="underline">jacob.hazzard@cbrealty.com</a><br />
          Address: 222 Avenida Del Mar, San Clemente, CA 92672
        </p>
      </section>

      <p className="text-xs text-gray-500">
        NOTE: This privacy policy is a general template. It is strongly recommended you tailor the policy to your business (including listing specific third-party vendors you use: e.g., Vercel, Google Analytics, SendGrid, etc.) and obtain legal review to ensure compliance with all applicable laws (e.g., CCPA/CPRA, GDPR) as needed. Helpful resources and templates: Termly, TermsFeed, and guides on privacy notices. 
      </p>
    </main>
  );
}
