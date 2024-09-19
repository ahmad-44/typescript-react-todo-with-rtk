import Actions from "./Elements/Actions";

interface Todo {
  id: string;
  text: string;
  username: string;
  status: "Active" | "Completed" | "Deleted";
}
interface Props {
  todos: Todo[];
}

const bgColors = {
  Active: "bg-[#ffffff]",
  Completed: "bg-[#F5FFF5]",
  Deleted: "bg-[#FFEFEF]",
};

const statusColors = {
  Active: "text-[#F2B457] bg-[#F2B457]/20",
  Completed: "text-[#4CAF50] bg-[#4CAF50]/20",
  Deleted: "text-[#DA4F4F] bg-[#DA4F4F]/20",
};

function getInitials(username: string): string {
  if (username.length === 0) return "";
  if (username.length <= 2) return username.toUpperCase();

  // Split the username into parts
  const nameParts = username.split(" ");

  // If there's only one name, return the first two letters
  if (nameParts.length === 1) return nameParts[0].substring(0, 2).toUpperCase();

  // Otherwise, return the initials of the first and second names
  const firstInitial = nameParts[0].charAt(0).toUpperCase();
  const secondInitial = nameParts[1].charAt(0).toUpperCase();

  return firstInitial + secondInitial;
}

const Todo = ({ todos }: Props) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div
          key={index + 1}
          className={`flex flex-col md:flex-row md:items-center md:justify-between p-[10px] border-b border-[#DDDDDD] relative md:static ${
            index == 0 ? "rounded-t-[5px]" : ""
          } ${todos.length - 1 == index ? "rounded-b-[5px]" : ""} ${
            bgColors[todo.status]
          } `}
        >
          {/* USER+AVATAR Container */}
          <div className="w-[273px] flex items-center justify-start gap-3">
            {/* Avatar */}
            <div
              className={`w-[30px] h-[30px] ${
                index % 2 == 0 ? "avatar-gradient-1" : "avatar-gradient-2"
              }  rounded-full flex items-center justify-center text-[10px] text-white font-semibold`}
            >
              {getInitials(todo.username)}
            </div>
            {/* User Name */}
            <p className="font-poppins text-base text-[#666666]">
              {todo.username}
            </p>
          </div>
          {/* TASK */}
          <p className="font-poppins w-[603px] my-5 md:my-0">{todo.text}</p>
          {/* Status */}
          <div className="w-[150px] flex items-center md:justify-center">
            <p
              className={`${
                statusColors[todo.status]
              } py-[5px] px-5 rounded-full inline font-poppins text-xs`}
            >
              {todo.status}
            </p>
          </div>
          {/* Action Icons Desktop */}
          <div className="flex w-[46px] justify-between md:static absolute top-[15px] right-[10px] md:right-0 md:top-0">
            <Actions status={todo.status} id={todo.id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
