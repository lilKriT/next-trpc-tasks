"use client";

import { trpc } from "../_trpc/client";

const TaskList = () => {
  const getTasks = trpc.getTasks.useQuery();

  return <div>{getTasks.data?.length ? "yes tasks" : "No tasks"}</div>;
};

export default TaskList;
