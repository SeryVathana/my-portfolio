import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { GoArrowRight } from 'react-icons/go';
import { RiAuctionLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

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

const ProjectSection = () => {
  return (
    <section id='projects'>
      <MaxWidthWrapper className='py-20 md:py-32 flex justify-center flex-col items-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl  font-semibold text-center'>Projects</h1>
        <div className='flex flex-wrap w-full gap-20 lg:gap-10 xl:gap-5 mt-10 md:mt-20 mb-20 justify-center xl:justify-between'>
          <motion.div
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true }}
            className='min-w-[300px] sm:min-w-[350px] min:h-[500px] rounded-xl overflow-hidden border-0'
          >
            <AspectRatio ratio={1 / 1} className='h-auto flex items-center justify-center bg-gradient-to-b from-gray-100'>
              {/* <img src={"https://images.pexels.com/photos/2167039/pexels-photo-2167039.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"} alt="Image" className="rounded-md h-full object-cover" /> */}
              <RiAuctionLine className='text-7xl sm:text-8xl lg:text-9xl text-gray-800 hover:text-[9rem] transition-all ease-in-out duration-200 cursor-pointer' />
            </AspectRatio>

            <div className='px-5'>
              <h6 className='text-sm md:text-lg'>27 - December - 2023</h6>
              <Link to={'/'} className='transition-all group ease-in-out duration-200 cursor-pointer w-fit'>
                <h1 className='text-xl lg:text-2xl font-semibold mt-3 md:mt-5 group-hover:underline'>Online Auction Site</h1>
              </Link>
            </div>
          </motion.div>
        </div>

        <Button className=' px-10' variant={'default'} asChild>
          <Link to='/projects' className='text-xs sm:text-sm'>
            See more <GoArrowRight className='ml-2' />
          </Link>
        </Button>

        <div className='flex gap-2 items-end mt-10'>
          <p className='text-sm'>Inspired from: </p>
          <a
            href='https://kettanaito.com/'
            target='_blank'
            className='text-md text-blue-900 underline font-semibold flex items-center gap-2 group  transition-all ease-in-out duration-100'
          >
            Kettanaito <GoArrowRight className='opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-100' />
          </a>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProjectSection;
