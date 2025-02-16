"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavbarLinks = () => {
  const links: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Cart", href: "/cart" },
    { name: "Register", href: "/register" },
  ];
  const pathname = usePathname();
  return (
    <div>
      <ul className="hidden sm:flex gap-4 ">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className={`${pathname === link.href && "text-hero-500"} ${
                link.name === "Register" &&
                "bg-hero-500 text-white hover:bg-hero-700 duration-300 px-2 py-1 rounded-md"
              } duration-300 `}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLinks;
