
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Flag,
  TrendingUp,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const milestones = [
  {
    year: "2023",
    number: "01",
    title: "Foundation",
    icon: Flag,
    description:
      "Prasun Multiservices was established with a mission to provide quality electrical and industrial solutions.",
  },
  {
    year: "2024",
    number: "02",
    title: "Business Expansion",
    icon: TrendingUp,
    description:
      "Expanded the product portfolio and introduced software development services to address a wider range of customer requirements.",
  },
  {
    year: "2025",
    number: "03",
    title: "Innovation & Development",
    icon: Lightbulb,
    description:
      "Strengthened the focus on advanced earthing solutions and improved electrical safety technologies.",
  },
];

export default function OurJourney() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });
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
      ref={sectionRef}
      id="our-journey"
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-[#F8F9FC] pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-20"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-[340px] w-[340px] rounded-full border border-[#8BC53F]/10" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[300px] w-[300px] rounded-full border border-[#C73828]/10" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div
          data-aos="fade-up"
          className="mx-auto mb-10 max-w-[760px] text-center lg:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-[#C73828]" />
            <span className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#6F9F32]">
              Our Story
            </span>
            <span className="h-[2px] w-7 bg-[#C73828]" />
          </div>

          <h2
            id="journey-heading"
            className="text-[29px] font-bold leading-[1.2] tracking-[-0.7px] text-[#26352A] sm:text-[36px] lg:text-[40px]"
          >
            Our Journey of{" "}
            <span className="text-[#8BC53F]">
              Growth & Innovation.
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 55 } : undefined}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-4 h-[3px] bg-[#C73828]"
          />
        </div>

        {/* DESKTOP TIMELINE */}
        <div className="relative hidden md:block">
          {/* MAIN LINE */}
          <div className="absolute left-[16.666%] right-[16.666%] top-[55px] h-[3px] bg-[#DDE7D7]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={
                isInView
                  ? { scaleX: 1 }
                  : undefined
              }
              style={{ transformOrigin: "left" }}
              transition={{
                duration: reduceMotion ? 0 : 1.6,
                ease: "easeInOut",
              }}
              className="h-full w-full bg-gradient-to-r from-[#8BC53F] via-[#75AB37] to-[#C73828]"
            />
          </div>

          <div className="grid grid-cols-3 gap-7 lg:gap-10">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  className="group relative flex flex-col items-center"
                >
                  {/* CIRCLE */}
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, scale: 0.5 }
                    }
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : undefined
                    }
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 16,
                      delay: index * 0.3,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { scale: 1.12, rotate: 8 }
                    }
                    className="relative z-10 flex h-[110px] w-[110px] items-center justify-center rounded-full border-[7px] border-[#F8F9FC] bg-white shadow-[0_8px_30px_rgba(30,50,40,0.08)]"
                  >
                    <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#EFF7E9] text-[#77A936] transition-colors duration-300 group-hover:bg-[#8BC53F] group-hover:text-white">
                      <Icon size={30} strokeWidth={1.7} />
                    </div>
                  </motion.div>

                  {/* CONNECTOR */}
                  <div className="h-8 w-[2px] bg-[#DDE7D7]" />

                  {/* CONTENT PANEL */}
                  <motion.div
                    data-aos="fade-up"
                    data-aos-delay={index * 140}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -6 }
                    }
                    className="relative w-full min-h-[245px] overflow-hidden border border-[#E5EBE2] bg-white px-7 py-7 shadow-[0_8px_25px_rgba(25,40,30,0.035)] transition-shadow duration-300 group-hover:shadow-[0_16px_38px_rgba(25,40,30,0.09)]"
                  >
                    {/* YEAR AND INDEX */}
                    <div className="flex items-center justify-between">
                      <span className="text-[32px] font-bold tracking-[-1px] text-[#C73828]">
                        {item.year}
                      </span>

                      <span className="text-[13px] font-semibold tracking-[2px] text-[#CBD7C4]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-3 text-[19px] font-bold leading-[1.35] text-[#26352A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[26px] text-[#6B776B]">
                      {item.description}
                    </p>

                    {/* HOVER ACCENT */}
                    <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#8BC53F] transition-all duration-500 group-hover:w-full" />

                    <ArrowUpRight
                      size={18}
                      className="absolute bottom-5 right-5 text-[#8BC53F] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE */}
        <div className="relative md:hidden">
          {/* VERTICAL LINE */}
          <div className="absolute bottom-12 left-[27px] top-7 w-[2px] bg-[#DFE8D9]">
            <motion.div
              initial={{ height: "0%" }}
              animate={
                isInView
                  ? { height: "100%" }
                  : undefined
              }
              transition={{
                duration: reduceMotion ? 0 : 1.5,
              }}
              className="w-full bg-gradient-to-b from-[#8BC53F] to-[#C73828]"
            />
          </div>

          <div className="space-y-7">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: 25 }
                  }
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : undefined
                  }
                  transition={{
                    duration: 0.55,
                    delay: index * 0.2,
                  }}
                  className="relative flex items-start gap-4"
                >
                  {/* MOBILE ICON */}
                  <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#F8F9FC] bg-[#EAF4E4] text-[#75A735] shadow-sm">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  {/* MOBILE CONTENT */}
                  <div className="relative flex-1 border border-[#E5EBE2] bg-white px-5 py-5 shadow-[0_6px_25px_rgba(30,50,30,0.04)]">
                    <span className="text-[27px] font-bold text-[#C73828]">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-[17px] font-bold text-[#26352A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-[24px] text-[#6B776B]">
                      {item.description}
                    </p>

                    <span className="absolute bottom-0 left-0 h-[3px] w-12 bg-[#8BC53F]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
