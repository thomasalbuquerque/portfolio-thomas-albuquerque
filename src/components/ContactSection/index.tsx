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
  const [copyEmail, setCopyEmail] = useState(
    Translation[localeTransitionIndex].contactCopyEmailButton
  );
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
      <section
        id="contactSection"
        className="text-gray"
        data-aos="fade-zoom-in"
        data-aos-duration={800}
        data-aos-offset={300}>
        <div className="container flex flex-col max-w-4xl mx-auto mt-24 px-10 py-14 sm:px-24 text-gray bg-darkBlue">
          <div className="font-monoTitle text-3xl md:text-4xl">
            {Translation[localeTransitionIndex].contact}
          </div>
          <div className="text-base md:text-xl mt-10 font-monoText">
            {Translation[localeTransitionIndex].contactDescription}
          </div>
          {/* <div className=""> */}
          <div className="flex flex-col mt-9 gap-4 sm:flex-row sm:gap-4 sm:justify-around items-center text-sm md:text-base font-monoText">
            <a
              href="https://www.linkedin.com/in/thomasalbuquerque/"
              target="_blank"
              className="flex flex-colfont-monoText items-center hover:text-hoverGray cursor-pointer">
              <FontAwesomeIcon icon={faLinkedin} className="h-10 pr-4" />
              <div className="text-center">
                {
                  Translation[localeTransitionIndex]
                    .contactViewLinkedinProfileButton
                }
              </div>
            </a>
            <a
              className="flex flex-colfont-monoText items-center hover:text-hoverGray cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText('thomasalbuquerque@proton.me');
                handleCopyEmailText();
              }}>
              <FontAwesomeIcon icon={faEnvelope} className="h-10 pr-4" />
              <div className="text-center">{copyEmail}</div>
            </a>
            <a
              href="https://github.com/thomasalbuquerque"
              target="_blank"
              className="flex flex-colfont-monoText items-center hover:text-hoverGray cursor-pointer">
              <FontAwesomeIcon icon={faGithub} className="h-10 pr-4" />
              <div className="text-center">
                {Translation[localeTransitionIndex].contactViewGitHubButton}
              </div>
            </a>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
