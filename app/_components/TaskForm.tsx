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

  const addTask = trpc.createTask.useMutation();

  const onSubmit = (data: FieldValues) => {
    console.log("Submitting form", data);
    addTask.mutate(data.title);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: "Task Title is required." })} />
      {errors.title && <p>{`${errors.title.message}`}</p>}
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
