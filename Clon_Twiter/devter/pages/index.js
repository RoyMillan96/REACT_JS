import Head from 'next/head'
import styles from '../styles/Home.module.css'
// no recarga la pagina solo carga lo necesario
import Link from 'next/link'
import Layouts from '../componentes/Layouts'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Devter Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layouts>
        <h1>
          <a href="https://nextjs.org">Devter!</a>
        </h1>
        <nav>
        <Link href="/timeline">
          <a>Timeline</a>
        </Link>
        </nav>
      </Layouts>

      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 48px;
        }

        nav {
          font-size: 24px;
          text-align: center;
        }

        a {
          color: #09f;
          text-decoration: none;
        }
      `}

      </style>
    </div>
  )
}
