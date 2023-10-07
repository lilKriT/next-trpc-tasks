import { AppRouter } from "@/server";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

const TaskCard = ({ task }: { task: RouterOutput["getTasks"][number] }) => {
  return (
    <div className="taskCard">
      <h2>{task.title}</h2>
    </div>
  );
};

export default TaskCard;
