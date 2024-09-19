import { useState } from "react";
import Input from "./Elements/Input";
import Button from "./Elements/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
function AddTodos() {
  const [username, setUsername] = useState<string>("");
  const [task, setTask] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<"Active" | "Completed" | "Deleted">(
    "Active"
  );
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
        className="flex items-center max-w-1152 mx-auto font-poppins mb-10"
      >
        <Input
          className={"w-[371px] mr-5"}
          placeholder={"User Name"}
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <Input
          className={"w-[663px] mr-5"}
          placeholder={"Task"}
          value={task}
          onChange={handleTaskChange}
          required
        />
        <Button className="w-[78px]">Add</Button>
      </form>
    </>
  );
}

export default AddTodos;
