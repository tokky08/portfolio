import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import OutlinedCard from '../components/OutlinedCard'
import CustomizedTimeline from '../components/CustomizedTimeline'
import BasicTimeline from '../components/BasicTimeline'
import FolderList from '../components/FolderList';

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <OutlinedCard />
      <FolderList />
      <BasicTimeline />
    </Layout>
  )
}