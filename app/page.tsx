import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Documents from '@/components/Documents';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="bg-gradient-to-b from-transparent via-[rgba(46,246,46,0.02)] to-transparent">
        <Hero />
        <Services />
        <Team />
        <Documents />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}