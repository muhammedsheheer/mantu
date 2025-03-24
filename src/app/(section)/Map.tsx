import React from "react";

const Map: React.FC = () => {
  return (
    <section className="relative h-full w-full">
      <div className="pointer-events-none absolute inset-0 bg-[#ECE6D6] mix-blend-color"></div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.443592091924!2d-0.27796922352327036!3d51.61508287183801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761765a0a0f7f7%3A0xf849ef300d9e43a7!2sMantu%20Restaurant%20%7C%20Afghan%20Cuisine!5e0!3m2!1sen!2sin!4v1742806064204!5m2!1sen!2sin"
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
