import Link from "next/link";

const Header = () => {
  return (
    <header
      className="sticky top-0 bg-slate-200 flex justify-center items-center border-b border-violet-600 shadow-[0_3px_25px_3px] 
    shadow-violet-600/30"
    >
      <nav className="container grid grid-cols-3 mt-4 mb-2">
        <Link href={"/"} className="logo">
          Logo
        </Link>
        <div className="justify-self-center">Task Counter.</div>
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
