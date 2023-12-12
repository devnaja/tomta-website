import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import emailjs from "@emailjs/browser";

import Homepage from "pages/Homepage/index";
import About from "pages/About/index";
import Solutions from "pages/Solutions/index";
import Products from "pages/Products/index";
import LoyaltyApp from "pages/Products/LoyaltyApp";
import Invoice from "pages/Products/Invoice";
import RPA from "pages/Products/RPA";

// kena tukar guna pages
import TermsCondition from "pages/TermsCondition/index";
import PrivacyPolicy from "components/Policies/PrivacyPolicy";

import "./input.css";
import Listing from "pages/Solutions/SolutionDetails";

function App() {
  useEffect(() => emailjs.init("f8yC5xGpMK9t62NYi"), []);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // the purpose of this file is to register router only
  return (
    <Router>
      <Routes>
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/listing" element={<Listing />} />
        {/* <Route
          path="/solutions/process-automation"
          element={<ProcessAutomation />}
        />
        <Route
          path="/solutions/system-integration"
          element={<SystemIntegration />}
        /> */}
        {/* <Route path="/solutions/:id" element={<ApplicationDevelopment />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/loyalty-app" element={<LoyaltyApp />} />
        <Route path="/products/e-invoice" element={<Invoice />} />
        <Route path="/products/rpa" element={<RPA />} />
        <Route path="/tomta-website" element={<Homepage />} />
        <Route path="/about" element={<About />} />

        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
