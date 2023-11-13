import Head from "next/head";
import AboutMe from "../components/Home/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>sobre mim | Gabriel</title>
        <meta
          name="description"
          content="Sou um Desenvolvedor Front-end que gosta de transformar ideias em
          realidade através dos meus códigos!."
        />
      </Head>
      <div>
        <AboutMe />
      </div>
    </>
  );
}
