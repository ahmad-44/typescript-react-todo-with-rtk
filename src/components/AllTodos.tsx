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
  const handleState = (state: string) => {
    setActive(state);
  };
  useEffect(() => {
    setTodosLength(todos.length);
  }, [todos]);

  return (
    <div className=" max-w-1152 mx-auto ">
      <div className="flex justify-between">
        <p className="text-black font-poppins font-semibold text-xl mb-3 ">
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
        className={`gap-5 border-x ${
          todos.length ? "border-t" : ""
        } border-[#DDDDDD] rounded-b-[5px] rounded-t-[5px]`}
      >
        <Todo
          todos={todos.filter((todo) => {
            if (active === "All") return todo;
            return todo.status === active;
          })}
        />
      </div>
    </div>
  );
}

export default AllTodos;
