import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  const scrollToServices = () => {
    const section = document.getElementById("our-services");

    if (section) {
      section.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="services-hero"
      aria-labelledby="services-hero-title"
      className="
    relative flex w-full items-center overflow-hidden
    bg-[#142018]
    min-h-[370px]
    sm:min-h-[390px]
    lg:min-h-[420px]
  "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { scale: [1, 1.07, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/serviceshero.png')",
          }}
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1710]/95 via-[#102017]/85 to-[#101B14]/75" />

      {/* ANIMATED GREEN GLOW */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-[-180px] h-[440px] w-[440px] rounded-full bg-[#8BC53F]/15 blur-[110px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 80, 0],
                y: [0, -40, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ANIMATED RED GLOW */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#C73828]/15 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -65, 0],
                y: [0, 40, 0],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      

      {/* TOP ANIMATED LINE */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#8BC53F] via-[#C73828] to-transparent"
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.15,
              },
            },
          }}
          className="mx-auto max-w-[1000px] text-center"
        >
          {/* EYEBROW */}
          <motion.div
            variants={fadeUp}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#C73828]" />

            <span className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#A8D66C]">
              Our Professional Services
            </span>

            <span className="h-[2px] w-8 bg-[#C73828]" />
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            id="services-hero-title"
            className="text-[31px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[42px] lg:text-[51px]"
          >
            Smart Services for{" "}
            <span className="text-[#8BC53F]">Electrical Infrastructure</span> &
            Digital Growth.
          </motion.h1>

          {/* UNDERLINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 70 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mx-auto mt-5 h-[3px] bg-[#C73828]"
          />

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[800px] text-[14px] leading-[27px] text-white/75 sm:text-[16px] sm:leading-[29px]"
          >
            Prasun Multiservices provides professional electrical, drilling,
            software development, cloud, data management and IT solutions
            tailored to different business requirements.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <motion.button
              type="button"
              onClick={scrollToServices}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex h-[52px] items-center gap-5 overflow-hidden bg-[#C73828] pl-6 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#AD3025]"
            >
              <span className="relative z-10">Explore Our Services</span>

              <span className="relative z-10 flex h-full w-[52px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors duration-300 group-hover:bg-[#8BC53F]">
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>

              {/* BUTTON SHINE */}
              <span className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[150%]" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL ARROW */}
      <motion.button
        type="button"
        onClick={scrollToServices}
        aria-label="Scroll to services"
        className="absolute bottom-4 left-1/2 z-20 flex h-9 w-9 -translate-x-1/2 items-center justify-center border border-white/25 text-white/80 transition-colors hover:border-[#8BC53F] hover:text-[#8BC53F]"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
