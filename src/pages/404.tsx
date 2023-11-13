import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | Gabriel</title>
      </Head>
      <div>
        <h1>404</h1>
        <div>
          <p>Ops, não conseguimos encontrar essa página!</p>
          <span>
            Clique no botão abaixo para ser redirecionado para à Página Inicial
          </span>
        </div>
        <Link href="/">Ir para a Página Incial</Link>
      </div>
    </>
  );
}
