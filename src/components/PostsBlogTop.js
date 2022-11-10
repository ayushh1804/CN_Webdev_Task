import React from "react";
import img from "./images/Group 2.2.svg";

const PostsBlogTop = () => {
  return (
    <div className="mx-20">
        <div className="flex flex-row ">
            <div className=" basis-1/3 bg-[#222222] p-20">
                <img src={img} alt="" />
            </div>
            <div className=" bg-[#000000] text-white basis-2/3 p-8">
                <p className=" text-sm mb-5">Author Name</p>
                <h1 className=" text-6xl font-extrabold tracking-widest mb-10">CN RECRUITMENT</h1>
                <p className=" mt-15 py-20 hover:cursor-pointer">Read More</p>
            </div>
        </div>
    </div>
)
};

export default PostsBlogTop;
