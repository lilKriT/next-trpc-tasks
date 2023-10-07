"use client";

import { trpc } from "../_trpc/client";

const TaskList = () => {
  const getTasks = trpc.getTasks.useQuery();

  return (
    <div>
      {getTasks.data?.length ? "yes tasks" : "No tasks"}
      {getTasks.data?.map((task) => (
        <div key={task.id}>
          <p>
            {task.title} is {task.completed ? "Check!" : "Not completed."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
