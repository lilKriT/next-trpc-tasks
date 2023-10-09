import { serverClient } from "./_trpc/serverClient";
import TaskList from "./_components/TaskList";
import TaskForm from "./_components/TaskForm";

export default async function Home() {
  const tasks = await serverClient.getTasks();

  return (
    <main className="min-h-screen flex justify-center">
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-violet-950">Your tasks:</h1>
        <TaskList initialTasks={tasks} />
        <TaskForm />
      </div>
    </main>
  );
}
