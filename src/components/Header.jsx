import { Link } from 'react-router-dom';
import HeroBG from '../assets/HeroBG.svg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className="w-full h-80 bg-no-repeat bg-cover absolute -z-10"
        style={{ backgroundImage: `url(${HeroBG})` }}
      ></div>
      <header className="w-full max-w-3xl mx-auto flex justify-between font-sans items-center py-5 px-4 max-[640px]:flex-col">
        <Link to="/">
          <h2 className="font-black text-lg text-dark-purple">
            Categorizer.io
          </h2>
        </Link>
        <nav className={`flex ${menuOpen ? 'h-72' : 'max-[640px]:opacity-0'}`}>
          <ul
            className={`flex gap-4 underline ${
              menuOpen
                ? 'flex-col w-screen items-center h-full justify-center gap-6 bg-slate-50 my-3 opacity-100'
                : 'max-[640px]:hidden'
            }`}
          >
            <li>
              <Link onClick={closeMenu} to="/">
                Search
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/">
                API
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="hidden absolute right-4 max-[640px]:block"
          onClick={toggleMenu}
        >
          <HiMenuAlt3 className="text-2xl" />
        </button>
      </header>
    </>
  );
};

export default Header;
