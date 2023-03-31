import Head from "next/head";
import HomeCarousel from "../components/hero/home-hero/HomeCarousel";
import Layout from "../components/layout/Layout";
import Pract_Areas from "../sections/home/pract-areas/P-A";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ikwueto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeCarousel/>
       <Pract_Areas />
      </main>
    </Layout>
  );
}
