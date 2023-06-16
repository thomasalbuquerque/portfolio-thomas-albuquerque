import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <nav className="w-screen bg-gradient-to-tl from-aBitMoreDarkBlue to-from-darkBlue p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between font-monoTitle ">
          {/* Logo */}
          <div className="flex text-2xl lg:ml-11 2xl:ml-36">
            <img
              src="./thomas-albuquerque-logo.svg"
              className="w-64"
              alt="logo website"
            />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-12 text-lg lg:mr-11 2xl:mr-36">
            <a
              href="#aboutMeSection"
              className="text-gray hover:text-hoverGray duration-150">
              Sobre mim
            </a>
            <a
              href="#portfolioSection"
              className="text-gray hover:text-hoverGray duration-150">
              Portfólio
            </a>
            <a
              href="#contactSection"
              className="text-gray hover:text-hoverGray duration-150">
              Contato
            </a>
          </div>
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className={clsx(
              `${styles.hamburger} md:hidden focus:outline-none`,
              mobileMenuOpen && 'open'
            )}
            onClick={handleToggleMenuOpen}>
            <span className={styles.hamburgerTop}></span>
            <span className={styles.hamburgerMiddle}></span>
            <span className={styles.hamburgerBottom}></span>
          </button>
        </div>
        <div className="md:hidden">
          <div
            id="menu"
            className={clsx(
              'absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-darkBlue text-gray w-36 sm:self-center right-6 drop-shadow-md',
              mobileMenuOpen && 'flex',
              !mobileMenuOpen && 'hidden'
            )}>
            <a href="#aboutMeSection">Sobre Mim</a>
            <a href="#portfolioSection">Portfólio</a>
            <a href="#contactSection">Contato</a>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/thomas-albuquerque-80412b137/"
                target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="h-5" />
              </a>
              <a href="https://github.com/thomasalbuquerque" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
