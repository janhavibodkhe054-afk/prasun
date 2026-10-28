
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  UserRound,
  Mail,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const contactDetails = [
  {
    title: "Our Office",
    icon: MapPin,
    content: [
      {
        text: "Gat No. 327, Phulenagar, Pune Solapur Road, Loni Kalbhor, Pune, Maharashtra, India – 412201",
        href: "https://www.google.com/maps/search/?api=1&query=Gat+No+327+Phulenagar+Loni+Kalbhor+Pune+412201",
      },
    ],
  },
  {
    title: "Contact Person",
    icon: UserRound,
    content: [
      {
        text: "Mr. Mangesh Sonar",
      },
    ],
  },
  {
    title: "Email Address",
    icon: Mail,
    content: [
      {
        text: "prasunmultiservices@gmail.com",
        href: "mailto:prasunmultiservices@gmail.com",
      },
      {
        text: "profile.prasunmultiservices@gmail.com",
        href: "mailto:profile.prasunmultiservices@gmail.com",
      },
    ],
  },
  
{
  title: "Phone Number",
  icon: PhoneCall,
  content: [
    {
      text: "+91 9420415864",
      href: "tel:+919420415864",
    },
    {
      text: "+91 7020735788",
      href: "tel:+917020735788",
    },
    {
      text: "+91 9175820129",
      href: "tel:+919175820129",
    },
  ],
},

];

export default function ContactInformation() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    const timer = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="contact-details"
      aria-labelledby="contact-info-heading"
      className="relative w-full overflow-hidden bg-[#F8FAF6] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-36 -top-36 h-[350px] w-[350px] rounded-full border border-[#8BC53F]/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full border border-[#C73828]/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADING */}
        <div
          data-aos="fade-up"
          className="mx-auto mb-10 max-w-[760px] text-center lg:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-[#C73828]" />
            <span className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#6D9D30]">
              Get In Touch
            </span>
            <span className="h-[2px] w-7 bg-[#C73828]" />
          </div>

          <h2
            id="contact-info-heading"
            className="text-[29px] font-bold leading-[1.2] tracking-[-0.7px] text-[#26352A] sm:text-[36px] lg:text-[40px]"
          >
            Contact{" "}
            <span className="text-[#8BC53F]">
              Information.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-[27px] text-[#687568] sm:text-[15px]">
            Reach out to Prasun Multiservices for product enquiries,
            technical assistance and digital service requirements.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-5 h-[3px] bg-[#C73828]"
          />
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;

            return (
              <motion.div
                key={detail.title}
                data-aos="fade-up"
                data-aos-delay={index * 110}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -6 }
                }
                className="group relative min-w-0 overflow-hidden border border-[#E5EBE1] bg-white p-6 shadow-[0_8px_30px_rgba(30,50,30,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(30,50,30,0.09)] sm:p-7"
              >
                {/* TOP ACCENT */}
                <span className="absolute left-0 top-0 h-[3px] w-12 bg-[#8BC53F] transition-all duration-500 group-hover:w-full" />

                {/* ICON */}
                <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center bg-[#F0F7E9] text-[#75A737] transition-all duration-300 group-hover:bg-[#8BC53F] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                {/* TITLE */}
                <h3 className="text-[19px] font-bold text-[#26352A]">
                  {detail.title}
                </h3>

                {/* CONTENT */}
                <div className="mt-4 space-y-3">
                  {detail.content.map((item) =>
                    item.href ? (
                      <a
                        key={item.text}
                        href={item.href}
                        target={
                          item.href.startsWith("https")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.href.startsWith("https")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block break-words text-[13px] leading-[25px] text-[#687568] transition-colors duration-300 hover:text-[#C73828] sm:text-[14px]"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p
                        key={item.text}
                        className="text-[14px] leading-[25px] text-[#687568]"
                      >
                        {item.text}
                      </p>
                    )
                  )}
                </div>

                {/* HOVER ARROW */}
                <ArrowUpRight
                  size={19}
                  className="absolute bottom-5 right-5 text-[#C73828] opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                />

                {/* BOTTOM ACCENT */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C73828] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
