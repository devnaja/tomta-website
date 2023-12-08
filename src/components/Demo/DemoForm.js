import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";

const DemoForm = ({ isOpen, isClose, details }) => {
  const [formData, setFormData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    position: "",
  });
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);

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
      .send(
        "service_q3co0br",
        "template_2wfc0so",
        formData,
        "f8yC5xGpMK9t62NYi"
      )
      .then((response) => {
        alert("Email sent successfully:", response);
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };

  return (
    // <div className="w-full px-5 lg:px-20 py-5 md:py-10">
    <div className="fixed z-50 overflow-auto h-full inset-0 bg-black/60 flex items-center justify-center w-full text-white">
      <div className="bg-background rounded-lg max-w-4xl w-full ">
        <form
          className=" border-4 border-secondary rounded-lg m-auto"
          onSubmit={handleSubmit}
        >
          <div className="md:flex h-full">
            <div className="w-full pb-10 pt-5 px-5 lg:px-10">
              <div className="flex justify-end">
                <button
                  className="flex top-0 right-0 text-lg font-bold cursor-pointer text-white"
                  onClick={isClose}
                >
                  X
                </button>
              </div>

              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl ">GET DEMO</h1>
                <p>Enter your information to get the demo</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-2 mb-3">
                    {/* <label className="text-xs font-semibold px-1">
                      First name
                    </label> */}
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="First Name"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-2 mb-3">
                    {/* <label className="text-xs font-semibold px-1">
                      Last name
                    </label> */}
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Last Name"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-2 mb-3">
                    {/* <label className="text-xs font-semibold px-1">
                      Email
                    </label> */}
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
                  {/* </div>
                <div className="flex -mx-3"> */}
                  <div className="w-1/2 px-2 mb-3">
                    {/* <label className="text-xs font-semibold px-1">
                      Phone
                    </label> */}
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
                    {/* <label className="text-xs font-semibold px-1">
                      Company
                    </label> */}
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
                  {/* </div>
                <div className="flex -mx-3"> */}
                  <div className="w-1/2 px-2 mb-3">
                    {/* <label className="text-xs font-semibold px-1">
                      Position
                    </label> */}
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
                  <div className="w-full px-2 mb-3">
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
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
