import React from "react";

const BASE_CLASSES = `outline-none border border-[#DDDDDD] h-11 rounded-md p-[10px] text-base text-[#8E8E8E] font-poppins focus:shadow-md w-full md:w-[371px] md:mr-5 mb-5 md:mb-0`;

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={`${BASE_CLASSES} ${props.className}`} />;
};

export default Input;
