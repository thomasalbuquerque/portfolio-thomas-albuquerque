import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { subsectionsList } from './texts';

export default function AboutMeSection() {
  const [aboutMeSubsection, setAboutMeSubsection] = useState('Pessoal');

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = (e: any, value: string) => {
    setAboutMeSubsection(value);
  };
  return (
    <>
      <section
        id="aboutMeSection"
        className="text-gray"
        data-aos="fade-zoom-in"
        data-aos-duration={800}
        data-aos-offset={250}>
        {/* Container */}
        <div className="container mx-auto py-14 px-10 sm:px-24 max-w-8xl bg-gradient-to-r from-aBitMoreDarkBlue to-transparent">
          <h2 className="mx-auto pb-4 text-3xl md:text-4xl font-monoTitle">
            Sobre mim
          </h2>
          {/* Flex Items*/}
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
            {/* Menu */}
            <div id="Col Menu" className="text-lg md:text-2xl">
              {subsectionsList.map((subsection, index) => (
                <div
                  id="Row"
                  key={index}
                  className="grid grid-cols-9 gap-8"
                  onClick={(e) => handleClick(e, subsection.title)}>
                  <h3
                    id="Col Index"
                    className="col-span-1 font-monoTitle cursor-pointer">
                    {index + 1}
                  </h3>
                  <div
                    id="Col Title"
                    className={`col-span-8 font-monoTitle cursor-pointer ${
                      aboutMeSubsection === subsection.title
                        ? 'underline decoration-accentColor decoration-2 underline-offset-4'
                        : 'no-underline'
                    }`}>
                    {subsection.title}
                  </div>
                </div>
              ))}
            </div>
            {/* Description */}
            <div
              id="Col Description"
              className="text-base md:text-lg font-monoText">
              {subsectionsList
                .find((subsection) => subsection.title === aboutMeSubsection)!
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
