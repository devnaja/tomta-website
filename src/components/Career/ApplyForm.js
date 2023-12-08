import React from "react";
import emailjs from "@emailjs/browser";

export default class ApplyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: "",
      fullName: "",
      dob: "",
      email: "",
      phone: "",
      nationality: "",
      educationLevel: "",
      startDate: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Assign the position data here
    this.setState({
      position: this.props.details.position,
    });
  }

  handleChange(e) {
    console.log("e", e);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
    emailjs
      .send(
        "service_q3co0br",
        "template_qlflll9",
        this.state,
        "f8yC5xGpMK9t62NYi"
      )
      .then((response) => {
        alert("Email sent successfully:", response);
        this.isClose();
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };

  upload = (e) => {
    alert('upload files')
  }

  render() {
    const { isOpen, isClose, details } = this.props;
    // console.log(this.props);
    // this.state.position = {details.position}
    // if (isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center w-full">
        <div className="bg-white rounded-lg max-w-xl w-full mt-80 mb-5  ">
          <form className="border" onSubmit={this.handleSubmit}>
            <div className="md:flex w-full h-full">
              <div className="w-full py-10 px-5 lg:px-10">
                <div className="flex justify-between text-center mb-10">
                  <div>
                  <h1 className="font-bold text-3xl text-gray-900">
                    Application Form
                  </h1>
                  <p>Enter your information to apply</p>
                  </div>
                  <button
                  className="flex top-0 right-0 m-4 text-lg font-bold cursor-pointer text-primary"
                  onClick={isClose}
                >
                  X
                </button>
                </div>
                
                <div>
                  <div className="flex -mx-3">
                    <div className="w-full  px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Position
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          readOnly
                          name="position"
                          value={this.state.position}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full  px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        First name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="John"
                          name="fullName"
                          value={this.state.fullName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full  px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Date of Birth
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="01/01/1993"
                          name="dob"
                          value={this.state.dob}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="johnsmith@example.com"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Phone
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="+60198273362"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        Nationality
                      </label>
                      <div className="">
                        <select
                          name="nationality"
                          value={this.state.nationality}
                          onChange={this.handleChange}
                          className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                          id="grid-state"
                        >
                           <option value="" disabled hidden>
                            Select an option
                          </option>
                          <option value="malaysian">Malaysian</option>
                          <option value="non-malaysian">Non-Malaysian</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Current Level Education
                      </label>
                      <div className="flex">
                        <select
                          name="educationLevel"
                          value={this.state.educationLevel}
                          onChange={this.handleChange}
                          className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                          id="grid-state"
                        >
                          <option value="" disabled hidden>
                            Select an option
                          </option>
                          <option value="spm">SPM/STPM</option>
                          <option value="diploma">Diploma</option>
                          <option value="degree">Degree</option>
                          <option value="master">Master</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full  px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Start Date
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="01/01/1993"
                          name="startDate"
                          value={this.state.startDate}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex -mx-3">
                    <div className="w-full  px-3 mb-5">
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <button
                          className=" -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          onClick={''}
                        >
                          Upload Here
                          </button>
                      </div>
                    </div>
                  </div> */}

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button
                        type="submit"
                        className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      >
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
  }
}
