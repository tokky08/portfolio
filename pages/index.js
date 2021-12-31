import Layout from '../components/layout'
import Seo from '../components/Seo'
import Profile from '../components/Profile'
import ExternalLinks from '../components/ExternalLinks'
import Experiences from '../components/Experiences'
import styles from '../styles/layout.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Seo
        title="ポートフォリオ | tokky08"
        description="どうも、tokky08です。こちらはtokky08のポートフォリオです。22卒のエンジニアです。趣味でweb開発をしています。"
        ogpUrl="https://tokky08.dev"
        ogpType="website"
        ogpTitle="ポートフォリオ | tokky08"
        ogpDescription="tokky08のポートフォリオです"
        ogpImage="tokky08のサイト"
      />
      <main className={`${styles.main} ${styles.index}`}>
        <Profile />
        <ExternalLinks />
        <Experiences />
      </main>
    </Layout>
  )
}