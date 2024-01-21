import '@/Styles/FloatingIcons.css';
import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';
import AboutSection from './AboutSection';
import Footer from '@/components/Footer';
import ContactSection from './ContactSection';
import { Button } from '@/components/ui/button';
import { ArrowUpIcon } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const itemOffset = 200;
      const scrollTop = window.scrollY;

      if (scrollTop >= itemOffset) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative'>
      {!isTop ? (
        <>
          <Button className='fixed bottom-5 md:bottom-10 right-5 md:right-10 z-50' variant={'outline'} asChild>
            <HashLink to={'/#hero'} smooth>
              <ArrowUpIcon />
            </HashLink>
          </Button>
        </>
      ) : null}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
