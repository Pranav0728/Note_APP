"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const NavLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/notes",
      label: "Notes",
    },
  ];
  return (
    <nav className="flex h-20 justify-between items-center text-lg md:text-xl ">
      <h1 className="mx-10">Note App</h1>
      <ul className="flex justify-center items-center mx-10">
        {NavLinks.map((links) => (
          <li
            key={links.href}
            className={`${
              path === links.href ? "text-zinc-600" : "text-zinc-400"
            } mx-2 md:mx-5`}
          >
            <Link href={links.href}>{links.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
