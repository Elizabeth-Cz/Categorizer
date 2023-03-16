import { Link } from 'react-router-dom';
import HeroBG from '../assets/HeroBG.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className="w-full h-80 bg-no-repeat bg-cover absolute -z-10"
        style={{ backgroundImage: `url(${HeroBG})` }}
      ></div>
      <header
        className={`w-full max-w-3xl mx-auto flex justify-between font-sans items-center py-5 px-4 max-[640px]:flex-col
        }`}
      >
        <Link to="/">
          <h2 className="font-black text-lg text-dark-purple">
            Categorizer.io
          </h2>
        </Link>
        <nav className={`underline`}>
          <ul
            className={`gap-6 flex max-[640px]:${menuOpen ? 'pt-6' : 'hidden'}`}
          >
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/">API</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </nav>
        <button
          className={`hidden absolute right-4 max-[640px]:block`}
          onClick={toggleMenu}
        >
          <HiMenuAlt3 className="text-2xl" />
        </button>
      </header>
    </>
  );
};

export default Header;
