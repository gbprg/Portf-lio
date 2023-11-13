import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <Link href="/">
          <img src="/teste.jpeg" alt="eu mesmo" />
        </Link>
        <nav>
          <Link href="/">Sobre mim</Link>
          <Link href="/contatos">Contatos</Link>
        </nav>
      </header>
    </>
  );
}
