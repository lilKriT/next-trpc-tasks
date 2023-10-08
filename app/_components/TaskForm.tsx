"use client";
import { useForm, FieldValues } from "react-hook-form";
import { trpc } from "../_trpc/client";

import { BsFillSendFill } from "react-icons/bs";

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const context = trpc.useContext();

  const addTask = trpc.createTask.useMutation({
    onSettled: () => {
      context.getTasks.refetch();
      reset();
    },
  });

  const onSubmit = async (data: FieldValues) => {
    console.log("Submitting form", data);

    // Throttling
    const throttle = false;
    if (throttle) await new Promise((resolve) => setTimeout(resolve, 3000));

    addTask.mutate(data.title);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form flex gap-2 mt-4">
      <input
        {...register("title", { required: "Task Title is required." })}
        className="formInput grow"
        placeholder="I want to..."
        autoFocus
      />
      {errors.title && <p>{`${errors.title.message}`}</p>}
      <button className="btn btn--primary w-12" disabled={isSubmitting}>
        <BsFillSendFill />
      </button>
    </form>
  );
};

export default TaskForm;
