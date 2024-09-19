import { useState } from "react";
import Input from "./Elements/Input";
import Button from "./Elements/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
function AddTodos() {
  const [username, setUsername] = useState<string>("");
  const [task, setTask] = useState<string>("");

  const [status] = useState<"Active" | "Completed" | "Deleted">("Active");
  const dispatch = useDispatch();
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      username,
      text: task,
      status,
    };
    dispatch(addTodo(newTodo));
    setUsername("");
    setTask("");
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row items-center max-w-1152 mx-auto font-poppins mb-10 max-[1152px]:px-[10px]"
      >
        <Input
          className={"md:w-[371px] "}
          placeholder={"User Name"}
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <Input
          className={"md:w-[663px]"}
          placeholder={"Task"}
          value={task}
          onChange={handleTaskChange}
          required
        />
        <Button className="w-full md:w-[78px]">Add</Button>
      </form>
    </>
  );
}

export default AddTodos;
