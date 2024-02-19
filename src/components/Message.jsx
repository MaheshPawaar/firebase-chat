import React from 'react';

export const Message = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col text-gray-600 font-[300] mb-5 ">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="max-w-[40%]">
        <p className='bg-white py-2.5 px-5'>Hello! This is test message. how are you</p>
        {/* <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
      </div>
    </div>
  );
};
