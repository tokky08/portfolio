import Layout from '../../components/layout'
import Seo from '../../components/Seo'
// import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from '../../styles/layout.module.scss'
import { client } from '../../lib/client'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css'

export default function Post({ postData, highlightedBody }) {
  return (
    <Layout>
      <Seo
        title={`${postData.title} | tokky08のブログ`}
        description={`どうも、tokky08です。こちらはtokky08のブログです。今回は、${postData.title}について書きました。`}
        ogpUrl={`https://tokky08.dev/blog/${postData.id}`}
        ogpType="article"
        ogpTitle={`${postData.title} | tokky08のブログ`}
        ogpDescription={`tokky08のブログです。今回は、${postData.title}について書きました。`}
        ogpImage={postData.title}
      />
      <main className={`${styles.main} ${styles.blog}`}>
        <article>
            <h1>{postData.title}</h1>
            <div>
              {/* {postData.date} */}
              {postData.createdAt.slice(0, 10)}
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: `${postData.body}` }} /> */}
            <div dangerouslySetInnerHTML={{ __html: `${highlightedBody}` }} />
        </article>
      </main>
    </Layout>
  )
}


// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const postData = await client.get({ endpoint: "blog", contentId: id });

  const $ = cheerio.load(postData.body)

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })


  return {
    props: {
      postData,
      highlightedBody:$.html()
    },
  };
};