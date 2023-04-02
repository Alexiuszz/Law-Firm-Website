import Head from "next/head";
import HomeCarousel from "../components/hero/home-hero/HomeCarousel";
import Layout from "../components/layout/Layout";
import News from "../sections/home/news/News";
import Pract_Areas from "../sections/home/pract-areas/P-A";
import SubHero from "../sections/home/subHero/SubHero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ikwueto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeCarousel />
        <Pract_Areas />
        <SubHero />
        <News />
      </main>
    </Layout>
  );
}
