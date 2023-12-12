import React from "react";
import product1 from "assets/images/insidescoop-product.png";
import product2 from "assets/images/insidescoop-product.png";
import product3 from "assets/images/insidescoop-product.png";

function Product() {
  return (
    <div className="min-h-screen text-center mx-5 md:mx-20 py-5 md:py-10">
      <div className="font-extrabold md:text-5xl mb-8 uppercase">
        Our Products
      </div>
      <div className="lg:w-1/2 mx-auto my-5">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </div>
      <div className="grid sm:grid-cols-3  lg:gap-20 ">
        <div className="flex justify-center">
          <img src={product1} alt="product" className="w-1/2 " />
        </div>
        <div className="flex justify-center">
          <img src={product2} alt="product" className="w-1/2 " />
        </div>
        <div className="flex justify-center">
          <img src={product3} alt="product" className="w-1/2 " />
        </div>
      </div>
    </div>
  );
}

export default Product;
