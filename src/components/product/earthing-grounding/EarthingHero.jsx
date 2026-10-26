
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EarthingHero() {
  const reduceMotion = useReducedMotion();

  const scrollToProducts = () => {
    document
      .getElementById("earthing-products")
      ?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
  };

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
      {/* ANIMATED BACKGROUND */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[150px] top-[30px] h-[400px] w-[400px] rounded-full bg-[#8BC53F]/10 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 80, 0],
                y: [0, 50, 0],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[100px] bottom-[-150px] h-[420px] w-[420px] rounded-full bg-[#C73828]/[0.07] blur-[110px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -60, 0],
                y: [0, -50, 0],
              }
        }
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DECORATIVE GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#26352A 1px, transparent 1px), linear-gradient(90deg, #26352A 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -55 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 30 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="h-[3px] bg-[#C73828]"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[2.2px] text-[#69992F] sm:text-[12px]">
                Our Product Range
              </span>
            </div>

            {/* HEADING - NO UNDERLINE */}
            <h1
              className="
                max-w-[690px]
                text-[34px] font-bold leading-[1.16]
                tracking-[-0.9px] text-[#26352A]
                sm:text-[43px]
                lg:text-[50px]
                xl:text-[56px]
              "
            >
              Earthing &{" "}
              <span className="text-[#79B236]">
                Grounding
              </span>{" "}
              Solutions
            </h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 max-w-[610px] text-[14px] leading-[27px] text-[#647264] sm:text-[15px] sm:leading-[29px]"
            >
              Reliable earthing electrodes, grounding compounds,
              earthing strips and chamber covers designed to
              support electrical safety, fault current
              dissipation and dependable grounding systems.
            </motion.p>

            {/* ACTIVE BUTTONS */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* EXPLORE PRODUCTS */}
              <motion.button
                type="button"
                onClick={scrollToProducts}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, scale: 1.025 }
                }
                whileTap={{ scale: 0.95 }}
                className="
                  group relative flex h-[50px]
                  items-center gap-5 overflow-hidden
                  rounded-[5px] bg-[#C73828]
                  pl-5 text-[13px] font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(199,56,40,0.2)]
                  transition-shadow duration-300
                  hover:shadow-[0_16px_35px_rgba(199,56,40,0.3)]
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-3
                  focus-visible:outline-[#C73828]
                "
              >
                <span className="absolute inset-0 translate-y-full bg-[#A92F23] transition-transform duration-300 group-hover:translate-y-0" />

                <span className="relative z-10">
                  Explore Products
                </span>

                <span className="relative z-10 flex h-full w-[48px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
                  <ArrowDownRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </span>
              </motion.button>

              {/* REQUEST A QUOTE */}
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, scale: 1.025 }
                }
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact#enquiry-form"
                  className="
                    group relative flex h-[50px]
                    items-center gap-4 overflow-hidden
                    rounded-[5px]
                    border border-[#8BC53F]
                    bg-white px-5
                    text-[13px] font-semibold
                    text-[#26352A]
                    shadow-[0_7px_20px_rgba(70,110,40,0.07)]
                    transition-shadow duration-300
                    hover:shadow-[0_15px_30px_rgba(139,197,63,0.22)]
                    focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-3
                    focus-visible:outline-[#8BC53F]
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#8BC53F] transition-transform duration-300 group-hover:translate-x-0" />

                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Request a Quote
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="relative z-10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* FEATURE LABELS */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#DCE6D5] pt-5"
            >
              <div className="flex items-center gap-2 text-[12px] font-medium text-[#627062]">
                <ShieldCheck
                  size={17}
                  className="text-[#8BC53F]"
                />
                Electrical Safety
              </div>

              <div className="flex items-center gap-2 text-[12px] font-medium text-[#627062]">
                <Zap
                  size={17}
                  className="text-[#8BC53F]"
                />
                Grounding Solutions
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT PRODUCT IMAGE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 60, scale: 0.93 }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative mx-auto
              h-[260px] w-full max-w-[600px]
              sm:h-[340px]
              lg:h-[410px]
            "
          >
            {/* BACK SHAPE */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-[7%_8%_6%_10%] rounded-[40px] bg-gradient-to-br from-[#E2EFD5] via-[#F0F6E9] to-[#E7EDE2]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      borderRadius: [
                        "40px",
                        "75px",
                        "40px",
                      ],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* ROTATING RING */}
            <motion.div
              aria-hidden="true"
              className="absolute left-[3%] top-[4%] h-[150px] w-[150px] rounded-full border border-dashed border-[#8BC53F]/45 sm:h-[200px] sm:w-[200px]"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* IMAGE */}
            <motion.img
              src="/earthing-hero.png"
              alt="Earthing and grounding products"
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
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_22px_30px_rgba(38,53,42,0.15)]"
            />

            {/* FLOATING DECORATION */}
            <motion.div
              aria-hidden="true"
              className="absolute bottom-[11%] right-[5%] z-20 h-[62px] w-[62px] border-[8px] border-[#8BC53F]/40 sm:h-[85px] sm:w-[85px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 90, 180, 270, 360],
                    }
              }
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              aria-hidden="true"
              className="absolute right-[12%] top-[6%] h-4 w-4 rounded-full bg-[#C73828]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 18, 0],
                      opacity: [0.6, 1, 0.6],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
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
