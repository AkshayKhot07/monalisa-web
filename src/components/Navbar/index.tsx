import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-white py-2 font-bold bg-black px-5">
      <div className="container">
        <Link href={"/"}>
          <h1>
            <span className="text-4xl">M</span>
            <span className="text-2xl">onalisa</span>
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
