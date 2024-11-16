import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="container mx-auto px-6 max-w-[1200px] flex flex-col items-center lg:flex-row lg:justify-between lg:items-center space-y-8 lg:space-y-0">

        <div className="flex items-center space-x-2 text-2xl font-bold">
          <Link
            to="domov"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white cursor-pointer"
          >
            <span className="text-[#0a8980]">M</span>B<span className="text-[#0a8980]">.</span>
          </Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} className="hover:text-[#0a8980] transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} className="hover:text-[#0a8980] transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} className="hover:text-[#0a8980] transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={24} className="hover:text-[#0a8980] transition" />
          </a>
        </div>

        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center">
          {["Domov", "O mne", "Služby", "Kontakt"].map((link, index) => (
            <Link
              key={index}
              to={link.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-white hover:text-[#0a8980] transition cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center">
          <div className="flex items-center space-x-2">
            <MdEmail size={20} />
            <span>info@bagar.sk</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdPhone size={20} />
            <span>+421 123 456 789</span>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-20">
        {new Date().getFullYear()} Marek Bagár © Všetky práva vyhradené.
      </div>
    </footer>
  );
};

export default Footer;