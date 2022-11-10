import React from "react";
const Navbar = () => {
 return (
    <div className="flex justify-between items-center absolute top-0 right-0 left-0">
        <h1 className=" text-xl text-black-700 uppercase font-bold shrink-0  mx-7">cn recruitment</h1>
        <ul className="flex text-black-400">
            <li className="m-4 shrink-0 hover:cursor-pointer">Link 1</li>
            <li className="m-4 shrink-0 hover:cursor-pointer">Link 2</li>
            <li className="m-4 shrink-0 hover:cursor-pointer">Link 3</li>
            <li className="m-4 shrink-0 hover:cursor-pointer">Link 4</li>
            <li className="m-4 shrink-0"><button class="bg-white hover:bg-gray-100 text-black-300 font- px-7  border border-gray-400 rounded shadow">Sign Up</button></li>
        </ul>
    </div>

 );
};

export default Navbar;