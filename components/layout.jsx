import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import styles from '../styles/layout.module.scss'

export const siteTitle = 'tokky08'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.png" />
        <meta
          name="description"
          content="どうも、tokky08です。こちらはtokky08のポートフォリオです。外部リンクを合わせてこのサイトを見れば私の全てが分かります。"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        {/* <meta property="og:image" content={"/images/profile.png"} />
        <meta name="og:title" content={"tokky08 | ポートフォリオ"} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tokky08" /> */}
        <meta name="keywords" content="ポートフォリオ,エンジニア,tokky08,とっきー," />

        <meta property="og:url" content="https://tokky08.dev"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="tokky08 | ポートフォリオ" />
        <meta property="og:description" content="tokky08のポートフォリオです" />
        <meta property="og:site_name" content="tokky08.dev" />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1343388061653106689/G7r2wNV8_400x400.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tokky08" />
      </Head>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}