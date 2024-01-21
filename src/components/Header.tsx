import { NavHashLink } from 'react-router-hash-link';
import MaxWidthWrapper from './MaxWidthWrapper';

const Header = () => {
  return (
    <nav className=' fixed top-0 left-0 z-50 py-5 w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      <MaxWidthWrapper className='flex justify-between items-center flex-col md:flex-row gap-3'>
        <NavHashLink to={'/#hero'} smooth>
          <h1 className='text-2xl font-semibold'>Séry Vathana</h1>
        </NavHashLink>

        <ul className='flex items-center gap-5 sm:gap-10 font-semibold text-muted-foreground text-sm md:text-md lg:text-[16px]'>
          <li>
            <NavHashLink to={'/#hero'} smooth>
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to={'/#about'} smooth>
              About me
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to={'/#projects'} smooth>
              Projects
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to={'/#contact'} smooth>
              Contact
            </NavHashLink>
          </li>
        </ul>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
