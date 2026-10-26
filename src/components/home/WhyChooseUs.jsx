
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BadgeCheck,
  Wrench,
  SlidersHorizontal,
  Clock3,
  Headset,
  Globe2,
} from "lucide-react";

const GREEN = "#8BC53F";
const RED = "#C73828";

const reasons = [
  {
    id: "01",
    icon: BadgeCheck,
    title: "Quality Products",
    description:
      "Electrical and industrial products selected to meet different operational requirements.",
  },
  {
    id: "02",
    icon: Wrench,
    title: "Technical Expertise",
    description:
      "Knowledge across electrical infrastructure, software and digital technologies.",
  },
  {
    id: "03",
    icon: SlidersHorizontal,
    title: "Customized Solutions",
    description:
      "Products and services aligned with individual project requirements.",
  },
  {
    id: "04",
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "A commitment to timely product supply and service execution.",
  },
  {
    id: "05",
    icon: Headset,
    title: "Customer Support",
    description:
      "Assistance throughout enquiries, project discussions and after-sales requirements.",
  },
  {
    id: "06",
    icon: Globe2,
    title: "Pan India Coverage",
    description: "Serving customers across India.",
  },
];

function ReasonCard({ item, index, reduceMotion }) {
  const Icon = item.icon;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 75}
      className="h-full"
    >
      <motion.article
        whileHover={
          reduceMotion ? undefined : { y: -5 }
        }
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          group relative flex h-full
          items-start gap-4
          border border-[#E8EEE4]
          bg-white px-5 py-6
          transition-all duration-300
          hover:border-[#8BC53F]/50
          hover:bg-[#F8FCF4]
          hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]
          sm:gap-5
        "
      >
        {/* ICON */}
        <div
          className="
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-[10px] bg-[#F1F9E8]
            text-[#79AF32]
            transition-all duration-300
            group-hover:bg-[#8BC53F]
            group-hover:text-white
          "
        >
          <Icon size={25} strokeWidth={1.8} />
        </div>

        {/* CONTENT */}
        <div className="min-w-0">
          <h3
            className="
              text-[18px] font-bold
              leading-[1.3] text-[#26352A]
              sm:text-[19px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-2.5 text-[13px]
              leading-[23px] text-[#687568]
              sm:text-[14px] sm:leading-[25px]
            "
          >
            {item.description}
          </p>
        </div>

        {/* HOVER RED BOTTOM LINE */}
        <span
          className="
            absolute bottom-0 left-0
            h-[3px] w-0 bg-[#C73828]
            transition-all duration-500
            group-hover:w-full
          "
        />
      </motion.article>
    </div>
  );
}

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="
        relative w-full overflow-hidden
        bg-white py-16 sm:py-20 lg:py-24
      "
    >
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* MAIN GRID */}
        <div
          className="
            grid grid-cols-1
            items-stretch gap-10
            lg:grid-cols-[0.34fr_0.66fr]
            lg:gap-12 xl:gap-14
          "
        >

          {/* LEFT IMAGE */}
          <div
            data-aos="fade-right"
            className="
              relative mx-auto w-full
              max-w-[470px]
              lg:max-w-none
            "
          >
            <div
              className="
                group relative h-[420px]
                overflow-hidden
                sm:h-[520px]
                lg:h-full lg:min-h-[600px]
              "
            >
              <img
                src="/why.png"
                alt="Prasun Multiservices electrical and industrial expertise"
                loading="lazy"
                decoding="async"
                className="
                  h-full w-full object-contain
                  object-bottom
                  transition-transform duration-700
                  group-hover:scale-[1.03]
                "
              />

              {/* BOTTOM GREEN ACCENT */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-[4px] w-20
                  bg-[#8BC53F]
                "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="min-w-0">

            {/* HEADING ROW */}
            <div
              data-aos="fade-up"
              className="
                mb-9 flex flex-col
                gap-5 border-b
                border-[#E6EBE3]
                pb-7
                sm:mb-11
                xl:flex-row xl:items-center
                xl:gap-8
              "
            >
              <div className="xl:w-[53%]">
                

                <h2
                  id="why-choose-us-heading"
                  className="
                    text-[30px] font-bold
                    leading-[1.18]
                    text-[#26352A]
                    sm:text-[37px]
                    lg:text-[39px]
                    xl:text-[42px]
                  "
                >
                  Why{" "}
                  <span style={{ color: GREEN }}>
                    Choose
                  </span>
                  
                  Us{" "}
                  
                </h2>
              </div>

              {/* DESCRIPTION WITH VERTICAL LINE */}
              <div
                className="
                  border-l-[3px]
                  border-[#C73828]
                  pl-5
                  xl:w-[47%]
                "
              >
                <p
                  className="
                    text-[15px]
                    leading-[27px]
                    text-[#687568]
                    sm:text-[16px]
                  "
                >
                  We bring together product expertise,
                  professional service and customer-focused
                  solutions.
                </p>
              </div>
            </div>

            {/* 2 COLUMN REASONS */}
            <div
              className="
                grid grid-cols-1
                gap-4 sm:grid-cols-2
                lg:gap-4
              "
            >
              {reasons.map((item, index) => (
                <ReasonCard
                  key={item.id}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
