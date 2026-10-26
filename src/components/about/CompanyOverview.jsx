
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Factory,
  Code2,
  Handshake,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: Factory,
    title: "Electrical & Industrial Solutions",
    description:
      "Reliable earthing, grounding, lightning protection and electrical utility products.",
  },
  {
    icon: Code2,
    title: "Digital & IT Services",
    description:
      "Websites, software, applications, cloud solutions, CRM, ERP and IT support.",
  },
  {
    icon: Handshake,
    title: "Customer-First Approach",
    description:
      "Understanding your needs and delivering suitable, dependable solutions.",
  },
];

export default function CompanyOverview() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="company-overview"
      aria-labelledby="company-overview-heading"
      className="
        relative w-full overflow-hidden
        bg-[#FAFBF8]
        py-14 sm:py-16 lg:py-20
      "
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full border border-[#8BC53F]/10" />

      <div className="pointer-events-none absolute -left-20 -top-20 h-[250px] w-[250px] rounded-full border border-[#8BC53F]/10" />

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-10 xl:gap-12">

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            className="relative"
          >
           
            

            {/* HEADING */}
            <h2
              id="company-overview-heading"
              className="
                text-[30px] font-bold
                leading-tight tracking-[-0.7px]
                text-[#26352A]
                sm:text-[36px] lg:text-[40px]
              "
            >
              ABOUT{" "}
              <span className="text-[#8BC53F]">
                US
              </span>
            </h2>

            {/* ANIMATED UNDERLINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-4 h-[3px] rounded-full bg-[#C73828]"
            />

            {/* DESCRIPTION 01 */}
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                mt-6 max-w-[570px]
                text-[14px] leading-[27px]
                text-[#687568]
                sm:text-[15px] sm:leading-[29px]
              "
            >
              Established in January 2023,{" "}
              <strong className="font-semibold text-[#26352A]">
                Prasun Multiservices
              </strong>{" "}
              is a Pune-based manufacturer, supplier and service
              provider offering reliable electrical, industrial
              and digital solutions to customers across India.
            </p>

            {/* DESCRIPTION 02 */}
            <p
              data-aos="fade-up"
              data-aos-delay="160"
              className="
                mt-4 max-w-[570px]
                text-[14px] leading-[27px]
                text-[#687568]
                sm:text-[15px] sm:leading-[29px]
              "
            >
              Our product portfolio includes earthing electrodes,
              grounding compounds, lightning protection systems,
              power-saving devices and electrical utility
              products. We focus on solutions that support
              operational safety and efficiency.
            </p>

            {/* DESCRIPTION 03 */}
            <p
              data-aos="fade-up"
              data-aos-delay="220"
              className="
                mt-4 max-w-[570px]
                text-[14px] leading-[27px]
                text-[#687568]
                sm:text-[15px] sm:leading-[29px]
              "
            >
              Alongside industrial products, we deliver website
              development, customized software, mobile
              applications, cloud services, CRM, ERP and IT
              support. Every requirement is approached with
              practical planning and customer-focused service.
            </p>

            {/* CREATIVE RECTANGULAR BUTTON */}
            <div
              data-aos="zoom-in-up"
              data-aos-delay="280"
              className="mt-7"
            >
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4 }
                }
                whileTap={{ scale: 0.98 }}
                className="inline-flex"
              >
                <Link
                  to="/services"
                  className="
                    group relative inline-flex
                    h-[52px] items-center
                    overflow-hidden
                    rounded-[5px]
                    bg-[#C73828]
                    pl-6 pr-[65px]
                    text-[14px] font-semibold
                    text-white
                    shadow-[0_10px_25px_rgba(199,56,40,0.15)]
                    transition-all duration-300
                    hover:shadow-[0_15px_35px_rgba(199,56,40,0.25)]
                  "
                >
                  {/* ANIMATED SHINE */}
                  <span
                    className="
                      pointer-events-none absolute inset-0
                      -translate-x-[150%]
                      skew-x-[-25deg]
                      bg-gradient-to-r
                      from-transparent via-white/25 to-transparent
                      transition-transform duration-700
                      group-hover:translate-x-[150%]
                    "
                  />

                  {/* BUTTON TEXT */}
                  <span className="relative z-10">
                    Explore Our Services
                  </span>

                  {/* ARROW BOX */}
                  <span
                    className="
                      absolute right-0 top-0
                      flex h-full w-[52px]
                      items-center justify-center
                      border-l border-white/20
                      bg-[#AE3024]
                      transition-all duration-300
                      group-hover:bg-[#8BC53F]
                    "
                  >
                    <ArrowUpRight
                      size={21}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">

            {/* CONNECTING LINE */}
            <div
              className="
                absolute bottom-[75px]
                left-[42px] top-[43px]
                w-[2px] bg-[#E0EBD8]
                sm:left-[48px] sm:top-[48px]
              "
            >
              {/* MOVING DOT */}
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        top: ["0%", "100%", "0%"],
                      }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute left-1/2
                  h-3 w-3 -translate-x-1/2
                  rounded-full bg-[#8BC53F]
                  shadow-[0_0_0_6px_rgba(139,197,63,0.13)]
                "
              />
            </div>

            {/* TIMELINE ITEMS */}
            <div className="space-y-8 sm:space-y-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    data-aos="fade-left"
                    data-aos-delay={index * 140}
                    className="group relative flex items-start gap-5 sm:gap-6"
                  >
                    {/* ICON CIRCLE */}
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.1,
                              rotate: 7,
                            }
                      }
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        relative z-10
                        flex h-[84px] w-[84px]
                        shrink-0 items-center justify-center
                        rounded-full bg-[#F0F5EC]
                        text-[#75A737]
                        transition-all duration-300
                        group-hover:bg-[#8BC53F]
                        group-hover:text-white
                        sm:h-[96px] sm:w-[96px]
                      "
                    >
                      <Icon
                        size={33}
                        strokeWidth={1.6}
                      />
                    </motion.div>

                    {/* TIMELINE TEXT */}
                    <div className="min-w-0 flex-1 pt-2 sm:pt-3">
                      <h3
                        className="
                          text-[18px] font-bold
                          leading-[1.35] text-[#26352A]
                          transition-colors duration-300
                          group-hover:text-[#6E9F30]
                          sm:text-[20px]
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-2 max-w-[420px]
                          text-[14px] leading-[26px]
                          text-[#687568]
                          sm:text-[15px]
                        "
                      >
                        {feature.description}
                      </p>

                      {/* ANIMATED RED ACCENT */}
                      <div className="mt-4 flex items-center gap-2">
                        <span
                          className="
                            h-[2px] w-8
                            bg-[#C73828]
                            transition-all duration-500
                            group-hover:w-16
                          "
                        />

                        <ArrowRight
                          size={16}
                          className="
                            text-[#C73828]
                            transition-transform duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
