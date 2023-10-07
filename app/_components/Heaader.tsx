import Link from "next/link";

const Heaader = () => {
  return (
    <header
      className="sticky top-0 flex justify-center items-center border-b border-violet-600 shadow-[0_3px_25px_3px] 
    shadow-violet-600/30"
    >
      <nav className="container flex justify-between mt-4 mb-2">
        <Link href={"/"} className="logo">
          Logo
        </Link>
        <menu className="flex gap-4">
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

export default Heaader;
