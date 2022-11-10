import React from "react";
import img from "./images/4.svg";
import blackellipse from "./images/Ellipse_black.svg";

const FeatureQuoteLeft = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      
      <div className="flex flex-col mx-10">
        <div className=" text-4xl  uppercase font-semibold max-w-s my-5">
          <h1>cn recruitment</h1>
        </div>
        <p className=" max-w-md font-semibold ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla illum
          deleniti quam recusandae, repudiandae sequi asperiores a nemo
          architecto.
        </p>
        <p className=" max-w-md mt-12 font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quos
          eligendi adipisci laborum, harum ex omnis laboriosam aliquid deleniti
          odit!
        </p>
        <div className=" flex flex-row mt-4">
            <img src={blackellipse} alt="" />
            <p className="ml-2 ">Dhaka Oke, Product Designer</p>

          </div>
      </div>
      <div className="border-solid">
        <div className="flex mx-10 space-between">
          <img src={img} alt="circle" />
        </div>
      </div>
    </div>
  );
};
export default FeatureQuoteLeft;
