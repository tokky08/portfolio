import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Profile from '../components/Profile'
import ExternalLinks from '../components/ExternalLinks'
import Experiences from '../components/Experiences'

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Profile />
      <ExternalLinks />
      <Experiences />
    </Layout>
  )
}