import React from 'react';

export const Navbar = () => {
  return (
    <div className="flex items-center bg-[#2f2d52] h-14 p-2.5 justify-between text-[#ddddf7]">
      <span className="font-bold">Let's Chat</span>
      <div className="flex gap-2.5 ">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="bg-[#ddddf7] h-6 w-6 rounded-full object-cover"
        />
        <span>John</span>
        <button className="bg-[#5d5b8d] text-[#ddddf7] text-xs cursor-pointer p-1">
          Logout
        </button>
      </div>
    </div>
  );
};
