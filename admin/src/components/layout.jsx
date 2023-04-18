import Head from "next/head"

import Header from "./global/header"
import Menu from "./global/menu"

export function Layout({children}){
    return(<>
        <Head>
            <title>Магазин кроссовок</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Menu />
        <main className="ml-60 min-h-screen px-6 py-8">
            {children}
        </main>
    </>)
}