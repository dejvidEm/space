import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import { Button } from './button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0A0A0A] text-white py-4 z-50">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 relative">
        <div className="hidden md:flex items-center space-x-8">
          {['Domov', 'O mne', 'Služby', 'Kontakt'].map((section) => (
            <Link
              href={section}
              key={section}
              to={section.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-white font-bold hover:text-[#0a8980] cursor-pointer transition-all"
            >
              {section}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
        <Link
              href="domov"
              to="domov"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <span className="text-[#00BFA6]">M</span>B<span className="text-[#00BFA6]">.</span>
            </Link>
        </div>

        <div className="flex items-center space-x-4">
        <Link
              href='kontakt'
              to="kontakt"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button variant="glowingOutlineCustomGreen" size="default">
                Začíname!
              </Button>
            </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-[#0A0A0A] md:hidden transition-all duration-300 ease-out z-50 opacity-100 translate-y-0">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            {['Domov', 'O mne', 'Služby', 'Kontakt'].map((section) => (
              <Link
                href={section}
                key={section}
                to={section.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-semibold hover:opacity-80 cursor-pointer"
              >
                {section}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;