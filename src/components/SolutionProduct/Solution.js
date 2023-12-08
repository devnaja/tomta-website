import React from "react";
import workflow from "../../assets/images/work.jpg";
import vertical from "../../assets/images/planning.jpg";
import automation from "../../assets/images/automation.jpg";

function Details() {
  return (
    <div className="text-center px-5 md:px-20 py-5 md:py-10 ">
      <div className="text-xl lg:text-3xl font-bold uppercase mb-3 lg:mb-5">Our Solution</div>
      <div>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </div>
      <div className="details grid lg:grid-cols-3 lg:gap-10 mt-5 lg:mt-10">
        <div className="border-2 border-primary my-3 p-3 xl:p-5 rounded-lg transition transform duration-150 hover:-translate-y-1 lg:hover:scale-110 hover:bg-background">
          <div className="font-bold uppercase text-xl md:text-3xl pb-5">
            Workflow
          </div>
          <img src={workflow} alt="workflow" className="md:w-1/2 lg:w-full md:m-auto" />
          <p className="p-3">
            System workflow allows enterprise team members to collaborate
            effectively. There is no more task missing in between and lead to
            customer complaint.
          </p>
        </div>

        <div className="border-2 border-primary my-3 p-3 xl:p-5 rounded-lg transition transform duration-150 hover:-translate-y-1 lg:hover:scale-110 hover:bg-background">
          <div className="font-bold uppercase text-xl md:text-3xl pb-5">
            Vertical
          </div>
          <img src={vertical} alt="vertical" className="md:w-1/2 lg:w-full md:m-auto" />
          <p className="p-3">
            Vertical Solutions such as Shipment Planning, Container Stuffing
            Planning, AI Planner, Mobile Warehouse Execution and Sales Analytic,
            allow enterprise users to improve their efficiency on top of the ERP
            system.
          </p>
        </div>

        <div className="border-2 border-primary my-3 p-3 xl:p-5 rounded-lg transition transform duration-150 hover:-translate-y-1  lg:hover:scale-110 hover:bg-background">
          <div className="font-bold uppercase text-xl md:text-3xl pb-5">
            Automation
          </div>
          <img src={automation} alt="automation" className="md:w-1/2 lg:w-full md:m-auto" />
          <p className="p-3">
            Robotic Process Automation allows enterprise to create Sales Order,
            Customer Invoices and Purchase Invoices automatically by just
            scanning the hard documents. It helps an organization to allocate
            resource on value-added activities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
