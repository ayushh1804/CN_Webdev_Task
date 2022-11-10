import React from "react";

const BlogCard = () => {
  return (
    <div className="p-10">
      <div className=" flex flex-row bg-[#F2F2F2] m-15 p-12 space-between ">
        <div className=" basis-1/2">
          <h2 className="font-bold text-xl">Keys to writing copy that actually converts and sells users</h2>
          <p className="mt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore...
          </p>
          <p className="p-5">Read More</p>
        </div>
        
        <div className=" basis-1/2">
          <h2 className="font-bold text-xl">Keys to writing copy that actually converts and sells users</h2>
          <p className="mt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore...
          </p>
          <p className="mt-7">Read More</p>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
