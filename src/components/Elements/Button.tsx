import React from "react";

interface Props {
  className: string;
  children: React.ReactNode;
}

const Button = ({ className, children }: Props) => {
  return (
    <button
      type="submit"
      className={`outline-none h-11 rounded-md py-[10px] px-5 text-base text-white bg-customBlue font-poppins transition hover:bg-opacity-85 hover:shadow-lg  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
