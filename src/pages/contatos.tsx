import Head from "next/head";
import Link from "next/link";

export default function Contatos() {
  return (
    <>
      <Head>
        <title>Contatos</title>
      </Head>
      <div>
        <h1>Contatos</h1>
        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a href="mailto:social.gabrielgbd@gmail.com">
                social.gabrielgbd@gmail.com
              </a>
            </div>
          </li>
          <li>
            <span>LinkedIn</span>
            <div>
              <a href="https://www.linkedin.com/in/gabrielduarte98/">
                https://www.linkedin.com/in/gabrielduarte98/
              </a>
            </div>
          </li>
          <li>
            <span>GitHub</span>
            <div>
              <a href="https://github.com/gbprg">https://github.com/gbprg</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
