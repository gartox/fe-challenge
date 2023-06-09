
import { CustomTabs } from "@/components/organisms/CustomTabs";
import { useGetPairs } from "@/hooks/useGetPairs";
import styles from '@/styles/PairsDashboard.module.css';
import { getPairs } from "@/utils/getPairs";
import { NextPageContext } from "next";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useRouter } from "next/router";
const inter = Inter({ subsets: ['latin'] })

export default function PairsDashboard() {

  const pairs = useGetPairs();

  const {
    query: { id },
  } = useRouter();


  return (
    <>
      <Head>
        <title>{id}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {pairs && <CustomTabs pairs={pairs} />}
      </main></>
  )
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: NextPageContext) {


  return {
    // Passed to the page component as props
    props: {
    },
  }
}

export async function getStaticPaths() {

  const pairs = await getPairs();

  return {
    paths: pairs.map(pair => ({ params: { id: pair.id } })), //[{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}