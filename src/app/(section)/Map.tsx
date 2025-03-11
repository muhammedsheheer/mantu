import React from "react";

const Map: React.FC = () => {
  return (
    <section className="relative h-full w-full">
      <div className="pointer-events-none absolute inset-0 bg-[#ECE6D6] mix-blend-color"></div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3518235577612!2d-0.282350023528942!3d51.525106571817304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611828d8d4ff7%3A0xd0a626f080e14845!2sNova%20Park%20Royal!5e0!3m2!1sen!2sin!4v1740603246277!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0px" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[50vh] w-full"
      ></iframe>
    </section>
  );
};

export default Map;
