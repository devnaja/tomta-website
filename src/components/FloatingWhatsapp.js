import React from "react";

import { ReactComponent as CompanyIcon } from "../assets/crown.svg";

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function FloatingWhatsapp() {
  return (
    <div>
      <WhatsAppWidget
        className="z-auto"
        CompanyIcon={CompanyIcon}
        phoneNumber="60198195549"
        companyName="Tomta Technology"
        replyTimeText="online"
      />
    </div>
  );
}

export default FloatingWhatsapp;
