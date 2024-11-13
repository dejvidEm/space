
interface SectionHeadingProps {
    title: string;
  }
  
  const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
    return (
      <h2 className='text-3xl text-center font-medium capitalize mb-8'>
        {title}
      </h2>
    );
  };
  
  export default SectionHeading;