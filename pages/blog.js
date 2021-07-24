import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Typography from '@material-ui/core/Typography'
import BlogCard from '../components/BlogCard'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../styles/layout.module.scss'

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
      <Head>
        <title>{siteTitle}</title>
      </Head>
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