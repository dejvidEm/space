import { motion } from 'framer-motion';
import hero_img from '../assets/hero.webp';
import AnimatedArrow from './ui/animatedArrow';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section id="domov" className="relative flex flex-col md:flex-row items-center min-h-screen px-8 md:px-20 py-32 md:py-20 bg-white overflow-hidden">
      <div className="absolute w-[200px] h-[250px] bg-[#0a8980] rounded-full opacity-90 blur-[140px] -top-30 left-1/3 z-0"></div>
      <div className="absolute w-[200px] h-[250px] bg-green-200 rounded-full opacity-90 blur-[70px] top-40 right-1/4 z-0"></div>

      <div className="relative flex justify-center items-center md:flex-1 w-full h-full md:h-auto overflow-hidden">
        <motion.img
          src={hero_img}
          alt="Project Manager"
          className="w-[500px] md:w-[700px] levitating"
          initial={{ y: '50vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 30 }}
          whileHover={{ y: -10, scale: 1.05 }}
          onAnimationComplete={() => {
            document.querySelector('.levitating')?.classList.add('animate-lep');
          }}
        />
      </div>

      <div className="relative flex-1 text-center md:text-left md:pl-12 mt-8 md:mt-0 z-10">
        <div style={{ minHeight: '150px' }}>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-600">Project Manager</h2>
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-800">
              Marek <span className="text-[#124746]">Bagár</span>
            </h1>
          </motion.div>
        </div>

        <div style={{ minHeight: '20px' }}>
          <motion.div
            className="flex flex-col mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
          >
            <h1 className="text-xl sm:text-2xl text-green-950 font-semibold italic -mt-20 mb-8 md:mb-2">
              „Kde vízia stretáva efektivitu“
            </h1>
            <h2 className="text-md md:text-lg text-green-950">
              Projektový manažér zameraný na výsledky, premením vaše nápady na úspešné projekty.
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-row justify-center md:justify-normal gap-4 pb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-black/15 p-3 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950 cursor-pointer dark:bg-white/10 dark:text-white/80"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              aria-label={`Visit ${link} on social media`}
              style={{ position: 'relative' }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
      <div className='visible md:hidden'>
        <AnimatedArrow/>
      </div>
    </section>
  );
};

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/d%C3%A1vid-mikul%C3%A1%C5%A1-602a92226/',
    icon: <AiOutlineLinkedin size={27} />,
  },
  {
    href: 'https://www.instagram.com/dajvid_',
    icon: <AiOutlineInstagram size={27} />,
  },
  {
    href: 'https://www.facebook.com/david.mikulas.39',
    icon: <AiOutlineFacebook size={27} />,
  },
];

export default HeroSection;