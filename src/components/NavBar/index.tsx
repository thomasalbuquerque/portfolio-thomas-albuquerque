import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Translation } from '@/helpers/translation';

interface props {
  localeTransitionIndex: string;
  handleToggleLocale: () => void;
}

export default function NavBar({
  localeTransitionIndex,
  handleToggleLocale,
}: props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <nav className="w-screen bg-darkBlue p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between font-monoTitle ">
          {/* Logo */}
          <div className="flex text-2xl lg:ml-11 2xl:ml-36">
            <img
              src="./thomas-albuquerque-logo.png"
              className="w-64"
              alt="logo website"
            />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-12 text-lg lg:mr-11 2xl:mr-36">
            <a
              href="#aboutMeSection"
              className="text-gray hover:text-hoverGray duration-150">
              {Translation[localeTransitionIndex].aboutMe}
            </a>
            <a
              href="#portfolioSection"
              className="text-gray hover:text-hoverGray duration-150">
              {Translation[localeTransitionIndex].portfolio}
            </a>
            <a
              href="#contactSection"
              className="text-gray hover:text-hoverGray duration-150">
              {Translation[localeTransitionIndex].contact}
            </a>
            <img
              src={Translation[localeTransitionIndex].flagUrl}
              className="w-5 cursor-pointer"
              onClick={handleToggleLocale}></img>
          </div>
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className={clsx(
              `${styles.hamburger} md:hidden focus:outline-none`,
              mobileMenuOpen && `${styles.open}`
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
            <a href="#aboutMeSection">
              {Translation[localeTransitionIndex].aboutMe}
            </a>
            <a href="#portfolioSection">
              {Translation[localeTransitionIndex].portfolio}
            </a>
            <a href="#contactSection">
              {Translation[localeTransitionIndex].contact}
            </a>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/thomas-albuquerque-80412b137/"
                target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="h-5" />
              </a>
              <a href="https://github.com/thomasalbuquerque" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="h-5" />
              </a>
            </div>
            <img
              src={Translation[localeTransitionIndex].flagUrl}
              className="w-5 cursor-pointer"
              onClick={handleToggleLocale}></img>
          </div>
        </div>
      </nav>
    </>
  );
}
