import { useEffect, useState } from "react";
import { selectTodos } from "../store/todoSlice";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import Filter from "./Filter";

const filterValues = ["All", "Completed", "Active", "Deleted"];

function AllTodos() {
  const todos = useSelector(selectTodos);
  const [todosLength, setTodosLength] = useState(todos.length);
  const [active, setActive] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const handleState = (state: string) => {
    setActive(state);
  };
  useEffect(() => {
    setTodosLength(filteredTodos.length);
    setFilteredTodos(
      todos.filter((todo) => {
        if (active === "All") return todo;
        return todo.status === active;
      })
    );
  }, [todos, active, filteredTodos.length]);

  return (
    <div className=" max-w-1152 mx-auto max-[1152px]:px-[10px]">
      {/* Todos Title and Filter */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mb-3 items-start">
        <p className="text-black font-poppins font-semibold text-xl mt-5 md:mt-0">
          All Todos ({todosLength})
        </p>
        <Filter
          handleState={handleState}
          currentState={active}
          states={filterValues}
        />
      </div>
      {/* TODOS LIST */}
      <div
        className={`md:gap-5 border-x ${
          todos.length ? "border-t" : ""
        } border-[#DDDDDD] rounded-b-[5px] rounded-t-[5px]`}
      >
        <Todo todos={filteredTodos} />
      </div>
    </div>
  );
}

export default AllTodos;
