import React, { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="policies grid content-center min-h-screen text-justify text-desc px-5 md:px-60 py-5 md:py-10">
      <div className="my-5 details">
        <div className="font-semibold text-header mb-3">
          Privacy Policy for Tomta
        </div>
        {/* <div>Welcome to Tomta!</div> */}
        <p>
          At Tomta, accessible from https://TomtaTechnology.com/, one of our
          main priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Tomtas and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>
      </div>
      <div className="mb-5 details">
        <div className="font-semibold text-header mb-3">Log Files</div>
        <p>
          Tomtas follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services’ analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users’ movement on the website, and gathering demographic information.
        </p>
      </div>

      <div className="mb-5 details">
        <div className="font-semibold text-header mb-3">Privacy Policies</div>
        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Tomtas.
        </p>

        <p className="">
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Tomtas, which are sent
          directly to users’ browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>
        <p>
          Note that Tomtas has no access to or control over these cookies that
          are used by third-party advertisers.
        </p>
      </div>

      <div className="mb-5 details">
        <div className="font-semibold text-header mb-3">
          Third Party Privacy Policies
        </div>
        <p>
          Tomtas’s Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </p>
        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers’
          respective websites. What Are Cookies?
        </p>
      </div>

      <div className="mb-5 details">
        <div className="font-semibold text-header mb-3">
          Children’s Information
        </div>
        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          Tomtas does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
      </div>
      <div className="mb-5 details">
        <div className="font-semibold text-header mb-3">
          Online Privacy Policy Only
        </div>
        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Tomtas. This policy is not applicable to any
          information collected offline or via channels other than this website.
        </p>
      </div>
      <div className="mb-5 details">
        <div className="font-semibold text-header mb-3">Consent</div>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
