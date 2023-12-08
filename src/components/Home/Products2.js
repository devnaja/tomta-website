import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as data from "data/products.json";

function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const menuList = data;

  function onLoad() {
    // delay for demo only
    setTimeout(() => setIsLoading(false), 1000);

    // setIsLoading(false)
  }

  return (
    <div className="flex justify-center items-center m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuList.lists.map((list, i) => (
          <NavLink to={"/products/" + list.id}>
            <div className=" h-full  overflow-hidden rounded-xl border shadow-primary">
              <div className=" w-full h-full">
                <div className="mb-8 rounded">
                  <img
                    alt="noImage"
                    className="w-full"
                    src="https://via.placeholder.com/300x200/EDEAE8"
                    style={{ display: isLoading ? "block" : "none" }}
                  />
                  <img
                    src={list.image}
                    alt="products"
                    className="w-full h-64"
                    style={{ display: isLoading ? "none" : "block" }}
                    onLoad={onLoad}
                  />
                </div>
                <div className="p-5">
                  <div>
                    <p className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                      {list.title}
                    </p>
                  </div>
                  <p className="text-body-color text-base">{list.desc}</p>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Products;
