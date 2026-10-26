
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Code2,
  BadgeCheck,
  Headset,
  Zap,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Electrical & Industrial Products",
  },
  {
    icon: Code2,
    title: "Software & IT Solutions",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Focused Approach",
  },
  {
    icon: Headset,
    title: "Customer-Centric Support",
  },
];

export default function AboutCompany() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });

    const timer = setTimeout(() => AOS.refresh(), 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about-company"
      aria-labelledby="about-company-heading"
      className="relative w-full overflow-hidden bg-[#F8F7F2] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-32 top-16 h-[350px] w-[350px] rounded-full bg-[#83C341]/10 blur-[90px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#C73828]/5 blur-[90px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* LEFT — IMAGE COLLAGE */}
          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[610px] lg:mx-0"
          >
            <div className="relative pb-7 sm:pb-9">

              {/* BACKGROUND FRAME */}
              <div className="absolute inset-x-6 bottom-9 top-7 rounded-[32px] bg-[#E6F1DF]" />

              <div className="relative grid grid-cols-5 gap-3 sm:gap-4">

                {/* MAIN IMAGE */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  className="group relative col-span-3 h-[315px] overflow-hidden rounded-[22px] shadow-[0_22px_55px_rgba(30,60,30,0.13)] sm:h-[445px] sm:rounded-[28px] lg:h-[490px]"
                >
                  <img
                    src="/about1.jpg"
                    alt="Electrical and industrial solutions by Prasun Multiservices in Pune"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2113]/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-4 flex items-center gap-2 sm:bottom-7 sm:left-6">
                    <Zap
                      size={19}
                      className="text-[#B9EC96]"
                    />

                    <span className="text-[13px] font-semibold text-white sm:text-[15px]">
                      Industrial Expertise
                    </span>
                  </div>
                </div>

                {/* TWO SMALL IMAGES */}
                <div className="col-span-2 flex flex-col gap-3 pt-8 sm:gap-4 sm:pt-11">

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    className="group h-[140px] overflow-hidden rounded-[18px] shadow-[0_15px_40px_rgba(30,60,30,0.12)] sm:h-[200px] sm:rounded-[24px] lg:h-[215px]"
                  >
                    <img
                      src="/about2.jpg"
                      alt="Earthing electrodes and electrical grounding products"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="group h-[140px] overflow-hidden rounded-[18px] shadow-[0_15px_40px_rgba(30,60,30,0.12)] sm:h-[200px] sm:rounded-[24px] lg:h-[215px]"
                  >
                    <img
                      src="/about3.avif"
                      alt="Website development and software solutions"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE */}
              <div
                data-aos="fade-up"
                data-aos-delay="450"
                className="absolute -bottom-2 left-3 z-10 rounded-[18px] border border-[#E2EADC] bg-white px-4 py-3 shadow-[0_15px_40px_rgba(30,55,30,0.14)] sm:left-6 sm:px-5 sm:py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3E4] text-[#426B28]">
                    <BadgeCheck size={24} />
                  </span>

                  <div>
                    <p className="text-[18px] font-bold text-[#28352A] sm:text-[20px]">
                      Since 2023
                    </p>

                    <p className="text-[12px] text-[#718071] sm:text-[13px]">
                      Quality & Innovation
                    </p>
                  </div>
                </div>
              </div>

              {/* RED ACCENT */}
              <div className="absolute -top-3 left-6 h-[4px] w-20 rounded-full bg-[#C73828]" />
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="relative">

            {/* SECTION LABEL */}
            <div
              data-aos="fade-up"
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#C73828]" />

              <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#426B28] sm:text-[14px]">
                Who We Are
              </span>
            </div>

            {/* SEO FRIENDLY HEADING */}
            <h2
              id="about-company-heading"
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-[650px] text-[32px] font-bold leading-[1.18] tracking-[-1px] text-[#28352A] sm:text-[40px] lg:text-[43px] xl:text-[48px]"
            >
              Electrical Expertise.
              <br />
              <span className="text-[#426B28]">
                Digital Innovation.
              </span>
              <br />
              <span className="text-[#C73828]">
                One Trusted Partner.
              </span>
            </h2>

            {/* SHORT SEO DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-6 max-w-[620px] text-[16px] leading-[29px] text-[#667266] sm:text-[17px] sm:leading-[31px]"
            >
              Established in 2023,{" "}
              <strong className="font-semibold text-[#28352A]">
                Prasun Multiservices
              </strong>{" "}
              is a Pune-based provider of electrical and industrial
              products, earthing solutions, software development
              and IT services.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="230"
              className="mt-4 max-w-[620px] text-[15px] leading-[28px] text-[#667266] sm:text-[16px]"
            >
              We deliver reliable solutions for industrial safety,
              business efficiency and digital growth across India.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 90}
                    className="group flex min-h-[76px] items-center gap-3 rounded-[16px] border border-[#E3E9DE] bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#B5D49F] hover:shadow-[0_12px_28px_rgba(30,60,30,0.08)]"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        index % 2 === 0
                          ? "bg-[#EDF5E7] text-[#426B28] group-hover:bg-[#426B28] group-hover:text-white"
                          : "bg-[#FCEDEA] text-[#C73828] group-hover:bg-[#C73828] group-hover:text-white"
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <p className="text-[14px] font-semibold leading-[22px] text-[#28352A] sm:text-[15px]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* ANIMATED BUTTONS */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {/* PRIMARY BUTTON */}
              <motion.div
                whileHover={
                  reduceMotion ? {} : { y: -4, scale: 1.025 }
                }
                whileTap={{ scale: 0.96 }}
                className="relative"
              >
                <Link
                  to="/about"
                  className="group relative inline-flex min-h-[56px] items-center justify-center gap-4 overflow-hidden rounded-full bg-[#C73828] px-7 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(199,56,40,0.22)] transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(199,56,40,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C73828]"
                >
                  {/* ANIMATED SHINE */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[150%]" />

                  <span className="relative z-10">
                    More About Us
                  </span>

                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#C73828]">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </motion.div>

              {/* SECONDARY BUTTON */}
              <motion.div
                whileHover={
                  reduceMotion ? {} : { y: -4, scale: 1.025 }
                }
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border-2 border-[#426B28] bg-transparent px-7 text-[15px] font-semibold text-[#426B28] transition-all duration-300 hover:bg-[#426B28] hover:text-white hover:shadow-[0_12px_28px_rgba(66,107,40,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426B28]"
                >
                  Get in Touch

                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </motion.div>
            </div>

            {/* TRUST NOTE */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="mt-6 flex items-center gap-2 text-[14px] font-medium text-[#426B28]"
            >
              <CheckCircle2 size={19} />
              Serving Businesses Across India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
