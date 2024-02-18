export const Heading = ({text}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="font-bold text-[#5d5b8d] text-2xl">Let's Chat</span>
      <span className="text-[#5d5b8d] text-sm">{text}</span>
    </div>
  );
};
