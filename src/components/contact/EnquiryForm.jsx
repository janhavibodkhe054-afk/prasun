
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  PhoneCall,
  MessageSquareText,
  Send,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  enquiryType: "",
  requirement: "",
};

const enquiryOptions = [
  "Product Enquiry",
  "Service Enquiry",
  "General Enquiry",
];

export default function EnquiryForm() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState(initialForm);
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    const timer = setTimeout(() => AOS.refresh(), 100);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setPrepared(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Website Enquiry - ${formData.enquiryType}`;

    const body = [
      "Hello Prasun Multiservices,",
      "",
      "I would like to submit an enquiry.",
      "",
      `Full Name: ${formData.fullName}`,
      `Phone Number: ${formData.phone}`,
      `Email Address: ${formData.email}`,
      `Enquiry Type: ${formData.enquiryType}`,
      "",
      "My Requirement:",
      formData.requirement,
      "",
      "Thank you.",
    ].join("\n");

    const mailto = `mailto:prasunmultiservices@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setPrepared(true);
  };

  const inputClass =
    "w-full h-[52px] border border-[#DEE7D9] bg-[#FAFCF9] px-4 text-[14px] text-[#26352A] outline-none transition-all duration-300 placeholder:text-[#98A399] focus:border-[#8BC53F] focus:bg-white focus:ring-[3px] focus:ring-[#8BC53F]/10";

  return (
    <section
      id="enquiry-form"
      aria-labelledby="enquiry-heading"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-36 bottom-0 h-[370px] w-[370px] rounded-full bg-[#8BC53F]/5 blur-[70px]" />

      <div className="pointer-events-none absolute -right-28 -top-28 h-[320px] w-[320px] rounded-full border border-[#C73828]/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-20">

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            className="lg:sticky lg:top-28"
          >
            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C73828]" />

              <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#6D9D30]">
                Send An Enquiry
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="enquiry-heading"
              className="max-w-[490px] text-[30px] font-bold leading-[1.2] tracking-[-0.7px] text-[#26352A] sm:text-[38px] lg:text-[42px]"
            >
              Tell Us What{" "}
              <span className="text-[#8BC53F]">
                You're Looking For.
              </span>
            </h2>

            {/* ANIMATED UNDERLINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-5 h-[3px] bg-[#C73828]"
            />

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[440px] text-[15px] leading-[29px] text-[#687568]">
              Share your requirements and our team will get
              in touch to discuss the next steps.
            </p>

            {/* INFORMATION POINTS */}
            <div className="mt-9 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center bg-[#F0F7E9] text-[#78AA38]">
                  <MessageSquareText size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-[#26352A]">
                    Share Your Requirements
                  </h3>

                  <p className="mt-1 text-[14px] leading-[25px] text-[#687568]">
                    Tell us about the products or services
                    you are interested in.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center bg-[#F0F7E9] text-[#78AA38]">
                  <Mail size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-[#26352A]">
                    Prepare Email Enquiry
                  </h3>

                  <p className="mt-1 text-[14px] leading-[25px] text-[#687568]">
                    Your enquiry details will be prepared
                    in your email application.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center bg-[#F0F7E9] text-[#78AA38]">
                  <PhoneCall size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-[#26352A]">
                    Prefer to Call?
                  </h3>

                  <a
                    href="tel:08048773144"
                    className="mt-1 inline-block text-[14px] font-semibold text-[#C73828] transition-colors hover:text-[#8BC53F]"
                  >
                    08048773144
                  </a>
                </div>
              </div>
            </div>

            {/* DECORATIVE LINE */}
            <div className="mt-9 flex gap-2">
              <span className="h-[3px] w-12 bg-[#8BC53F]" />
              <span className="h-[3px] w-5 bg-[#C73828]" />
              <span className="h-[3px] w-3 bg-[#8BC53F]/40" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            data-aos="fade-left"
            whileHover={
              reduceMotion
                ? undefined
                : { y: -3 }
            }
            className="relative border border-[#E4EBDF] bg-white p-5 shadow-[0_18px_55px_rgba(30,50,30,0.06)] sm:p-8 lg:p-10"
          >
            {/* TOP ACCENT */}
            <div className="absolute left-0 top-0 h-[4px] w-full bg-gradient-to-r from-[#8BC53F] via-[#8BC53F] to-[#C73828]" />

            {/* FORM TITLE */}
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[21px] font-bold text-[#26352A] sm:text-[23px]">
                  Enquiry Form
                </h3>

                <p className="mt-1 text-[13px] text-[#788478]">
                  Please fill in the details below.
                </p>
              </div>

              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center bg-[#F0F7E9] text-[#78AA38]">
                <Send size={22} strokeWidth={1.8} />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* FULL NAME */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-[13px] font-semibold text-[#354536]"
                  >
                    Full Name <span className="text-[#C73828]">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[13px] font-semibold text-[#354536]"
                  >
                    Phone Number <span className="text-[#C73828]">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    pattern="[0-9+() -]{7,20}"
                    title="Enter a valid phone number"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* EMAIL */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-semibold text-[#354536]"
                  >
                    Email Address <span className="text-[#C73828]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* ENQUIRY TYPE */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="enquiryType"
                    className="mb-2 block text-[13px] font-semibold text-[#354536]"
                  >
                    Enquiry Type <span className="text-[#C73828]">*</span>
                  </label>

                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select enquiry type
                    </option>

                    {enquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* REQUIREMENT */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-[13px] font-semibold text-[#354536]"
                  >
                    Your Requirement <span className="text-[#C73828]">*</span>
                  </label>

                  <textarea
                    id="requirement"
                    name="requirement"
                    rows={5}
                    required
                    placeholder="Tell us about your product or service requirement..."
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full resize-y border border-[#DEE7D9] bg-[#FAFCF9] px-4 py-3 text-[14px] leading-[25px] text-[#26352A] outline-none transition-all duration-300 placeholder:text-[#98A399] focus:border-[#8BC53F] focus:bg-white focus:ring-[3px] focus:ring-[#8BC53F]/10"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -3 }
                }
                whileTap={{ scale: 0.98 }}
                className="group relative mt-6 flex h-[54px] w-full items-center justify-between overflow-hidden bg-[#C73828] pl-6 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#AE3024]"
              >
                {/* SHINE */}
                <span className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[150%]" />

                <span className="relative z-10">
                  Prepare Email Enquiry
                </span>

                <span className="relative z-10 flex h-full w-[54px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
                  <ArrowUpRight
                    size={21}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </motion.button>

              {/* NOTE */}
              <p className="mt-4 text-[12px] leading-[21px] text-[#7B867A]">
                This preview opens an email draft. Please review
                and send it from your email application.
              </p>

              {/* STATUS */}
              {prepared && (
                <div
                  role="status"
                  className="mt-4 flex items-start gap-2 border border-[#DCEAD2] bg-[#F5FAF1] px-4 py-3 text-[13px] leading-[22px] text-[#557A32]"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-[2px] shrink-0"
                  />
                  Email draft prepared. Please send it from
                  your email application.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
