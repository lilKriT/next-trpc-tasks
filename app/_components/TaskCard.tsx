import { AppRouter } from "@/server";
import { inferRouterOutputs } from "@trpc/server";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import { trpc } from "../_trpc/client";
import { useState } from "react";

type RouterOutput = inferRouterOutputs<AppRouter>;

const TaskCard = ({ task }: { task: RouterOutput["getTasks"][number] }) => {
  const [taskEditing, setTaskEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const context = trpc.useContext();

  const updateTask = trpc.editTask.useMutation({
    onSettled: () => {
      context.getTasks.refetch();
    },
  });

  const deleteTask = trpc.deleteTask.useMutation({
    onSettled: () => {
      context.getTasks.refetch();
      context.getTasksCount.refetch();
    },
  });

  return (
    <div className="taskCard">
      {/* Title / edit */}
      {!taskEditing ? (
        <h2 className={`${task.completed && "line-through"}`}>{task.title}</h2>
      ) : (
        <input
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.currentTarget.value)}
          className="formInput"
          autoFocus
        />
      )}
      {/* Buttons */}
      <div className="flex gap-2">
        {!taskEditing ? (
          <>
            <input
              type="checkbox"
              className="checkBox"
              checked={task.completed}
              readOnly
              onClick={(e) => {
                updateTask.mutate({
                  id: task.id,
                  task: {
                    completed: e.currentTarget.checked,
                  },
                });
              }}
            />
            <button
              className="btn btn--primary btn--small"
              onClick={() => {
                setTaskTitle(task.title);
                setTaskEditing(true);
              }}
            >
              <AiFillEdit />
            </button>
            <button
              className="btn btn--danger btn--small"
              onClick={() => deleteTask.mutate(task.id)}
            >
              <AiFillDelete />
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn--success btn--small"
              onClick={(e) => {
                updateTask.mutate({ id: task.id, task: { title: taskTitle } });
                setTaskEditing(false);
              }}
            >
              <AiOutlineCheck />
            </button>
            <button
              className="btn btn--danger btn--small"
              onClick={() => setTaskEditing(false)}
            >
              <AiOutlineClose />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
