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

export default function NavBar({ localeTransitionIndex, handleToggleLocale }: props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <nav className='w-screen bg-darkBlue p-6'>
        {/* Flex container */}
        <div className='flex items-center justify-between font-monoTitle '>
          {/* Logo */}
          <div className='flex text-2xl lg:ml-11 2xl:ml-36'>
            <img src='./thomas-albuquerque-logo.png' className='w-64' alt='logo website' />
          </div>
          {/* Menu Items */}
          <div className='hidden items-center space-x-12 text-lg md:flex lg:mr-11 2xl:mr-36'>
            <a href='#portfolioSection' className='text-gray duration-150 hover:text-hoverGray'>
              {Translation[localeTransitionIndex].portfolio}
            </a>
            <a href='#aboutMeSection' className='text-gray duration-150 hover:text-hoverGray'>
              {Translation[localeTransitionIndex].aboutMe}
            </a>
            <a href='#contactSection' className='text-gray duration-150 hover:text-hoverGray'>
              {Translation[localeTransitionIndex].contact}
            </a>
            <img src={Translation[localeTransitionIndex].flagUrl} className='w-5 cursor-pointer' onClick={handleToggleLocale}></img>
          </div>
          {/* Hamburger Icon */}
          <button
            id='menu-btn'
            className={clsx(`${styles.hamburger} focus:outline-none md:hidden`, mobileMenuOpen && `${styles.open}`)}
            onClick={handleToggleMenuOpen}
          >
            <span className={styles.hamburgerTop}></span>
            <span className={styles.hamburgerMiddle}></span>
            <span className={styles.hamburgerBottom}></span>
          </button>
        </div>
        <div className='md:hidden'>
          <div
            id='menu'
            className={clsx(
              'absolute right-6 mt-10 w-36 flex-col items-center space-y-6 self-end bg-darkBlue py-8 font-bold text-gray drop-shadow-md sm:self-center',
              mobileMenuOpen && 'flex',
              !mobileMenuOpen && 'hidden',
            )}
          >
            <a href='#portfolioSection'>{Translation[localeTransitionIndex].portfolio}</a>
            <a href='#aboutMeSection'>{Translation[localeTransitionIndex].aboutMe}</a>
            <a href='#contactSection'>{Translation[localeTransitionIndex].contact}</a>
            <div className='flex flex-wrap gap-4'>
              <a href='https://www.linkedin.com/in/thomas-albuquerque-80412b137/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} className='h-5' />
              </a>
              <a href='https://github.com/thomasalbuquerque' target='_blank'>
                <FontAwesomeIcon icon={faGithub} className='h-5' />
              </a>
            </div>
            <img src={Translation[localeTransitionIndex].flagUrl} className='w-5 cursor-pointer' onClick={handleToggleLocale}></img>
          </div>
        </div>
      </nav>
    </>
  );
}
