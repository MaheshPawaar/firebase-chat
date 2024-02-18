export const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 border-b-2 border-light-blue w-64 placeholder:text-[#afafaf]"
    />
  );
};
