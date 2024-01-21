import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { ReactNode } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord, FaInstagram, FaLinkedinIn, FaSquareFacebook } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type SocialLinkType = {
  name: string;
  href: string;
  icon: ReactNode;
};

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};

const iconStyle = ' text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 hover:text-gray-500 transition-all';

const SocialLinks: SocialLinkType[] = [
  {
    name: 'Email',
    href: '/',

    icon: <Mail className={cn(iconStyle, 'w-[1.6rem] sm:w-[2rem] md:w-[2.5rem] lg:w-[50px] h-full')} />,
  },
  {
    name: 'Facebook',
    href: '/',
    icon: <FaSquareFacebook className={iconStyle} />,
  },
  {
    name: 'Telegram',
    href: '/',
    icon: <FaTelegramPlane className={iconStyle} />,
  },
  {
    name: 'Instagram',
    href: '/',
    icon: <FaInstagram className={iconStyle} />,
  },
  {
    name: 'LinkedIn',
    href: '/',
    icon: <FaLinkedinIn className={iconStyle} />,
  },
  {
    name: 'Discord',
    href: '/',
    icon: <FaDiscord className={iconStyle} />,
  },
];

const ContactSection = () => {
  return (
    <section id='contact'>
      <MaxWidthWrapper className='py-20 md:py-32 flex flex-col justify-center items-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl  font-semibold text-center'>Contact Me</h1>
        <p className='text-sm sm:text-md md:text-lg my-5 text-muted-foreground text-center'>
          You may contact me by these social platforms.
        </p>

        <div className='my-20 flex gap-12 md:gap-14 lg:gap-16 flex-wrap justify-center items-center'>
          {SocialLinks.map((link) => {
            return (
              <motion.li
                key={link.name}
                className=' list-none'
                variants={cardVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
              >
                <Link to={link.href}>{link.icon}</Link>
              </motion.li>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactSection;
