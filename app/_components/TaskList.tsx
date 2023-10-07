"use client";

import { trpc } from "../_trpc/client";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const getTasks = trpc.getTasks.useQuery();

  const utils = trpc.useContext();

  return (
    <div className="flex flex-col gap-2 mt-4">
      {getTasks.data?.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};

export default TaskList;
