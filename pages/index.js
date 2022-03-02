import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Cover from "../components/Cover/Cover";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import FeaturedBlogs from "../components/FeaturedBlogs/FeaturedBlogs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharjeel Yunus | Portfolio</title>
        <meta name="description" content="Sharjeel Yunus | React / NextJS Dev | Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Cover />
      <About />
      <Portfolio />
      <FeaturedBlogs />
      <Contact />
      <Footer />
    </>
  );
}
