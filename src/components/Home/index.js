import React from "react";
import Slider from "../../components/Home/Slider";
import About from "../../components/Home/AboutUs";
import Solutions from "./Solutionssss";
import Product from "../../components/Home/Product";
import Team from "../../components/Home/Team";

function Home() {
  return (
    <React.Fragment>
      <Slider />
      <About />
      <Solutions />
      <Product />
      <Team />
    </React.Fragment>
  );
}

export default Home;
