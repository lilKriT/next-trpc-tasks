"use client";
import { useForm, FieldValues } from "react-hook-form";
import { trpc } from "../_trpc/client";

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
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Submitting form", data);
    addTask.mutate(data.title);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form flex gap-2 mt-4">
      <input
        {...register("title", { required: "Task Title is required." })}
        className="formInput grow"
        placeholder="I want to..."
      />
      {errors.title && <p>{`${errors.title.message}`}</p>}
      <button className="btn btn--primary">Add</button>
    </form>
  );
};

export default TaskForm;
