import Layout from '../../components/layout'
import Seo from '../../components/Seo'
import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from '../../styles/layout.module.scss'

export default function Post({ postData }) {
  return (
    <Layout>
      <Seo
        title={`${postData.title} | tokky08のブログ`}
        description={`どうも、tokky08です。こちらはtokky08のブログです。今回は、${postData.title}について書きました。`}
        ogpUrl={`https://tokky08.dev/blog/${postData.id}`}
        ogpType="article"
        ogpTitle={`${postData.title} | tokky08のブログ`}
        ogpDescription={`tokky08のブログです。今回は、${postData.title}について書きました。`}
      />
      <main className={`${styles.main} ${styles.blog}`}>
        <article>
            <h1>{postData.title}</h1>
            <div>
              {postData.date}
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
    </Layout>
  )
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}