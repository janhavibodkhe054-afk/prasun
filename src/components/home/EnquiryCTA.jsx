
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MoveRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EnquiryCTA() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    const timer = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="enquiry-cta"
      aria-labelledby="enquiry-cta-heading"
      className="relative isolate w-full overflow-hidden bg-[#09120D]"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cta.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-20 bg-[#07110B]/35" />

      {/* GRADIENT FOR TEXT READABILITY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07130C]/85 via-[#07130C]/75 to-[#07130C]/60" />

      {/* ANIMATED BACKGROUND LIGHT */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-60, 100, -60],
                opacity: [0.12, 0.25, 0.12],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-32 right-[10%] h-[300px] w-[300px] rounded-full bg-[#8BC53F]/20 blur-[100px]"
      />

      {/* TOP ANIMATED LINE */}
      <div className="absolute left-0 top-0 h-[3px] w-full overflow-hidden bg-white/10">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: ["-100%", "100%"] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#8BC53F] to-[#C73828]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-[340px] max-w-[1440px] items-center px-5 py-14 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid w-full grid-cols-1 items-center gap-9 lg:grid-cols-[1fr_auto] lg:gap-16">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="max-w-[780px]">
            {/* SMALL LABEL */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C73828]" />

              <span className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#A9DE76] sm:text-[13px]">
                Let's Work Together
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="enquiry-cta-heading"
              className="max-w-[780px] text-[29px] font-bold leading-[1.2] tracking-[-0.6px] text-white sm:text-[36px] lg:text-[40px]"
            >
              Looking for Reliable Products or{" "}
              <span className="text-[#8BC53F]">
                Professional Services?
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[700px] text-[14px] leading-[25px] text-white/75 sm:text-[15px] sm:leading-[27px]">
              Whether you need electrical grounding products,
              installation support or a customized software
              solution, our team is ready to understand your
              requirements.
            </p>
          </div>

          {/* RIGHT CTA BUTTONS */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="flex w-full flex-col gap-3 sm:w-auto"
          >
            {/* PRIMARY BUTTON */}
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : { x: 5 }
              }
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="group relative flex min-h-[54px] w-full min-w-[225px] items-center justify-between gap-5 overflow-hidden rounded-[10px] bg-[#C73828] px-6 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#AE3024]"
              >
                <span className="relative z-10">
                  Request a Quote
                </span>

                <ArrowUpRight
                  size={20}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

                {/* SHINE */}
                <span className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[150%]" />
              </Link>
            </motion.div>

            {/* SECONDARY BUTTON */}
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : { x: 5 }
              }
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="group flex min-h-[54px] w-full min-w-[225px] items-center justify-between gap-5 rounded-[10px] border border-white/40 bg-white/10 px-6 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#8BC53F] hover:bg-[#8BC53F] hover:text-[#10200D]"
              >
                Contact Our Team

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-[3px] w-[90px] bg-[#8BC53F]" />
      <div className="absolute bottom-0 left-[90px] h-[3px] w-[35px] bg-[#C73828]" />
    </section>
  );
}
