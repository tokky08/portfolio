import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Profile from '../components/Profile'
import ExternalLinks from '../components/ExternalLinks'
import Experiences from '../components/Experiences'
import styles from '../styles/layout.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className={`${styles.main} ${styles.index}`}>
        <Profile />
        <ExternalLinks />
        <Experiences />
      </main>
    </Layout>
  )
}