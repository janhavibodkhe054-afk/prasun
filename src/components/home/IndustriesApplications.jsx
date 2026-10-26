
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Factory,
  Building2,
  House,
  Zap,
  Construction,
  BriefcaseBusiness,
} from "lucide-react";

const industries = [
  {
    id: "01",
    icon: Factory,
    title: "Industrial Facilities",
    description:
      "Solutions for manufacturing units, industrial plants and operational facilities.",
  },
  {
    id: "02",
    icon: Building2,
    title: "Commercial Buildings",
    description:
      "Products and services for offices, commercial complexes and business spaces.",
  },
  {
    id: "03",
    icon: House,
    title: "Residential Projects",
    description:
      "Reliable solutions for residential buildings and housing developments.",
  },
  {
    id: "04",
    icon: Zap,
    title: "Electrical Installations",
    description:
      "Solutions for electrical systems, grounding and installation requirements.",
  },
  {
    id: "05",
    icon: Construction,
    title: "Infrastructure Projects",
    description:
      "Electrical and industrial solutions for infrastructure development.",
  },
  {
    id: "06",
    icon: BriefcaseBusiness,
    title: "Businesses & Enterprises",
    description:
      "IT, software and digital solutions for modern business operations.",
  },
];

const leftItems = industries.slice(0, 3);
const rightItems = industries.slice(3, 6);

function IndustryItem({ item, index, side, reduceMotion }) {
  const Icon = item.icon;
  const isLeft = side === "left";

  return (
    <div
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-delay={index * 120}
      data-aos-duration="900"
      className="relative w-full"
    >
      <motion.article
        whileHover={
          reduceMotion
            ? undefined
            : { y: -4 }
        }
        transition={{ duration: 0.3 }}
        className={`
          group relative flex min-h-[160px]
          items-center gap-4
          rounded-[18px] px-3 py-5
          transition-colors duration-500
          hover:bg-white/80
          sm:min-h-[175px] sm:gap-6 sm:px-5
          ${
            isLeft
              ? "flex-row-reverse text-right"
              : "flex-row text-left"
          }
        `}
      >
        {/* ICON */}
        <div className="relative shrink-0">

          {/* ROTATING OUTER RING */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { rotate: 360 }
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute -inset-[6px]
              rounded-full
              border border-dashed
              border-[#8BC53F]/40
            "
          />

          {/* ICON CIRCLE */}
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : { scale: 1.1, rotate: 5 }
            }
            className="
              relative z-10 flex
              h-[72px] w-[72px]
              items-center justify-center
              rounded-full
              bg-white text-[#79AD32]
              shadow-[0_8px_30px_rgba(70,120,35,0.08)]
              transition-all duration-500
              group-hover:bg-[#8BC53F]
              group-hover:text-white
              group-hover:shadow-[0_12px_35px_rgba(139,197,63,0.25)]
              sm:h-[86px] sm:w-[86px]
            "
          >
            <Icon size={32} strokeWidth={1.7} />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="min-w-0 flex-1">

          {/* NUMBER */}
          <span className="text-[12px] font-semibold tracking-[2px] text-[#C73828]">
            {item.id}
          </span>

          {/* HEADING */}
          <h3
            className="
              mt-2 text-[19px] font-bold
              leading-[1.3] text-[#26352A]
              transition-colors duration-300
              group-hover:text-[#70A52D]
              sm:text-[21px]
            "
          >
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-2 max-w-[420px]
              text-[14px] leading-[25px]
              text-[#687568]
              sm:text-[15px] sm:leading-[27px]
            "
          >
            {item.description}
          </p>

          {/* ANIMATED UNDERLINE */}
          <div
            className={`
              mt-4 flex
              ${isLeft ? "justify-end" : "justify-start"}
            `}
          >
            <span
              className="
                h-[2px] w-9
                bg-[#C73828]
                transition-all duration-500
                group-hover:w-20
              "
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function IndustriesApplications() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });

    const timer = setTimeout(() => AOS.refresh(), 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="industries-applications"
      aria-labelledby="industries-heading"
      className="
        relative w-full overflow-hidden
        bg-[#F5F9F2]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* SOFT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#8BC53F]/[0.06] blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C73828]/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* CENTER HEADING */}
        <div
          data-aos="fade-up"
          className="mx-auto mb-12 max-w-[900px] text-center lg:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#C73828]" />

            <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#6F9F32] sm:text-[14px]">
              Where Our Solutions Fit
            </span>

            <span className="h-[2px] w-7 bg-[#C73828]" />
          </div>

          <h2
            id="industries-heading"
            className="
              text-[32px] font-bold leading-[1.2]
              tracking-[-0.8px] text-[#26352A]
              sm:text-[40px] lg:text-[46px]
            "
          >
            Supporting Diverse{" "}
            <span className="text-[#8BC53F]">
              Business
            </span>{" "}
            & Infrastructure Needs.
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-[27px] text-[#687568] sm:text-[16px]">
            Our products and services are suitable for a wide
            range of applications.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#C73828]" />
        </div>

        {/* MAIN LAYOUT */}
        <div className="relative">

          {/* DESKTOP CENTER MOVING LINE */}
          <div className="pointer-events-none absolute bottom-4 left-1/2 top-4 hidden w-[2px] -translate-x-1/2 bg-[#DDEBD2] lg:block">

            {/* MOVING GREEN DOT */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      top: ["0%", "100%", "0%"],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute left-1/2
                h-4 w-4
                -translate-x-1/2
                rounded-full bg-[#8BC53F]
                shadow-[0_0_0_7px_rgba(139,197,63,0.12)]
              "
            />

            {/* RED CENTER DOT */}
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C73828]" />
          </div>

          {/* TWO COLUMNS */}
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-14 xl:gap-20">

            {/* LEFT COLUMN */}
            <div className="space-y-2">
              {leftItems.map((item, index) => (
                <IndustryItem
                  key={item.id}
                  item={item}
                  index={index}
                  side="left"
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-2">
              {rightItems.map((item, index) => (
                <IndustryItem
                  key={item.id}
                  item={item}
                  index={index}
                  side="right"
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
