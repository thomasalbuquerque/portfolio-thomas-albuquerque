import React, { ChangeEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Translation } from '@/helpers/translation';

interface props {
  localeTransitionIndex: string;
}

export default function ContactSection({ localeTransitionIndex }: props) {
  const [copyEmail, setCopyEmail] = useState(Translation[localeTransitionIndex].contactCopyEmailButton);
  const handleCopyEmailText = async () => {
    setCopyEmail(Translation[localeTransitionIndex].contactCopyEmailMessage);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCopyEmail(Translation[localeTransitionIndex].contactCopyEmailButton);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setCopyEmail(Translation[localeTransitionIndex].contactCopyEmailButton);
  }, [localeTransitionIndex]);
  return (
    <>
      <section id='contactSection' className='text-gray' data-aos='fade-zoom-in' data-aos-duration={800} data-aos-offset={300}>
        <div className='container mx-auto mt-20 flex max-w-4xl flex-col bg-darkBlue px-10 py-14 text-gray sm:px-24 lg:mt-36'>
          <div className='font-monoTitle text-3xl md:text-4xl'>{Translation[localeTransitionIndex].contact}</div>
          <div className='mt-10 font-monoText text-base md:text-xl'>{Translation[localeTransitionIndex].contactDescription}</div>
          {/* <div className=""> */}
          <div className='mt-9 flex flex-col items-center gap-4 font-monoText text-sm sm:flex-row sm:justify-around sm:gap-4 md:text-base '>
            <a
              href='https://www.linkedin.com/in/thomasalbuquerque/'
              target='_blank'
              className='flex-colfont-monoText flex cursor-pointer items-center duration-150 hover:text-accentColor'
            >
              <FontAwesomeIcon icon={faLinkedin} className='h-10 pr-4' />
              <div className='text-center'>{Translation[localeTransitionIndex].contactViewLinkedinProfileButton}</div>
            </a>
            <a
              className='flex-colfont-monoText flex cursor-pointer items-center duration-150 hover:text-accentColor'
              onClick={() => {
                navigator.clipboard.writeText('thomasalbuquerque@proton.me');
                handleCopyEmailText();
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} className='h-10 pr-4' />
              <div className='text-center'>{copyEmail}</div>
            </a>
            <a
              href='https://github.com/thomasalbuquerque'
              target='_blank'
              className='flex-colfont-monoText flex cursor-pointer items-center duration-150 hover:text-accentColor'
            >
              <FontAwesomeIcon icon={faGithub} className='h-10 pr-4' />
              <div className='text-center'>{Translation[localeTransitionIndex].contactViewGitHubButton}</div>
            </a>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
