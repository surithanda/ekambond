"use client";
import Link from "next/link";

const EFFECTIVE_DATE = "March 24, 2026";
const COMPANY_NAME = "EkamBond Matrimony Enterprise Services LLC";
const COMPANY_SHORT = "EkamBond";
const CONTACT_EMAIL = "privacy@ekambond.com";
const DPO_EMAIL = "dpo@ekambond.com";

const sections = [
  {
    id: "overview",
    title: "1. Overview & Who We Are",
    content: `${COMPANY_NAME} ("${COMPANY_SHORT}", "we", "us", "our") operates a Business-to-Business (B2B) white-label matrimonial technology platform. We provide software infrastructure, APIs, admin tools, and AI-powered matchmaking technology to registered business Partners — organizations such as marriage bureaus, community trusts, and professional matchmakers — who use our Platform to run their own branded matrimonial services.

This Privacy Policy describes how ${COMPANY_SHORT} collects, uses, stores, and protects personal data in connection with:
(a) Partners who register and operate the Platform, and
(b) our own corporate operations, website visitors, and business communications.

This Privacy Policy does NOT govern how Partners process the personal data of their End Users (matrimonial platform members). Each Partner is an independent data controller for their End Users' data. End Users should refer to the privacy policy of the specific Partner platform they have enrolled with for information on how their data is handled.`,
  },
  {
    id: "data-controller",
    title: "2. Data Controller vs. Data Processor",
    content: `2.1 ${COMPANY_SHORT} as Data Controller: When we collect data directly from Partners, website visitors, or in connection with our own business operations, ${COMPANY_SHORT} acts as the data controller — meaning we determine the purpose and means of processing.

2.2 ${COMPANY_SHORT} as Data Processor: When End User data is stored on the Platform on behalf of a Partner, ${COMPANY_SHORT} acts solely as a data processor, processing that data only on the documented instructions of the Partner. In this capacity:
• We do not own, exploit, or make independent decisions regarding End User personal data.
• We have no direct responsibility or liability to End Users for how their data is used by the Partner.
• All rights, obligations, and accountability to End Users rests with the Partner as data controller.

2.3 No Ownership of End User Profiles: ${COMPANY_SHORT} expressly declares that it has no ownership rights over any matrimonial profile or personal data submitted by End Users to a Partner's platform. This data belongs to the End User and is held in trust by the Partner.`,
  },
  {
    id: "what-we-collect",
    title: "3. Data We Collect (About Partners & Website Visitors)",
    content: `3.1 Partner Registration Data:
When organizations register as Partners, we collect:
• Business name, type, and registration details.
• Contact person name, title, email address, and phone number.
• Business address and operational jurisdiction(s).
• Payment and billing information (processed via Stripe, Inc. — see Section 6).
• Correspondence and communications related to onboarding and support.

3.2 Platform Usage Data:
We collect technical and operational data when Partners use the admin portal, including:
• Login timestamps, IP addresses, and device identifiers.
• Feature usage logs and admin actions for security and auditing.
• Performance metrics and error logs.

3.3 Website Visitor Data:
When individuals visit www.ekambond.com, we may collect:
• Browser type, operating system, and device information.
• Pages visited, time spent, and referral source (via analytics tools).
• IP address (anonymised where technically possible).
• Enquiry form submissions and contact details voluntarily provided.

3.4 What We Do NOT Collect Directly:
${COMPANY_SHORT} does not collect, store, or process matrimonial profile data, photographs, personal preference data, or any sensitive personal information of End Users directly. Such data flows directly between End Users and the Partner's platform and is managed by the Partner as data controller.`,
  },
  {
    id: "how-we-use-data",
    title: "4. How We Use Data",
    content: `We use the data described in Section 3 for the following purposes:

4.1 Service Delivery: To provision, operate, maintain, and improve the EkamBond Platform and to fulfill our contractual obligations to Partners.

4.2 Billing & Payments: To process Partner subscription payments, issue invoices, and maintain financial records as required by law.

4.3 Security & Fraud Prevention: To detect, investigate, and prevent unauthorized access, security breaches, and fraudulent activity on the Platform.

4.4 Legal Compliance: To comply with applicable laws, regulations, court orders, and law enforcement requests, including data retention obligations.

4.5 Communication & Support: To respond to Partner enquiries, provide technical support, send operational notices, and communicate updates to these policies or the Platform.

4.6 Analytics & Improvement: To analyse aggregated, anonymised usage patterns to improve the functionality and performance of the Platform.

4.7 Marketing (Opt-in Only): To send marketing communications to Partners or prospective Partners who have explicitly consented to receive such communications. Recipients may withdraw consent at any time by clicking 'Unsubscribe' or emailing ${CONTACT_EMAIL}.`,
  },
  {
    id: "end-user-data",
    title: "5. End User Data — Partner Responsibility",
    content: `5.1 As stated in Section 2, End User personal data processed on the Platform is the responsibility of the relevant Partner. ${COMPANY_SHORT} processes this data as a data processor under the terms of the Data Processing Agreement (DPA) incorporated into the Partner Agreement.

5.2 Data Isolation: Each Partner's End User data is stored in a logically isolated partition. No data from one Partner's platform is shared with, accessible to, or processed on behalf of another Partner.

5.3 No Exploitation: ${COMPANY_SHORT} will never:
• Use End User personal data for its own marketing, profiling, or commercial purposes.
• Sell End User personal data to any third party.
• Combine End User data across Partners.
• Access End User data except as required to provide technical support or as instructed in writing by the Partner.

5.4 Sub-processors: ${COMPANY_SHORT} may engage third-party service providers (sub-processors) to assist in providing the Platform (e.g., cloud hosting, email delivery, analytics). All sub-processors are contractually bound to process data only as instructed by ${COMPANY_SHORT} and with appropriate security measures. A list of current sub-processors is available to Partners upon request.

5.5 Misuse by End Users: ${COMPANY_SHORT} has no mechanism to prevent, monitor, or control how End Users may misuse information they access through a Partner's platform (e.g., unauthorized sharing of profile details, contact information, or photographs). This responsibility lies with the Partner. ${COMPANY_SHORT} accepts no liability for harm arising from misuse of End User information by other End Users or third parties.`,
  },
  {
    id: "third-parties",
    title: "6. Third-Party Services & Data Sharing",
    content: `We do not sell personal data. We may share data with third parties only in the following circumstances:

6.1 Stripe, Inc.: Payment processing is handled by Stripe, Inc. Partner payment card details are not stored by ${COMPANY_SHORT}. Stripe's processing of payment data is governed by Stripe's own Privacy Policy (stripe.com/privacy).

6.2 Cloud Infrastructure: The Platform is hosted on enterprise cloud infrastructure. Infrastructure providers process data only as directed by ${COMPANY_SHORT} and are bound by data processing agreements and industry-standard security certifications.

6.3 Legal Obligations: We may disclose data to government authorities, law enforcement, or regulatory bodies where required by applicable law, a valid court order, or to protect the rights, property, or safety of ${COMPANY_SHORT}, its Partners, or the public. We will notify the affected Partner of such disclosures where legally permitted.

6.4 Business Transfers: In the event of a merger, acquisition, or sale of all or substantially all of our assets, Partner data may be transferred to the acquiring entity. We will notify affected Partners sixty (60) days in advance and provide the option to terminate the Partner Agreement before any transfer.

6.5 No Other Sharing: ${COMPANY_SHORT} will not share Partner or End User data with advertisers, data brokers, or other commercial third parties.`,
  },
  {
    id: "international-transfers",
    title: "7. International Data Transfers",
    content: `${COMPANY_SHORT} operates from the United States. Data processed by ${COMPANY_SHORT} may be stored and processed in the United States or other countries where our infrastructure providers operate. Where data is transferred outside of the European Economic Area (EEA) or other regions with data protection laws, we will implement appropriate safeguards, including Standard Contractual Clauses (SCCs) as approved by the European Commission or equivalent mechanisms, to ensure the protection of personal data in accordance with applicable law.`,
  },
  {
    id: "data-retention",
    title: "8. Data Retention",
    content: `8.1 Partner Data: We retain Partner business and account data for the duration of the Partner Agreement and for a period of seven (7) years thereafter, as required for financial, legal, and audit compliance purposes.

8.2 End User Data: End User data stored on behalf of a Partner is retained in accordance with the Partner's instructions and applicable law. Upon termination of the Partner Agreement, End User data will be made available for export for thirty (30) days and then securely deleted within ninety (90) days, unless a longer retention period is required by law or mutually agreed.

8.3 Request for Early Deletion: Partners may request early deletion of data subject to applicable legal retention requirements.`,
  },
  {
    id: "security",
    title: "9. Data Security",
    content: `${COMPANY_SHORT} implements and maintains industry-standard technical and organizational security measures to protect personal data, including:

• Encryption of data in transit (TLS 1.2/1.3) and at rest (AES-256).
• Logical data isolation between Partner environments.
• Role-based access controls and multi-factor authentication for admin access.
• Regular security assessments, penetration testing, and vulnerability management.
• Incident response protocols for detecting, containing, and notifying affected parties of data breaches.

Notwithstanding the above, no security measure can be guaranteed to be 100% effective, and ${COMPANY_SHORT} cannot warrant absolute security of data transmitted over the internet.`,
  },
  {
    id: "rights",
    title: "10. Your Rights",
    content: `10.1 Rights of Partners: As data subjects in relation to their own personal data (e.g., contact persons' information), Partners and their authorized representatives may exercise the following rights subject to applicable law:
• Right of Access: Request confirmation of what data we hold about you.
• Right to Rectification: Request correction of inaccurate or incomplete data.
• Right to Erasure ("Right to be Forgotten"): Request deletion of your personal data, subject to legal retention obligations.
• Right to Restriction: Request limitation of processing in certain circumstances.
• Right to Portability: Request a copy of your data in a structured, machine-readable format.
• Right to Object: Object to processing based on legitimate interests.
• Right to Withdraw Consent: Where processing is based on consent, withdraw it at any time.

10.2 How to Exercise Rights: Submit requests to ${DPO_EMAIL}. We will respond within thirty (30) days.

10.3 End User Rights: End Users seeking to exercise data rights should contact the Partner whose platform they are a member of. ${COMPANY_SHORT} will cooperate with Partners in fulfilling such requests.`,
  },
  {
    id: "cookies",
    title: "11. Cookies & Tracking",
    content: `Our corporate website (www.ekambond.com) uses essential cookies required for site functionality and, optionally, analytics cookies to understand visitor behaviour. We do not use advertising or tracking cookies.

By continuing to use our website, you consent to our use of essential cookies. You may manage optional cookies through your browser settings at any time. Blocking cookies may affect certain website functionality.

The EkamBond Partner admin portal uses session cookies strictly for authentication and security purposes. These cannot be disabled without affecting Platform functionality.`,
  },
  {
    id: "children",
    title: "12. Children's Privacy",
    content: `The EkamBond Platform is designed for use by adult business entities and their adult members. We do not knowingly collect personal data from individuals under the age of 18. Partners are strictly prohibited from permitting minors to register as End Users on their matrimonial platforms. If we become aware that we have inadvertently processed personal data of a minor, we will delete such data promptly and notify the relevant Partner.`,
  },
  {
    id: "changes",
    title: "13. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. When we make material changes, we will notify Partners by email and/or by a prominent notice on the Platform no less than fifteen (15) days before the changes take effect. The "Effective Date" at the top of this Policy will reflect the most recent revision. Continued use of the Platform after the effective date of any changes constitutes acceptance of the revised Privacy Policy.`,
  },
  {
    id: "contact",
    title: "14. Contact & Data Protection Officer",
    content: `For all privacy enquiries, data subject rights requests, or to contact our Data Protection Officer:

${COMPANY_NAME}
Privacy / DPO Email: ${DPO_EMAIL}
General Enquiries: ${CONTACT_EMAIL}
Website: www.ekambond.com

You also have the right to lodge a complaint with your local data protection supervisory authority.`,
  },
];

export default function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg-warm)" }}>
      {/* Header */}
      <div className="py-16 px-4 text-center" style={{ background: "linear-gradient(135deg, #1A0A06 0%, #2D1208 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(217,169,30,0.15)", border: "1px solid rgba(217,169,30,0.35)", color: "#D9A91E" }}>
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Privacy Policy
          </h1>
          <p className="text-base" style={{ color: "rgba(255,230,180,0.65)" }}>
            Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {COMPANY_NAME}
          </p>
          <p className="mt-4 text-sm max-w-2xl mx-auto" style={{ color: "rgba(255,230,180,0.55)" }}>
            EkamBond is a B2B infrastructure provider. We are a data processor for Partner platforms. End Users should consult their Partner's own Privacy Policy.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Nav */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: "rgba(255,255,255,0.88)", border: "1.5px solid rgba(200,150,60,0.18)" }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--brand-navy)" }}>Contents</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="text-sm hover:underline py-1"
                style={{ color: "var(--brand-crimson)" }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Key commitment box */}
        <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "rgba(45,158,110,0.06)", borderColor: "#2D9E6E" }}>
          <p className="font-bold mb-2" style={{ color: "#2D9E6E" }}>Our Core Privacy Commitment</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>
            ${COMPANY_SHORT} does not own, sell, or exploit any matrimonial profile data or End User personal information. We process End User data solely on behalf of our Partners, who are the data controllers. We will never use End User data for our own commercial purposes.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-xl font-bold mb-4 pb-3" style={{ color: "var(--color-text-on-light)", borderBottom: "2px solid rgba(200,150,60,0.2)" }}>
                {s.title}
              </h2>
              <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--color-text-muted-light)" }}>
                {s.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 pt-8 border-t text-center" style={{ borderColor: "rgba(200,150,60,0.2)" }}>
          <p className="text-sm" style={{ color: "var(--color-text-muted-light)" }}>
            Privacy questions? Email{" "}
            <a href={`mailto:${DPO_EMAIL}`} style={{ color: "var(--brand-crimson)" }}>{DPO_EMAIL}</a>
            {" "}· See also our{" "}
            <Link href="/terms-conditions" style={{ color: "var(--brand-crimson)" }}>Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
