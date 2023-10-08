import TaskList from "./_components/TaskList";
import TaskForm from "./_components/TaskForm";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-violet-950">Your tasks:</h1>
        <TaskList />
        <TaskForm />
      </div>
    </main>
  );
}
