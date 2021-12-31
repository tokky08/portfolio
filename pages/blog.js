import { useState } from "react"
import Layout from '../components/layout'
import Seo from '../components/Seo'
import BlogCard from '../components/BlogCard'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../styles/layout.module.scss'
// import { getSortedPostsData } from '../lib/posts'
import { client } from '../lib/client'
import TagSelect from '../components/TagSelect'
import Box from '@material-ui/core/Box'

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data)
  const allPostsData = data.contents

  return {
    props: {
      allPostsData
    },
  };
};

const useStyles = makeStyles((theme) => ({
  typography: {
    margin: theme.spacing(3, 2, 6),
  }
}));

export default function Blog({ allPostsData }) {
  const classes = useStyles();
  const [tagSelect, setTag] = useState("ALL")

  return (
    <Layout home>
      <Seo
        title="ブログ | tokky08"
        description="どうも、tokky08です。こちらはtokky08のブログです。普段勉強したことのアウトプットとして技術的な発信をしていけたらと思っています。"
        ogpUrl="https://tokky08.dev/blog"
        ogpType="article"
        ogpTitle="ブログ | tokky08"
        ogpDescription="tokky08のブログです"
        ogpImage="tokky08のblog"
      />
      <main className={`${styles.main} ${styles.blog}`}>
        <section>
          <Box display="flex" justifyContent="space-between" className={classes.typography}>
            <h2>tokky08のブログ</h2>
            <TagSelect setTag={setTag} tag={tagSelect} />
          </Box>
          {tagSelect == "ALL" ?
            allPostsData.map(({ id, createdAt, title, body, tag }) => (
              <BlogCard
                id={id}
                date={createdAt.slice(0, 10)}
                title={title}
                body={body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').slice(0, 100) + "..."}
                tag={tag}
              />
            )) :
            allPostsData.map(({ id, createdAt, title, body, tag }) => (
              tag == tagSelect &&
              <BlogCard
                id={id}
                date={createdAt.slice(0, 10)}
                title={title}
                body={body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').slice(0, 100) + "..."}
                tag={tag}
              />
            ))
          }
        </section>
      </main>
    </Layout>
  )
}