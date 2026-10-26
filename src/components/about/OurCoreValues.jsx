
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const coreValues = [
  {
    title: "Integrity",
    description:
      "Honesty and transparency in every business relationship.",
    image: "/value1.png",
    alt: "Business professional reviewing documents",
  },
  {
    title: "Customer Focus",
    description:
      "Understanding and prioritizing customer requirements.",
    image: "/value2.png",
    alt: "Professional business handshake",
  },
  {
    title: "Innovation",
    description:
      "Adopting new ideas and practical solutions.",
    image: "/value3.png",
    alt: "Glowing light bulb representing innovation",
  },
  {
    title: "Excellence",
    description:
      "Maintaining high standards in our work.",
    image: "/value4.png",
    alt: "Industrial engineer overseeing operations",
  },
  {
    title: "Reliability",
    description:
      "Providing dependable products and services.",
    image: "/value5.png",
    alt: "Team members working together",
  },
  {
    title: "Quality",
    description:
      "Focusing on consistent product and service quality.",
    image: "/value6.png",
    alt: "Industrial quality inspection",
  },
];

export default function OurCoreValues() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    const timer = setTimeout(() => AOS.refresh(), 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="our-core-values"
      aria-labelledby="core-values-heading"
      className="relative w-full overflow-hidden bg-[#FCFCFB] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <div
          data-aos="fade-up"
          className="mb-10 text-center lg:mb-12"
        >
          {/* EYEBROW */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-[#C73828]" />

            <span className="text-[12px] font-semibold uppercase tracking-[2px] text-[#6D9D30]">
              What We Believe In
            </span>

            <span className="h-[2px] w-7 bg-[#C73828]" />
          </div>

          {/* MAIN HEADING */}
          <h2
            id="core-values-heading"
            className="text-[29px] font-bold leading-[1.2] tracking-[-0.7px] text-[#26352A] sm:text-[36px] lg:text-[40px]"
          >
            The Values That{" "}
            <span className="text-[#8BC53F]">
              Guide Our Work.
            </span>
          </h2>

          {/* ANIMATED UNDERLINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-4 h-[3px] bg-[#C73828]"
          />
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 130}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1.75/1] w-full overflow-hidden bg-[#EAF0E8]">
                <motion.img
                  src={value.image}
                  alt={value.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { scale: 1.07 }
                  }
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                />

                {/* SUBTLE IMAGE OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                {/* BOTTOM GREEN LINE */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#8BC53F] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* TITLE */}
              <h3 className="relative mt-4 inline-block text-[18px] font-bold leading-[1.35] text-[#26352A] sm:text-[19px]">
                {value.title}

                {/* HOVER UNDERLINE */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C73828] transition-all duration-300 group-hover:w-full" />
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 max-w-[420px] text-[14px] leading-[26px] text-[#737B73]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
