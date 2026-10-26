
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eye, Target, ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const values = [
  {
    id: "01",
    title: "Our Vision",
    highlight: "Vision",
    icon: Eye,
    color: "#8BC53F",
    softColor: "#F0F7E8",
    description:
      "To improve ordinary things through extraordinary innovation and dedication.",
  },
  {
    id: "02",
    title: "Our Mission",
    highlight: "Mission",
    icon: Target,
    color: "#C73828",
    softColor: "#FDF0ED",
    description:
      'To deliver “Better than the Best” solutions with a strong focus on safety, performance and customer satisfaction.',
  },
];

export default function VisionMission() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });

    const timer = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="vision-mission"
      aria-labelledby="vision-mission-heading"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[330px] w-[330px] rounded-full border border-[#8BC53F]/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full border border-[#C73828]/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">

          {/* LEFT IMAGE */}
          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[550px]"
          >
            <div className="relative h-[340px] sm:h-[430px] lg:h-[530px]">

              {/* GREEN GEOMETRIC SHAPE */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { rotate: [-3, 3, -3] }
                }
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[8%] left-[7%] h-[75%] w-[75%] bg-[#8BC53F]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 45%, 22% 100%)",
                }}
              />

              {/* RED GEOMETRIC SHAPE */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { x: [0, 12, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[12%] right-0 h-[32%] w-[38%] bg-[#C73828]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 50%, 0 100%)",
                }}
              />

              {/* IMAGE */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -7, 0] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-10 flex items-end justify-center"
              >
                <img
                  src="/vision.png"
                  alt="Industrial engineer representing Prasun Multiservices vision and mission"
                  loading="lazy"
                  className="h-full w-full object-contain object-bottom"
                />
              </motion.div>

              {/* DOT PATTERN */}
              <div
                className="pointer-events-none absolute right-[5%] top-[18%] z-0 h-24 w-24 opacity-35"
                style={{
                  backgroundImage:
                    "radial-gradient(#8BC53F 1.5px, transparent 1.5px)",
                  backgroundSize: "15px 15px",
                }}
              />

              {/* BOTTOM ACCENT */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "55%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute bottom-0 left-0 z-20 h-[4px] bg-[#8BC53F]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            {/* EYEBROW */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C73828]" />

              <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#6D9D30]">
                Our Direction
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="vision-mission-heading"
              className="text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#26352A] sm:text-[37px] lg:text-[42px]"
            >
              VISION &{" "}
              <span className="text-[#8BC53F]">
                MISSION
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[650px] text-[14px] leading-[27px] text-[#687568] sm:text-[15px]">
              Our vision and mission reflect our commitment to
              innovation, safety and long-term value for our
              customers, partners and communities.
            </p>

            {/* CARDS */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -7 }
                    }
                    className="group relative min-h-[300px] overflow-hidden border border-[#E8EDE5] bg-white p-6 shadow-[0_8px_30px_rgba(30,50,30,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(30,50,30,0.11)] sm:p-7"
                  >
                    {/* LEFT COLOR BAR */}
                    <span
                      className="absolute bottom-0 left-0 top-0 w-[4px]"
                      style={{
                        backgroundColor: item.color,
                      }}
                    />

                    {/* BACKGROUND SHAPE */}
                    <div
                      className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-125"
                      style={{
                        backgroundColor: item.softColor,
                      }}
                    />

                    {/* ICON */}
                    <div
                      className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: item.softColor,
                        color: item.color,
                      }}
                    >
                      <Icon size={32} strokeWidth={1.7} />
                    </div>

                    {/* TITLE */}
                    <h3 className="relative z-10 mt-6 text-[22px] font-bold text-[#26352A]">
                      Our{" "}
                      <span
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.highlight}
                      </span>
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="relative z-10 mt-4 text-[14px] leading-[27px] text-[#687568]">
                      {item.description}
                    </p>

                    {/* DECORATIVE ARROW */}
                    <div
                      className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      style={{
                        backgroundColor: item.color,
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </div>

                    {/* HOVER BOTTOM LINE */}
                    <span
                      className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                      style={{
                        backgroundColor: item.color,
                      }}
                    />
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
