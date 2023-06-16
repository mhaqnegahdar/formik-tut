"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Initial Form", href: "/" },
  { label: "New Form", href: "/newform" },
  { label: "Reusable Form", href: "/reusableform" },
];
const Header = () => {
  const pathname = usePathname();

  return (
    <header className=" mx-auto">
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-gray-800 dark:text-gray-200 border-b-2 ${
                pathname == href ? " border-blue-500" : "border-transparent"
              } mx-1.5 sm:mx-6`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
