"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";
import {
  Building2, User, Phone, MapPin, Globe, Linkedin, Facebook,
  MessageCircle, CheckCircle, ArrowRight, ArrowLeft, Loader2,
  Mail, FileText, Link as LinkIcon,
} from "lucide-react";

// ─── Reference Data ─────────────────────────────────────────────────────────
const COUNTRIES = [
  { id: 1, name: "United States", code: "+1" }, { id: 2, name: "Canada", code: "+1" },
  { id: 14, name: "India", code: "+91" }, { id: 9, name: "United Kingdom", code: "+44" },
  { id: 21, name: "Australia", code: "+61" }, { id: 22, name: "New Zealand", code: "+64" },
  { id: 8, name: "France", code: "+33" }, { id: 7, name: "Germany", code: "+49" },
  { id: 10, name: "Italy", code: "+39" }, { id: 11, name: "Spain", code: "+34" },
  { id: 12, name: "Russia", code: "+7" }, { id: 13, name: "China", code: "+86" },
  { id: 15, name: "Japan", code: "+81" }, { id: 16, name: "South Korea", code: "+82" },
  { id: 17, name: "Indonesia", code: "+62" }, { id: 18, name: "Nigeria", code: "+234" },
  { id: 19, name: "South Africa", code: "+27" }, { id: 20, name: "Egypt", code: "+20" },
  { id: 23, name: "Saudi Arabia", code: "+966" }, { id: 24, name: "Turkey", code: "+90" },
  { id: 3, name: "Mexico", code: "+52" }, { id: 4, name: "Brazil", code: "+55" },
  { id: 5, name: "Argentina", code: "+54" }, { id: 6, name: "Colombia", code: "+57" },
  { id: 25, name: "Israel", code: "+972" },
];

const STATES_BY_COUNTRY: Record<number, { id: number; name: string }[]> = {
  1: [ // USA
    { id: 37, name: "Alabama" }, { id: 38, name: "Alaska" }, { id: 39, name: "Arizona" },
    { id: 40, name: "Arkansas" }, { id: 41, name: "California" }, { id: 42, name: "Colorado" },
    { id: 43, name: "Connecticut" }, { id: 44, name: "Delaware" }, { id: 45, name: "District of Columbia" },
    { id: 46, name: "Florida" }, { id: 47, name: "Georgia" }, { id: 48, name: "Hawaii" },
    { id: 49, name: "Idaho" }, { id: 50, name: "Illinois" }, { id: 51, name: "Indiana" },
    { id: 52, name: "Iowa" }, { id: 53, name: "Kansas" }, { id: 54, name: "Kentucky" },
    { id: 55, name: "Louisiana" }, { id: 56, name: "Maine" }, { id: 57, name: "Maryland" },
    { id: 58, name: "Massachusetts" }, { id: 59, name: "Michigan" }, { id: 60, name: "Minnesota" },
    { id: 61, name: "Mississippi" }, { id: 62, name: "Missouri" },
  ],
  14: [ // India
    { id: 1, name: "Andhra Pradesh" }, { id: 2, name: "Arunachal Pradesh" }, { id: 3, name: "Assam" },
    { id: 4, name: "Bihar" }, { id: 5, name: "Chhattisgarh" }, { id: 6, name: "Goa" },
    { id: 7, name: "Gujarat" }, { id: 8, name: "Haryana" }, { id: 9, name: "Himachal Pradesh" },
    { id: 10, name: "Jharkhand" }, { id: 11, name: "Karnataka" }, { id: 12, name: "Kerala" },
    { id: 13, name: "Madhya Pradesh" }, { id: 14, name: "Maharashtra" }, { id: 15, name: "Manipur" },
    { id: 16, name: "Meghalaya" }, { id: 17, name: "Mizoram" }, { id: 18, name: "Nagaland" },
    { id: 19, name: "Odisha" }, { id: 20, name: "Punjab" }, { id: 21, name: "Rajasthan" },
    { id: 22, name: "Sikkim" }, { id: 23, name: "Tamil Nadu" }, { id: 24, name: "Telangana" },
    { id: 25, name: "Tripura" }, { id: 26, name: "Uttar Pradesh" }, { id: 27, name: "Uttarakhand" },
    { id: 28, name: "West Bengal" }, { id: 29, name: "Andaman and Nicobar Islands" },
    { id: 30, name: "Chandigarh" }, { id: 31, name: "Dadra and Nagar Haveli and Daman and Diu" },
    { id: 32, name: "Delhi" }, { id: 33, name: "Jammu and Kashmir" }, { id: 34, name: "Ladakh" },
    { id: 35, name: "Lakshadweep" }, { id: 36, name: "Puducherry" },
  ],
  2: [{ id: 100, name: "Ontario" }, { id: 101, name: "Quebec" }, { id: 102, name: "British Columbia" }, { id: 103, name: "Alberta" }],
};

const GENDERS = [
  { value: "1", label: "Male" },
  { value: "2", label: "Female" },
  { value: "3", label: "Prefer not to say" },
];

// ─── Form Steps ──────────────────────────────────────────────────────────────
const steps = [
  { id: 1, title: "Business Info", icon: Building2 },
  { id: 2, title: "Address", icon: MapPin },
  { id: 3, title: "Primary Contact", icon: User },
  { id: 4, title: "Online Presence", icon: Globe },
];

// ─── Validation Schemas ───────────────────────────────────────────────────────
const validationSchemas = [
  // Step 1 — Business Info
  Yup.object({
    business_name: Yup.string().required("Business name is required"),
    alias: Yup.string().required("Short alias / brand slug is required").max(45),
    business_email: Yup.string().email("Invalid email").required("Business email is required"),
    business_registration_number: Yup.string().required("Business registration number is required"),
    business_ITIN: Yup.string().required("Business ITIN / Tax ID is required"),
    business_description: Yup.string().required("Brief description is required").max(255),
  }),
  // Step 2 — Address
  Yup.object({
    address_line1: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.number().required("Country is required").min(1),
    state: Yup.number().required("State / Province is required").min(1),
    zip: Yup.string().required("ZIP / Postal code is required").max(8),
    primary_phone_country_code: Yup.number().required("Country code required").min(1),
    primary_phone: Yup.string().required("Primary phone is required").matches(/^\d{6,15}$/, "Enter a valid phone number"),
    secondary_phone: Yup.string().matches(/^\d{6,15}$/, "Enter a valid phone number").optional(),
  }),
  // Step 3 — Primary Contact
  Yup.object({
    primary_contact_first_name: Yup.string().required("First name is required"),
    primary_contact_last_name: Yup.string().required("Last name is required"),
    primary_contact_email: Yup.string().email("Invalid email").required("Contact email is required"),
    primary_contact_gender: Yup.string().optional(),
    primary_contact_date_of_birth: Yup.date().optional(),
  }),
  // Step 4 — Online Presence
  Yup.object({
    business_website: Yup.string().url("Enter a valid URL (include https://)").required("Website is required"),
    domain_root_url: Yup.string().url("Enter a valid URL").optional(),
    business_linkedin: Yup.string().url("Enter a valid LinkedIn URL").optional(),
    business_facebook: Yup.string().url("Enter a valid Facebook URL").optional(),
    business_whatsapp: Yup.string().optional(),
  }),
];

const initialValues = {
  // Step 1
  business_name: "", alias: "", business_email: "",
  business_registration_number: "", business_ITIN: "", business_description: "",
  // Step 2
  address_line1: "", city: "", country: 0, state: 0, zip: "",
  primary_phone_country_code: 0, primary_phone: "", secondary_phone: "",
  // Step 3
  primary_contact_first_name: "", primary_contact_last_name: "",
  primary_contact_email: "", primary_contact_gender: "",
  primary_contact_date_of_birth: "",
  // Step 4
  business_website: "", domain_root_url: "",
  business_linkedin: "", business_facebook: "", business_whatsapp: "",
};

// ─── Input Component ──────────────────────────────────────────────────────────
function Field({
  label, name, type = "text", placeholder, required = false, children,
  formik, icon: Icon, as: As = "input", helpText,
}: {
  label: string; name: string; type?: string; placeholder?: string;
  required?: boolean; children?: React.ReactNode; formik: any;
  icon?: React.ElementType; as?: "input" | "textarea" | "select"; helpText?: string;
}) {
  const touched = formik.touched[name];
  const error = formik.errors[name];
  const hasError = touched && error;

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold" style={{ color: "var(--color-text-on-light)" }}>
        {label}{required && <span className="ml-0.5" style={{ color: "var(--brand-crimson)" }}>*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon className="w-4 h-4" style={{ color: hasError ? "var(--brand-crimson)" : "var(--color-text-muted-light)" }} />
          </div>
        )}
        {As === "select" ? (
          <select
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-xl text-sm py-3 pr-4 appearance-none outline-none transition-all"
            style={{
              paddingLeft: Icon ? "2.5rem" : "1rem",
              background: "rgba(255,255,255,0.9)",
              border: `1.5px solid ${hasError ? "var(--brand-crimson)" : "rgba(200,150,60,0.25)"}`,
              color: formik.values[name] ? "var(--color-text-on-light)" : "var(--color-text-muted-light)",
            }}
          >
            {children}
          </select>
        ) : As === "textarea" ? (
          <textarea
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={placeholder}
            rows={3}
            className="w-full rounded-xl text-sm px-4 py-3 outline-none transition-all resize-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: `1.5px solid ${hasError ? "var(--brand-crimson)" : "rgba(200,150,60,0.25)"}`,
              color: "var(--color-text-on-light)",
            }}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={placeholder}
            className="w-full rounded-xl text-sm py-3 pr-4 outline-none transition-all"
            style={{
              paddingLeft: Icon ? "2.5rem" : "1rem",
              background: "rgba(255,255,255,0.9)",
              border: `1.5px solid ${hasError ? "var(--brand-crimson)" : "rgba(200,150,60,0.25)"}`,
              color: "var(--color-text-on-light)",
            }}
          />
        )}
      </div>
      {helpText && !hasError && (
        <p className="text-xs" style={{ color: "var(--color-text-muted-light)" }}>{helpText}</p>
      )}
      {hasError && (
        <p className="text-xs font-medium" style={{ color: "var(--brand-crimson)" }}>{error as string}</p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PartnerRegisterForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemas[step],
    onSubmit: async (values) => {
      if (step < steps.length - 1) {
        setStep((s) => s + 1);
        return;
      }
      // Final submit
      setSubmitting(true);
      setApiError("");
      try {
        const res = await fetch("/api/register-partner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (data.success) {
          setSubmitted(true);
        } else {
          setApiError(data.message || "Something went wrong. Please try again.");
        }
      } catch {
        setApiError("Connection error. Please try again or contact support@ekambond.com");
      } finally {
        setSubmitting(false);
      }
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const selectedCountry = COUNTRIES.find((c) => c.id === Number(formik.values.country));
  const statesForCountry = STATES_BY_COUNTRY[Number(formik.values.country)] || [];

  // ── Success State ──
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--color-bg-warm)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full rounded-3xl p-12 text-center"
          style={{ background: "rgba(255,255,255,0.95)", boxShadow: "var(--shadow-card-hover)" }}
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(45,158,110,0.12)" }}>
            <CheckCircle className="w-10 h-10" style={{ color: "#2D9E6E" }} />
          </div>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--color-text-on-light)" }}>
            Enquiry Received!
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--color-text-muted-light)" }}>
            Thank you for your interest in the EkamBond platform. Our team will review your application and reach out within <strong>24–1–2 weeks</strong>.
          </p>
          <Link href="/" className="eb-btn-primary mx-auto">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg-warm)" }}>
      {/* Hero bar */}
      <div className="relative py-10 px-4 text-center" style={{ background: "var(--color-bg-hero)" }}>
        <div className="absolute inset-0 eb-dot-grid-dark opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(200,48,42,0.15) 0%, transparent 65%)" }} />
        <div className="relative z-10 flex flex-col items-center">
          <Link href="/" className="flex items-center gap-3 mb-5">
            <Image src="/images/ekambond-logo.png" alt="EkamBond" width={48} height={48} className="object-contain" />
            <span className="text-xl font-bold" style={{ color: "var(--color-text-on-dark)" }}>EkamBond</span>
          </Link>
          <span className="eb-badge eb-badge-dark mb-3">Partner Registration & Enquiry</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--color-text-on-dark)" }}>
            Launch Your Matrimony Platform
          </h1>
          <p className="text-base max-w-xl" style={{ color: "var(--color-text-muted-dark)" }}>
            Fill in the details below and we will configure your white-label platform in 1–2 weeks.
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="sticky top-0 z-20 px-4 py-4 border-b"
        style={{ background: "rgba(253,246,236,0.95)", backdropFilter: "blur(12px)", borderColor: "var(--brand-gold-border)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between gap-2">
            {steps.map((s, i) => {
              const StepIcon = s.icon;
              const isActive = i === step;
              const isDone = i < step;
              return (
                <div key={s.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                      style={{
                        background: isDone ? "var(--brand-crimson)" : isActive ? "var(--brand-gold)" : "rgba(200,150,60,0.15)",
                        color: isDone || isActive ? "#fff" : "var(--color-text-muted-light)",
                        border: isActive ? "none" : "1.5px solid rgba(200,150,60,0.25)",
                      }}>
                      {isDone ? <CheckCircle className="w-4 h-4" /> : <StepIcon className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-semibold hidden sm:block"
                      style={{ color: isActive ? "var(--brand-crimson)" : isDone ? "var(--brand-navy)" : "var(--color-text-muted-light)" }}>
                      {s.title}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="h-0.5 flex-1 mx-1 rounded-full"
                      style={{ background: isDone ? "var(--brand-crimson)" : "rgba(200,150,60,0.2)" }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-10">
        <form onSubmit={formik.handleSubmit}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-8 md:p-10"
              style={{ background: "rgba(255,255,255,0.92)", boxShadow: "var(--shadow-card)" }}
            >
              {/* ── Step 1: Business Info ── */}
              {step === 0 && (
                <div className="space-y-5">
                  <SectionTitle icon={Building2} title="Business Information" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Business Name" name="business_name" required formik={formik}
                      icon={Building2} placeholder="e.g. Sunrise Matrimony Services" />
                    <Field label="Alias / Brand Slug" name="alias" required formik={formik}
                      icon={FileText} placeholder="e.g. sunrise" helpText="Used in your platform URL" />
                  </div>
                  <Field label="Business Email" name="business_email" type="email" required formik={formik}
                    icon={Mail} placeholder="contact@yourbusiness.com" />
                  <Field label="Business Description" name="business_description" required
                    as="textarea" formik={formik} placeholder="Brief overview of your organization (max 255 chars)" />
                  <Divider />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Business Registration Number" name="business_registration_number"
                      required formik={formik} icon={FileText} placeholder="Official registration number" />
                    <Field label="Business Tax ID / ITIN" name="business_ITIN" required formik={formik}
                      icon={FileText} placeholder="Tax Identification Number" />
                  </div>
                </div>
              )}

              {/* ── Step 2: Address & Phone ── */}
              {step === 1 && (
                <div className="space-y-5">
                  <SectionTitle icon={MapPin} title="Business Address & Contact" />
                  <Field label="Address Line 1" name="address_line1" required formik={formik}
                    icon={MapPin} placeholder="Street address" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="City" name="city" required formik={formik} placeholder="City" />
                    <Field label="ZIP / Postal Code" name="zip" required formik={formik} placeholder="e.g. 12345" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Country" name="country" as="select" required formik={formik} icon={Globe}>
                      <option value={0}>Select country…</option>
                      {COUNTRIES.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </Field>
                    <Field label="State / Province" name="state" as="select" required formik={formik}>
                      <option value={0}>Select state…</option>
                      {statesForCountry.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                      {statesForCountry.length === 0 && formik.values.country > 0 && (
                        <option value={-1}>Not listed (type in city)</option>
                      )}
                    </Field>
                  </div>
                  <Divider />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-2">
                      <div className="w-32 flex-shrink-0">
                        <Field label="Country Code" name="primary_phone_country_code" as="select" required formik={formik}>
                          <option value={0}>Code</option>
                          {COUNTRIES.map((c) => (
                            <option key={c.id} value={c.id}>{c.code} {c.name.slice(0, 8)}</option>
                          ))}
                        </Field>
                      </div>
                      <div className="flex-1">
                        <Field label="Primary Phone" name="primary_phone" required formik={formik}
                          icon={Phone} placeholder="Phone number" type="tel" />
                      </div>
                    </div>
                    <Field label="Secondary Phone (optional)" name="secondary_phone" formik={formik}
                      icon={Phone} placeholder="Alternate phone" type="tel" />
                  </div>
                </div>
              )}

              {/* ── Step 3: Primary Contact ── */}
              {step === 2 && (
                <div className="space-y-5">
                  <SectionTitle icon={User} title="Primary Contact Person" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="First Name" name="primary_contact_first_name" required formik={formik}
                      icon={User} placeholder="First name" />
                    <Field label="Last Name" name="primary_contact_last_name" required formik={formik}
                      placeholder="Last name" />
                  </div>
                  <Field label="Contact Email" name="primary_contact_email" type="email" required formik={formik}
                    icon={Mail} placeholder="personal or work email" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Gender (optional)" name="primary_contact_gender" as="select" formik={formik}>
                      <option value="">Prefer not to say</option>
                      {GENDERS.map((g) => (
                        <option key={g.value} value={g.value}>{g.label}</option>
                      ))}
                    </Field>
                    <Field label="Date of Birth (optional)" name="primary_contact_date_of_birth"
                      type="date" formik={formik} />
                  </div>
                </div>
              )}

              {/* ── Step 4: Online Presence ── */}
              {step === 3 && (
                <div className="space-y-5">
                  <SectionTitle icon={Globe} title="Online Presence" />
                  <Field label="Business Website" name="business_website" type="url" required formik={formik}
                    icon={Globe} placeholder="https://yourbusiness.com" />
                  <Field label="Preferred Platform Domain (optional)" name="domain_root_url" type="url" formik={formik}
                    icon={LinkIcon} placeholder="https://app.yourbusiness.com"
                    helpText="The root URL where your EkamBond-powered site will be hosted" />
                  <Divider />
                  <Field label="LinkedIn (optional)" name="business_linkedin" type="url" formik={formik}
                    icon={Linkedin} placeholder="https://linkedin.com/company/..." />
                  <Field label="Facebook (optional)" name="business_facebook" type="url" formik={formik}
                    icon={Facebook} placeholder="https://facebook.com/..." />
                  <Field label="WhatsApp Number (optional)" name="business_whatsapp" formik={formik}
                    icon={MessageCircle} placeholder="+91 98765 43210" />
                </div>
              )}

              {/* API error */}
              {apiError && (
                <div className="mt-4 p-4 rounded-xl text-sm font-medium"
                  style={{ background: "rgba(200,48,42,0.08)", border: "1.5px solid rgba(200,48,42,0.2)", color: "var(--brand-crimson)" }}>
                  {apiError}
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 gap-4">
                {step > 0 ? (
                  <button type="button" onClick={goBack} className="eb-btn-ghost" style={{ color: "var(--color-text-on-light)", borderColor: "rgba(200,150,60,0.3)", background: "rgba(200,150,60,0.07)" }}>
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <Link href="/" className="text-sm" style={{ color: "var(--color-text-muted-light)" }}>
                    ← Back to Home
                  </Link>
                )}
                <button type="submit" disabled={submitting} className="eb-btn-primary">
                  {submitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                  ) : step < steps.length - 1 ? (
                    <>Next <ArrowRight className="w-4 h-4" /></>
                  ) : (
                    <>Submit Enquiry <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </form>

        {/* Reassurance strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-center" style={{ color: "var(--color-text-muted-light)" }}>
          {["No credit card required", "48-hour onboarding", "Dedicated setup support", "Your data stays private"].map((t) => (
            <span key={t} className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" style={{ color: "#2D9E6E" }} /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Small helpers ────────────────────────────────────────────────────────────
function SectionTitle({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: "var(--brand-gold-soft)", color: "var(--brand-crimson)" }}>
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-xl font-bold" style={{ color: "var(--color-text-on-light)" }}>{title}</h2>
    </div>
  );
}

function Divider() {
  return <div className="eb-divider" />;
}
