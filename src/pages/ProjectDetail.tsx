import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import projects from '../data/projectData';
import ProjectType from '@/types/projectType';
import { Button } from '@/components/ui/button';
import { SiGithub } from 'react-icons/si';
import { FaEye } from 'react-icons/fa';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

import { Variants, motion } from 'framer-motion';

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
      <MaxWidthWrapper className='my-32'>
        <motion.div className='flex items-center justify-center gap-5'>
          <div className='text-2xl border w-fit p-2 rounded-md bg-gray-100'>{project.displayIcon}</div>
          <h1 className='text-3xl font-semibold'>{project.title}</h1>
        </motion.div>
        <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
          <p className='text-center mx-auto max-w-[600px] my-10 text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat libero nihil sed deleniti fuga ab, atque commodi
            suscipit quia neque dolorum magnam aut dolore repellat iusto iure voluptatibus quae odit! Consequatur quae rerum,
            neque sed dolor amet culpa aliquid doloribus maxime beatae distinctio, quo, sequi dicta dolorem natus itaque rem.
          </p>
        </motion.div>

        <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
          <div className='flex flex-wrap gap-10 justify-center my-10'>
            <Button className='py-6 flex items-center' variant={'outline'} asChild>
              <a href={project.links.github} target='_blank'>
                <SiGithub className='text-3xl mr-3' /> <span className='text-lg mt-1'>Github</span>
              </a>
            </Button>
            <Button className='py-6 flex items-center' variant={'outline'} asChild>
              <a href={project.links.demo} target='_blank'>
                <FaEye className='text-3xl mr-3' /> <span className='text-lg mt-1'>Demo</span>
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
          <div className='w-[900px] h-auto     mx-auto my-20'>
            <h3 className='mx-auto text-center my-5'>Project Screenshots</h3>
            <img
              src='https://images.pexels.com/photos/2167039/pexels-photo-2167039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='img'
              className=' rounded-xl'
            />
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProjectDetail;
