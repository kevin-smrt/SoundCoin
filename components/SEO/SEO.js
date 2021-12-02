import Head from 'next/head';
import metaItems from './seo.data';

export default function SEO(props) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            {metaItems.map((metaItem, index) => (
                <meta key={index} name={metaItem.name} content={metaItem.content} />
            ))}
            <title>{props.title}</title>
        </Head>
    )
}