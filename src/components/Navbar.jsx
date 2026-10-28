
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Mail,
  MapPin,
} from "lucide-react";

const GREEN = "#8BC53F";
const DARK_GREEN = "#26352A";
const RED = "#C73828";

const WHATSAPP_NUMBER = "919420415864";

const WHATSAPP_MESSAGE =
  "Hello Prasun Multiservices, I would like to get a quote.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const productCategories = [
  {
    name: "Earthing & Grounding Solutions",
    slug: "earthing-grounding-solutions",
  },
  {
    name: "Electrical & Home Utility Products",
    slug: "electrical-home-utility-products",
  },
  {
    name: "Lightning & Electrical Safety Solutions",
    slug: "lightning-electrical-safety-solutions",
  },
  {
    name: "Water & Drilling Solutions",
    slug: "water-drilling-solutions",
  },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 14,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.97,
    transition: {
      duration: 0.18,
    },
  },
};

const mobileVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 30,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.28,
    },
  },
};

export default function Navbar() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const dropdownRef = useRef(null);
  const dropdownTimer = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);

  const isProductsPage =
    location.pathname.startsWith("/products/");

  const closeMenus = () => {
    clearTimeout(dropdownTimer.current);
    setProductsOpen(false);
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  useEffect(() => {
    closeMenus();
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setProductsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      } else {
        setProductsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(dropdownTimer.current);
    };
  }, []);

  const openDropdown = () => {
    clearTimeout(dropdownTimer.current);
    setProductsOpen(true);
  };

  const closeDropdownDelayed = () => {
    clearTimeout(dropdownTimer.current);

    dropdownTimer.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  const desktopLinkClass = (isActive) =>
    `group relative flex h-full items-center
     text-[15px] xl:text-[16px] font-semibold
     tracking-[-0.2px] transition-colors duration-300
     ${
       isActive
         ? "text-[#548526]"
         : "text-[#26352A] hover:text-[#548526]"
     }`;

  return (
    <>
      {/* ====================================== */}
      {/* TOP INFORMATION BAR */}
      {/* ====================================== */}

      <div className="relative hidden overflow-hidden bg-[#365A24] text-white lg:block">
        {/* ANIMATED GLOW */}

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 left-[15%] h-[140px] w-[320px] rounded-full bg-[#8BC53F]/20 blur-[60px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 260, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto flex h-[42px] max-w-[1440px] items-center justify-between px-6 xl:px-12">
          <div className="flex items-center gap-7">
            {/* EMAIL */}

            <a
              href="mailto:prasunmultiservices@gmail.com"
              className="group flex items-center gap-2 text-[12px] font-medium text-white/90 transition-colors hover:text-[#B7ED75]"
            >
              <Mail
                size={15}
                className="text-[#B7ED75]"
              />

              prasunmultiservices@gmail.com
            </a>

            <span className="h-4 w-px bg-white/25" />

            {/* LOCATION */}

            <div className="flex items-center gap-2 text-[12px] font-medium text-white/90">
              <MapPin
                size={15}
                className="text-[#B7ED75]"
              />

              Loni Kalbhor, Pune, Maharashtra
            </div>
          </div>

          {/* RIGHT TEXT */}

          <div className="flex items-center gap-2.5 text-[12px] font-semibold text-white">
            <motion.span
              className="h-[7px] w-[7px] rounded-full bg-[#A9EA61]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            Industrial & Digital Solutions Across India
          </div>
        </div>
      </div>

      {/* ====================================== */}
      {/* MAIN NAVBAR */}
      {/* ====================================== */}

      <motion.header
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: -20,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.55,
        }}
        className={`
          sticky top-0 z-50 w-full
          bg-white/95 backdrop-blur-xl
          transition-all duration-300
          ${
            scrolled
              ? "shadow-[0_10px_35px_rgba(0,0,0,0.09)]"
              : "border-b border-[#EDF0E8]"
          }
        `}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <div
            className={`
              flex items-center justify-between gap-4
              transition-all duration-300
              ${
                scrolled
                  ? "h-[70px] sm:h-[76px] lg:h-[80px]"
                  : "h-[75px] sm:h-[82px] lg:h-[92px]"
              }
            `}
          >
            {/* LOGO */}

            <Link
              to="/"
              onClick={closeMenus}
              className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
            >
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.06,
                        rotate: -3,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <img
                  src="/logo.jpg"
                  alt="Prasun Multiservices"
                  className="h-[52px] w-[52px] object-contain sm:h-[60px] sm:w-[60px] lg:h-[66px] lg:w-[66px]"
                />
              </motion.div>

              <div className="flex flex-col">
                <span className="text-[19px] font-extrabold leading-[1.1] tracking-[-0.7px] text-[#26352A] sm:text-[22px] xl:text-[24px]">
                  PRASUN
                </span>

                <span className="mt-1 text-[9px] font-bold tracking-[1.8px] text-[#C73828] sm:text-[10px]">
                  MULTISERVICES
                </span>
              </div>
            </Link>

            {/* ================================= */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================= */}

            <nav
              aria-label="Main navigation"
              className="hidden h-full items-center gap-5 lg:flex xl:gap-9"
            >
              {/* HOME + ABOUT */}

              {navItems.slice(0, 2).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    desktopLinkClass(isActive)
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      {isActive && (
                        <motion.span
                          layoutId="activeNavUnderline"
                          className="absolute bottom-[17px] left-0 right-0 h-[3px] rounded-full bg-[#8BC53F]"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 28,
                          }}
                        />
                      )}

                      {!isActive && (
                        <span className="absolute bottom-[17px] left-0 h-[3px] w-0 rounded-full bg-[#C73828] transition-all duration-300 group-hover:w-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* ================================= */}
              {/* PRODUCTS DROPDOWN */}
              {/* ================================= */}

              <div
                ref={dropdownRef}
                className="relative flex h-full items-center"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdownDelayed}
              >
                <div className="flex h-full items-center">
                  {/* PRODUCTS DROPDOWN TRIGGER */}

                  <button
                    type="button"
                    onClick={() =>
                      setProductsOpen((prev) => !prev)
                    }
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    className={`${desktopLinkClass(
                      isProductsPage
                    )} gap-1.5`}
                  >
                    Products

                    <motion.span
                      animate={{
                        rotate: productsOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="text-[#548526]"
                    >
                      <ChevronDown size={17} />
                    </motion.span>

                    {isProductsPage && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-[17px] left-0 right-0 h-[3px] rounded-full bg-[#8BC53F]"
                      />
                    )}

                    {!isProductsPage && (
                      <span className="absolute bottom-[17px] left-0 h-[3px] w-0 rounded-full bg-[#C73828] transition-all duration-300 group-hover:w-full" />
                    )}
                  </button>
                </div>

                {/* DROPDOWN MENU */}

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-1/2 top-full w-[385px] -translate-x-1/2 overflow-hidden rounded-[12px] border border-[#E7EDDF] bg-white p-2.5 shadow-[0_25px_65px_rgba(28,53,30,0.17)]"
                    >
                      {/* TOP ACCENT */}

                      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#8BC53F] via-[#8BC53F] to-[#C73828]" />

                      <div className="rounded-[7px] bg-[#F2F8EC] px-4 py-3">
                        <p className="text-[13px] font-bold text-[#365A24]">
                          Explore Product Categories
                        </p>
                      </div>

                      <div className="my-2 h-px bg-[#E9EDE5]" />

                      {productCategories.map(
                        (category, index) => {
                          const path = `/products/${category.slug}`;

                          const active =
                            location.pathname === path;

                          return (
                            <motion.div
                              key={category.slug}
                              initial={
                                reduceMotion
                                  ? false
                                  : {
                                      opacity: 0,
                                      x: -15,
                                    }
                              }
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                duration: 0.25,
                                delay: index * 0.055,
                              }}
                            >
                              <Link
                                to={path}
                                onClick={closeMenus}
                                className={`
                                  group flex items-center justify-between
                                  gap-4 rounded-[7px] px-4 py-4
                                  text-[13px] font-semibold
                                  transition-all duration-300
                                  ${
                                    active
                                      ? "bg-[#EAF5DF] text-[#426B28]"
                                      : "text-[#485748] hover:bg-[#F4F8EF] hover:text-[#426B28]"
                                  }
                                `}
                              >
                                <span>
                                  {category.name}
                                </span>

                                <ChevronRight
                                  size={17}
                                  className={`
                                    shrink-0 transition-transform duration-300
                                    group-hover:translate-x-1
                                    ${
                                      active
                                        ? "text-[#C73828]"
                                        : "text-[#8BC53F]"
                                    }
                                  `}
                                />
                              </Link>
                            </motion.div>
                          );
                        }
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SERVICES + CONTACT */}

              {navItems.slice(2).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    desktopLinkClass(isActive)
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      {isActive && (
                        <motion.span
                          layoutId="activeNavUnderline"
                          className="absolute bottom-[17px] left-0 right-0 h-[3px] rounded-full bg-[#8BC53F]"
                        />
                      )}

                      {!isActive && (
                        <span className="absolute bottom-[17px] left-0 h-[3px] w-0 rounded-full bg-[#C73828] transition-all duration-300 group-hover:w-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ================================= */}
            {/* DESKTOP GET A QUOTE - WHATSAPP */}
            {/* ================================= */}

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                    }
              }
              whileTap={{
                scale: 0.96,
              }}
              className="hidden shrink-0 lg:block"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a Quote on WhatsApp"
                className="group relative flex h-[49px] items-center overflow-hidden rounded-[6px] bg-[#C73828] pl-6 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(199,56,40,0.24)] transition-shadow duration-300 hover:shadow-[0_14px_35px_rgba(199,56,40,0.32)] xl:text-[14px]"
              >
                {/* HOVER BACKGROUND */}

                <span className="absolute inset-0 translate-y-full bg-[#A92D22] transition-transform duration-300 group-hover:translate-y-0" />

                {/* SHINE */}

                <span className="pointer-events-none absolute -left-[80%] top-0 h-full w-[50%] skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover:left-[150%]" />

                {/* BUTTON TEXT */}

                <span className="relative z-10 whitespace-nowrap">
                  Get a Quote
                </span>

                {/* ARROW */}

                <span className="relative z-10 ml-5 flex h-full w-[49px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors duration-300 group-hover:bg-[#8BC53F]">
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </a>
            </motion.div>

            {/* ================================= */}
            {/* MOBILE MENU BUTTON */}
            {/* ================================= */}

            <motion.button
              type="button"
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[7px] bg-[#EAF5DF] text-[#426B28] transition-colors hover:bg-[#8BC53F] hover:text-white lg:hidden"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>

        {/* ANIMATED BOTTOM BORDER */}

        <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden bg-[#EDF1E8]">
          <motion.div
            className="h-full w-[35%] bg-gradient-to-r from-transparent via-[#8BC53F] to-transparent"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["-120%", "350%"],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.header>

      {/* ====================================== */}
      {/* MOBILE MENU */}
      {/* ====================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeMenus}
              className="fixed inset-0 z-[60] bg-[#0F1C12]/65 backdrop-blur-[4px] lg:hidden"
            />

            {/* MOBILE DRAWER */}

            <motion.aside
              variants={mobileVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed bottom-0 right-0 top-0 z-[70] flex w-[min(88vw,390px)] flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* MOBILE HEADER */}

              <div className="flex items-center justify-between gap-3 border-b border-[#E9EDE5] px-5 py-5">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.jpg"
                    alt="Prasun Multiservices"
                    className="h-12 w-12 object-contain"
                  />

                  <div>
                    <p className="text-[19px] font-extrabold leading-tight text-[#26352A]">
                      PRASUN
                    </p>

                    <p className="mt-1 text-[9px] font-bold tracking-[1.5px] text-[#C73828]">
                      MULTISERVICES
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMenus}
                  aria-label="Close navigation"
                  className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#F1F6EC] text-[#26352A] transition-colors hover:bg-[#C73828] hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>

              {/* MOBILE NAVIGATION LINKS */}

              <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.07,
                      },
                    },
                  }}
                  className="flex flex-col"
                >
                  {/* HOME + ABOUT */}

                  {navItems.slice(0, 2).map((item) => (
                    <motion.div
                      key={item.path}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 20,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                    >
                      <NavLink
                        to={item.path}
                        end={item.path === "/"}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `flex items-center justify-between border-b border-[#E9EDE5] py-4 text-[16px] font-semibold transition-colors ${
                            isActive
                              ? "text-[#548526]"
                              : "text-[#26352A]"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span className="flex items-center gap-3">
                              {isActive && (
                                <span className="h-6 w-[3px] rounded-full bg-[#8BC53F]" />
                              )}

                              {item.name}
                            </span>

                            <ChevronRight
                              size={18}
                              className={
                                isActive
                                  ? "text-[#8BC53F]"
                                  : "text-[#A4AFA1]"
                              }
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}

                  {/* ================================= */}
                  {/* MOBILE PRODUCTS DROPDOWN */}
                  {/* ================================= */}

                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 20,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    className="border-b border-[#E9EDE5]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setMobileProductsOpen(
                          (prev) => !prev
                        )
                      }
                      aria-expanded={mobileProductsOpen}
                      className={`flex w-full items-center justify-between py-4 text-[16px] font-semibold ${
                        isProductsPage
                          ? "text-[#548526]"
                          : "text-[#26352A]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {isProductsPage && (
                          <span className="h-6 w-[3px] rounded-full bg-[#8BC53F]" />
                        )}

                        Products
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#EAF5DF] text-[#548526]">
                        <motion.span
                          animate={{
                            rotate: mobileProductsOpen
                              ? 180
                              : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <ChevronDown size={19} />
                        </motion.span>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="mb-3 rounded-[8px] bg-[#F3F8EE] p-2">
                            {productCategories.map(
                              (category) => {
                                const path = `/products/${category.slug}`;

                                const active =
                                  location.pathname === path;

                                return (
                                  <Link
                                    key={category.slug}
                                    to={path}
                                    onClick={closeMenus}
                                    className={`flex items-center justify-between gap-3 rounded-[6px] px-3 py-3.5 text-[13px] font-semibold transition-colors ${
                                      active
                                        ? "bg-[#E2F1D3] text-[#426B28]"
                                        : "text-[#536153] hover:bg-white hover:text-[#426B28]"
                                    }`}
                                  >
                                    {category.name}

                                    <ChevronRight
                                      size={16}
                                      className="shrink-0 text-[#C73828]"
                                    />
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* SERVICES + CONTACT */}

                  {navItems.slice(2).map((item) => (
                    <motion.div
                      key={item.path}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 20,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={closeMenus}
                        className={({ isActive }) =>
                          `flex items-center justify-between border-b border-[#E9EDE5] py-4 text-[16px] font-semibold ${
                            isActive
                              ? "text-[#548526]"
                              : "text-[#26352A]"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span className="flex items-center gap-3">
                              {isActive && (
                                <span className="h-6 w-[3px] rounded-full bg-[#8BC53F]" />
                              )}

                              {item.name}
                            </span>

                            <ChevronRight
                              size={18}
                              className={
                                isActive
                                  ? "text-[#8BC53F]"
                                  : "text-[#A4AFA1]"
                              }
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>

                {/* ================================= */}
                {/* MOBILE GET A QUOTE - WHATSAPP */}
                {/* ================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  className="mt-8"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenus}
                    aria-label="Get a Quote on WhatsApp"
                    className="group flex h-[52px] items-center justify-between overflow-hidden rounded-[6px] bg-[#C73828] pl-5 text-[14px] font-bold text-white shadow-[0_8px_22px_rgba(199,56,40,0.2)]"
                  >
                    Get a Quote

                    <span className="flex h-full w-[52px] items-center justify-center border-l border-white/20 bg-black/10 transition-colors group-hover:bg-[#8BC53F]">
                      <ArrowUpRight size={20} />
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* MOBILE FOOTER */}

              <div className="shrink-0 border-t border-[#E9EDE5] bg-[#F7FAF4] px-5 py-5">
                <a
                  href="mailto:prasunmultiservices@gmail.com"
                  className="flex items-center gap-2 break-all text-[12px] text-[#536153]"
                >
                  <Mail
                    size={16}
                    className="shrink-0 text-[#548526]"
                  />

                  prasunmultiservices@gmail.com
                </a>

                <p className="mt-3 flex items-center gap-2 text-[12px] text-[#536153]">
                  <MapPin
                    size={16}
                    className="shrink-0 text-[#548526]"
                  />

                  Loni Kalbhor, Pune, Maharashtra
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
