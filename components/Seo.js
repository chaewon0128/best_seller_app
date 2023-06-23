import Head from "next/head";
import { useRouter } from "next/router";


const obj = { '/': 'Home', '/about': 'About', '/list/[...params]' :  'Detail'};
export default function Seo() {
    const router = useRouter()
    console.log(router)
    return (
        <Head>
            <title>{obj[router.pathname]}</title>
        </Head>

    );
}

