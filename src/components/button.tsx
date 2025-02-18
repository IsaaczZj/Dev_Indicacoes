import { ComponentProps } from "react";

interface Button extends ComponentProps<'button'>{}

const Button = (props: Button) => {
  return (
    <button {...props} className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full transition-colors duration-300 cursor-pointer  hover:bg-blue hover:text-gray-900"/>
  );
};

export default Button;
