
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  MapPin,
  Globe2,
} from "lucide-react";

const GREEN = "#8BC53F";
const RED = "#C73828";

const productLinks = [
  {
    name: "Earthing & Grounding",
    path: "/products/earthing-grounding-solutions",
  },
  {
    name: "Electrical & Home Utility",
    path: "/products/electrical-home-utility-products",
  },
  {
    name: "Lightning & Electrical Safety",
    path: "/products/lightning-electrical-safety-solutions",
  },
  {
    name: "Water & Drilling Solutions",
    path: "/products/water-drilling-solutions",
  },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#F8F7F2]">
      {/* TOP BORDER */}
      <div
        className="h-[4px] w-full"
        style={{
          background: `linear-gradient(to right, ${GREEN}, ${RED})`,
        }}
      />

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14 lg:px-12 lg:pt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          {/* COMPANY INFORMATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="sm:col-span-2 lg:col-span-4"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <img
                src="/logo.jpg"
                alt="Prasun Multiservices Logo"
                className="h-[70px] w-[70px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-[78px] sm:w-[78px]"
              />

              <div className="flex flex-col">
                <span className="text-[24px] font-extrabold leading-tight tracking-[-0.8px] text-[#28352A] sm:text-[27px]">
                  PRASUN
                </span>

                <span className="mt-1 text-[11px] font-bold tracking-[2px] text-[#C73828] sm:text-[12px]">
                  MULTISERVICES
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-[380px] text-[15px] leading-[28px] text-[#697469]">
              Prasun Multiservices delivers reliable electrical,
              industrial and digital solutions. From earthing and
              grounding products to custom software and IT services,
              we focus on quality, innovation and customer satisfaction.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E7EAE2] bg-white px-3.5 py-2.5 text-[12px] font-medium text-[#426B28] sm:text-[13px]">
                <span className="h-2 w-2 rounded-full bg-[#83C341]" />
                Established 2023
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#E7EAE2] bg-white px-3.5 py-2.5 text-[12px] font-medium text-[#426B28] sm:text-[13px]">
                <Globe2 size={15} />
                Pan India
              </span>
            </div>
          </motion.div>

          {/* QUICK LINKS — NO PRODUCTS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-[17px] font-bold text-[#28352A]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-[14px] text-[#697469] transition-colors duration-200 hover:text-[#426B28] sm:text-[15px]"
                  >
                    <ChevronRight
                      size={16}
                      className="shrink-0 text-[#83C341] transition-transform group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* OUR PRODUCTS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-[17px] font-bold text-[#28352A]">
              Our Products
            </h3>

            <ul className="space-y-4">
              {productLinks.map((product) => (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="group inline-flex items-start gap-2 text-[14px] leading-6 text-[#697469] transition-colors duration-200 hover:text-[#426B28] sm:text-[15px]"
                  >
                    <ChevronRight
                      size={16}
                      className="mt-1 shrink-0 text-[#83C341] transition-transform group-hover:translate-x-1"
                    />

                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT DETAILS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-[17px] font-bold text-[#28352A]">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E7EAE2] bg-white text-[#426B28]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="mb-1 text-[14px] font-semibold text-[#28352A]">
                    Our Address
                  </p>

                  <p className="text-[14px] leading-[25px] text-[#697469]">
                    Gat No. 327, Phulenagar,
                    <br />
                    Pune Solapur Road,
                    <br />
                    Loni Kalbhor, Pune,
                    <br />
                    Maharashtra - 412201
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E7EAE2] bg-white text-[#426B28]">
                  <Mail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[14px] font-semibold text-[#28352A]">
                    Email Us
                  </p>

                  <a
                    href="mailto:prasunmultiservices@gmail.com"
                    className="break-all text-[14px] leading-[25px] text-[#697469] transition-colors hover:text-[#426B28]"
                  >
                    prasunmultiservices@gmail.com
                  </a>
                </div>
              </div>

              {/* SERVICE COVERAGE */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E7EAE2] bg-white text-[#426B28]">
                  <Globe2 size={19} />
                </div>

                <div>
                  <p className="mb-1 text-[14px] font-semibold text-[#28352A]">
                    Service Coverage
                  </p>

                  <p className="text-[14px] leading-[25px] text-[#697469]">
                    Pan India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-[#E4E8DE] bg-[#F3F4EE]">
        <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            {/* COPYRIGHT */}
            <p className="text-[13px] text-[#697469]">
              © {currentYear}{" "}
              <span className="font-semibold text-[#426B28]">
                Prasun Multiservices.
              </span>{" "}
              All Rights Reserved.
            </p>

            {/* HASHGRID CREDIT */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-[#697469]">
              <span>Designed & Developed by</span>

              <a
                href="https://hashgridtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-bold text-[#C73828] transition-colors duration-300 hover:text-[#426B28]"
              >
                HashGrid Technologies Pvt. Ltd.

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
