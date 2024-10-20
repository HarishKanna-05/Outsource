import React from "react";
import CarouselComponent from "./CarouselComponent";
import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import Search from "./Search";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <CarouselComponent />
      <ProductPage />
    </div>
  );
};

export default Landing;
