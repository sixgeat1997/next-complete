import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">user</Link>
      </div>
      <div>
        <Link href="/admin">admin</Link>
      </div>
    </div>
  );
};

export default Navbar;
