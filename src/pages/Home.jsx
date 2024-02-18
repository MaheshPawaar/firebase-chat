import { Sidebar } from '../components/Sidebar';
import { Chat } from '../components/Chat';

export const Home = () => {
  return (
    <div className="bg-light-blue h-screen flex items-center justify-center">
      <div className='border border-white rounded-lg w-2/4 h-4/5 flex overflow-hidden'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
