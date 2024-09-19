type Props = {
  states: string[];
  currentState: string;
  handleState: (param: string) => void;
};

export default function Filter({ states, currentState, handleState }: Props) {
  return (
    <ul className="flex items-center justify-between md:justify-center p-[5px] bg-white rounded-full w-full md:w-auto">
      {states.map((item, i) => (
        <li
          key={i + 1}
          className={` ${
            item == currentState
              ? "bg-customBlue text-white transition duration-300 hover:hover:bg-customBlue/85"
              : ""
          }  text-xs font-poppins py-[5px] px-2 md:px-5 my-[5px] flex items-center rounded-full cursor-pointer hover:bg-customBlue hover:text-white transition duration-300`}
          onClick={() => handleState(item)}
        >
          {item !== "Active" ? item : "Incompleted"}
        </li>
      ))}
    </ul>
  );
}
