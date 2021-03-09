import Head from 'next/head'
import { useRouter } from "next/router";

export default function Game() {
    // Rutas dimanicas
    const router = useRouter()
    const { platform, game } = router.query

    return (
        <div>
            <Head>
                <title>{game} | {platform}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1> estamos en el path: {platform}</h1>
            <h2> en el juego: {game}</h2>
        </div>
    );
}