
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Zap,
  Code2,
  ArrowUpRight,
  Check,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceAreas = [
  {
    number: "01",
    icon: Zap,
    title: "Electrical & Infrastructure",
    description:
      "Professional electrical solutions, earthing services and borewell drilling support for infrastructure requirements.",
    color: "#8BC53F",
    points: [
      "Electrical Earthing",
      "Grounding Solutions",
      "Borewell Drilling",
    ],
  },
  {
    number: "02",
    icon: Code2,
    title: "Software & IT Solutions",
    description:
      "Digital services including website development, custom applications, cloud solutions and business software.",
    color: "#C73828",
    points: [
      "Website & App Development",
      "CRM, ERP & Custom Software",
      "Cloud, Data & IT Support",
    ],
  },
];

export default function ServicesOverview() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    const timer = setTimeout(() => AOS.refresh(), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="our-services"
      aria-labelledby="services-overview-heading"
      className="relative w-full overflow-hidden bg-[#F8FAF6] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full border border-[#8BC53F]/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[340px] w-[340px] rounded-full border border-[#C73828]/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C73828]" />

              <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#6D9D30]">
                What We Do
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="services-overview-heading"
              className="max-w-[560px] text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#26352A] sm:text-[38px] lg:text-[42px]"
            >
              From Physical Infrastructure to{" "}
              <span className="text-[#8BC53F]">
                Digital Transformation.
              </span>
            </h2>

            {/* ANIMATED UNDERLINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 65 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="mt-5 h-[3px] bg-[#C73828]"
            />

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[520px] text-[15px] leading-[29px] text-[#687568]">
              We combine electrical service expertise with
              modern software and IT capabilities to support
              business operations, infrastructure requirements
              and technology adoption.
            </p>

            {/* BOTTOM DECORATION */}
            <div className="mt-8 flex items-center gap-2">
              <span className="h-[3px] w-12 bg-[#8BC53F]" />
              <span className="h-[3px] w-5 bg-[#C73828]" />
              <span className="h-[3px] w-3 bg-[#8BC53F]/40" />
            </div>
          </div>

          {/* RIGHT SERVICES */}
          <div className="relative" data-aos="fade-left">
            {/* CONNECTING LINE */}
            <div className="absolute bottom-10 left-[27px] top-10 w-[2px] bg-[#E0E9DA] sm:left-[34px]" />

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "top" }}
              className="absolute bottom-10 left-[27px] top-10 w-[2px] bg-[#8BC53F] sm:left-[34px]"
            />

            <div className="space-y-7">
              {serviceAreas.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, x: 25 }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.2,
                    }}
                    className="group relative flex items-start gap-5 sm:gap-7"
                  >
                    {/* ICON */}
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { rotate: 8, scale: 1.06 }
                      }
                      className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center border border-[#E1EADB] bg-white text-[#78AA38] shadow-[0_6px_22px_rgba(30,50,30,0.05)] sm:h-[70px] sm:w-[70px]"
                    >
                      <Icon
                        size={27}
                        strokeWidth={1.7}
                        style={{ color: service.color }}
                      />

                      <span
                        className="absolute bottom-0 left-0 h-[3px] w-full"
                        style={{
                          backgroundColor: service.color,
                        }}
                      />
                    </motion.div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1 border-b border-[#DFE8D9] pb-7">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[19px] font-bold leading-[1.4] text-[#26352A] sm:text-[21px]">
                          {service.title}
                        </h3>

                        <ArrowUpRight
                          size={20}
                          className="mt-1 shrink-0 text-[#C73828] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>

                      <p className="mt-3 text-[14px] leading-[26px] text-[#687568]">
                        {service.description}
                      </p>

                      {/* SERVICE POINTS */}
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                        {service.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2"
                          >
                            <Check
                              size={15}
                              strokeWidth={2.5}
                              className="shrink-0 text-[#8BC53F]"
                            />

                            <span className="text-[12px] font-medium text-[#526152] sm:text-[13px]">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
