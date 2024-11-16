interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className='text-center mb-8'>
      <h2 className='text-2xl md:text-4xl font-semibold capitalize'>{title}</h2>
      {subtitle && <p className='text-lg md:text-xl mt-2 text-gray-500'>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;