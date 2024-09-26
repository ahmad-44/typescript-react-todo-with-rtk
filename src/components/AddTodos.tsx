import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Elements/Input";
import Button from "./Elements/Button";
import { addTodo } from "../store/todoSlice";
import { IBaseTodo } from "./Todo";

function AddTodos() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");

  const clearForm = () => {
    setUsername("");
    setTask("");
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username });
    const _username = username.trim();
    const text = task.trim();

    if (!_username || !text) return alert("Shamliyaaa! Data do!");

    const newTodo: IBaseTodo = {
      username: _username,
      text,
      status: "Active",
    };

    dispatch(addTodo(newTodo));

    clearForm();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col md:flex-row items-center max-w-1152 mx-auto font-poppins mb-10 max-[1152px]:px-[10px]"
    >
      <Input
        className={"md:w-[371px] "}
        placeholder={"User Name"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        className={"md:w-[663px]"}
        placeholder={"Task"}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <Button className="w-full md:w-[78px]">Add</Button>
    </form>
  );
}

export default AddTodos;
