import React, { useEffect, useState } from 'react';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translation } from '@/helpers/translation';

interface props {
  localeTransitionIndex: string;
}

export default function BackToTopButton({ localeTransitionIndex }: props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const windowWidth = window.innerWidth;
    // const qttScroll = windowWidth > 768 ? 750 : 1500;
    const qttScroll = 750;
    if (window.scrollY > qttScroll) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`bg-gray-500 fixed bottom-4 right-4 rounded-full p-2 text-hoverDisabled ${
        isVisible ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-opacity duration-500`}
      onClick={scrollToTop}
    >
      <div className='flex flex-col items-center justify-center'>
        <FontAwesomeIcon icon={faAngleUp} className='-mb-0.5 h-3 md:h-4' />
        <div className='-mb-1 text-[0.5rem] md:text-[0.6rem]'>{Translation[localeTransitionIndex].backToTopBack}</div>
        <div className='text-[0.5rem] md:text-[0.6rem]'>{Translation[localeTransitionIndex].backToTopToTop}</div>
      </div>
    </button>
  );
}
