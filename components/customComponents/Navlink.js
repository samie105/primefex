"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavLink = ({ href, exact, children, ...props }) => {
  const pathname = usePathname();
  const active = "font-bold opacity-100";
  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

  const linkClassName = isActive
    ? `${props.className} ${active}`
    : props.className;

  return (
    <Link href={href} legacyBehavior>
      <a className={linkClassName}>{children}</a>
    </Link>
  );
};
