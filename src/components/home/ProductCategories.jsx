
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, RotateCw } from "lucide-react";

const GREEN = "#8BC53F";
const RED = "#C73828";


const categories = [
  {
    id: "01",
    title: "Earthing & Grounding Solutions",
    description:
      "Products designed to support effective fault current dissipation, electrical grounding and equipment protection.",
    image: "/earthing-hero.png",
    link: "/products/earthing-grounding-solutions",
    color: "green",
  },
  {
    id: "02",
    title: "Electrical & Home Utility Products",
    description:
      "Practical electrical appliances and utility products for residential and commercial requirements.",
    image: "/electrical-hero.png",
    link: "/products/electrical-home-utility-products",
    color: "red",
  },
  {
    id: "03",
    title: "Lightning & Electrical Safety Solutions",
    description:
      "Lightning protection systems designed to support the safety of buildings, electrical installations and infrastructure.",
    image: "/light.png",
    link: "/products/lightning-electrical-safety-solutions",
    color: "green",
  },
  {
    id: "04",
    title: "Water & Drilling Solutions",
    description:
      "Water heating products and related drilling services for residential, commercial and industrial applications.",
    image: "/water-hero.png",
    link: "/products/water-drilling-solutions",
    color: "red",
  },
];

function CategoryCard({ item, index, reduceMotion }) {
  const [flipped, setFlipped] = useState(false);
  const isGreen = item.color === "green";
  const accent = isGreen ? GREEN : RED;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="relative min-w-0"
    >
      <article
        className="group relative h-[420px] sm:h-[430px] lg:h-[425px]"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onFocusCapture={() => setFlipped(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setFlipped(false);
          }
        }}
      >
        <motion.div
          animate={{
            rotateY: flipped && !reduceMotion ? 180 : 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 flex flex-col overflow-hidden rounded-[15px] border border-[#E8EDE5] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.07)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* IMAGE */}
            <div className="relative h-[190px] shrink-0 overflow-hidden sm:h-[200px] lg:h-[185px] xl:h-[195px]">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* NUMBER BADGE — MOVED DOWN */}
            <div
              className="absolute left-5 top-[165px] z-10 flex h-[62px] w-[58px] items-center justify-center rounded-[8px] text-white shadow-md sm:top-[175px] lg:top-[160px] xl:top-[170px]"
              style={{ backgroundColor: accent }}
            >
              <span className="text-[23px] font-bold">
                {item.id}
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col px-5 pb-5 pt-11 xl:px-6">
              <h3 className="text-[18px] font-bold leading-[1.3] text-[#26352A] sm:text-[19px] lg:text-[17px] xl:text-[19px]">
                {item.title}
              </h3>

              <p className="mt-2.5 text-[13px] leading-[22px] text-[#657065] lg:text-[12.5px] xl:text-[13px]">
                {item.description}
              </p>

              <div className="mt-auto pt-3">
                <Link
                  to={item.link}
                  className="group/btn inline-flex items-center gap-2 text-[14px] font-semibold transition-all duration-300 hover:gap-3"
                  style={{ color: accent }}
                >
                  View More
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-[15px] p-6 text-center text-white shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
            style={{
              backgroundColor: accent,
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <span className="text-[60px] font-bold leading-none text-white/20">
              {item.id}
            </span>

            <h3 className="mt-4 text-[22px] font-bold leading-[1.25]">
              {item.title}
            </h3>

            <div className="my-4 h-[3px] w-12 rounded-full bg-white/70" />

            <p className="text-[14px] leading-[25px] text-white/90">
              {item.description}
            </p>

            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="mt-6"
            >
              <Link
                to={item.link}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#26352A] transition-all duration-300 hover:shadow-lg"
              >
                View More
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* MOBILE FLIP CONTROL */}
        {!reduceMotion && (
          <button
            type="button"
            onClick={() => setFlipped((prev) => !prev)}
            aria-label={`${flipped ? "Show front of" : "Flip"} ${item.title}`}
            className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#26352A] shadow-md lg:hidden"
          >
            <RotateCw size={17} />
          </button>
        )}
      </article>
    </div>
  );
}

export default function ProductCategories() {
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
      id="product-categories"
      aria-labelledby="product-categories-heading"
      className="relative w-full overflow-hidden bg-[#FAFBF9] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* CENTER HEADING */}
        <div data-aos="fade-up" className="mb-11 text-center lg:mb-14">
          <p className="mb-3 text-[14px] font-semibold text-[#6B8E3E]">
            Our Product Range
          </p>

          <h2
            id="product-categories-heading"
            className="text-[32px] font-bold leading-[1.2] text-[#26352A] sm:text-[39px] lg:text-[44px]"
          >
            Product{" "}
            <span style={{ color: GREEN }}>
              Categories
            </span>
          </h2>

          <div
            className="mx-auto mt-5 h-[3px] w-16 rounded-full"
            style={{ backgroundColor: RED }}
          />
        </div>

        {/* FOUR CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {categories.map((item, index) => (
            <CategoryCard
              key={item.id}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
