import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MoveUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactHero() {
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

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact-hero"
      aria-labelledby="contact-hero-heading"
      className="
        relative flex w-full items-center
        overflow-hidden bg-[#17241D]
        min-h-[370px] sm:min-h-[390px] lg:min-h-[420px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/contacthero.jpg')",
          }}
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C1912]/95 via-[#12231A]/85 to-[#101A15]/75" />

      {/* MOVING GREEN GLOW */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 90, 0],
                y: [0, -35, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none absolute
          -left-32 bottom-[-180px]
          h-[440px] w-[440px]
          rounded-full bg-[#8BC53F]/15 blur-[110px]
        "
      />

      {/* MOVING RED GLOW */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -75, 0],
                y: [0, 35, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none absolute
          -right-28 -top-40
          h-[380px] w-[380px]
          rounded-full bg-[#C73828]/15 blur-[100px]
        "
      />

      {/* ANIMATED TOP LINE */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "left" }}
        className="
          absolute left-0 top-0
          h-[3px] w-full
          bg-gradient-to-r
          from-[#8BC53F] via-[#C73828] to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="mx-auto max-w-[850px] text-center"
        >
          {/* EYEBROW */}
          <motion.div
            variants={item}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#C73828]" />

            <span className="text-[12px] font-semibold uppercase tracking-[3px] text-[#A8D66C]">
              Contact Us
            </span>

            <span className="h-[2px] w-8 bg-[#C73828]" />
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={item}
            id="contact-hero-heading"
            className="
              text-[32px] font-bold leading-[1.2]
              tracking-[-0.7px] text-white
              sm:text-[42px] lg:text-[52px]
            "
          >
            Let's Connect & Build{" "}
            <span className="text-[#8BC53F]">the Right Solution.</span>
          </motion.h1>

          {/* ANIMATED UNDERLINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 65 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
            }}
            className="mx-auto mt-5 h-[3px] bg-[#C73828]"
          />

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="
              mx-auto mt-5 max-w-[720px]
              text-[14px] leading-[26px]
              text-white/75
              sm:text-[16px] sm:leading-[29px]
            "
          >
            Have a product enquiry, technical requirement or software project?
            Get in touch with Prasun Multiservices to discuss your needs.
          </motion.p>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#contact-details"
        aria-label="Scroll to contact details"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute bottom-5 left-1/2 z-20
          flex h-9 w-9 -translate-x-1/2
          items-center justify-center
          border border-white/20
          text-white/80
          transition-colors duration-300
          hover:border-[#8BC53F]
          hover:text-[#8BC53F]
        "
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
