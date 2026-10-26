
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Zap,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function LightningSafetyHero() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const scrollToSolutions = () => {
    document
      .getElementById("lightning-safety-products")
      ?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
  };

  const handleQuote = () => {
    navigate("/contact#enquiry-form", {
      state: {
        category: "Lightning & Electrical Safety Solutions",
      },
    });
  };

  const features = [
    {
      icon: ShieldCheck,
      label: "Lightning Protection",
    },
    {
      icon: Zap,
      label: "Active & Conventional",
    },
    {
      icon: Building2,
      label: "Infrastructure Safety",
    },
  ];

  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-[#F7FAF4]
        pt-8 pb-10
        sm:pt-10 sm:pb-12
        lg:pt-12 lg:pb-14
      "
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[160px] top-[20px] h-[400px] w-[400px] rounded-full bg-[#8BC53F]/10 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 80, 0], y: [0, 40, 0] }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[130px] bottom-[-140px] h-[420px] w-[420px] rounded-full bg-[#C73828]/[0.07] blur-[110px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -60, 0], y: [0, -35, 0] }
        }
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SUBTLE GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#26352A 1px, transparent 1px), linear-gradient(90deg, #26352A 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: -50 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* CATEGORY LABEL */}
            <div className="mb-4 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-[3px] bg-[#C73828]"
              />

              <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#69992F]">
                Lightning & Electrical Safety
              </span>
            </div>

            {/* MAIN HEADING */}
            <h1
              className="
                max-w-[700px]
                text-[34px] font-bold
                leading-[1.16] tracking-[-1px]
                text-[#26352A]
                sm:text-[43px]
                lg:text-[48px]
                xl:text-[54px]
              "
            >
              Lightning Protection Solutions for{" "}
              <span className="text-[#79B236]">
                Safer Infrastructure.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={
                reduceMotion ? false : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="
                mt-6 max-w-[630px]
                text-[15px] leading-[28px]
                text-[#647264]
                sm:text-[16px] sm:leading-[30px]
              "
            >
              Explore active ESE and conventional lightning
              protection systems designed to support the
              protection of residential, commercial and
              industrial structures.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* EXPLORE SOLUTIONS */}
              <motion.button
                type="button"
                onClick={scrollToSolutions}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, scale: 1.025 }
                }
                whileTap={{ scale: 0.96 }}
                className="
                  group relative flex h-[51px]
                  items-center gap-5 overflow-hidden
                  rounded-[6px] bg-[#C73828]
                  pl-5 text-[14px] font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(199,56,40,0.2)]
                  transition-shadow duration-300
                  hover:shadow-[0_15px_35px_rgba(199,56,40,0.3)]
                "
              >
                <span className="absolute inset-0 translate-y-full bg-[#A92F23] transition-transform duration-300 group-hover:translate-y-0" />

                <span className="relative z-10">
                  Explore Solutions
                </span>

                <span className="relative z-10 flex h-full w-[50px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
                  <ArrowDownRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </span>
              </motion.button>

              {/* REQUEST QUOTE */}
              <motion.button
                type="button"
                onClick={handleQuote}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, scale: 1.025 }
                }
                whileTap={{ scale: 0.96 }}
                className="
                  group relative flex h-[51px]
                  items-center gap-4 overflow-hidden
                  rounded-[6px]
                  border border-[#8BC53F]
                  bg-white px-5
                  text-[14px] font-bold
                  text-[#26352A]
                  shadow-[0_7px_20px_rgba(70,110,40,0.07)]
                  transition-shadow duration-300
                  hover:shadow-[0_15px_30px_rgba(139,197,63,0.22)]
                "
              >
                <span className="absolute inset-0 -translate-x-full bg-[#8BC53F] transition-transform duration-300 group-hover:translate-x-0" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Request a Quote
                </span>

                <ArrowUpRight
                  size={19}
                  className="relative z-10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </motion.button>
            </motion.div>

            {/* FEATURE TAGS */}
            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#DCE6D5] pt-5"
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 text-[13px] font-medium text-[#627062]"
                  >
                    <Icon
                      size={18}
                      className="text-[#8BC53F]"
                    />
                    {feature.label}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — SINGLE IMAGE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 50, scale: 0.95 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative mx-auto
              h-[300px] w-full max-w-[620px]
              sm:h-[400px]
              lg:h-[470px]
            "
          >
            {/* SOFT BACKGROUND */}
            <div className="absolute inset-[5%_3%] rounded-[35px] bg-gradient-to-br from-[#E4F0D8] via-[#F2F7ED] to-[#E9EEE5]" />

            {/* ANIMATED CIRCLE */}
            <motion.div
              aria-hidden="true"
              className="absolute left-[3%] top-[3%] h-[160px] w-[160px] rounded-full border border-dashed border-[#8BC53F]/40 sm:h-[210px] sm:w-[210px]"
              animate={
                reduceMotion ? undefined : { rotate: 360 }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* MAIN HERO IMAGE */}
            <motion.img
              src="/light.png"
              alt="Lightning protection system for residential commercial and industrial infrastructure"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -12, 0] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative z-10
                h-full w-full object-contain
                drop-shadow-[0_22px_35px_rgba(38,53,42,0.18)]
              "
            />

            {/* DECORATIVE ELEMENT */}
            <motion.div
              aria-hidden="true"
              className="absolute bottom-[9%] right-[5%] z-20 h-[65px] w-[65px] border-[7px] border-[#8BC53F]/35 sm:h-[85px] sm:w-[85px]"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden bg-[#E0E8D8]">
        <motion.div
          className="h-full w-[35%] bg-gradient-to-r from-[#8BC53F] to-[#C73828]"
          animate={
            reduceMotion
              ? undefined
              : { x: ["-120%", "350%"] }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
}
