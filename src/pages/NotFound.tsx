import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const NotFound = () => {
  return (
    <div className='min-h-[100vh]'>
      <MaxWidthWrapper className='w-full h-full flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-8xl text-destructive'>404</h1>
        <h3 className='text-2xl'>Page Not Found</h3>
      </MaxWidthWrapper>
    </div>
  );
};

export default NotFound;
