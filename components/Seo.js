import Head from "next/head";
import { useRouter } from "next/router";


const obj = { '/': 'Home', '/about': 'About', '/list/[...params]' :  'Detail'};
export default function Seo() {
    const router = useRouter()
    return (
        <Head>
            <title>{obj[router.pathname]}</title>
        </Head>

    );
}

