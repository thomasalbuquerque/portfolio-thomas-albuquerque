import { Translation } from '@/helpers/translation';
import React from 'react';

interface props {
  localeTransitionIndex: string;
}
export default function HeroSection({ localeTransitionIndex }: props) {
  return (
    <>
      <section id='hero' className='text-gray'>
        {/* Flex Container */}
        <div className='mx-auto flex flex-col items-center space-y-16 py-20 lg:flex-row lg:space-y-0 lg:py-36 '>
          {/* Left Item */}
          <div className='flex items-center justify-center xsm:w-3/5 lg:w-2/5'>
            <img src='/profile-picture.webp' alt='Foto de perfil do desenvolvedor' className='max-h-60 w-auto place-self-center sm:max-h-80' />
          </div>

          {/* Right Item */}
          <div className='mb-32 flex flex-col space-y-12 bg-gradient-to-r from-darkBlue to-aBitMoreDarkBlue px-8 py-20 md:w-3/5 lg:w-4/5 lg:px-20'>
            <h1 className='max-w-xl text-center font-monoTitle text-3xl font-bold tracking-tight md:text-5xl lg:text-left'>
              {Translation[localeTransitionIndex].frontendDeveloper}
            </h1>
            {/* Description */}
            <div className='max-w-4xl text-center font-monoText text-base md:text-xl lg:text-left 2xl:max-w-5xl'>
              {Translation[localeTransitionIndex].heroSectionDescription.split('\n').map((line, index) => (
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
