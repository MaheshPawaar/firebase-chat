import { BottomWarning } from '../components/BottomWarning';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import AddAvatar from '../img/addAvatar.png';
export const Register = () => {
  return (
    <div className="bg-light-blue h-screen flex items-center justify-center">
      <div className="bg-white px-16 py-5 rounded-xl flex flex-col items-center gap-2.5">
        <Heading text={'Register'} />
        <form action="">
          <div className="flex flex-col gap-5 items-center">
            <Input type={'text'} placeholder={'Display Name'} />
            <Input type={'email'} placeholder={'Email'} />
            <Input type={'password'} placeholder={'Password'} />
          </div>
          <label
            htmlFor="file"
            className="m-2 flex items-center gap-2.5 cursor-pointer"
          >
            <img src={AddAvatar} className="w-8" />
            <span className="text-[#8da4f1] text-sm">Add an avatar</span>
          </label>
          <input
            type="file"
            className="p-3 border-b-2 border-light-blue w-64 hidden placeholder:text-[#afafaf]"
          />
          <Button text={'Register'} />
        </form>
        <BottomWarning label={'Already have account?'} action={'Login'} />
      </div>
    </div>
  );
};
