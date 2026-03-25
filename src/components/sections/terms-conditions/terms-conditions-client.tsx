"use client";
import Link from "next/link";

const EFFECTIVE_DATE = "March 24, 2026";
const COMPANY_NAME = "EkamBond Matrimony Enterprise Services LLC";
const COMPANY_SHORT = "EkamBond";
const CONTACT_EMAIL = "legal@ekambond.com";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction & Scope",
    content: `These Terms and Conditions ("Terms") govern your access to and use of the EkamBond platform, including all related websites, applications, application programming interfaces (APIs), and services (collectively, the "Platform") operated by ${COMPANY_NAME} ("${COMPANY_SHORT}", "we", "us", or "our").

The EkamBond Platform is a Business-to-Business (B2B) white-label technology infrastructure service. ${COMPANY_SHORT} provides technology, software, and tools exclusively to registered business partners ("Partners") — such as marriage bureaus, community organizations, NGOs, and independent matchmakers — who operate their own matrimonial services using the Platform.

By accessing or using the Platform in any capacity, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree, you must immediately discontinue use of the Platform.`,
  },
  {
    id: "party-definitions",
    title: "2. Definitions",
    content: `For the purposes of these Terms:

• "Partner" means any organization or business entity that has entered into a formal Partner Agreement with ${COMPANY_SHORT} and is licensed to use the EkamBond Platform to operate a matrimonial service under their own brand.

• "End User" or "Member" means any individual who registers with or uses a Partner's matrimonial service that is powered by the EkamBond Platform. End Users are customers of the Partner, not of ${COMPANY_SHORT}.

• "Platform" means the EkamBond B2B technology stack, including white-label matrimonial web applications, admin portals, AI-powered search, billing infrastructure, APIs, and all associated software.

• "Partner Agreement" means the separate, binding commercial agreement executed between ${COMPANY_SHORT} and a Partner governing the terms of service, commercial arrangements, data processing, and obligations.

• "User Content" means any data, text, images, documents, or other information submitted by End Users to a Partner's platform.`,
  },
  {
    id: "b2b-nature",
    title: "3. B2B Platform — No Direct Relationship with End Users",
    content: `${COMPANY_SHORT} operates solely as a technology infrastructure provider to Partners. EkamBond has no direct contractual relationship with End Users (matrimonial platform members) and does not provide matrimonial services directly to individuals.

3.1 Partners are solely responsible for:
• All dealings, communications, and obligations with their End Users.
• Compliance with applicable consumer protection, data protection, and local matrimonial laws in their operational jurisdictions.
• The content of their own terms of service and privacy policies presented to End Users.
• Ensuring End Users are made aware of the applicable terms governing their use of the Partner's platform.

3.2 ${COMPANY_SHORT} does not:
• Operate, manage, or control any Partner's matrimonial service.
• Provide matchmaking services, advice, or consultation to any individual.
• Verify, endorse, or vouch for any End User profile, identity, or intention.
• Have any relationship with End Users that would create liability on the part of ${COMPANY_SHORT}.`,
  },
  {
    id: "no-liability-profiles",
    title: "4. No Liability for Profile Content or User Conduct",
    content: `${COMPANY_SHORT} expressly disclaims all liability, responsibility, and ownership in relation to any profile, profile content, or information submitted by End Users to a Partner's platform.

4.1 Profile Ownership: All profile data and user-generated content submitted by End Users belongs to the respective End User and is hosted on behalf of the Partner. ${COMPANY_SHORT} makes no claim of ownership over any profile or personal data submitted through the Platform.

4.2 No Accuracy Guarantee: ${COMPANY_SHORT} does not verify, validate, authenticate, or make any representations regarding the accuracy, completeness, truthfulness, or legality of any End User profile, photograph, document, or statement. Partners are solely responsible for implementing and maintaining their own verification and screening processes.

4.3 Misuse of Information: ${COMPANY_SHORT} shall not be liable for any misuse, unauthorized disclosure, fraudulent use, harassment, identity theft, financial fraud, or any other harm arising from or in connection with:
• Profile information shared between End Users.
• Contacts made between individuals through a Partner's platform.
• Any communications between End Users conducted on or off the Platform.
• Any actions taken by End Users in reliance on information found in a profile.

4.4 Partner Responsibility: Partners accept full responsibility for monitoring their platforms, responding to complaints from End Users, taking down harmful or fraudulent content, and cooperating with law enforcement authorities where required.

4.5 No Background Verification Guarantee: Although the Platform includes tools to assist Partners in managing background verification workflows, the existence of these tools does not imply that ${COMPANY_SHORT} has verified any individual or guarantees the results of any verification process.`,
  },
  {
    id: "partner-obligations",
    title: "5. Partner Obligations",
    content: `Partners who access the Platform agree to the following obligations in addition to those set out in their Partner Agreement:

5.1 Compliance: Partners must comply with all applicable laws, regulations, and industry standards in every jurisdiction in which they operate, including (without limitation) data protection laws, consumer protection laws, anti-fraud laws, and matrimonial or matchmaking regulations.

5.2 Accurate Representation: Partners must not misrepresent the nature of the EkamBond Platform or the capabilities of the technology to End Users or to any third party.

5.3 End User Protection: Partners must maintain robust mechanisms to protect End Users from harmful conduct, including but not limited to profile fraud, harassment, and financial scams.

5.4 Prohibited Uses: Partners must not use the Platform:
• For any unlawful purpose.
• To facilitate human trafficking, forced marriage, or any form of coercion.
• To process or store data in violation of applicable data protection laws.
• To engage in any activity that could damage the reputation of ${COMPANY_SHORT}.

5.5 Indemnification: Partners agree to indemnify, defend, and hold harmless ${COMPANY_SHORT} and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from the Partner's use of the Platform, their End Users' conduct, or any breach of these Terms.`,
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    content: `6.1 EkamBond Ownership: The Platform, including all software, code, algorithms, AI models, designs, documentation, and trade marks, is and shall remain the exclusive property of ${COMPANY_SHORT}. No license, right, or interest in the Platform's underlying technology is transferred to Partners or End Users other than the limited operational license granted under the Partner Agreement.

6.2 Partner Branding: Partners retain all rights to their own trade marks, logos, and branding materials configured on the Platform under the white-label arrangement.

6.3 Restrictions: Partners must not:
• Reverse-engineer, decompile, or attempt to extract the source code of the Platform.
• Sub-license, resell, or otherwise transfer access to the Platform to any third party without ${COMPANY_SHORT}'s prior written consent.
• Remove or obscure any proprietary notices contained within the Platform.`,
  },
  {
    id: "disclaimer-liability",
    title: "7. Disclaimer of Warranties & Limitation of Liability",
    content: `7.1 Disclaimer: THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR CONTINUOUS AVAILABILITY.

7.2 ${COMPANY_SHORT} does not warrant that:
• The Platform will be uninterrupted, error-free, or completely secure.
• The results obtained from using the Platform will be accurate or reliable.
• Any defects in the Platform will be corrected within a specific time frame.

7.3 Limitation of Liability: TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ${COMPANY_SHORT.toUpperCase()} SHALL NOT BE LIABLE FOR ANY:
• Indirect, incidental, special, consequential, or punitive damages.
• Loss of profits, revenue, data, goodwill, or business opportunity.
• Damages arising from the conduct of End Users or third parties.
• Damages arising from a Partner's breach of their obligations to End Users.

In no event shall ${COMPANY_SHORT}'s total aggregate liability to any Partner exceed the fees paid by that Partner in the twelve (12) months immediately preceding the event giving rise to the claim.

7.4 Essential Basis: The parties acknowledge that the limitations of liability in this clause reflect a fair allocation of risk and are an essential basis of the bargain between the parties. ${COMPANY_SHORT} would not have entered into the Partner Agreement without these limitations.`,
  },
  {
    id: "data-and-privacy",
    title: "8. Data & Privacy",
    content: `8.1 Data Controller: With respect to End User personal data, the Partner is the data controller. ${COMPANY_SHORT} acts as a data processor on behalf of the Partner, processing personal data only as expressly instructed under the Data Processing Agreement incorporated into the Partner Agreement.

8.2 Data Isolation: Each Partner's data is stored in a logically isolated partition. ${COMPANY_SHORT} will not share, sell, or use a Partner's End User data for any purpose other than providing the Platform services to that Partner.

8.3 Data Export & Deletion: Partners may request a full export of their End Users' data at any time. Upon termination of the Partner Agreement, ${COMPANY_SHORT} will securely delete Partner data in accordance with the agreed retention and deletion schedule.

8.4 No Ownership of Personal Data: ${COMPANY_SHORT} expressly acknowledges it has no ownership rights over End User personal data and will not exploit such data commercially.

8.5 Privacy Policy: Please refer to ${COMPANY_SHORT}'s Privacy Policy for information on how we process data in our capacity as data processor and any data we collect in relation to Partners themselves.`,
  },
  {
    id: "termination",
    title: "9. Termination & Suspension",
    content: `9.1 By ${COMPANY_SHORT}: We reserve the right to suspend or terminate access to the Platform, with or without notice, if a Partner:
• Materially breaches these Terms or the Partner Agreement.
• Fails to pay applicable fees when due.
• Engages in conduct that exposes ${COMPANY_SHORT} to reputational, legal, or regulatory risk.
• Becomes subject to insolvency proceedings.

9.2 By Partner: Partners may terminate their use of the Platform in accordance with the notice periods specified in their Partner Agreement.

9.3 Effect of Termination: Upon termination, the Partner's access to the Platform will be revoked. The Partner remains responsible for all obligations to their End Users following termination, including notification, data portability, and service continuity arrangements.`,
  },
  {
    id: "governing-law",
    title: "10. Governing Law & Dispute Resolution",
    content: `10.1 Governing Law: These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.

10.2 Dispute Resolution: Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation between the parties. If unresolved within thirty (30) days, disputes shall be subject to binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The seat of arbitration shall be in the State of Delaware. The language of arbitration shall be English.

10.3 Exception: Nothing in this clause shall prevent either party from seeking injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm.`,
  },
  {
    id: "changes",
    title: "11. Changes to These Terms",
    content: `${COMPANY_SHORT} reserves the right to modify these Terms at any time. We will notify Partners of material changes by email to their registered address and/or by prominent notice on the Platform no less than fifteen (15) days before changes take effect, or such longer notice period as required by applicable law. Continued use of the Platform after the effective date of any change constitutes acceptance of the revised Terms.`,
  },
  {
    id: "contact",
    title: "12. Contact",
    content: `If you have any questions regarding these Terms, please contact us at:

${COMPANY_NAME}
Email: ${CONTACT_EMAIL}
Website: www.ekambond.com`,
  },
];

export default function TermsAndConditionsClient() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-base" style={{ color: "rgba(255,230,180,0.65)" }}>
            Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {COMPANY_NAME}
          </p>
          <p className="mt-4 text-sm max-w-2xl mx-auto" style={{ color: "rgba(255,230,180,0.55)" }}>
            EkamBond is a B2B technology platform. These terms govern Platform Partners only. End Users are governed by their respective Partner's own terms.
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

        {/* Highlight box */}
        <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "rgba(200,48,42,0.06)", borderColor: "#C8302A" }}>
          <p className="font-bold mb-2" style={{ color: "#C8302A" }}>Important Notice</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-light)" }}>
            EkamBond provides technology infrastructure only. We have <strong>no ownership of, liability for, or control over</strong> any matrimonial profile, end-user data, or any action taken by individuals on Partner platforms. Partners are fully responsible for their members and operations.
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
            Questions? Email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--brand-crimson)" }}>{CONTACT_EMAIL}</a>
            {" "}· See also our{" "}
            <Link href="/privacy-policy" style={{ color: "var(--brand-crimson)" }}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}