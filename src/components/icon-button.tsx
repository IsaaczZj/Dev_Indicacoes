import { ComponentProps } from "react";

interface IconButton extends ComponentProps<'button'>{}

const IconButton = (props: IconButton) => {
  return (
    <button {...props} className="p-1.5 bg-gray-500 text-blue rounded-md transition-colors duration-300 cursor-pointer  hover:bg-blue hover:text-gray-900 "/>
  );
};

export default IconButton;
