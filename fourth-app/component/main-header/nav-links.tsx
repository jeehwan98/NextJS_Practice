'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from './nav-links.module.css';


interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLinks({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? 'active' : undefined}
    >
      {children}
    </Link>
  )
}