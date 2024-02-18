import Attach from '../img/attach.png';
import Image from '../img/img.png';

export const MessageBox = () => {
  return (
    <div className="h-16 p-3 bg-white flex">
      <input
        type="text"
        placeholder="Type Something..."
        className="w-8/12 outline-none border-none text-[#2f2d52] text-lg placeholder:text-[#d3d3d3]"
      />
      <div className="flex items-center gap-2.5 cursor-pointer">
        <img src={Attach} className='h-6'/>
        <div>
        <input type="file" className="hidden" id='file'/>
        <label htmlFor="file" className='p-6'>
          <img src={Image} />
        </label>
        </div>
        <button className="border-none px-3 py-2 text-white bg-[#8da4f1]">
          Send
        </button>
      </div>
    </div>
  );
};
