import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import { Messages } from './Messages';
import { MessageBox } from './MessageBox';

export const Chat = () => {
  return (
    <div className='w-2/3'>
      <div className="flex justify-between items-center h-12 bg-[#5d5b8d] p-2.5 text-[#d3d3d3]">
        <span>Jane</span>
        <div className="flex gap-2.5 h-6">
          <img src={Cam}/>
          <img src={Add}/>
          <img src={More}/>
        </div>
      </div>
      <Messages/>
      <MessageBox/>
    </div>
  )
}
