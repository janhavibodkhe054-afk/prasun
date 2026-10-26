
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Package,
  CheckCircle2,
  X,
  ChevronRight,
} from "lucide-react";

/* ==========================================
   PRODUCT DATA
========================================== */

const products = [
  {
    id: 1,
    name: "Backfill Chemical Compound",
    image: "/backfill.png",
    description:
      "Conductive graphite and natural earth mineral compound designed to maintain low earth resistance and retain moisture around electrodes.",
    moq: "100 kg",
    specifications: [
      ["Packaging", "50 kg Bags"],
      ["Material", "Graphite + Natural Earth Minerals"],
      ["Conductivity", "High"],
      ["Resistance", "Low"],
      ["Corrosiveness", "Non-Corrosive"],
      ["Moisture Retention", "High"],
    ],
    features: [
      "Supports low-resistance grounding",
      "High moisture retention",
      "Non-corrosive composition",
      "Suitable for varied soil conditions",
      "Compatible with different grounding electrodes",
    ],
  },
  {
    id: 2,
    name: "Copper Bonded Earthing Electrode",
    image: "/Copper.png",
    description:
      "Copper-bonded steel electrode designed for corrosion resistance, mechanical strength and effective fault current dissipation.",
    moq: "100 Pieces",
    specifications: [
      ["Material", "Copper Bonded Steel"],
      ["Copper Purity", "99.9%"],
      ["Copper Layer", "100–250 Microns"],
      ["Strength", "Up to 600 N/mm²"],
      ["Corrosion Resistance", "High"],
      ["Maintenance", "Low"],
    ],
    features: [
      "Copper bonded to high-tensile steel core",
      "Excellent mechanical strength",
      "Corrosion-resistant construction",
      "Fast fault current dissipation",
      "Long service life",
    ],
  },
  {
    id: 3,
    name: "Copper Earthing Strip",
    image: "/earthingstrip.jpg",
    description:
      "High-conductivity copper strip for electrical grounding connections and reliable fault current dissipation.",
    moq: "100 kg",
    specifications: [
      ["Material", "Copper"],
      ["Width", "15–100 mm"],
      ["Thickness", "3–6 mm"],
      ["Type", "Earthing Strip"],
      ["Conductivity", "Excellent"],
      ["Corrosion Resistance", "High"],
    ],
    features: [
      "Excellent electrical conductivity",
      "Reliable grounding connections",
      "Corrosion-resistant material",
      "Available in different dimensions",
      "Suitable for varied electrical installations",
    ],
  },
  {
    id: 4,
    name: "Galvanized Iron Earthing Strip",
    image: "/Galvanized.png",
    description:
      "Durable GI earthing strip with corrosion-resistant galvanization for electrical grounding applications.",
    moq: "100 kg",
    specifications: [
      ["Material", "Galvanized Iron"],
      ["Width", "25–75 mm"],
      ["Thickness", "3–12 mm"],
      ["Color", "Silver"],
      ["Conductivity", "Good"],
      ["Corrosion Resistance", "High"],
    ],
    features: [
      "Durable galvanized construction",
      "Supports fault current dissipation",
      "Corrosion-resistant finish",
      "Suitable for electrical grounding",
      "Long-lasting performance",
    ],
  },
  {
    id: 5,
    name: "GI Earthing Strip",
    image: "/gi.png",
    description:
      "Galvanized iron strip used to divert electrical fault currents into grounding systems.",
    moq: "100 kg",
    specifications: [
      ["Material", "Galvanized Iron"],
      ["Width", "100 mm"],
      ["Thickness", "12 mm"],
      ["Coating", "Minimum 80 Microns"],
      ["Color", "Metallic"],
      ["Application", "Electrical Grounding"],
    ],
    features: [
      "Galvanized protective coating",
      "Designed for grounding applications",
      "Durable metallic construction",
      "Supports equipment protection",
      "Suitable for varied installations",
    ],
  },
  {
    id: 6,
    name: "Pure Copper Earthing Electrode",
    image: "/Copper-pure.png",
    description:
      "Earthing electrode product listed for durable grounding applications and effective electrical fault current dissipation.",
    moq: "100 Pieces",
    specifications: [
      ["Product", "Pure Copper Earthing Electrode"],
      ["Corrosion Resistance", "High"],
      ["Maintenance", "Low"],
      ["Fault Current Dissipation", "Fast"],
      ["Service Life", "Long-lasting"],
    ],
    features: [
      "Designed for grounding applications",
      "Corrosion-resistant performance",
      "Low maintenance requirements",
      "Effective fault current dissipation",
      "Long service life",
    ],
  },
  {
    id: 7,
    name: "Round Earthing Chamber Cover",
    image: "/round.png",
    description:
      "Heavy-duty, weather-resistant chamber cover for protecting and accessing earth pit connections.",
    moq: "100 Pieces",
    specifications: [
      ["Type", "Earthing Chamber Cover"],
      ["Material", "Polypropylene"],
      ["Top Diameter", "254 mm"],
      ["Bottom Diameter", "330 mm"],
      ["Height", "260 mm"],
      ["Application", "Earth Pit Chamber"],
    ],
    features: [
      "Weather-resistant design",
      "Rust-proof construction",
      "Heavy-duty material",
      "Convenient strip and wire access",
      "Suitable for outdoor earth pits",
    ],
  },
  {
    id: 8,
    name: "SIP PIP GI Earthing Electrode",
    image: "/sip.png",
    description:
      "Strip-in-Pipe and Pipe-in-Pipe galvanized iron electrode solutions for electrical grounding installations.",
    moq: "100 Pieces",
    specifications: [
      ["Material", "Galvanized Iron"],
      ["Design", "SIP / PIP"],
      ["Lengths", "1–6 m"],
      ["Coating", "80–100 Microns"],
      ["Referenced Standard", "IS 3043:1987"],
      ["Type", "Earthing Electrode"],
    ],
    features: [
      "Strip-in-Pipe and Pipe-in-Pipe designs",
      "Hot-dip galvanized construction",
      "Multiple lengths available",
      "Low maintenance requirements",
      "Suitable for grounding installations",
    ],
  },
  {
    id: 9,
    name: "Square Earthing Chamber Cover",
    image: "/Green.png",
    description:
      "Weatherproof and corrosion-resistant earthing chamber cover for protected access to grounding connections.",
    moq: "100 Pieces",
    specifications: [
      ["Material", "Polypropylene & Polyethylene"],
      ["Length", "320 mm"],
      ["Width", "320 mm"],
      ["Height", "260 mm"],
      ["Weatherproof", "Yes"],
      ["Chemical Resistant", "Yes"],
    ],
    features: [
      "Weatherproof construction",
      "Corrosion and chemical resistance",
      "Heavy-duty protective chamber",
      "Convenient wire access",
      "Suitable for outdoor installation",
    ],
  },
];

/* ==========================================
   REUSABLE ACTION BUTTON
========================================== */

function ActionButton({
  children,
  onClick,
  variant = "primary",
  icon: Icon = ArrowUpRight,
}) {
  const primary = variant === "primary";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`
        group/btn relative flex min-h-[49px]
        w-full items-center justify-center gap-2
        overflow-hidden rounded-[6px] px-3
        text-[14px] font-bold
        transition-all duration-300
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#8BC53F]
        ${
          primary
            ? "bg-[#C73828] text-white hover:bg-[#A92F23] hover:shadow-[0_9px_22px_rgba(199,56,40,0.22)]"
            : "border border-[#D4E4C6] bg-white text-[#365A24] hover:border-[#8BC53F] hover:bg-[#F0F8E9]"
        }
      `}
    >
      <span className="relative z-10">{children}</span>

      <Icon
        size={17}
        className="relative z-10 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
      />
    </motion.button>
  );
}

/* ==========================================
   PRODUCT CARD
========================================== */

function ProductCard({ product, index, onView, onEnquire }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.09,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className="
        group flex h-full flex-col overflow-hidden
        rounded-[12px] border border-[#E8ECE4]
        bg-white
        shadow-[0_8px_28px_rgba(28,53,30,0.045)]
        transition-shadow duration-300
        hover:shadow-[0_20px_50px_rgba(28,53,30,0.13)]
      "
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

        <motion.button
          type="button"
          onClick={() => onView(product)}
          whileHover={{ scale: 1.08, rotate: 45 }}
          whileTap={{ scale: 0.93 }}
          aria-label={`View details of ${product.name}`}
          className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#C73828] text-white shadow-lg transition-colors duration-300 hover:bg-[#8BC53F]"
        >
          <ArrowUpRight size={20} />
        </motion.button>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* PRODUCT TITLE */}
        <h3 className="min-h-[60px] text-[20px] font-bold leading-[1.4] text-[#26352A] transition-colors duration-300 group-hover:text-[#548526] sm:text-[21px]">
          {product.name}
        </h3>

        {/* FULL DESCRIPTION */}
        <p className="mt-3 min-h-[105px] text-[15px] leading-[26px] text-[#687568]">
          {product.description}
        </p>

        {/* MOQ */}
        <div className="mt-5 flex items-center justify-between gap-3 rounded-[7px] bg-[#F3F8EE] px-4 py-3.5">
          <span className="flex items-center gap-2 text-[14px] font-semibold text-[#627062]">
            <Package
              size={19}
              className="shrink-0 text-[#76AD38]"
            />
            Minimum Order
          </span>

          <span className="text-right text-[14px] font-bold text-[#365A24]">
            {product.moq}
          </span>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mt-5 space-y-3">
          {product.specifications
            .slice(0, 3)
            .map(([label, value]) => (
              <div
                key={label}
                className="flex items-start justify-between gap-3 border-b border-[#F0F1EC] pb-2.5 text-[14px]"
              >
                <span className="text-[#849084]">
                  {label}
                </span>

                <span className="max-w-[59%] text-right font-semibold leading-[22px] text-[#3D4D3E]">
                  {value}
                </span>
              </div>
            ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
          <ActionButton
            variant="secondary"
            icon={ChevronRight}
            onClick={() => onView(product)}
          >
            View Details
          </ActionButton>

          <ActionButton
            onClick={() => onEnquire(product)}
          >
            Get Best Price
          </ActionButton>
        </div>
      </div>
    </motion.article>
  );
}

/* ==========================================
   PRODUCT DETAILS MODAL
========================================== */

function ProductModal({ product, onClose, onEnquire }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [product, onClose]);

  if (!product || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={product.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
        className="
          fixed inset-0 z-[99999]
          flex items-center justify-center
          bg-[#101B13]/75 p-3
          backdrop-blur-[5px] sm:p-5
        "
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="earthing-product-dialog-title"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="
            relative flex max-h-[92dvh] w-full
            max-w-[940px] flex-col
            overflow-hidden rounded-[12px]
            bg-white shadow-2xl
          "
        >
          {/* CLOSE BUTTON */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="
              absolute right-4 top-4 z-20
              flex h-11 w-11 items-center justify-center
              rounded-full bg-white text-[#26352A]
              shadow-md transition-colors duration-300
              hover:bg-[#C73828] hover:text-white
            "
          >
            <X size={22} />
          </button>

          <div className="overflow-y-auto">
            {/* PRODUCT HEADER */}
            <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
              {/* IMAGE */}
              <div className="flex min-h-[260px] items-center justify-center bg-[#F3F7EE] p-5 sm:p-7">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[320px] h-full w-full object-contain p-3"
                />
              </div>

              {/* INFORMATION */}
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="mb-3 text-[13px] font-bold uppercase tracking-[1.5px] text-[#76AD38]">
                  Earthing & Grounding Solutions
                </span>

                <h2
                  id="earthing-product-dialog-title"
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

            {/* SPECIFICATIONS + FEATURES */}
            <div className="grid gap-9 p-6 sm:p-8 md:grid-cols-2">
              {/* SPECIFICATIONS */}
              <div>
                <h3 className="mb-5 text-[20px] font-bold text-[#26352A]">
                  Product Specifications
                </h3>

                <div className="overflow-hidden rounded-[8px] border border-[#E6EBE1]">
                  {product.specifications.map(
                    ([label, value], index) => (
                      <div
                        key={label}
                        className={`
                          grid grid-cols-2 gap-3
                          px-4 py-3.5 text-[14px]
                          ${
                            index % 2 === 0
                              ? "bg-[#F6F9F2]"
                              : "bg-white"
                          }
                        `}
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

            {/* MODAL FOOTER */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E8ECE4] bg-[#FAFBF8] px-6 py-5 sm:px-8">
              <button
                type="button"
                onClick={onClose}
                className="text-[14px] font-semibold text-[#536153] transition-colors hover:text-[#C73828]"
              >
                Back to Products
              </button>

              <motion.button
                type="button"
                onClick={() => onEnquire(product)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="
                  group flex h-[49px] items-center gap-5
                  overflow-hidden rounded-[6px]
                  bg-[#C73828] pl-5
                  text-[14px] font-bold text-white
                  transition-colors hover:bg-[#A92F23]
                "
              >
                Get Best Price

                <span className="flex h-full w-[49px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
                  <ArrowUpRight size={19} />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

/* ==========================================
   MAIN PRODUCT COLLECTION SECTION
========================================== */

export default function EarthingProducts() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEnquire = (product) => {
    setSelectedProduct(null);

    navigate("/contact#enquiry-form", {
      state: {
        product: product.name,
        category: "Earthing & Grounding Solutions",
      },
    });
  };

  const handleCategoryEnquiry = () => {
    navigate("/contact#enquiry-form", {
      state: {
        category: "Earthing & Grounding Solutions",
      },
    });
  };

  return (
    <>
      <section
        id="earthing-products"
        className="
          relative scroll-mt-[95px]
          overflow-hidden bg-[#FAF8F5]
          py-14 sm:py-16 lg:py-20
        "
      >
        {/* BACKGROUND GLOWS */}
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
                Earthing & Grounding
              </span>{" "}
              Products.
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[29px] text-[#697669]">
              Discover our range of grounding compounds,
              earthing electrodes, strips and protective
              chamber covers for different electrical
              installation requirements.
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

          {/* BOTTOM ENQUIRY CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              mt-12 flex flex-col items-start
              justify-between gap-6
              rounded-[10px] border border-[#E2EAD9]
              bg-white px-6 py-8 shadow-sm
              sm:flex-row sm:items-center sm:px-8
            "
          >
            <div>
              <h3 className="text-[21px] font-bold leading-[1.4] text-[#26352A] sm:text-[23px]">
                Need Help Choosing the Right Product?
              </h3>

              <p className="mt-3 max-w-[670px] text-[15px] leading-[27px] text-[#6B776B]">
                Share your product requirements, specifications
                and order quantity with our team for quotation
                assistance and product selection guidance.
              </p>
            </div>

            <motion.button
              type="button"
              onClick={handleCategoryEnquiry}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="
                group flex h-[51px] shrink-0
                items-center gap-5 overflow-hidden
                rounded-[6px] bg-[#C73828]
                pl-5 text-[14px] font-bold text-white
                shadow-[0_8px_22px_rgba(199,56,40,0.18)]
                transition-all duration-300
                hover:bg-[#A92F23]
                hover:shadow-[0_12px_28px_rgba(199,56,40,0.25)]
              "
            >
              Request a Quote

              <span className="flex h-full w-[49px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
                <ArrowUpRight size={19} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT DETAILS MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquire}
      />
    </>
  );
}
