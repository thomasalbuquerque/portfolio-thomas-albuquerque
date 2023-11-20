import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Translation } from '@/helpers/translation';

interface props {
  localeTransitionIndex: string;
}

export default function AboutMeSection({ localeTransitionIndex }: props) {
  const [subsectionId, setSubsectionId] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = (e: any, id: number) => {
    setSubsectionId(id);
  };
  return (
    <>
      <section id='aboutMeSection' className='text-gray' data-aos='fade-zoom-in' data-aos-duration={800} data-aos-offset={250}>
        {/* Container */}
        <div className='container mx-auto mt-20 max-w-8xl bg-gradient-to-r from-darkBlue to-aBitMoreDarkBlue px-10 py-14 sm:px-24 lg:mt-36'>
          <h2 className='mx-auto font-monoTitle text-3xl md:text-4xl'>{Translation[localeTransitionIndex].aboutMe}</h2>
          {/* Flex Items*/}
          <div className='mt-10 flex flex-col space-y-8 lg:flex-row lg:space-y-0'>
            {/* Menu */}
            <div id='Col Menu' className='text-lg md:text-2xl'>
              {Translation[localeTransitionIndex].aboutMeTexts.map((subsection, index) => (
                <div id='Row' key={index} className='grid grid-cols-9 gap-8' onClick={(e) => handleClick(e, index + 1)}>
                  <h3 id='Col Index' className='col-span-1 cursor-pointer font-monoTitle'>
                    {index + 1}
                  </h3>
                  <div
                    id='Col Title'
                    className={`col-span-8 cursor-pointer font-monoTitle ${
                      subsectionId === subsection.id ? 'underline decoration-accentColor decoration-2 underline-offset-4' : 'no-underline'
                    }`}
                  >
                    {subsection.title}
                  </div>
                </div>
              ))}
            </div>
            {/* Description */}
            <div id='Col Description' className='font-monoText text-base md:text-lg'>
              {Translation[localeTransitionIndex].aboutMeTexts
                .find((subsection) => subsection.id === subsectionId)!
                .description.split('\n')
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
