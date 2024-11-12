import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 relative">
        <div className="flex items-center space-x-8 space-y-2">
          <div className="hidden md:flex space-x-8">
            <Link to="domov" spy={true} smooth={true} offset={10} duration={100} className="text-white font-bold hover:text-[#0a8980] cursor-pointer transition-all">
              Domov
            </Link>
            <Link to="domov" spy={true} smooth={true} offset={10} duration={100} className="text-white hover:text-[#0a8980] cursor-pointer transition-all">
              O mne
            </Link>
            <Link to="domov" spy={true} smooth={true} offset={10} duration={100} className="text-white hover:text-[#0a8980] cursor-pointer transition-all">
              Služby
            </Link>
            <Link to="domov" spy={true} smooth={true} offset={10} duration={100} className="text-white hover:text-[#0a8980] cursor-pointer transition-all">
              Kontakt
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <div className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="text-white">
            <span className="text-[#0a8980]">M</span>B<span className="text-[#0a8980]">.</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="border border-white px-4 py-2 text-white rounded hover:bg-white hover:text-black transition duration-200">
            Začíname!
          </a>
        </div>
      </div>

      <div
        className={`absolute left-0 w-full bg-black md:hidden transition-all duration-300 ease-out z-50 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="flex flex-col items-start space-y-4 px-6 py-4">
          <Link to="domov" onClick={closeMenu} className="text-white font-semibold hover:opacity-80 cursor-pointer">
            Domov
          </Link>
          <Link to="domov" onClick={closeMenu} className="text-white hover:opacity-80 cursor-pointer">
            O mne
          </Link>
          <Link to="domov" onClick={closeMenu} className="text-white hover:opacity-80 cursor-pointer">
            Služby
          </Link>
          <Link to="domov" onClick={closeMenu} className="text-white hover:opacity-80 cursor-pointer">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;