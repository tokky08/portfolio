import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import styles from '../styles/layout.module.scss'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/images/profile.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tokky08" />
        <meta property="og:site_name" content="tokky08.dev" />
        <meta property="og:image" content={"https://dotup.org/uploda/dotup.org2544407.png"} />
      </Head>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}