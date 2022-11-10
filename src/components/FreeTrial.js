import React from "react";
import img from "./images/landing.svg";


const FreeTrial = () => {
    return(
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="flex flex-col mx-10">
                <div className=" text-4xl  uppercase font-semibold max-w-xs my-14">
                    <h1>cn</h1>
                    <h1>recruitment</h1>
                </div>
                <p className=" max-w-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla illum deleniti quam recusandae, repudiandae sequi asperiores a nemo architecto.</p>
                <button className="bg-black text-white p-2 w-48 h-14 rounded-md text-base my-6">Start Free Trial</button>
            </div>
            <div className="border-solid">
                <div className="flex mx-2 space-between">
                <img src={img} alt="circle" />
                </div>
                
            </div>
        </div>
        
    );
};
export default FreeTrial;