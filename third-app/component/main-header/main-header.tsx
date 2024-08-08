import Link from "next/link";
import NavLinks from "./nav-links";
import { usePathname } from "next/navigation";

export default function MainHeader() {

  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLinks href="/news">News</NavLinks>
          </li>
          <li>
            <NavLinks href="/archive">Archive</NavLinks>
          </li>
        </ul>
      </nav>
    </header>
  )
}