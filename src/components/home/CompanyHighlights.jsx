
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  CalendarDays,
  Globe2,
  UsersRound,
  Layers3,
} from "lucide-react";

const highlights = [
  {
    icon: CalendarDays,
    value: 2023,
    suffix: "",
    label: "Established",
    type: "year",
  },
  {
    icon: Globe2,
    value: "Pan India",
    suffix: "",
    label: "Market Coverage",
    type: "text",
  },
  {
    icon: UsersRound,
    value: "6–20",
    suffix: "",
    label: "Employees",
    type: "text",
  },
  {
    icon: Layers3,
    value: 2,
    suffix: "",
    label: "Core Business Segments",
    type: "number",
  },
];

// ANIMATED COUNTER
function AnimatedValue({
  value,
  type,
  suffix = "",
  start,
  reduceMotion,
}) {
  const from = type === "year" ? 2000 : 0;

  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!start || type === "text") return;

    if (reduceMotion) {
      setCount(Number(value));
      return;
    }

    const to = Number(value);
    const duration = 1600;
    let frame;
    let startTime = null;

    const animate = (time) => {
      if (startTime === null) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(
        Math.round(from + (to - from) * eased)
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [start, type, value, from, reduceMotion]);

  if (type === "text") return <>{value}</>;

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function CompanyHighlights() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });

    AOS.refresh();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="company-highlights"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* SOFT BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[260px] w-[260px] rounded-full bg-[#8BC53F]/[0.035] blur-[90px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[260px] w-[260px] rounded-full bg-[#C73828]/[0.025] blur-[90px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

        {/* HIGHLIGHTS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}

                // SCROLL REVEAL
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 45,
                        scale: 0.92,
                      }
                }

                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : undefined
                }

                transition={{
                  duration: 0.75,
                  delay: index * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}

                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -6 }
                }

                className={`
                  group relative flex flex-col items-center
                  px-3 py-6 text-center sm:px-6 sm:py-7

                  ${
                    index % 2 === 0
                      ? "border-r border-[#E5E9E0]"
                      : ""
                  }

                  ${
                    index === 1 || index === 2
                      ? "lg:border-r lg:border-[#E5E9E0]"
                      : ""
                  }

                  ${
                    index < 2
                      ? "border-b border-[#E5E9E0] lg:border-b-0"
                      : ""
                  }
                `}
              >

                {/* ANIMATED ICON */}
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.5,
                          rotate: -25,
                        }
                  }
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                        }
                      : undefined
                  }
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 14,
                    delay: 0.2 + index * 0.16,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: 8,
                          scale: 1.12,
                        }
                  }
                  className="
                    relative mb-5 flex h-12 w-12
                    items-center justify-center
                    rounded-2xl bg-[#F0F7E9]
                    text-[#426B28]
                    transition-colors duration-300
                    group-hover:bg-[#8BC53F]
                    group-hover:text-white
                    sm:h-14 sm:w-14
                  "
                >
                  <Icon size={25} strokeWidth={1.8} />

                  {/* HOVER GLOW */}
                  <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[#8BC53F]/15 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>

                {/* VALUE */}
                <motion.h3
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 16 }
                  }
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : undefined
                  }
                  transition={{
                    duration: 0.55,
                    delay: 0.3 + index * 0.16,
                  }}
                  className="
                    whitespace-nowrap text-[27px]
                    font-bold leading-tight
                    tracking-[-1px] text-[#28352A]
                    sm:text-[35px] lg:text-[39px]
                  "
                >
                  <AnimatedValue
                    value={item.value}
                    type={item.type}
                    suffix={item.suffix}
                    start={isInView}
                    reduceMotion={reduceMotion}
                  />
                </motion.h3>

                {/* ANIMATED RED LINE */}
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : { width: 0, opacity: 0 }
                  }
                  animate={
                    isInView
                      ? {
                          width: 28,
                          opacity: 1,
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.45 + index * 0.16,
                  }}
                  className="
                    mb-3 mt-4 h-[3px]
                    rounded-full bg-[#C73828]
                    transition-[width] duration-300
                    group-hover:!w-12
                  "
                />

                {/* LABEL */}
                <motion.p
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 12 }
                  }
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : undefined
                  }
                  transition={{
                    duration: 0.55,
                    delay: 0.5 + index * 0.16,
                  }}
                  className="
                    text-[13px] font-medium
                    leading-6 text-[#697469]
                    sm:text-[15px] lg:text-[16px]
                  "
                >
                  {item.label}
                </motion.p>

                {/* HOVER BOTTOM LINE */}
                <span
                  className="
                    absolute bottom-0 left-1/2
                    h-[2px] w-0
                    -translate-x-1/2
                    bg-[#8BC53F]
                    transition-all duration-500
                    group-hover:w-[65%]
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
