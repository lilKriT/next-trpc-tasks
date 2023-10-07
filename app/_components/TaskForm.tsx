"use client";
import { useForm, FieldValues } from "react-hook-form";

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("Submitting form", data);
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
