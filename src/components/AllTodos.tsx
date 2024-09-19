import { useEffect, useState } from "react";
import { selectTodos } from "../store/todoSlice";
import Todo from "./Elements/Todo";
import { useSelector } from "react-redux";

function AllTodos() {
  const todos = useSelector(selectTodos);
  const [todosLength, setTodosLength] = useState(todos.length);

  useEffect(() => {
    setTodosLength(todos.length);
  }, [todos]);

  type Todo = {
    id: string;
    text: string;
    username: string;
    status: "Active" | "Completed" | "Deleted";
  };
  return (
    <div className="max-w-1152 mx-auto ">
      <p className="text-black font-poppins font-semibold text-xl mb-3">
        All Todos ({todosLength})
      </p>
      {/* TODOS LIST */}
      <div className=" gap-5 border-x border-t border-[#DDDDDD] rounded-b-[5px] rounded-t-[5px]">
        {todos.map((todo: Todo, i) => (
          <Todo
            key={todo.id}
            status={todo.status}
            text={todo.text}
            username={todo.username}
            id={todo.id} // for passing to Actions so they can change their own colors
            index={i} // for alternating avatar colors
            todosLength={todos.length} // for perfect rounded edges of Todo List
          />
        ))}
      </div>
    </div>
  );
}

export default AllTodos;
