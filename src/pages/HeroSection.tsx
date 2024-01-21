import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import TypeWritingAnimation from '@/components/TypeWritingAnimation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BiLogoMongodb } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoIosArrowRoundForward, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiExpress, SiPython, SiTypescript } from 'react-icons/si';
import { Link } from 'react-router-dom';

import { Variants, motion } from 'framer-motion';
import { BsDiscord, BsGithub, BsTelegram } from 'react-icons/bs';

import myCV from '../assets/Seryvathana_CV.pdf';

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};

const iconStyle = 'text-3xl text-gray-700 hover:text-gray-800';

const Links = [
  {
    name: 'github',
    href: 'https://github.com/SeryVathana',
    icon: <BsGithub className={iconStyle} />,
  },
  {
    name: 'telegram',
    href: 'https://t.me/seryvathana',
    icon: <BsTelegram className={iconStyle} />,
  },
  {
    name: 'discord',
    href: 'https://discordapp.com/users/810084063171313695',
    icon: <BsDiscord className={iconStyle} />,
  },
];

const iconSize = 'text-xl sm:text-2xl md:text-3xl lg:text-5xl';

const HeroSection = () => {
  return (
    <section id='hero'>
      <MaxWidthWrapper className='min-h-[100vh] flex items-center justify-center relative'>
        <div className='area absolute w-full h-full left-0 bottom-0 -z-1'>
          <ul className='circles filter blur-[2px] sm:blur-[3px] '>
            <li>
              <SiTypescript className={cn(iconSize, 'lg:w-52 text-blue-500')} />
            </li>
            <li>
              <IoLogoNodejs className={cn(iconSize, ' text-green-800')} />
            </li>
            <li>
              <FaReact className={cn(iconSize, ' text-sky-600')} />
            </li>
            <li>
              <SiExpress className={cn(iconSize, '')} />
            </li>
            <li>
              <IoLogoJavascript className={cn(iconSize, ' text-yellow-400')} />
            </li>
            <li>
              <SiPython className={cn(iconSize, ' text-blue-500')} />
            </li>
            <li>
              <BiLogoMongodb className={cn(iconSize, ' text-green-700')} />
            </li>
            <li>
              <GrMysql className={cn(iconSize, ' text-blue-600')} />
            </li>
            <li>{/* <SiNestjs className={cn(iconSize,' text-red-500' /> */}</li>
            <li>
              <IoLogoFirebase className={cn(iconSize, ' text-yellow-500')} />
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-end text-center z-10 mt-32 md:mt-0'>
          <div className='space-y-5'>
            <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' className='space-y-5'>
              <h2 className='text-xl sm:text-2xl  md:text-3xl font-semibold'>Hi,</h2>
              <h1 className=' text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col md:flex-row items-center justify-center'>
                <span>I&apos;m </span>
                <span>
                  <span className='text-green-600'>&nbsp;&lt;</span>
                  <TypeWritingAnimation text={['Sery Vathana', 2000, 'Web Developer', 2000]} />
                  <span className='text-green-600'>/&gt;</span>
                </span>
              </h1>
              <h2 className='text-sm sm:text-md md:text-lg lg:text-2xl font-semibold uppercase'>IT Engineering Student</h2>
            </motion.div>
            <div className='flex gap-5 justify-center py-5 flex-wrap-reverse'>
              <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
                <Button variant='outline' asChild>
                  <a href={myCV} target='_blank' className='text-xs sm:text-sm'>
                    <span>Check my CV</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
                <Button asChild>
                  <Link to={'/projects'} className='text-xs sm:text-sm'>
                    Check My Latest Works <IoIosArrowRoundForward className='text-lg ml-2' />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className='py-10 flex justify-center gap-10'>
              {Links.map((link) => {
                return (
                  <a href={link.href} target='_blank' key={link.name}>
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
