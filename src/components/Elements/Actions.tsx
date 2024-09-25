import { images } from "../../constants/constants";
import { changeTodoStatus } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

export type TStatus = "Deleted" | "Active" | "Completed";

// export type TTodoActions = "Delete" | "Activate" | "Complete";

interface Props {
  status: TStatus;
  id: string;
}

// ActionButtons | ActionsIcons
const Actions = ({ status, id }: Props) => {
  // if (status === "Deleted") return null; // not acceptable in react

  const dispatch = useDispatch();

  const handleAction = (status: TStatus) => {
    dispatch(changeTodoStatus({ id, status }));
  };

  if (status === "Deleted") return null;

  return (
    <>
      <img
        src={images.trash}
        className="cursor-pointer"
        onClick={() => handleAction("Deleted")}
      />
      <img
        src={images[status === "Completed" ? "redCross" : "greenCheck"]}
        className="cursor-pointer"
        onClick={() =>
          handleAction(status === "Completed" ? "Active" : "Completed")
        }
      />
    </>
  );
};

export default Actions;
