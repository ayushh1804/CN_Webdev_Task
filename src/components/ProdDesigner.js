import React from "react";
import groupimg from "./images/2.svg";
import img from "./images/Ellipse_white.svg"

const ProdDesigner = () => {
  return (
    <div className="mt-24 ">
      <div className=" bg-[#333333]">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="flex flex-col mx-10">
            <div className=" text-4xl  uppercase font-semibold max-w-s my-3">
              <h1>cn recruitment</h1>
            </div>
            <p className=" max-w-md text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              illum deleniti quam recusandae, repudiandae sequi asperiores a
              nemo architecto.
            </p>
            <p className=" mt-12 max-w-md text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt asperiores provident quos deleniti ab modi natus consectetur, nam nemo!</p>
            <div className=" flex flex-row mt-4">
            <img src={img} alt="" />
            <p className="ml-2 text-white">Dhaka Oke, Product Designer</p>

          </div>
          </div>
         
          <div>
            <div className="flex mx-6 space-between">
              <img src={groupimg} alt="circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProdDesigner;
