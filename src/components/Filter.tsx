export type TFilterValues = "All" | "Completed" | "Active" | "Deleted";

interface Props {
  activeFilter: string;
  setActiveFilter: (param: TFilterValues) => void;
}

const filterValues: TFilterValues[] = ["All", "Completed", "Active", "Deleted"];

export default function Filter({ activeFilter, setActiveFilter }: Props) {
  return (
    <ul className="flex items-center justify-between md:justify-center p-[5px] bg-white rounded-full w-full md:w-auto">
      {filterValues.map((item, i) => (
        <li
          key={item + "__" + (i + 1)}
          className={` ${
            item == activeFilter
              ? "bg-customBlue text-white transition duration-300 hover:hover:bg-customBlue/85"
              : ""
          }  text-xs font-poppins py-[5px] px-2 md:px-5 my-[5px] flex items-center rounded-full cursor-pointer hover:bg-customBlue hover:text-white transition duration-300`}
          onClick={() => setActiveFilter(item)}
        >
          {item !== "Active" ? item : "Incompleted"}
        </li>
      ))}
    </ul>
  );
}
