import React from "react";

export type GenericElements =
  | React.ReactElement
  | React.ReactElement[]
  | React.ReactNode
  | React.ReactNode[]
  | JSX.Element
  | JSX.Element[];

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "PRI" | "SEC";
  children: GenericElements;
}

const BASE_CLASSES = `outline-none h-11 rounded-md py-[10px] px-5 text-base text-white bg-customBlue font-poppins transition hover:bg-opacity-85 hover:shadow-lg`;

const Button = ({ variant = "PRI", ...props }: Props) => {
  return (
    <button
      type={props.type || "submit"}
      className={`${BASE_CLASSES}  ${props?.className || ""}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
