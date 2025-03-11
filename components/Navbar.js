import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/bot/terms">Terms</Link>
      <Link href="/bot/privacy-policy">Privacy Policy</Link>
    </nav>
  );
}
