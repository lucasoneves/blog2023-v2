import Link from "next/link";

export default function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/contact">contact me</Link>
        </li>
      </ul>
    </nav>
  );
}
