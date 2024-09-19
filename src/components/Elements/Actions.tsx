import { images } from "../../constants/constants";
import { changeTodoStatus } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
type Props = {
  status: string;
  id: string;
};

const Actions = ({ status, id }: Props) => {
  const dispatch = useDispatch();

  const handleAction = (action: string) => {
    if (action === "Delete") {
      dispatch(
        changeTodoStatus({
          id,
          status: "Deleted",
        })
      );
    }
    if (action === "Active") {
      dispatch(
        changeTodoStatus({
          id,
          status: "Active",
        })
      );
    }
    if (action === "Complete") {
      dispatch(
        changeTodoStatus({
          id,
          status: "Completed",
        })
      );
    }
  };

  if (status === "Deleted") return null;
  if (status === "Completed") {
    return (
      <>
        <img
          src={images.trash}
          className="cursor-pointer"
          onClick={() => handleAction("Delete")}
        />
        <img
          src={images.redCross}
          className="cursor-pointer"
          onClick={() => handleAction("Active")}
        />
      </>
    );
  }

  if (status === "Active") {
    return (
      <>
        <img
          src={images.trash}
          className="cursor-pointer"
          onClick={() => handleAction("Delete")}
        />
        <img
          src={images.greenCheck}
          className="cursor-pointer"
          onClick={() => handleAction("Complete")}
        />
      </>
    );
  }
};

export default Actions;
