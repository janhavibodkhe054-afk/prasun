
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Package,
  X,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Electrical Energy Power Saver",
    image: "/power-saver.png",
    description:
      "Plug-and-play electrical device marketed for power factor improvement and surge-related protection.",
    moq: "100 Pieces",
    specifications: [
      ["Type", "Energy Saver Device"],
      ["Material", "Plastic"],
      ["Color", "Red"],
      ["Warranty", "1 Year Limited"],
      ["Minimum Order", "100 Pieces"],
    ],
    features: [
      "Plug-and-play installation",
      "Fireproof material (supplier claim)",
      "Maintenance-free design",
      "Intended for electrical utility applications",
    ],
    note:
      "Power factor improvement and surge-related protection are supplier-described claims. Actual performance depends on the electrical installation and product testing.",
  },
  {
    id: 2,
    name: "Instant Water Mini Geyser",
    image: "/mini-geyser.png",
    description:
      "Compact instant water heater intended for kitchens, bathrooms, salons, hotels and similar applications.",
    moq: "10 Pieces",
    specifications: [
      ["Body", "Shock & Corrosion Proof (Claimed)"],
      ["Claimed Heating Time", "10 Seconds"],
      ["Claimed Energy Use", "~3 Units/Hour"],
      ["Warranty", "2 Years"],
      ["Minimum Order", "10 Pieces"],
    ],
    features: [
      "Compact design",
      "Auto cut-off feature",
      "Maintenance-free operation (claimed)",
      "No additional fitting required (claimed)",
      "Suitable for multiple utility applications",
    ],
    note:
      "Heating time, energy consumption and installation requirements are supplier-provided claims. Follow the product manual and qualified electrical installation guidance.",
  },
  {
    id: 3,
    name: "Plastic Air Cooler",
    image: "/air-cooler.png",
    description:
      "Electric-powered plastic air cooler for home and office use, designed for convenient cooling during hot weather.",
    moq: "10 Pieces",
    specifications: [
      ["Capacity", "20–30 Liters"],
      ["Voltage", "240 V"],
      ["Material", "Plastic"],
      ["Power Source", "Electric"],
      ["Minimum Order", "10 Pieces"],
    ],
    features: [
      "Portable-style utility",
      "Durable plastic body",
      "Suitable for home applications",
      "Suitable for office applications",
      "Electric-powered cooling",
    ],
  },
];

/* ======================================
   PRODUCT CARD
====================================== */

function ProductCard({ product, index, onView, onEnquire }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -7 }}
      className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-[#E8ECE4] bg-white shadow-[0_8px_28px_rgba(28,53,30,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(28,53,30,0.13)]"
    >
      {/* PRODUCT IMAGE */}
      <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-[#F4F6F1] sm:h-[290px]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 sm:p-4"
        />

        <span className="absolute left-4 top-4 rounded-[5px] border border-[#E2ECD8] bg-white/95 px-3 py-1.5 text-[12px] font-bold text-[#426B28] shadow-sm">
          PRODUCT {String(product.id).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={() => onView(product)}
          aria-label={`View details of ${product.name}`}
          className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#C73828] text-white shadow-lg transition-all duration-300 hover:bg-[#8BC53F]"
        >
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="min-h-[60px] text-[20px] font-bold leading-[1.4] text-[#26352A] transition-colors group-hover:text-[#548526] sm:text-[21px]">
          {product.name}
        </h3>

        <p className="mt-3 min-h-[105px] text-[15px] leading-[26px] text-[#687568]">
          {product.description}
        </p>

        {/* MOQ */}
        <div className="mt-5 flex items-center justify-between gap-3 rounded-[7px] bg-[#F3F8EE] px-4 py-3.5">
          <span className="flex items-center gap-2 text-[14px] font-semibold text-[#627062]">
            <Package size={19} className="text-[#76AD38]" />
            Minimum Order
          </span>

          <span className="text-[14px] font-bold text-[#365A24]">
            {product.moq}
          </span>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mt-5 space-y-3">
          {product.specifications.slice(0, 3).map(([label, value]) => (
            <div
              key={label}
              className="flex items-start justify-between gap-3 border-b border-[#F0F1EC] pb-2.5 text-[14px]"
            >
              <span className="text-[#849084]">{label}</span>

              <span className="max-w-[59%] text-right font-semibold leading-[22px] text-[#3D4D3E]">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
          <button
            type="button"
            onClick={() => onView(product)}
            className="group/btn flex min-h-[49px] items-center justify-center gap-1.5 rounded-[6px] border border-[#D4E4C6] bg-white px-2 text-[14px] font-bold text-[#365A24] transition-all duration-300 hover:border-[#8BC53F] hover:bg-[#F0F8E9]"
          >
            View Details
            <ChevronRight
              size={17}
              className="shrink-0 transition-transform group-hover/btn:translate-x-1"
            />
          </button>

          <button
            type="button"
            onClick={() => onEnquire(product)}
            className="group/btn flex min-h-[49px] items-center justify-center gap-1.5 rounded-[6px] bg-[#C73828] px-2 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#A92F23]"
          >
            Get Best Price
            <ArrowUpRight
              size={17}
              className="shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* ======================================
   PRODUCT DETAILS MODAL
====================================== */

function ProductModal({ product, onClose, onEnquire }) {
  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [product, onClose]);

  if (!product || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={product.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#101B13]/75 p-3 backdrop-blur-[5px] sm:p-5"
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="utility-product-modal-title"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="relative flex max-h-[92dvh] w-full max-w-[940px] flex-col overflow-hidden rounded-[12px] bg-white shadow-2xl"
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#26352A] shadow-md transition-colors hover:bg-[#C73828] hover:text-white"
          >
            <X size={22} />
          </button>

          <div className="overflow-y-auto">
            {/* MODAL HEADER */}
            <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
              <div className="flex min-h-[260px] items-center justify-center bg-[#F3F7EE] p-5 sm:p-7">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[320px] h-full w-full object-contain p-3"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="mb-3 text-[13px] font-bold uppercase tracking-[1.5px] text-[#76AD38]">
                  Electrical & Home Utility Products
                </span>

                <h2
                  id="utility-product-modal-title"
                  className="pr-8 text-[27px] font-bold leading-[1.3] text-[#26352A] sm:text-[32px]"
                >
                  {product.name}
                </h2>

                <p className="mt-5 text-[15px] leading-[27px] text-[#687568]">
                  {product.description}
                </p>

                <div className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-[6px] bg-[#EAF5DF] px-4 py-3 text-[15px] font-bold text-[#426B28]">
                  <Package size={19} />
                  MOQ: {product.moq}
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div className="grid gap-9 p-6 sm:p-8 md:grid-cols-2">
              <div>
                <h3 className="mb-5 text-[20px] font-bold text-[#26352A]">
                  Product Specifications
                </h3>

                <div className="overflow-hidden rounded-[8px] border border-[#E6EBE1]">
                  {product.specifications.map(([label, value], index) => (
                    <div
                      key={label}
                      className={`grid grid-cols-2 gap-3 px-4 py-3.5 text-[14px] ${
                        index % 2 === 0 ? "bg-[#F6F9F2]" : "bg-white"
                      }`}
                    >
                      <span className="leading-[23px] text-[#738073]">
                        {label}
                      </span>

                      <span className="break-words font-semibold leading-[23px] text-[#354635]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-[20px] font-bold text-[#26352A]">
                  Key Features
                </h3>

                <div className="space-y-5">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
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

            {product.note && (
              <p className="mx-6 mb-6 rounded-[6px] bg-[#F7F8F5] px-4 py-3 text-[12px] leading-[21px] text-[#687568] sm:mx-8">
                <strong>Product information:</strong> {product.note}
              </p>
            )}

            {/* MODAL FOOTER */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E8ECE4] bg-[#FAFBF8] px-6 py-5 sm:px-8">
              <button
                type="button"
                onClick={onClose}
                className="text-[14px] font-semibold text-[#536153] hover:text-[#C73828]"
              >
                Back to Products
              </button>

              <button
                type="button"
                onClick={() => onEnquire(product)}
                className="group flex h-[49px] items-center gap-5 overflow-hidden rounded-[6px] bg-[#C73828] pl-5 text-[14px] font-bold text-white transition-colors hover:bg-[#A92F23]"
              >
                Get Best Price
                <span className="flex h-full w-[49px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
                  <ArrowUpRight size={19} />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

/* ======================================
   MAIN PRODUCT COLLECTION
====================================== */

export default function ElectricalUtilityProducts() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEnquire = (product) => {
    setSelectedProduct(null);

    navigate("/contact#enquiry-form", {
      state: {
        product: product.name,
        category: "Electrical & Home Utility Products",
      },
    });
  };

  return (
    <>
      <section
        id="electrical-utility-products"
        className="relative scroll-mt-[95px] overflow-hidden bg-[#FAF8F5] py-14 sm:py-16 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-[150px] top-[200px] h-[400px] w-[400px] rounded-full bg-[#8BC53F]/[0.055] blur-[110px]" />
        <div className="pointer-events-none absolute -right-[150px] bottom-[200px] h-[400px] w-[400px] rounded-full bg-[#C73828]/[0.045] blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* SECTION HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-11 max-w-[820px] text-center sm:mb-14"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[3px] w-8 bg-[#C73828]" />

              <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#6C9F35]">
                Our Product Collection
              </span>

              <span className="h-[3px] w-8 bg-[#C73828]" />
            </div>

            <h2 className="text-[32px] font-bold leading-[1.25] tracking-[-0.7px] text-[#26352A] sm:text-[40px] lg:text-[46px]">
              Explore Our{" "}
              <span className="text-[#76AD38]">
                Electrical & Home Utility
              </span>{" "}
              Products.
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[29px] text-[#697669]">
              Discover our range of electrical utility devices,
              compact water heating solutions and air coolers
              designed for everyday residential and commercial needs.
            </p>
          </motion.div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-7">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onView={setSelectedProduct}
                onEnquire={handleEnquire}
              />
            ))}
          </div>

          {/* BOTTOM CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[10px] border border-[#E2EAD9] bg-white px-6 py-8 shadow-sm sm:flex-row sm:items-center sm:px-8"
          >
            <div>
              <h3 className="text-[21px] font-bold leading-[1.4] text-[#26352A] sm:text-[23px]">
                Need Help Choosing the Right Product?
              </h3>

              <p className="mt-3 max-w-[670px] text-[15px] leading-[27px] text-[#6B776B]">
                Share your product requirements, specifications and
                order quantity with our team for quotation assistance.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                navigate("/contact#enquiry-form", {
                  state: {
                    category: "Electrical & Home Utility Products",
                  },
                })
              }
              className="group flex h-[51px] shrink-0 items-center gap-5 overflow-hidden rounded-[6px] bg-[#C73828] pl-5 text-[14px] font-bold text-white transition-colors hover:bg-[#A92F23]"
            >
              Request a Quote

              <span className="flex h-full w-[49px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
                <ArrowUpRight size={19} />
              </span>
            </button>
          </motion.div>

          <p className="mt-5 text-center text-[12px] leading-[21px] text-[#8B9488]">
            Product images are illustrative. Final product selection and
            specifications should be confirmed with our team.
          </p>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquire}
      />
    </>
  );
}
