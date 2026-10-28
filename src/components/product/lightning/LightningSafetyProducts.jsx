
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Package,
  X,
  ArrowRight,
} from "lucide-react";

const product = {
  name: "Lightning Protection System",
  image: "/satellite.png",
  description:
    "Active ESE and conventional lightning protection arrangements for applicable residential, commercial and industrial installations.",
  specifications: [
    ["Business Type", "Manufacturer, Supplier"],
    ["Type", "ESE Lightning Protection"],
    ["Application", "Industrial Use"],
    ["Active ESE Protection Radius", "Up to 107 m (Listed)"],
    ["Conventional Protection Radius", "Up to 10 m (Listed)"],
  ],
  features: [
    "Active ESE lightning protection arrangements",
    "Conventional lightning protection systems",
    "Suitable for applicable industrial installations",
    "Solutions for residential and commercial structures",
    "Protection zones determined by system design",
  ],
};

const protectionTypes = [
  {
    id: "01",
    title: "Active / ESE Lightning Protection",
    icon: Zap,
    image: "/active.png",
    description:
      "Designed for wider protection zones. The supplied product information lists a protection radius of up to 107 metres, subject to design and installation conditions.",
    features: [
      "Early Streamer Emission technology",
      "Designed for wider protection zones",
      "Listed radius up to 107 metres",
      "Site-specific installation requirements",
    ],
  },
  {
    id: "02",
    title: "Passive / Conventional Lightning Protection",
    icon: ShieldCheck,
    image: "/passive.png",
    description:
      "Uses conventional air terminals and grounding arrangements. The supplied product information lists a protection radius of up to 10 metres per protection zone.",
    features: [
      "Conventional air terminal arrangement",
      "Grounding and down-conductor connections",
      "Listed radius up to 10 metres",
      "Site-specific protection zone design",
    ],
  },
];

const CATEGORY = "Lightning & Electrical Safety Solutions";

export default function LightningSafetyProducts() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const handleEnquire = (productName = product.name) => {
    setShowDetails(false);

    navigate("/contact#enquiry-form", {
      state: {
        product: productName,
        category: CATEGORY,
      },
    });
  };

  useEffect(() => {
    if (!showDetails) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") setShowDetails(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showDetails]);

  return (
    <>
      {/* ======================================
          SECTION 03 — FEATURED PRODUCT
      ====================================== */}
      <section
        id="lightning-safety-products"
        className="relative scroll-mt-[95px] overflow-hidden bg-[#FAF8F5] py-14 sm:py-16 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-[140px] top-[150px] h-[380px] w-[380px] rounded-full bg-[#8BC53F]/[0.06] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-[800px] text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[3px] w-8 bg-[#C73828]" />

              <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#6C9F35]">
                Featured Product
              </span>

              <span className="h-[3px] w-8 bg-[#C73828]" />
            </div>

            <h2 className="text-[32px] font-bold leading-[1.25] text-[#26352A] sm:text-[40px] lg:text-[46px]">
              Our{" "}
              <span className="text-[#76AD38]">
                Lightning Protection
              </span>{" "}
              System.
            </h2>

            <p className="mx-auto mt-5 max-w-[690px] text-[16px] leading-[29px] text-[#697669]">
              Explore lightning protection arrangements designed
              to support infrastructure safety across different
              installation environments.
            </p>
          </motion.div>

          {/* FEATURED PRODUCT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="grid overflow-hidden rounded-[12px] border border-[#E5EBE0] bg-white shadow-[0_12px_45px_rgba(28,53,30,0.07)] lg:grid-cols-[0.95fr_1.05fr]"
          >
            {/* IMAGE */}
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#F2F7ED] p-6 sm:min-h-[420px] sm:p-10">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="relative z-10 max-h-[440px] h-full w-full object-contain"
              />

              <span className="absolute left-5 top-5 rounded-[5px] bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[1px] text-[#426B28] shadow-sm">
                Featured Solution
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
              <span className="mb-3 text-[12px] font-bold uppercase tracking-[1.7px] text-[#76AD38]">
                Lightning & Electrical Safety
              </span>

              <h3 className="text-[26px] font-bold leading-[1.3] text-[#26352A] sm:text-[32px]">
                {product.name}
              </h3>

              <p className="mt-5 text-[16px] leading-[29px] text-[#687568]">
                {product.description}
              </p>

              {/* SPECIFICATIONS */}
              <div className="mt-7 overflow-hidden rounded-[8px] border border-[#E6EBE1]">
                {product.specifications.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`grid grid-cols-[1fr_1fr] gap-3 px-4 py-3.5 text-[14px] ${
                      index % 2 === 0
                        ? "bg-[#F6F9F2]"
                        : "bg-white"
                    }`}
                  >
                    <span className="leading-[23px] text-[#738073]">
                      {label}
                    </span>

                    <span className="text-right font-semibold leading-[23px] text-[#354635]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[12px] leading-[21px] text-[#849084]">
                Protection radii are supplier-listed figures,
                not guaranteed coverage. Actual protection
                zones require site-specific engineering design.
              </p>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-wrap gap-3">
                <motion.button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex min-h-[50px] items-center gap-3 rounded-[6px] border border-[#D4E4C6] bg-white px-5 text-[14px] font-bold text-[#365A24] transition-colors hover:bg-[#F0F8E9]"
                >
                  View Details
                  <ArrowRight size={18} />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => handleEnquire()}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex min-h-[50px] items-center gap-4 rounded-[6px] bg-[#C73828] px-5 text-[14px] font-bold text-white transition-colors hover:bg-[#A92F23]"
                >
                  Get Best Price
                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          SECTION 04 — TYPES OF PROTECTION
      ====================================== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* SECTION HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-[820px] text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[3px] w-8 bg-[#C73828]" />

              <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#6C9F35]">
                Types of Lightning Protection
              </span>

              <span className="h-[3px] w-8 bg-[#C73828]" />
            </div>

            <h2 className="text-[32px] font-bold leading-[1.25] text-[#26352A] sm:text-[40px] lg:text-[46px]">
              Two Approaches to{" "}
              <span className="text-[#76AD38]">
                Lightning Protection.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[29px] text-[#697669]">
              Explore active ESE and conventional lightning
              protection arrangements for different structural
              and installation requirements.
            </p>
          </motion.div>

          {/* TYPE CARDS */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {protectionTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-[#E5EBE0] bg-white shadow-[0_8px_30px_rgba(28,53,30,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(28,53,30,0.12)]"
                >
                  {/* IMAGE */}
                  <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-[#F3F7EE] p-5 sm:h-[320px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />

                    <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-[7px] bg-[#C73828] text-[17px] font-bold text-white">
                      {item.id}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#EDF6E5] text-[#6C9F35]">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-[23px] font-bold leading-[1.35] text-[#26352A] transition-colors group-hover:text-[#6C9F35] sm:text-[25px]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[16px] leading-[29px] text-[#687568]">
                      {item.description}
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-3.5">
                      {item.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-1 shrink-0 text-[#8BC53F]"
                          />

                          <span className="text-[14px] leading-[24px] text-[#586758]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleEnquire(item.title)}
                      className="group/btn mt-auto flex min-h-[50px] w-fit items-center gap-3 pt-7 text-[14px] font-bold text-[#C73828] transition-colors hover:text-[#8BC53F]"
                    >
                      Request a Quote
                      <ArrowUpRight
                        size={19}
                        className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* BOTTOM NOTE */}
          <p className="mx-auto mt-9 max-w-[850px] text-center text-[13px] leading-[23px] text-[#879187]">
            Lightning protection system selection, coverage and
            installation must be determined by qualified
            professionals using applicable standards and
            site-specific risk assessment.
          </p>
        </div>
      </section>

      {/* ======================================
          PRODUCT DETAILS MODAL
      ====================================== */}
      {showDetails &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setShowDetails(false);
                }
              }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#101B13]/75 p-3 backdrop-blur-[5px] sm:p-5"
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="lightning-modal-title"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[92dvh] w-full max-w-[800px] overflow-y-auto rounded-[12px] bg-white p-6 shadow-2xl sm:p-9"
              >
                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  aria-label="Close product details"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F5ED] text-[#26352A] hover:bg-[#C73828] hover:text-white"
                >
                  <X size={21} />
                </button>

                <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#76AD38]">
                  Featured Solution
                </span>

                <h2
                  id="lightning-modal-title"
                  className="mt-3 pr-10 text-[27px] font-bold text-[#26352A] sm:text-[32px]"
                >
                  {product.name}
                </h2>

                <p className="mt-4 text-[15px] leading-[27px] text-[#687568]">
                  {product.description}
                </p>

                <div className="mt-7 grid gap-7 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-[19px] font-bold text-[#26352A]">
                      Key Specifications
                    </h3>

                    <div className="overflow-hidden rounded-[7px] border border-[#E6EBE1]">
                      {product.specifications.map(
                        ([label, value], index) => (
                          <div
                            key={label}
                            className={`grid grid-cols-2 gap-3 px-3 py-3 text-[13px] ${
                              index % 2 === 0
                                ? "bg-[#F6F9F2]"
                                : "bg-white"
                            }`}
                          >
                            <span className="text-[#738073]">
                              {label}
                            </span>
                            <span className="font-semibold text-[#354635]">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-[19px] font-bold text-[#26352A]">
                      Key Features
                    </h3>

                    <div className="space-y-4">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-0.5 shrink-0 text-[#8BC53F]"
                          />
                          <span className="text-[14px] leading-[24px] text-[#586758]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleEnquire()}
                  className="mt-8 flex h-[49px] items-center gap-4 rounded-[6px] bg-[#C73828] px-5 text-[14px] font-bold text-white hover:bg-[#A92F23]"
                >
                  Get Best Price
                  <ArrowUpRight size={19} />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
