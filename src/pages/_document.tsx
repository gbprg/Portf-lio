import { Html, Main, NextScript } from "next/document";
import Link from "next/link";
import Head from "next/head";

//
export default function Document() {
  return (
    <>
      <Html lang="pt-br">
        <Head>
          <Link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
