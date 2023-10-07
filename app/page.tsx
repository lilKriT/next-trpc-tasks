import TaskList from "./_components/TaskList";
import TaskForm from "./_components/TaskForm";

export default function Home() {
  return (
    <main className="">
      <h1>tRPC Tasks.</h1>
      <TaskList />
      <TaskForm />
    </main>
  );
}
