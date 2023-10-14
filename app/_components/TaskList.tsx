"use client";

import { Task } from "@prisma/client";
import { trpc } from "../_trpc/client";
import { serverClient } from "../_trpc/serverClient";
import TaskCard from "./TaskCard";

const TaskList = ({
  initialTasks,
}: {
  initialTasks: Awaited<ReturnType<(typeof serverClient)["getTasks"]>>;
}) => {
  const getTasks = trpc.getTasks.useQuery(undefined, {
    initialData: initialTasks,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <div className="flex flex-col gap-2 mt-4">
      {!!getTasks.data?.length ? (
        getTasks.data?.map((task: Task) => (
          <TaskCard task={task} key={task.id} />
        ))
      ) : (
        <p>No tasks yet.</p>
      )}
    </div>
  );
};

export default TaskList;
