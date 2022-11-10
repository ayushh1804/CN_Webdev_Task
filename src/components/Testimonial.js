import React from "react";
import img from "./images/Media Person.svg";

const Testimonial = () => {
  return (
    <div className="text-center items-center my-12">
      <h1 className="text-2xl">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.”
      </h1>
      <div className="flex justify-center mt-6">
        <img src={img} alt="" />
      </div>
      <p className="mt-6">Maria Lopez, VP of Design at Meshery</p>
    </div>
  );
};
export default Testimonial;
