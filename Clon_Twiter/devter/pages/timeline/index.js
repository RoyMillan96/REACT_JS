import Link from 'next/link'
import Layouts from '../../componentes/Layouts'

export default function Timeline({userName}) {
    return (
        <>
            <Layouts>
                <h1> This is the timelines of {userName}</h1>
                <Link href="/"><a>Go home</a></Link>
            </Layouts>

            <style jsx>{`
                h1 {
                    font-size: 36px;
                    color: red;
                }
            `}
            </style>
            </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
}
