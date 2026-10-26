
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  BriefcaseBusiness,
  UserRound,
  UsersRound,
  MapPinned,
  FileCheck2,
  ReceiptText,
  IndianRupee,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const companyFacts = [
  {
    label: "Company Name",
    value: "Prasun Multiservices",
    icon: Building2,
  },
  {
    label: "Establishment",
    value: "January 2023",
    icon: CalendarDays,
  },
  {
    label: "Nature of Business",
    value: "Manufacturer, Supplier & Service Provider",
    icon: BriefcaseBusiness,
  },
  {
    label: "CEO",
    value: "Mr. Mangesh Sonar",
    icon: UserRound,
  },
  {
    label: "Employees",
    value: "6–20",
    icon: UsersRound,
  },
  {
    label: "Market Coverage",
    value: "Pan India",
    icon: MapPinned,
  },
  {
    label: "Legal Status",
    value: "Sole Proprietorship",
    icon: FileCheck2,
  },
  {
    label: "GST Number",
    value: "27DEQPS6954J1ZG",
    icon: ReceiptText,
  },
  {
    label: "Annual Turnover",
    value: "₹2.5–5 Crore Approx.",
    icon: IndianRupee,
  },
  {
    label: "Location",
    value: "Loni Kalbhor, Pune",
    icon: MapPin,
  },
];

export default function CompanyInformation() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 45,
    });

    const timer = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="company-information"
      aria-labelledby="company-information-heading"
      className="relative w-full overflow-hidden bg-[#F7F9F5] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -left-36 -top-36 h-[400px] w-[400px] rounded-full border border-[#8BC53F]/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full border border-[#C73828]/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 xl:gap-20">

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            className="lg:sticky lg:top-28"
          >
            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C73828]" />

              <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#6F9F32]">
                Company Facts
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="company-information-heading"
              className="max-w-[470px] text-[30px] font-bold leading-[1.2] tracking-[-0.7px] text-[#26352A] sm:text-[38px] lg:text-[42px]"
            >
              Our Business{" "}
              <span className="text-[#8BC53F]">
                at a Glance.
              </span>
            </h2>

            {/* ANIMATED LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-5 h-[3px] bg-[#C73828]"
            />

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[440px] text-[15px] leading-[29px] text-[#687568]">
              Get to know Prasun Multiservices through
              important company information, from our
              establishment and business operations to our
              leadership and market presence.
            </p>

            <p className="mt-4 max-w-[440px] text-[15px] leading-[29px] text-[#687568]">
              Based in Pune, Maharashtra, we serve customers
              across India with electrical, industrial and
              digital solutions.
            </p>

            {/* DECORATIVE BRAND LINE */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#8BC53F]" />
              <span className="h-[2px] w-5 bg-[#C73828]" />
              <span className="h-[2px] w-3 bg-[#8BC53F]/40" />
            </div>
          </div>

          {/* RIGHT TABLE */}
          <div
            data-aos="fade-left"
            className="overflow-hidden border border-[#E2E9DE] bg-white shadow-[0_15px_45px_rgba(30,50,30,0.045)]"
          >
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[42%_58%] bg-[#26352A] text-white">
              <div className="px-4 py-4 text-[13px] font-semibold uppercase tracking-[1px] sm:px-6">
                Particulars
              </div>

              <div className="border-l border-white/15 px-4 py-4 text-[13px] font-semibold uppercase tracking-[1px] sm:px-6">
                Details
              </div>
            </div>

            {/* TABLE ROWS */}
            {companyFacts.map((fact, index) => {
              const Icon = fact.icon;

              return (
                <motion.div
                  key={fact.label}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 15 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 5) * 0.06,
                  }}
                  className="
                    group grid grid-cols-[42%_58%]
                    border-b border-[#E9EEE6]
                    transition-colors duration-300
                    last:border-b-0
                    hover:bg-[#F3F8EE]
                  "
                >
                  {/* LABEL */}
                  <div className="flex items-center gap-3 px-3 py-4 sm:px-6">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="hidden shrink-0 text-[#78AA38] transition-transform duration-300 group-hover:scale-110 sm:block"
                    />

                    <span className="text-[12px] font-semibold leading-[22px] text-[#354536] sm:text-[14px]">
                      {fact.label}
                    </span>
                  </div>

                  {/* VALUE */}
                  <div className="flex items-center border-l border-[#E9EEE6] px-3 py-4 sm:px-6">
                    <span className="break-words text-[12px] leading-[23px] text-[#667267] sm:text-[14px]">
                      {fact.value}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* BOTTOM ACCENT */}
            <div className="flex h-[4px]">
              <div className="w-[75%] bg-[#8BC53F]" />
              <div className="w-[25%] bg-[#C73828]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
