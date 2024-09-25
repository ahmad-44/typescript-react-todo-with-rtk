import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../store/todoSlice";
import Todo, { ITodo } from "./Todo";
import Filter, { TFilterValues } from "./Filter";

function AllTodos() {
  const todos = useSelector(selectTodos);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
  // const [todosLength, setTodosLength] = useState(todos.length);
  const [activeFilter, setActiveFilter] = useState<TFilterValues>("All");

  useEffect(() => {
    // closures

    let toSet = [...todos];

    if (activeFilter !== "All") {
      toSet = toSet.filter((e) => e.status === activeFilter);
    }

    setFilteredTodos([...toSet]);
  }, [todos, activeFilter]);

  return (
    <div className=" max-w-1152 mx-auto max-[1152px]:px-[10px]">
      {/* Todos Title and Filter */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mb-3 items-start">
        <p className="text-black font-poppins font-semibold text-xl mt-5 md:mt-0">
          {activeFilter !== "Active" ? activeFilter : "Incompleted"} Todos (
          {filteredTodos.length})
        </p>
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      {/* TODOS LIST */}
      <div
        className={`border-x border-[#DDDDDD] rounded-b-[5px] rounded-t-[5px] ${
          todos.length ? "border-t" : ""
        } `}
      >
        <Todo todos={filteredTodos} />
      </div>
    </div>
  );
}

export default AllTodos;
