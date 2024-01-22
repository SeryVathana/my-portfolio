import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import ProjectType from '@/types/projectType';
import { FaEye } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import projects from '../data/projectData';

import { Variants, motion } from 'framer-motion';
import Footer from '@/components/Footer';

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

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectType>();

  useEffect(() => {
    const getProject: ProjectType | undefined = projects.find((item: ProjectType) => item.id === id);

    if (getProject) {
      setProject(getProject);
    }

    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <MaxWidthWrapper className='my-32'>
        <h1>Loading project with id: {id}</h1>
      </MaxWidthWrapper>
    );
  }

  return (
    <div>
      <MaxWidthWrapper className='my-40 md:my-32'>
        <motion.div className='flex items-center justify-center gap-5'>
          <div className='text-lg md:text-2xl border w-fit p-2 rounded-md bg-gray-100'>{project.displayIcon}</div>
          <h1 className='text-lg md:text-3xl font-semibold'>{project.title}</h1>
        </motion.div>
        <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
          <p className='text-center mx-auto max-w-[600px] my-10 text-sm md:text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nihil sed deleniti fuga ab, atque commodi
            suscipit quia neque dolorum magnam aut dolore repellat iusto iure voluptatibus quae odit! Consequatur quae rerum,
            neque sed dolor amet culpa aliquid doloribus maxime beatae distinctio, quo, sequi dicta dolorem natus itaque rem.
          </p>
        </motion.div>

        <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
          <div className='flex flex-wrap gap-5 md:gap-10 justify-center my-10'>
            <Button className='py-6 flex items-center' variant={'outline'} asChild>
              <a href={project.links.github} target='_blank'>
                <SiGithub className='text-xl md:text-3xl mr-3' /> <span className='text-sm md:text-lg mt-1'>Github</span>
              </a>
            </Button>
            <Button className='py-6 flex items-center' variant={'outline'} asChild>
              <a href={project.links.demo} target='_blank'>
                <FaEye className='text-xl md:text-3xl mr-3' /> <span className='text-sm md:text-lg mt-1'>Demo</span>
              </a>
            </Button>
          </div>
        </motion.div>

        <div className='max-w-[900px] h-auto     mx-auto my-20'>
          <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
            <h3 className='mx-auto text-center my-5'>Project Screenshots</h3>
          </motion.div>
          <div className='space-y-10'>
            {project.screenshots.map((img, i) => {
              return (
                <motion.img
                  key={i}
                  src={img}
                  alt='img'
                  className=' rounded-xl border w-auto'
                  loading='lazy'
                  variants={cardVariants}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{ once: true }}
                />
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
