export default function Layouts ({children}) {
    return (
        <>
            <main>
                {children}
            </main>

            <style jsx global>{`
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
        </>
    )
}