import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutMission from '../components/AboutMission';
import AboutTeam from '../components/AboutTeam';
import AboutHistory from '../components/AboutHistory';

export const metadata = {
  title: 'আমাদের সম্পর্কে | টাউনশিপ অনলাইন সেবা',
  description: 'টাউনশিপ অনলাইন সেবা সম্পর্কে জানুন। আমাদের লক্ষ্য, উদ্দেশ্য এবং টিম সম্পর্কে বিস্তারিত তথ্য।',
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutHistory />
      <AboutTeam />
      <Footer />
    </main>
  );
}