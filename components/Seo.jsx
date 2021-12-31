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
        <meta property="og:image" content={`https://res.cloudinary.com/dq0hxcd37/image/upload/l_text:Sawarabi%20Gothic_50_bold:${props.ogpImage},co_rgb:333,w_500,c_fit/v1640957494/ogp_tokky08_pfsnkl.png`} />
    </Head>
  )
}