import React from "react";
import img from "./images/Divider.svg";
const Footer = () => {
  return (
    <div className="mx-20 my-10 ">
      <div className=" flex">
        <div className="m-8 basis-1/6">
          <h1 className="text-3xl font-bold">CN</h1>
        </div>
        <div className="m-8 basis-2/6">
          <p className="font-bold font-2xl">Latest Blog Post</p>
          <h1 className=" font-medium text-4xl my-5">Ready to get started?</h1>
          <p className=" max-w-lg my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mx-10">
          <img src={img} alt="" />
        </div>
        <div className="mx-9">
          <div className="flex">
            <div className="my-10 basis-1/6 leading-8">
              <p className="font-bold mb-8">Products</p>
              <p>Products</p>
              <p>Products</p>
              <p>Products</p>
              <p>Products</p>
              <p>Products</p>
            </div>
            <div className="m-10 basis-1/6 leading-8">
              <p className="font-bold mb-8">Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
              <p>Company</p>
            </div>
          </div>
          <div className="flex max-w-md">
            <p className="mt-3 mr-3 ">&copy;2010—2020 </p>
            <p className="mt-3 max-w-md">Privacy—Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
