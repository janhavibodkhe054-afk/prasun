
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Smartphone,
  Cloud,
  Network,
  SearchCheck,
} from "lucide-react";

const GREEN = "#8BC53F";
const RED = "#C73828";

const services = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Electrical Earthing",
    description: "Grounding solutions for electrical safety.",
    link: "/services",
  },
  {
    id: "02",
    icon: Globe2,
    title: "Website Development",
    description: "Business and e-commerce websites.",
    link: "/services",
  },
  {
    id: "03",
    icon: Smartphone,
    title: "Application Development",
    description: "Mobile and custom business applications.",
    link: "/services",
  },
  {
    id: "04",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud computing and data management.",
    link: "/services",
  },
  {
    id: "05",
    icon: Network,
    title: "CRM & ERP Solutions",
    description: "Business process and customer management.",
    link: "/services",
  },
  {
    id: "06",
    icon: SearchCheck,
    title: "SEO & IT Support",
    description: "Digital visibility and technical assistance.",
    link: "/services",
  },
];

function ServiceCard({ item, index, reduceMotion }) {
  const Icon = item.icon;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 80}
      className="h-full"
    >
      <motion.article
        whileHover={
          reduceMotion
            ? undefined
            : { y: -5 }
        }
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          group relative flex h-[245px] flex-col
          items-center justify-center overflow-hidden
          rounded-[8px] bg-[#101412]/80
          px-5 text-center
          shadow-[0_10px_35px_rgba(0,0,0,0.08)]
          transition-all duration-500
          hover:bg-[#171D19]
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          sm:h-[260px] lg:h-[265px]
        "
      >
        {/* BOTTOM RED LINE - HOVER ONLY */}
        <span
          className="
            absolute bottom-0 left-1/2 h-[2px] w-0
            -translate-x-1/2 bg-[#C73828]
            transition-all duration-500
            group-hover:w-full
          "
        />

        {/* CONTENT MOVES UP ON HOVER */}
        <div
          className="
            flex flex-col items-center
            transition-transform duration-500
            group-hover:-translate-y-5
          "
        >
          {/* ICON */}
          <div
            className="
              mb-5 text-[#8BC53F]
              transition-all duration-500
              group-hover:scale-110
              group-hover:text-[#C73828]
            "
          >
            <Icon
              size={37}
              strokeWidth={1.8}
            />
          </div>

          {/* HEADING */}
          <h3
            className="
              text-[19px] font-bold leading-[1.3]
              text-white sm:text-[20px]
            "
          >
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3 max-w-[290px]
              text-[14px] leading-[24px]
              text-white/65 sm:text-[15px]
            "
          >
            {item.description}
          </p>
        </div>

        {/* BUTTON SLIDES UP FROM BOTTOM */}
        <div
          className="
            absolute bottom-5 left-1/2
            -translate-x-1/2 translate-y-8
            opacity-0
            transition-all duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
            group-focus-within:translate-y-0
            group-focus-within:opacity-100
          "
        >
          <Link
            to={item.link}
            className="
              inline-flex items-center justify-center
              gap-2 whitespace-nowrap rounded-full
              bg-[#C73828] px-5 py-2.5
              text-[13px] font-semibold text-white
              shadow-[0_8px_20px_rgba(199,56,40,0.2)]
              transition-all duration-300
              hover:bg-[#A92E22]
            "
          >
            View More

            <ArrowUpRight size={16} />
          </Link>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProfessionalServices() {
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
      id="professional-services"
      aria-labelledby="professional-services-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#080C0A]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* FIXED INDUSTRIAL BACKGROUND */}
      <div
        className="
          absolute inset-0 -z-20
          bg-cover bg-center bg-no-repeat
          lg:bg-fixed
        "
        style={{
          backgroundImage: "url('/services-bg.avif')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-[#050807]/85" />

      {/* SUBTLE GREEN OVERLAY */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#0A170D]/30
          via-transparent
          to-[#0A170D]/20
        "
      />

      <div
        className="
          relative mx-auto max-w-[1440px]
          px-5 sm:px-8 lg:px-12
        "
      >
        {/* CENTER HEADING */}
        <div
          data-aos="fade-up"
          className="
            mx-auto mb-11 max-w-[850px]
            text-center lg:mb-14
          "
        >
          {/* EYEBROW */}
          <p
            className="
              mb-4 text-[14px] font-semibold
              uppercase tracking-[2px]
            "
            style={{ color: GREEN }}
          >
            Our Services
          </p>

          {/* HEADING */}
          <h2
            id="professional-services-heading"
            className="
              text-[31px] font-bold leading-[1.2]
              text-white
              sm:text-[40px] lg:text-[46px]
            "
          >
            Integrated Services for
            <br className="hidden sm:block" />

            <span style={{ color: GREEN }}>
              {" "}Industry & Business
            </span>{" "}
            Growth.
          </h2>

          {/* SHORT DESCRIPTION */}
          <p
            className="
              mx-auto mt-5 max-w-[600px]
              text-[15px] leading-[27px]
              text-white/65 sm:text-[16px]
            "
          >
            Electrical infrastructure and digital solutions
            for modern businesses.
          </p>

          {/* RED UNDERLINE */}
          <div
            className="
              mx-auto mt-6 h-[3px] w-16
              rounded-full
            "
            style={{ backgroundColor: RED }}
          />
        </div>

        {/* SERVICES GRID */}
        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:grid-cols-3 lg:gap-5
          "
        >
          {services.map((item, index) => (
            <ServiceCard
              key={item.id}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* VIEW ALL SERVICES BUTTON */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-11 text-center"
        >
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : { y: -4, scale: 1.025 }
            }
            whileTap={{ scale: 0.97 }}
            className="inline-flex"
          >
            <Link
              to="/services"
              className="
                group relative inline-flex
                min-h-[55px] items-center
                justify-center gap-4
                overflow-hidden rounded-full
                bg-[#C73828] px-8
                text-[15px] font-semibold
                text-white
                shadow-[0_12px_30px_rgba(199,56,40,0.2)]
                transition-all duration-300
                hover:bg-[#A92E22]
              "
            >
              {/* BUTTON SHINE */}
              <span
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-[150%] skew-x-[-25deg]
                  bg-gradient-to-r
                  from-transparent via-white/30
                  to-transparent
                  transition-transform duration-700
                  group-hover:translate-x-[150%]
                "
              />

              <span className="relative z-10">
                View All Services
              </span>

              <ArrowRight
                size={19}
                className="
                  relative z-10
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
