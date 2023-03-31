import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import { StyledLayout } from "./Layout.styles";

export default function Layout({ children, siteTitle }) {
  return (
    <StyledLayout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content="Law Firm" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
}
