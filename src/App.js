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
import Listing from "pages/Solutions/SolutionDetails";
import MobileWarehouse from "pages/Products/MobileWarehouse";

import TermsCondition from "pages/TermsCondition/index";
import PrivacyPolicy from "pages/PrivacyPolicy/index";

function App() {
  const public_key = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  useEffect(() => emailjs.init(public_key), []);
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
        <Route path="/products" element={<Products />} />
        <Route path="/products/loyalty-app" element={<LoyaltyApp />} />
        <Route path="/products/e-invoice" element={<Invoice />} />
        <Route path="/products/rpa" element={<RPA />} />
        <Route
          path="/products/mobile-warehouse"
          element={<MobileWarehouse />}
        />
        <Route path="/" element={<Homepage />} />
        <Route path="/tomta-technology" element={<Homepage />} />
        <Route path="/about" element={<About />} />

        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
