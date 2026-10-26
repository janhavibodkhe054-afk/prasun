
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  ShieldCheck,
  Code2,
} from "lucide-react";


const slides = [
  {
    id: 1,
    image: "/slide1.png",
    eyebrow: "WELCOME TO PRASUN MULTISERVICES",
    title: "Electrical & Industrial",
    highlight: "Solutions",
    description:
      "Reliable electrical products and industrial solutions for modern businesses.",
    button: "Explore Our Services",
    link: "/services",
    icon: Zap,
    accent: "green",
  },
  {
    id: 2,
    image: "/slide2.png",
    eyebrow: "EARTHING & ELECTRICAL SAFETY",
    title: "Safer Systems.",
    highlight: "Stronger Foundations.",
    description:
      "Earthing, grounding and lightning protection solutions.",
    button: "Contact Us",
    link: "/contact",
    icon: ShieldCheck,
    accent: "green",
  },
  {
    id: 3,
    image: "/slide3.png",
    eyebrow: "IT & DIGITAL SERVICES",
    title: "Website, Software",
    highlight: "& IT Solutions",
    description:
      "Websites, mobile apps, custom software, CRM, ERP and cloud services.",
    button: "Explore Services",
    link: "/services",
    icon: Code2,
    accent: "red",
  },
];


const slideDuration = 6000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const current = slides[activeSlide];
  const CurrentIcon = current.icon;

  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => window.clearInterval(timer);
  }, [activeSlide, paused, reduceMotion]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section
      aria-label="Prasun Multiservices hero slider"
      aria-roledescription="carousel"
      className="relative isolate w-full overflow-hidden bg-[#102016]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* FULL WIDTH SLIDER */}
      <div className="relative flex min-h-[560px] items-center justify-center sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[680px]">

        {/* BACKGROUND IMAGES */}
        <AnimatePresence initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.1 }}
            className="absolute inset-0"
          >
            <motion.img
              src={current.image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center"
              initial={{ scale: 1 }}
              animate={{ scale: reduceMotion ? 1 : 1.08 }}
              transition={{
                duration: 7,
                ease: "linear",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* DARK OVERLAY */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#07150D]/65" />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#07150D]/35 via-transparent to-[#07150D]/65" />

        {/* SUBTLE GREEN TINT */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#102B1A]/35 via-transparent to-[#102B1A]/25" />

        {/* DECORATIVE CIRCLES */}
        <div className="pointer-events-none absolute left-1/2 top-[18%] z-[2] h-[750px] w-[750px] -translate-x-1/2 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute left-1/2 top-[30%] z-[2] h-[550px] w-[550px] -translate-x-1/2 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute left-1/2 top-[42%] z-[2] h-[350px] w-[350px] -translate-x-1/2 rounded-full border border-white/10" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-20 text-center sm:px-10 lg:px-24">

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                ease: "easeOut",
              }}
              className="mx-auto flex max-w-[1050px] flex-col items-center"
            >
              {/* TOP ICON */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="mb-6 flex h-[66px] w-[66px] items-center justify-center rounded-full border border-white/25 bg-[#426B28]/80 text-white shadow-[0_10px_35px_rgba(0,0,0,0.15)] backdrop-blur-md sm:mb-8 sm:h-[78px] sm:w-[78px]"
              >
                <CurrentIcon
                  size={32}
                  strokeWidth={1.6}
                />
              </motion.div>

              {/* EYEBROW */}
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-[2px] w-5 bg-[#83C341] sm:w-8" />

                <span className="text-[11px] font-semibold uppercase tracking-[2px] text-white/90 sm:text-[13px] sm:tracking-[3px]">
                  {current.eyebrow}
                </span>

                <span className="h-[2px] w-5 bg-[#C73828] sm:w-8" />
              </div>

              {/* MAIN HEADING */}
              <h1 className="max-w-[1000px] text-[37px] font-bold leading-[1.16] tracking-[-1px] text-white sm:text-[52px] md:text-[64px] lg:text-[70px] xl:text-[70px]">
                {current.title}
                <br />

                <span
                  className={
                    current.accent === "red"
                      ? "text-[#F08A7D]"
                      : "text-[#A8DF7C]"
                  }
                >
                  {current.highlight}
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-[27px] text-white/85 sm:text-[17px] sm:leading-[30px]">
                {current.description}
              </p>

              {/* CTA BUTTON */}
              <Link
                to={current.link}
                className="group mt-9 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#C73828] px-7 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A92E22] hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-[58px] sm:px-9 sm:text-[16px]"
              >
                {current.button}

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PREVIOUS ARROW */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 hidden h-[52px] w-[52px] -translate-y-1/2 items-center justify-center border border-white/20 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#426B28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:flex lg:left-10"
        >
          <ChevronLeft size={25} strokeWidth={1.8} />
        </button>

        {/* NEXT ARROW */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 hidden h-[52px] w-[52px] -translate-y-1/2 items-center justify-center border border-white/20 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#426B28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:flex lg:right-10"
        >
          <ChevronRight size={25} strokeWidth={1.8} />
        </button>

        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={`relative h-[5px] overflow-hidden rounded-full transition-all duration-500 ${
                activeSlide === index
                  ? "w-12 bg-white/30"
                  : "w-6 bg-white/50 hover:bg-white/80"
              }`}
            >
              {activeSlide === index && (
                <motion.span
                  key={`${current.id}-progress`}
                  initial={{ width: "0%" }}
                  animate={{ width: paused || reduceMotion ? "0%" : "100%" }}
                  transition={{
                    duration: slideDuration / 1000,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 left-0 rounded-full bg-[#83C341]"
                />
              )}
            </button>
          ))}
        </div>

        {/* SLIDE NUMBER */}
        <div className="absolute bottom-8 right-5 z-20 hidden items-center gap-2 text-[14px] font-semibold text-white/80 sm:flex lg:right-12">
          <span className="text-[#A8DF7C]">
            0{activeSlide + 1}
          </span>
          <span className="text-white/40">/</span>
          <span>0{slides.length}</span>
        </div>
      </div>
    </section>
  );
}
