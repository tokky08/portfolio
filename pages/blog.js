import Layout from '../components/layout'
import Seo from '../components/Seo'
import BlogCard from '../components/BlogCard'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../styles/layout.module.scss'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const useStyles = makeStyles((theme) => ({
  typography: {
    margin: theme.spacing(3, 2, 6),
  }
}));

export default function Blog({ allPostsData }) {
  const classes = useStyles();

  return (
    <Layout home>
      <Seo
        title="ブログ | tokky08"
        description="どうも、tokky08です。こちらはtokky08のブログです。普段勉強したことのアウトプットとして技術的な発信をしていけたらと思っています。"
        ogpUrl="https://tokky08.dev/blog"
        ogpType="article"
        ogpTitle="ブログ | tokky08"
        ogpDescription="tokky08のブログです"
      />
      <main className={`${styles.main} ${styles.blog}`}>
        <section>
          <Typography variant="h4" component="h2" className={classes.typography}>
            tokky08のブログ
          </Typography>
          {allPostsData.map(({ id, date, title, body }) => (
            <BlogCard
              id={id}
              date={date}
              title={title}
              body={body}
            />
          ))}
        </section>
      </main>
    </Layout>
  )
}