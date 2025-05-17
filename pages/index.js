import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Cover from '../components/Cover/Cover';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import FeaturedBlogs from '../components/FeaturedBlogs/FeaturedBlogs';
import Webinar from '../components/Webinar/Webinar';
import Testimonials from '../components/Testimonials/Testimonials';
import Highlights from '../components/Highlights/Highlights';
import SkillsCard from '../components/SkillsCard/SkillsCard';
import Community from '../components/Community/Community';
import Recommendations from '../components/Recommendations/Recommendations';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>Sharjeel Yunus - Full Stack Developer</title>
        <meta name="description" content="Sharjeel Yunus - Full Stack Developer specializing in React and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Navbar />

        {/* Hero Section */}
        <Cover />

        {/* Main Content */}
        <div className="flex flex-col">
          {/* About Section with Skills */}
          <div className="relative">
            <About />
            <SkillsCard />
          </div>

          {/* Portfolio Section */}
          <div className="relative">
            <Portfolio />
          </div>

          {/* Experience Section */}
          <div className="relative bg-grid-pattern">
            <Experience />
          </div>

          {/* Community & Blogs Section */}
          <div className="relative">
            <Community />
            <FeaturedBlogs />
          </div>

          {/* Speaking & Highlights */}
          <div className="relative bg-grid-pattern">
            <Webinar />
            <Highlights />
          </div>

          {/* Recommendations & Contact */}
          <div className="relative">
            <Recommendations />
            <Contact />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
