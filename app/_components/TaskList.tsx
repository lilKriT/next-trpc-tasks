"use client";

import { trpc } from "../_trpc/client";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const getTasks = trpc.getTasks.useQuery();

  return (
    <div className="flex flex-col gap-2 mt-4">
      {!!getTasks.data?.length ? (
        getTasks.data?.map((task) => <TaskCard task={task} key={task.id} />)
      ) : (
        <p>No tasks yet.</p>
      )}
    </div>
  );
};

export default TaskList;
