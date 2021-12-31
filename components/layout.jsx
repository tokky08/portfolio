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
        <meta property="og:image" content="https://res.cloudinary.com/dq0hxcd37/image/upload/l_text:Sawarabi%20Gothic_50_bold:tokky08のポートフォリオ,co_rgb:333,w_500,c_fit/v1640957494/ogp_tokky08_pfsnkl.png" />
      </Head>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}