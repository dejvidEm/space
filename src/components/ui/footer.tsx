import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
        <div className="container mx-auto px-6 max-w-[1200px] flex flex-col items-center lg:flex-row lg:justify-between lg:items-center space-y-8 lg:space-y-0">
        
        {/* Logo a názov stránky */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
            <a href="#" className="text-white">
                <span className="text-[#0a8980]">M</span>B<span className="text-[#0a8980]">.</span>
            </a>
        </div>


        {/* Ikony sociálnych sietí */}
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
            {["Domov", "O mne", "Služby", "Kontakt"].map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-[#0a8980] transition"
              key={link}
                >
              {link}
            </a>
          ))}
        </nav>

        {/* Kontaktné údaje */}
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

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-20">
        {new Date().getFullYear()} <p>Marek Bagár © Všetky práva vyhradené.</p>
      </div>
    </footer>
  );
};

export default Footer;