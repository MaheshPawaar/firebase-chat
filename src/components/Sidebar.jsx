import { Navbar } from '../components/Navbar';
import { Search } from '../components/Search';
import { Conversations } from './Conversations';

export const Sidebar = () => {
  return (
    <div className="w-1/3 bg-[#3e3c61] border-r border-black">
      <Navbar />
      <Search />
      <Conversations />
    </div>
  );
};
