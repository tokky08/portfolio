import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Typography from '@material-ui/core/Typography'
import MiddleDividers from '../components/MiddleDividers'
import { makeStyles } from '@material-ui/core/styles'

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
    margin: theme.spacing(3, 2),
  }
}));

export default function Blog({ allPostsData }) {
  console.log(allPostsData)
  const classes = useStyles();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Typography variant="h5" component="h2" className={classes.typography}>
          tokky08のブログ
        </Typography>
        {allPostsData.map(({ id, date, title, body }) => (
          <MiddleDividers
            id={id}
            date={date}
            title={title}
            body={body}
          />
        ))}
      </section>
    </Layout>
  )
}