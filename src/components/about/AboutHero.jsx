
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, MoveUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });

    const timer = setTimeout(() => AOS.refresh(), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="
        relative isolate flex w-full
        min-h-[370px] items-center
        overflow-hidden bg-[#09140E]
        sm:min-h-[390px]
        lg:min-h-[420px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0 -z-30"
        initial={{ scale: 1.08 }}
        animate={
          reduceMotion
            ? { scale: 1 }
            : { scale: [1.08, 1.13, 1.08] }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: "url('/abouthero.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-20 bg-[#061009]/60" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061009]/70 via-[#07130C]/60 to-[#061009]/75" />

      {/* MOVING GREEN GLOW */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-100, 120, -100],
                opacity: [0.15, 0.32, 0.15],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none absolute
          -left-24 top-0
          h-[320px] w-[320px]
          rounded-full bg-[#8BC53F]/20
          blur-[100px]
        "
      />

      {/* MOVING RED GLOW */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [80, -100, 80],
                y: [30, -20, 30],
                opacity: [0.12, 0.25, 0.12],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none absolute
          -right-24 bottom-0
          h-[300px] w-[300px]
          rounded-full bg-[#C73828]/15
          blur-[100px]
        "
      />

      {/* FLOATING GEOMETRIC RINGS */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { rotate: 360 }
        }
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none absolute
          -right-20 top-1/2
          hidden h-[340px] w-[340px]
          -translate-y-1/2
          rounded-full border border-[#8BC53F]/20
          lg:block
        "
      >
        <div className="absolute inset-9 rounded-full border border-dashed border-white/15" />
        <div className="absolute inset-[75px] rounded-full border border-[#C73828]/20" />
      </motion.div>

      {/* ANIMATED TOP LINE */}
      <div className="absolute left-0 top-0 h-[3px] w-full overflow-hidden bg-white/10">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: ["-100%", "200%"] }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#8BC53F] to-[#C73828]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[920px] text-center">

          {/* EYEBROW */}
          <div
            data-aos="fade-down"
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-7 bg-[#C73828]" />

            <span className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#A9DE76] sm:text-[14px]">
              About Prasun Multiservices
            </span>

            <span className="h-[2px] w-7 bg-[#C73828]" />
          </div>

          {/* HEADING */}
          <motion.h1
            id="about-hero-heading"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[35px] font-bold
              leading-[1.15] tracking-[-0.8px]
              text-white
              sm:text-[46px]
              lg:text-[56px]
            "
          >
            Built on{" "}
            <span className="text-[#8BC53F]">
              Trust.
            </span>{" "}
            Driven by{" "}
            <span className="text-[#8BC53F]">
              Innovation.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              mx-auto mt-5 max-w-[760px]
              text-[14px] leading-[26px]
              text-white/75
              sm:text-[16px] sm:leading-[29px]
            "
          >
            Discover a company committed to providing dependable
            electrical products, industrial solutions and digital
            services that support safety, efficiency and business
            development.
          </motion.p>

          {/* ANIMATED BOTTOM LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 76 }}
            transition={{
              duration: 0.9,
              delay: 0.65,
            }}
            className="mx-auto mt-7 h-[3px] rounded-full bg-[#C73828]"
          />
        </div>
      </div>

      {/* BOTTOM CORNER DETAIL */}
      <div className="absolute bottom-0 left-0 h-[4px] w-20 bg-[#8BC53F]" />
      <div className="absolute bottom-0 left-20 h-[4px] w-9 bg-[#C73828]" />

      {/* FLOATING DECORATIVE ARROW */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, 9, 0] }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none absolute
          bottom-7 right-7
          hidden h-11 w-11
          items-center justify-center
          rounded-full border border-white/25
          text-[#8BC53F]
          lg:flex
        "
      >
        <ArrowDownRight size={22} />
      </motion.div>
    </section>
  );
}
