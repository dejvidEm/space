import { motion } from 'framer-motion';
import hero_img from '../assets/rocket-hero.webp';

import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";

const HeroSection = () => {
    return (
      <section id='domov' className="relative flex flex-col md:flex-row items-center min-h-screen px-8 md:px-20 py-20 bg-white overflow-hidden">
        <div className="absolute w-[200px] h-[250px] bg-[#0a8980] rounded-full opacity-90 blur-[100px] -top-30 left-1/3 z-0"></div>
        <div className="absolute w-[200px] h-[250px] bg-green-200 rounded-full opacity-90 blur-[70px] top-40 right-1/4 z-0"></div>
  
        <div className="relative flex justify-center items-center md:flex-1 w-full h-full md:h-auto overflow-hidden">
            <motion.img
                src={hero_img}
                alt="Project Manager"
                className="w-[300px] md:w-[500px]"
                initial={{ y: '50vh', opacity: 0 }} // Začína pod obrazovkou
                animate={{ y: 0, opacity: 1 }} // Animácia na pozíciu 0 a zobrazenie
                transition={{ type: 'spring', stiffness: 80, damping: 20 }} // Plynulý pohyb
                whileHover={{ y: -10, scale: 1.05 }} // Efekt vznášania pri hoveri
            />
            </div>

        <div className="relative flex-1 text-center md:text-left md:pl-12 mt-8 md:mt-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-400">Project Manager</h2>
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-800">
              Marek 
              <span className='text-[#124746]'> Bagár</span>
            </h1>
          </motion.div>
          <motion.div className="flex flex-col mt-10"
            initial={{ opacity: 0, backgroundColor: "#fff" }}
            animate={{ opacity: 1, backgroundColor: "transparent" }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            >
            <h1 className='text-xl sm:text-2xl text-green-950 font-semibold italic mb-8 md:mb-2'>„Kde vízia stretáva efektivitu“</h1>
            <h2 className='text-lg text-green-950'>Projektový manažér zameraný na výsledky, premením vaše nápady na úspešné projekty.</h2>
          </motion.div>
          <div className="mt-8 flex flex-row justify-center md:justify-normal gap-4">
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
              >
              {link.icon}
            </motion.a>
          ))}
        </div>
        </div>
      </section>
    );
  };


const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/d%C3%A1vid-mikul%C3%A1%C5%A1-602a92226/',
      icon: <AiOutlineLinkedin size={27} />
    },
    {
      href: 'https://github.com/dejvidEm',
      icon: <AiOutlineGithub size={27} />
    },
    {
      href: 'https://www.instagram.com/dajvid_',
      icon: <AiOutlineInstagram size={27} />
    },
    {
      href: 'https://www.facebook.com/david.mikulas.39',
      icon: <AiOutlineFacebook size={27} />
    }
  ];

export default HeroSection;