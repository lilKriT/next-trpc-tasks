import { AppRouter } from "@/server";
import { inferRouterOutputs } from "@trpc/server";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import { trpc } from "../_trpc/client";

type RouterOutput = inferRouterOutputs<AppRouter>;

const TaskCard = ({ task }: { task: RouterOutput["getTasks"][number] }) => {
  const context = trpc.useContext();

  const deleteTask = trpc.deleteTask.useMutation({
    onSettled: () => {
      context.getTasks.refetch();
    },
  });

  return (
    <div className="taskCard">
      <h2>{task.title}</h2>
      {/* Buttons */}
      <div>
        <button
          className="btn btn--danger btn--small"
          onClick={() => deleteTask.mutate(task.id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
