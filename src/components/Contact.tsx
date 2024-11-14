import { motion } from 'framer-motion';
import SectionHeading from './ui/sectionHeading';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSubscribeButton } from './ui/animatedButton';

import { IoChevronForward } from "react-icons/io5";
import { HiOutlineCheck } from "react-icons/hi";
import { AccordionComponent } from './ui/accordionComponent';

const Contact = () => {
  return (
    <div className='max-w-[1200px] flex flex-col gap-20 lg:flex-row p-14 md:p-12 mx-auto'>
      <motion.section className='w-full lg:w-1/3'>
        <AccordionComponent />
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        viewport={{ once: true }} 
        id='contact' 
        className='text-center mb-20 sm:mb-28 w-full lg:w-2/3 [min(100%, 38rem)] border-gray-300 lg:border-l lg:pl-20 lg:border-t-0'
      >
        <SectionHeading title="Kontakt" />
        <p className='text-gray-700 dark:text-white/80 my-8'>
          Prosím kontaktujte ma mailom na 
          <a className='underline' href="mailto:mikulasdejvid@gmail.com">martinbugar@gmail.com</a> 
          alebo prostredníctvom tohto formuláru
        </p>
        <div className='flex flex-col gap-4 items-start'>
          <Input type="email" placeholder="E-mail" />
          <Textarea placeholder="Vašu správu napíšte sem" />
          <AnimatedSubscribeButton
            buttonColor="#000000"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            initialText={
              <span className="group inline-flex items-center">
                Odoslať{" "}
                <IoChevronForward className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            }
            changeText={
              <span className="group inline-flex items-center">
                <HiOutlineCheck className="mr-2 size-4" />
                Odoslané{" "}
              </span>
            }
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;