import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <main>
        <div>
          <h1>Prazer, sou &nbsp;</h1>
          <span>Gabriel Duarte</span>
          <div>
            <h2>
              Sou um Desenvolvedor Front-end que gosta de transformar ideias em
              realidade através dos meus códigos!.
            </h2>
            <Link href="/contatos">Converse comigo!</Link>
          </div>
          <ul>
            <li style={{ backgroundColor: "#EFD81D", color: "#000" }}>
              javascript
            </li>
            <li style={{ backgroundColor: "#2F74C0", color: "#FFF" }}>
              typescript
            </li>
            <li style={{ backgroundColor: "#6BDDFA", color: "#000" }}>react</li>
            <li style={{ backgroundColor: "#000", color: "#FFF" }}>next.js</li>
          </ul>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/105727647?v=4"
            alt="Foto de perfil de Gabriel Duarte"
          />
          <p>
            <span>1+</span>
            <br />
            ano de experiência
          </p>
        </div>
      </main>
    </>
  );
}
