import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
    // Add your logic for form submission here
  };

  render() {
    return (
      <div className="w-full px-5 lg:px-20 py-5 md:py-10">
        <form className="border" onSubmit={this.handleSubmit}>
          <div className="md:flex w-full h-full">
            <div className="w-full md:w-1/2 py-10 px-5 lg:px-10">
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        value={this.state.fName}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
