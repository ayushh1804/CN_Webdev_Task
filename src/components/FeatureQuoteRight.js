import React from "react";
import img from "./images/Group 2.1.svg";
import blackellipse from "./images/Ellipse_black.svg"

const FeatureQuoteRight = () => {
  return (
    <div className="w-full h- flex justify-center items-center mb-12 bg-[#F2F2F2]  ">
      
      <div className="border-solid basis-1/2">
        <div className="flex mx-2 space-between">
          <img src={img} alt="circle" />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className=" text-4xl  uppercase font-semibold max-w-s my-5">
          <h1>cn recruitment</h1>
          
        </div>
        <p className=" max-w-md font-semibold ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla illum
          deleniti quam recusandae, repudiandae sequi asperiores a nemo
          architecto.
        </p>
        <p className=" max-w-md mt-12 font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quos eligendi adipisci laborum, harum ex omnis laboriosam aliquid deleniti odit!
        </p>
        <div className=" flex flex-row mt-4">
            <img src={blackellipse} alt="" />
            <p className="ml-2 ">Dhaka Oke, Product Designer</p>

          </div>
       
      </div>
    </div>
  );
};

export default FeatureQuoteRight;
