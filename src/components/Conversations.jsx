import React from 'react';

export const Conversations = () => {
  return (
    <div className="p-2.5 flex items-center gap-2.5 text-white cursor-pointer hover:bg-[#2f2d52]">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="bg-[#ddddf7] h-12 w-12 rounded-full object-cover"
      />
      <div>
        <span className='text-lg font-medium'>Jane</span>
        <p className='text-sm text-[#d3d3d3]'>This is message.</p>
      </div>
    </div>
  );
};
