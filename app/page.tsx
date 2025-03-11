import Header from './components/Header';
import Hero from './components/Hero';
import RunningNotice from './components/RunningNotice';
import About from './components/About';
import Partners from './components/Partners';
import VolunteerButton from './components/VolunteerButton';
import Testimonials from './components/Testimonials';
import MediaCoverage from './components/MediaCoverage';
import Districts from './components/Districts';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <RunningNotice />
      <About />
      <Partners />
      <VolunteerButton />
      <Testimonials />
      <MediaCoverage />
      <Districts />
      <Footer />
    </main>
  );
}
