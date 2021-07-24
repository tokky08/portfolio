import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import styles from '../../styles/layout.module.scss'

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
      </Head>
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