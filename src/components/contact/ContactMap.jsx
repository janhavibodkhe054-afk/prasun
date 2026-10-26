
import React from "react";

export default function ContactMap() {
  const location =
    "Gat No. 327, Phulenagar, Pune Solapur Road, Loni Kalbhor, Pune, Maharashtra 412201";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    location
  )}&output=embed`;

  return (
    <section
      id="contact-map"
      aria-label="Prasun Multiservices office location"
      className="relative w-full overflow-hidden bg-[#F5F7F3]"
    >
      <iframe
        title="Prasun Multiservices Location"
        src={mapUrl}
        width="100%"
        height="450"
        style={{
          border: 0,
          display: "block",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-[320px] w-full sm:h-[400px] lg:h-[480px]"
      />
    </section>
  );
}
