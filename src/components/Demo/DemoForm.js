import React from "react";
import emailjs from "@emailjs/browser";

const DemoForm = ({ isOpen, isClose, details }) => {
  const service_id = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  console.log("id", service_id);

  const [formData, setFormData] = React.useState({
    fname: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    emailjs
      .send(service_id, template_id, formData, public_key)
      .then((response) => {
        alert("Email sent successfully:", response);
        isClose();
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };

  return (
    <div className="fixed z-50 overflow-auto h-full inset-0 bg-black/60 flex items-center justify-center w-full text-black">
      <div className="bg-white rounded-lg max-w-4xl w-full ">
        <form
          className=" border-4 border-primary rounded-lg m-auto"
          onSubmit={handleSubmit}
        >
          <div className="md:flex h-full">
            <div className="w-full pb-10 pt-5 px-5 lg:px-10">
              <div
                className="flex justify-end cursor-pointer"
                onClick={isClose}
              >
                <button className="flex top-0 right-0 text-lg font-bold z-50 ">
                  X
                </button>
              </div>

              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl cursor-pointer">
                  Connect with Us
                </h1>
                {/* <p>Enter your information, we will get back to you.</p> */}
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-2 mb-3">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Full Name"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-2 mb-3">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-2 mb-3">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-2 mb-3">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-2 mb-3">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full  px-2 mb-3">
                    <div className="flex">
                      <div className="w-10 z-10 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <textarea
                        type="textarea"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Write your pitch here"
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex -mx-3">
                  <div className="w-full px-2 mb-3">
                    <button className="block w-full max-w-xs mx-auto bg-primary text-white rounded-lg px-3 py-3 font-semibold">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoForm;
