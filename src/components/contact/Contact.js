import React from "react";
import ContactBanner from "./ContactBanner";
import ContactContent from "./ContactContent";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <React.Fragment>
      <ContactBanner />
      <ContactContent />
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
