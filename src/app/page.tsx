import Navbar from './containers/navbar';
import Hero from './containers/hero';
import Skills from './containers/skills'
import Projects from './containers/projects';
import Models from './containers/models';
import Contact from './containers/contact';
import Footer from './containers/footer';

const commonStyles = 'w-full flex flex-col items-center';

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className={`${commonStyles} flex-grow mt-12`}>
        <Hero />
        <main className={`${commonStyles} bg-primary`}>
          <Skills />
          <Projects />
          <Models />
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  );
}
