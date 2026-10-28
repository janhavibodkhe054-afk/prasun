
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  Zap,
  Drill,
  Globe2,
  ShoppingCart,
  Smartphone,
  MonitorSmartphone,
  AppWindow,
  Code2,
  Users,
  Workflow,
  Cloud,
  CloudCog,
  Database,
  Headset,
  ChartNoAxesCombined,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Layers3,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

// =============================================
// SERVICE CATEGORIES
// =============================================

const categories = [
  { id: "all", label: "All" },
  {
    id: "electrical",
    label: "Electrical & Infrastructure",
  },
  {
    id: "web",
    label: "Website & Application Development",
  },
  {
    id: "cloud",
    label: "Business Software & Cloud",
  },
  {
    id: "marketing",
    label: "IT & Digital Marketing",
  },
];

// =============================================
// ALL SERVICES
// =============================================

const services = [
  {
    id: 1,
    category: "electrical",
    title: "Electrical Earthing Service",
    description:
      "Electrical grounding and fault current protection.",
    image: "/electrical-earthing.jpeg",
    icon: Zap,
    overview:
      "Prasun Multiservices provides electrical earthing solutions to support electrical safety and grounding requirements across residential, commercial and industrial applications.",
    features: [
      "Electrical earthing installation support",
      "Grounding solutions for different sites",
      "Earthing electrode and material solutions",
      "Electrical safety-focused implementation",
      "Site-specific requirement assessment",
    ],
  },
  {
    id: 2,
    category: "electrical",
    title: "Borewell Drilling Service",
    description:
      "Borewell drilling and boring support for site requirements.",
    image: "/borewell-drilling.jpg",
    icon: Drill,
    overview:
      "Our borewell drilling services support water access and boring requirements for different properties and project sites, with planning based on site conditions.",
    features: [
      "Borewell drilling support",
      "Site requirement discussion",
      "Drilling and boring solutions",
      "Residential and commercial applications",
      "Project-based service coordination",
    ],
  },
  {
    id: 3,
    category: "web",
    title: "Android App Development Service",
    description:
      "Android application development and support.",
    image: "/android-app.webp",
    icon: MonitorSmartphone,
    overview:
      "Our Android development services focus on practical applications for business operations, customer services and mobile-first digital experiences.",
    features: [
      "Custom Android applications",
      "Android interface development",
      "Business application features",
      "API integration",
      "Testing and technical support",
    ],
  },
  {
    id: 4,
    category: "web",
    title: "Application Development Service",
    description:
      "Custom application solutions for business needs.",
    image: "/app-development.avif",
    icon: AppWindow,
    overview:
      "We develop application solutions aligned with client workflows, operational requirements and digital service needs.",
    features: [
      "Requirement analysis",
      "Application interface design",
      "Custom functionality",
      "Database integration",
      "Application improvements",
    ],
  },
  {
    id: 5,
    category: "cloud",
    title: "Cloud Solutions Service",
    description:
      "Cloud-based solutions for businesses.",
    image: "/cloud.jpg",
    icon: Cloud,
    overview:
      "Our cloud solutions support businesses with cloud-based infrastructure and applications suited to their storage and operational needs.",
    features: [
      "Cloud requirement planning",
      "Cloud application solutions",
      "Infrastructure options",
      "Storage and accessibility planning",
      "Integration support",
    ],
  },
  {
    id: 6,
    category: "web",
    title: "Custom Software Development Service",
    description:
      "Tailored software designed around specific requirements.",
    image: "/custom.jpg",
    icon: Code2,
    overview:
      "Our custom software services help businesses digitize processes and develop solutions tailored to their specific operational requirements.",
    features: [
      "Business requirement analysis",
      "Software architecture",
      "Workflow-based modules",
      "Database and system integration",
      "Maintenance options",
    ],
  },
  {
    id: 7,
    category: "cloud",
    title: "Data Solutions Service",
    description:
      "Data management and analysis solutions.",
    image: "/data.jpg",
    icon: Database,
    overview:
      "Our data solutions focus on organizing, managing and using business data effectively to support reporting and decision-making.",
    features: [
      "Data organization",
      "Database solutions",
      "Data processing workflows",
      "Reporting and analysis",
      "Data integration",
    ],
  },
  {
    id: 8,
    category: "web",
    title: "E Commerce Website Development Service",
    description:
      "Online shopping and e-commerce website solutions.",
    image: "/ecommerse-web.png",
    icon: ShoppingCart,
    overview:
      "Our e-commerce development services help businesses create online stores with organized product catalogs and customer-friendly shopping experiences.",
    features: [
      "Online store development",
      "Product catalog setup",
      "Shopping cart functionality",
      "Checkout and payment integration options",
      "Order management features",
    ],
  },
  {
    id: 9,
    category: "marketing",
    title: "IT Support Service",
    description:
      "IT troubleshooting and technical assistance.",
    image: "/support.jpg",
    icon: Headset,
    overview:
      "We provide IT support services to assist businesses with technical issues, software requirements and daily technology operations.",
    features: [
      "Technical troubleshooting",
      "Software assistance",
      "IT system support",
      "Technical issue assessment",
      "Business IT guidance",
    ],
  },
  {
    id: 10,
    category: "marketing",
    title: "SEO Management Service",
    description:
      "Website search visibility management.",
    image: "/seo.webp",
    icon: ChartNoAxesCombined,
    overview:
      "Our SEO management services focus on improving website structure, content relevance and search visibility through ongoing optimization.",
    features: [
      "Website SEO review",
      "Keyword research",
      "On-page improvements",
      "Content optimization",
      "SEO performance monitoring",
    ],
  },
  {
    id: 11,
    category: "web",
    title: "Website Development Service",
    description:
      "Websites developed according to client requirements.",
    image: "/web-development.jpg",
    icon: Globe2,
    overview:
      "We develop responsive business websites designed to communicate company information, showcase products and services, and establish a professional digital presence.",
    features: [
      "Business website development",
      "Responsive layouts",
      "Product and service pages",
      "Contact and enquiry forms",
      "Website updates and enhancements",
    ],
  },
  {
    id: 12,
    category: "web",
    title: "Mobile Application Development Service",
    description:
      "Mobile applications for different platforms.",
    image: "/mobile-app.avif",
    icon: Smartphone,
    overview:
      "We provide mobile application development solutions designed around business processes, customer interactions and project-specific requirements.",
    features: [
      "Mobile application planning",
      "User interface development",
      "Business-focused functionality",
      "API and backend integration",
      "Application maintenance options",
    ],
  },
  {
    id: 13,
    category: "cloud",
    title: "Cloud Computing Service",
    description:
      "Cloud data storage, processing and management.",
    image: "/Cloud-Computing.png",
    icon: CloudCog,
    overview:
      "Cloud computing services support businesses in using cloud resources for data storage, application operations and computing requirements.",
    features: [
      "Cloud computing consultation",
      "Cloud storage solutions",
      "Resource configuration",
      "Cloud application support",
      "Infrastructure management options",
    ],
  },
  {
    id: 14,
    category: "cloud",
    title: "CRM Management Service",
    description:
      "Customer relationship management solutions.",
    image: "/crm.webp",
    icon: Users,
    overview:
      "CRM solutions help businesses organize customer information, manage enquiries and improve visibility into customer interactions.",
    features: [
      "Customer database organization",
      "Lead and enquiry management",
      "Follow-up workflows",
      "Customer interaction tracking",
      "CRM customization",
    ],
  },
  {
    id: 15,
    category: "cloud",
    title: "ERP Solution Service",
    description:
      "Enterprise resource planning implementation and support.",
    image: "/erp.jpg",
    icon: Workflow,
    overview:
      "ERP solutions support the organization of business processes through structured software workflows and operational information management.",
    features: [
      "ERP requirement assessment",
      "Business workflow mapping",
      "Module configuration",
      "Data and process integration",
      "Implementation support",
    ],
  },
];

// =============================================
// ANIMATION
// =============================================

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// =============================================
// SERVICE CARD
// =============================================

function ServiceCard({
  service,
  onOpen,
  reduceMotion,
}) {
  const Icon = service.icon;

  const categoryLabel = categories.find(
    (item) => item.id === service.category
  )?.label;

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      whileHover={
        reduceMotion ? undefined : { y: -8 }
      }
      className="group relative flex h-full flex-col overflow-hidden border border-[#E8E8E2] bg-white shadow-[0_10px_35px_rgba(40,45,30,0.045)] transition-[border-color,box-shadow] duration-500 hover:border-[#B7D696] hover:shadow-[0_22px_55px_rgba(40,65,35,0.13)]"
    >
      {/* CARD IMAGE */}

      <div className="relative h-[205px] overflow-hidden bg-[#EDF2E9] sm:h-[215px]">
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          whileHover={
            reduceMotion
              ? undefined
              : { scale: 1.09 }
          }
          transition={{ duration: 0.7 }}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101E13]/35 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-5 flex h-[46px] w-[46px] items-center justify-center border border-white/30 bg-white/95 text-[#78A93B] shadow-md backdrop-blur-sm">
          <Icon size={23} strokeWidth={1.8} />
        </div>

        <div className="absolute bottom-4 right-5 flex h-9 w-9 items-center justify-center border border-white/40 bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-[#C73828]">
          <ArrowUpRight size={19} />
        </div>
      </div>

      {/* CARD CONTENT */}

      <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
        <span className="mb-3 text-[10px] font-semibold uppercase tracking-[1.1px] text-[#79A83C]">
          {categoryLabel}
        </span>

        <h3 className="text-[18px] font-bold leading-[1.4] text-[#26352A] sm:text-[19px]">
          {service.title}
        </h3>

        <p className="mt-3 flex-1 text-[13px] leading-[25px] text-[#728072]">
          {service.description}
        </p>

        <div className="mt-6 border-t border-[#EBEEE8] pt-5">
          <button
            type="button"
            onClick={() => onOpen(service)}
            className="flex items-center gap-3 text-[13px] font-semibold text-[#C73828] transition-colors hover:text-[#78A93B]"
          >
            View Details

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#8BC53F] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

// =============================================
// SERVICE MODAL - FULL IMAGE VISIBLE
// =============================================

function ServiceModal({
  service,
  onClose,
  onEnquire,
  reduceMotion,
}) {
  const Icon = service.icon;

  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);

  const categoryLabel = categories.find(
    (item) => item.id === service.category
  )?.label;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    const previouslyFocused =
      document.activeElement;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseRef.current();
      }

      if (event.key === "Tab") {
        const modal = dialogRef.current;

        if (!modal) return;

        const focusable = Array.from(
          modal.querySelectorAll(
            'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previouslyFocused?.focus?.();
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#09130C]/75 p-3 backdrop-blur-[7px] sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 45,
                scale: 0.94,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
        }}
        className="relative flex max-h-[92dvh] w-full max-w-[850px] flex-col overflow-hidden bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
      >
        {/* ================================= */}
        {/* FULL MODAL IMAGE - NO CROPPING */}
        {/* ================================= */}

        <div className="relative flex h-[240px] shrink-0 items-center justify-center overflow-hidden bg-[#F8FAF6] p-3 sm:h-[340px] sm:p-5 lg:h-[390px]">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-contain"
          />

          {/* CATEGORY LABEL */}

          <div className="absolute bottom-3 left-3 flex max-w-[75%] items-center gap-2 bg-white/95 px-3 py-2 shadow-sm sm:bottom-5 sm:left-5">
            <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center bg-[#EFF7E9] text-[#79A83C]">
              <Icon size={19} />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[1px] text-[#26352A] sm:text-[11px]">
              {categoryLabel}
            </span>
          </div>

          {/* CLOSE BUTTON */}

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-white text-[#26352A] shadow-md transition-colors hover:bg-[#C73828] hover:text-white sm:right-5 sm:top-5"
          >
            <X size={20} />
          </button>
        </div>

        {/* ================================= */}
        {/* MODAL CONTENT */}
        {/* ================================= */}

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
          <h3
            id="service-modal-title"
            className="text-[23px] font-bold leading-[1.3] text-[#26352A] sm:text-[30px]"
          >
            {service.title}
          </h3>

          <div className="mt-5 h-[3px] w-14 bg-[#C73828]" />

          {/* OVERVIEW */}

          <h4 className="mt-6 text-[16px] font-bold text-[#26352A]">
            Service Overview
          </h4>

          <p className="mt-3 text-[14px] leading-[27px] text-[#687568]">
            {service.overview}
          </p>

          {/* FEATURES */}

          <div className="mt-7 border-t border-[#E7ECE3] pt-6">
            <h4 className="mb-5 text-[16px] font-bold text-[#26352A]">
              Key Features & Solutions
            </h4>

            <div className="grid grid-cols-1 gap-x-7 gap-y-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <div className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center bg-[#EFF7E9] text-[#79AA3C]">
                    <Check
                      size={13}
                      strokeWidth={2.5}
                    />
                  </div>

                  <span className="text-[13px] leading-[23px] text-[#536153]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* MODAL FOOTER */}
        {/* ================================= */}

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[#E7ECE3] bg-white px-5 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-[13px] font-semibold text-[#647164] transition-colors hover:text-[#C73828]"
          >
            <ArrowLeft size={16} />

            Back to Services
          </button>

          <button
            type="button"
            onClick={() => onEnquire(service)}
            className="group flex h-[46px] items-center gap-4 bg-[#C73828] pl-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#AD3025]"
          >
            Enquire Now

            <span className="flex h-full w-[46px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
              <ArrowUpRight size={18} />
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// =============================================
// MAIN COMPONENT
// =============================================

export default function AllServices() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const [selectedService, setSelectedService] =
    useState(null);

  const reduceMotion = useReducedMotion();

  const navigate = useNavigate();

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") {
      return services;
    }

    return services.filter(
      (service) =>
        service.category === activeCategory
    );
  }, [activeCategory]);

  const handleEnquire = (service) => {
    setSelectedService(null);

    navigate("/contact#enquiry-form", {
      state: {
        service: service.title,
      },
    });
  };

  return (
    <>
      <section
        id="all-services"
        aria-labelledby="all-services-heading"
        className="relative isolate overflow-hidden bg-[#FAF8F5] py-14 sm:py-16 lg:py-20"
      >
        {/* BACKGROUND ANIMATION */}

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-[#8BC53F]/[0.09] blur-[100px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 100, 0],
                  y: [0, 120, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-[45%] h-[400px] w-[400px] rounded-full bg-[#C73828]/[0.06] blur-[100px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -100, 0],
                  y: [0, -100, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* HEADING */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="mx-auto mb-9 max-w-[780px] text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#C73828]" />

              <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#6D9D30]">
                Explore Our Expertise
              </span>

              <span className="h-[2px] w-8 bg-[#C73828]" />
            </div>

            <h2
              id="all-services-heading"
              className="text-[30px] font-bold leading-[1.2] text-[#26352A] sm:text-[38px] lg:text-[42px]"
            >
              Our Professional{" "}
              <span className="text-[#8BC53F]">
                Services.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[670px] text-[14px] leading-[27px] text-[#687568] sm:text-[15px]">
              Explore our electrical, infrastructure,
              software, cloud and IT solutions designed
              around different business requirements.
            </p>
          </motion.div>

          {/* CATEGORY FILTERS */}

          <div className="mb-9 flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => {
              const active =
                activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  aria-pressed={active}
                  className={`relative overflow-hidden border px-4 py-3 text-[12px] font-semibold transition-colors duration-300 sm:px-5 sm:text-[13px] ${
                    active
                      ? "border-[#8BC53F] text-white"
                      : "border-[#E3E6DE] bg-white text-[#536153] hover:border-[#8BC53F]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="services-active-filter"
                      className="absolute inset-0 bg-[#8BC53F]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* SERVICE COUNT */}

          <div className="mb-6 flex items-center justify-between border-b border-[#E5E7E0] pb-4">
            <p className="text-[13px] text-[#788578]">
              Showing{" "}
              <span className="font-bold text-[#26352A]">
                {filteredServices.length}
              </span>{" "}
              services
            </p>

            <Layers3
              size={17}
              className="text-[#78A93B]"
            />
          </div>

          {/* SERVICE CARDS */}

          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOpen={setSelectedService}
                  reduceMotion={reduceMotion}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SERVICE MODAL */}

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedService && (
              <ServiceModal
                key={selectedService.id}
                service={selectedService}
                onClose={() =>
                  setSelectedService(null)
                }
                onEnquire={handleEnquire}
                reduceMotion={reduceMotion}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
