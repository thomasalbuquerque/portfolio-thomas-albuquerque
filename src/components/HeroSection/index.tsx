import { Translation } from '@/helpers/translation';
import React from 'react';

interface props {
  localeTransitionIndex: string;
}
export default function HeroSection({ localeTransitionIndex }: props) {
  return (
    <>
      <section id="hero" className="text-gray">
        {/* Flex Container */}
        <div className="flex flex-col items-center lg:flex-row py-20 lg:py-36 mx-auto space-y-16 lg:space-y-0 ">
          {/* Left Item */}
          <div className="flex xsm:w-3/5 lg:w-2/5 items-center justify-center">
            <img
              src="/profile-picture.png"
              alt="Foto de perfil do desenvolvedor"
              className="w-auto max-h-60 sm:max-h-80 place-self-center"
            />
          </div>

          {/* Right Item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-3/5 lg:w-4/5 bg-gradient-to-r from-darkBlue to-aBitMoreDarkBlue lg:px-20 px-8 py-20">
            <h1 className="max-w-xl font-bold text-center text-3xl md:text-5xl tracking-tight lg:text-left font-monoTitle">
              {Translation[localeTransitionIndex].frontendDeveloper}
            </h1>
            {/* Description */}
            <div className="max-w-4xl 2xl:max-w-5xl text-center lg:text-left font-monoText text-base md:text-xl">
              {Translation[localeTransitionIndex].heroSectionDescription
                .split('\n')
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
