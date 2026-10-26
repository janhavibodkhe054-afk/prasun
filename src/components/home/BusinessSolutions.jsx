
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  Code2,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Layers3,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    id: "01",
    label: "ELECTRICAL & INDUSTRIAL",
    title: "Electrical & Industrial",
    highlight: "Solutions",
    description:
      "Earthing, grounding, lightning protection and electrical products for industrial and commercial applications.",
    image: "/electrical-solutions.jpg",
    imageAlt:
      "Electrical earthing grounding and industrial safety solutions by Prasun Multiservices Pune",
    icon: Zap,
    link: "/products",
    button: "Explore Products",
    theme: "green",
    features: [
      "Earthing & Grounding",
      "Lightning Protection",
      "Electrical Products",
    ],
  },
  {
    id: "02",
    label: "IT & DIGITAL SERVICES",
    title: "IT & Digital",
    highlight: "Solutions",
    description:
      "Website development, mobile apps, custom software, CRM, ERP and cloud solutions for growing businesses.",
    image: "/digital-solutions.jpg",
    imageAlt:
      "Website development software applications and IT digital services for businesses",
    icon: Code2,
    link: "/services",
    button: "Explore Services",
    theme: "red",
    features: [
      "Website & App Development",
      "CRM & ERP Software",
      "Cloud & IT Services",
    ],
  },
];

function AnimatedButton({ to, label, theme, reduceMotion }) {
  const isGreen = theme === "green";

  return (
    <motion.div
      whileHover={reduceMotion ? {} : { y: -4, scale: 1.025 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex"
    >
      <Link
        to={to}
        className={`group/btn relative inline-flex min-h-[56px] items-center justify-center gap-4 overflow-hidden rounded-full px-6 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all duration-300 sm:px-7 ${
          isGreen
            ? "bg-[#426B28] hover:bg-[#548A33]"
            : "bg-[#C73828] hover:bg-[#A92E22]"
        }`}
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[150%]" />

        <span className="relative z-10">{label}</span>

        <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover/btn:rotate-45 group-hover/btn:bg-white group-hover/btn:text-[#28352A]">
          <ArrowUpRight size={19} />
        </span>
      </Link>
    </motion.div>
  );
}

function SolutionCard({ item, index, reduceMotion }) {
  const Icon = item.icon;
  const isGreen = item.theme === "green";

  return (
    <article
      data-aos={index === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={index * 120}
      className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E5EAE2] bg-white shadow-[0_18px_55px_rgba(24,47,26,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(24,47,26,0.13)] sm:rounded-[32px]"
    >
      {/* IMAGE */}
      <div className="relative h-[270px] overflow-hidden sm:h-[330px] lg:h-[350px] xl:h-[380px]">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08180D]/60 via-transparent to-transparent" />

        {/* TOP LABEL */}
        <div className="absolute left-5 top-5 flex items-center gap-2.5 rounded-full border border-white/25 bg-[#102419]/70 px-4 py-2.5 text-[12px] font-semibold tracking-[1px] text-white backdrop-blur-md sm:left-7 sm:top-7">
          <span
            className={`h-2 w-2 rounded-full ${
              isGreen ? "bg-[#A9E282]" : "bg-[#F27B6C]"
            }`}
          />
          {item.label}
        </div>

        {/* FLOATING ICON */}
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -7, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 text-white shadow-xl backdrop-blur-md ${
            isGreen ? "bg-[#426B28]/90" : "bg-[#C73828]/90"
          }`}
        >
          <Icon size={27} strokeWidth={1.8} />
        </motion.div>

        {/* CARD NUMBER */}
        <span className="absolute bottom-5 left-6 text-[54px] font-bold leading-none text-white/25 sm:left-8 sm:text-[65px]">
          {item.id}
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-1 flex-col p-6 sm:p-8 lg:p-9">
        {/* SMALL ACCENT */}
        <div
          className={`mb-5 h-[4px] w-12 rounded-full ${
            isGreen ? "bg-[#83C341]" : "bg-[#C73828]"
          }`}
        />

        <h3 className="text-[29px] font-bold leading-[1.18] tracking-[-0.7px] text-[#28352A] sm:text-[35px] lg:text-[37px]">
          {item.title}
          <br />
          <span
            className={isGreen ? "text-[#426B28]" : "text-[#C73828]"}
          >
            {item.highlight}.
          </span>
        </h3>

        <p className="mt-5 max-w-[530px] text-[15px] leading-[28px] text-[#697469] sm:text-[16px] sm:leading-[30px]">
          {item.description}
        </p>

        {/* FEATURES */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {item.features.map((feature) => (
            <span
              key={feature}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-medium sm:text-[13px] ${
                isGreen
                  ? "border-[#DCEBD3] bg-[#F2F8EE] text-[#426B28]"
                  : "border-[#F2D9D5] bg-[#FFF5F3] text-[#A93226]"
              }`}
            >
              <CheckCircle2 size={15} />
              {feature}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-auto pt-9">
          <AnimatedButton
            to={item.link}
            label={item.button}
            theme={item.theme}
            reduceMotion={reduceMotion}
          />
        </div>

        {/* HOVER BORDER ACCENT */}
        <div
          className={`absolute bottom-0 left-0 h-[4px] w-0 transition-all duration-700 group-hover:w-full ${
            isGreen ? "bg-[#83C341]" : "bg-[#C73828]"
          }`}
        />
      </div>
    </article>
  );
}

export default function BusinessSolutions() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    const timer = setTimeout(() => AOS.refresh(), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="business-solutions"
      aria-labelledby="business-solutions-heading"
      className="relative w-full overflow-hidden bg-[#F8F7F2] py-16 sm:py-20 lg:py-28"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[350px] w-[350px] rounded-full bg-[#83C341]/[0.07] blur-[90px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#C73828]/[0.04] blur-[90px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div
          data-aos="fade-up"
          className="mb-12 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-[780px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C73828]" />

              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#426B28] sm:text-[14px]">
                What We Offer
              </span>
            </div>

            <h2
              id="business-solutions-heading"
              className="text-[33px] font-bold leading-[1.18] tracking-[-1px] text-[#28352A] sm:text-[42px] lg:text-[49px]"
            >
              Two Core Verticals.
              <br />
              <span className="text-[#426B28]">One Reliable</span>{" "}
              <span className="text-[#C73828]">Partner.</span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[16px] leading-[29px] text-[#697469] sm:text-[17px]">
            Electrical products and digital services for safer
            operations and smarter business growth.
          </p>
        </div>

        {/* MAIN CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {solutions.map((item, index) => (
            <SolutionCard
              key={item.id}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-10 grid grid-cols-1 gap-4 rounded-[22px] border border-[#E5EAE2] bg-white px-6 py-6 sm:grid-cols-3 sm:gap-6 sm:px-8 lg:mt-12"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck
              size={24}
              className="shrink-0 text-[#426B28]"
            />
            <span className="text-[14px] font-semibold text-[#344536] sm:text-[15px]">
              Quality-Focused Approach
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Layers3
              size={24}
              className="shrink-0 text-[#C73828]"
            />
            <span className="text-[14px] font-semibold text-[#344536] sm:text-[15px]">
              Industrial & Digital Expertise
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Globe2
              size={24}
              className="shrink-0 text-[#426B28]"
            />
            <span className="text-[14px] font-semibold text-[#344536] sm:text-[15px]">
              Pan India Market Coverage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
