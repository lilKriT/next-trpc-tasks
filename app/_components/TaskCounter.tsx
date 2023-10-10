"use client";

import { trpc } from "../_trpc/client";

const TaskCounter = ({ initialTaskCount }: { initialTaskCount: number }) => {
  const getTasksCount = trpc.getTasksCount.useQuery(undefined, {
    initialData: initialTaskCount,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return (
    <div>
      {!!getTasksCount.data ? (
        <p>You have {getTasksCount.data} tasks.</p>
      ) : (
        <p>You don't have any tasks yet.</p>
      )}
    </div>
  );
};

export default TaskCounter;
