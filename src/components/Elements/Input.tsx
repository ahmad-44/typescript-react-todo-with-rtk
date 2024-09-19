import React from "react";

type Props = {
  className: string;
  placeholder: string;
  value: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  className,
  value,
  onChange,
  required,
}: Props) => {
  return (
    <input
      className={`outline-none border border-[#DDDDDD] h-11 rounded-md p-[10px] text-base text-[#8E8E8E] font-poppins focus:shadow-md ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
