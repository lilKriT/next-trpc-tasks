import Link from "next/link";
import TaskCounter from "./TaskCounter";
import { serverClient } from "../_trpc/serverClient";

const Header = async () => {
  const tasksCount = await serverClient.getTasksCount();

  return (
    <header
      className="sticky top-0 bg-slate-200 flex justify-center items-center border-b border-violet-600 shadow-[0_3px_25px_3px] 
    shadow-violet-600/30"
    >
      <nav className="container grid grid-cols-3 mt-4 mb-2">
        <Link href={"/"} className="logo">
          Logo
        </Link>
        <div className="justify-self-center">
          <TaskCounter initialTaskCount={tasksCount} />
        </div>
        <menu className="flex gap-4 justify-self-end">
          <li>
            <Link href={"/"} className="navLink">
              Link
            </Link>
          </li>
          <li>
            <Link href={"/"} className="navLink">
              Link
            </Link>
          </li>
          <li>
            <Link href={"/"} className="navLink">
              Link
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
