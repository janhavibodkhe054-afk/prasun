
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

const product = {
  name: "Solar Water Heating System",
  image: "/waterdrilling.png",
  description:
    "Solar-powered water heating solution designed for bathing, cleaning and other domestic hot water applications.",
  specifications: [
    ["Business Type", "Manufacturer, Supplier"],
    ["Available Domestic Capacity", "100–150 LPD"],
    ["Temperature Range", "60°C–80°C"],
    ["Listed Annual Electricity Savings", "1,500 units (100 L capacity)"],
    ["Listed Environmental Benefit", "~1.5 tons CO₂ annually"],
    ["MOQ", "10 Pieces"],
  ],
  features: [
    "Uses solar energy",
    "Hot water for daily use",
    "Designed for domestic applications",
    "Suitable for applicable commercial requirements",
  ],
};

export default function WaterDrillingProducts() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const handleEnquire = () => {
    setShowDetails(false);

    navigate("/contact#enquiry-form", {
      state: {
        product: product.name,
        category: "Water & Drilling Solutions",
      },
    });
  };

  useEffect(() => {
    if (!showDetails) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowDetails(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [showDetails]);

  return (
    <>
      <section
        id="water-drilling-products"
        className="relative scroll-mt-[95px] overflow-hidden bg-[#FAF8F5] py-14 sm:py-16 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-[150px] top-[100px] h-[400px] w-[400px] rounded-full bg-[#8BC53F]/[0.06] blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* SECTION HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-[850px] text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[3px] w-8 bg-[#C73828]" />

              <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#6C9F35]">
                Featured Product
              </span>

              <span className="h-[3px] w-8 bg-[#C73828]" />
            </div>

            <h2 className="text-[32px] font-bold leading-[1.25] tracking-[-0.7px] text-[#26352A] sm:text-[40px] lg:text-[46px]">
              Solar Water{" "}
              <span className="text-[#76AD38]">
                Heating System
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[29px] text-[#697669]">
              Solar-powered water heating solution designed
              for bathing, cleaning and other domestic hot
              water applications.
            </p>
          </motion.div>

          {/* FEATURED PRODUCT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="grid overflow-hidden rounded-[12px] border border-[#E5EBE0] bg-white shadow-[0_12px_45px_rgba(28,53,30,0.07)] lg:grid-cols-[0.95fr_1.05fr]"
          >
            {/* PRODUCT IMAGE */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#F2F7ED] p-5 sm:min-h-[420px] sm:p-9">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="relative z-10 h-full max-h-[460px] w-full object-contain"
              />
            </div>

            {/* PRODUCT INFORMATION */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
              <span className="mb-3 text-[13px] font-bold uppercase tracking-[1.5px] text-[#76AD38]">
                Water & Drilling Solutions
              </span>

              <h3 className="text-[27px] font-bold leading-[1.3] text-[#26352A] sm:text-[33px]">
                {product.name}
              </h3>

              <p className="mt-5 text-[16px] leading-[29px] text-[#687568]">
                {product.description}
              </p>

              {/* SPECIFICATIONS */}
              <div className="mt-7 overflow-hidden rounded-[8px] border border-[#E6EBE1]">
                {product.specifications.map(
                  ([label, value], index) => (
                    <div
                      key={label}
                      className={`grid grid-cols-2 gap-3 px-4 py-3.5 text-[14px] ${
                        index % 2 === 0
                          ? "bg-[#F6F9F2]"
                          : "bg-white"
                      }`}
                    >
                      <span className="leading-[23px] text-[#738073]">
                        {label}
                      </span>

                      <span className="break-words text-right font-semibold leading-[23px] text-[#354635]">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>

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
                  onClick={handleEnquire}
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

      {/* DETAILS MODAL */}
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
                aria-labelledby="water-product-modal-title"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[92dvh] w-full max-w-[850px] overflow-y-auto rounded-[12px] bg-white p-6 shadow-2xl sm:p-9"
              >
                {/* CLOSE BUTTON */}
                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  aria-label="Close product details"
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F1F5ED] text-[#26352A] transition-colors hover:bg-[#C73828] hover:text-white"
                >
                  <X size={22} />
                </button>

                <span className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#76AD38]">
                  Featured Product
                </span>

                <h2
                  id="water-product-modal-title"
                  className="mt-3 pr-10 text-[27px] font-bold leading-[1.3] text-[#26352A] sm:text-[32px]"
                >
                  {product.name}
                </h2>

                <p className="mt-4 text-[15px] leading-[27px] text-[#687568]">
                  {product.description}
                </p>

                <div className="mt-7 grid gap-8 md:grid-cols-2">
                  {/* SPECIFICATIONS */}
                  <div>
                    <h3 className="mb-5 text-[20px] font-bold text-[#26352A]">
                      Key Specifications
                    </h3>

                    <div className="overflow-hidden rounded-[8px] border border-[#E6EBE1]">
                      {product.specifications.map(
                        ([label, value], index) => (
                          <div
                            key={label}
                            className={`grid grid-cols-2 gap-3 px-4 py-3.5 text-[14px] ${
                              index % 2 === 0
                                ? "bg-[#F6F9F2]"
                                : "bg-white"
                            }`}
                          >
                            <span className="leading-[23px] text-[#738073]">
                              {label}
                            </span>

                            <span className="break-words font-semibold leading-[23px] text-[#354635]">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div>
                    <h3 className="mb-5 text-[20px] font-bold text-[#26352A]">
                      Key Features
                    </h3>

                    <div className="space-y-5">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={20}
                            className="mt-0.5 shrink-0 text-[#8BC53F]"
                          />

                          <span className="text-[15px] leading-[25px] text-[#586758]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-[12px] leading-[22px] text-[#849084]">
                  Listed electricity savings and environmental
                  benefits are supplier-provided estimates.
                  Actual results vary by usage, climate and
                  installation conditions.
                </p>

                <button
                  type="button"
                  onClick={handleEnquire}
                  className="mt-7 flex min-h-[50px] items-center gap-4 rounded-[6px] bg-[#C73828] px-5 text-[14px] font-bold text-white transition-colors hover:bg-[#A92F23]"
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
