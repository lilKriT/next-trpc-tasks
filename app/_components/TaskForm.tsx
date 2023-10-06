"use client";
import { useForm, SubmitHandler } from "react-hook-form";

const TaskForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("Submitting form");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: "Task Title is required." })} />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
