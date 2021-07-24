import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Typography from '@material-ui/core/Typography'
import MiddleDividers from '../components/MiddleDividers'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Typography variant="h5" component="h2">
          tokky08のブログ
        </Typography>
        {allPostsData.map(({ id, date, title }) => (
          <MiddleDividers
            id={id}
            date={date}
            title={title}
          />
        ))}
      </section>
    </Layout>
  )
}