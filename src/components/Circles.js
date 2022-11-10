import React from "react";
import logo from './images/Logos.svg';

const Circles = () => {
    return(
        <div className="w-full absolute bg-[#F2F2F2]">
            <h2 className="text-center my-10 text-2xl">Trusted by the World’s Best Companies</h2>
            <div className="flex justify-center mb-10">
            <img src={logo} alt="" /></div>
            
        </div>

    );
};
export default Circles;