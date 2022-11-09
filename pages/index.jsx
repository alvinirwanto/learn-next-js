import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
    return (
        <Layout
            pageTitle='Home'
        >
            <main className={styles.main}>
                <h1>Hallo</h1>
                <Link href='/About'>
                    <button>Next page</button>
                </Link>
            </main>
        </Layout >
    )
}
