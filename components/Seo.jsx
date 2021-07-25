import Head from 'next/head'

export default function Seo(props) {
  return (
    <Head>
        <title>{props.title}</title>
        <meta
            name="description"
            content={props.description}
        />
        <meta property="og:url" content={props.ogpUrl} />
        <meta property="og:type" content={props.ogpType} />
        <meta property="og:title" content={props.ogpTitle} />
        <meta property="og:description" content={props.ogpDescription} />
    </Head>
  )
}