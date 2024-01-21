
import { TypeAnimation } from 'react-type-animation';

const TypeWritingAnimation = ({ text }: { text: any[] }) => {
    return <TypeAnimation sequence={text} wrapper='span' cursor={true} repeat={Infinity} className='text-green-600' />;
};

export default TypeWritingAnimation;