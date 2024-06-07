import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './Card';
import { Translation } from '@/helpers/translation';

interface props {
  localeTransitionIndex: string;
}

export default function PortfolioSection({ localeTransitionIndex }: props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id='portfolioSection' className='text-gray' data-aos='fade-zoom-in' data-aos-duration={800} data-aos-offset={200}>
        {/* Container */}
        <div className='container mx-auto px-10 sm:px-20'>
          <h2 className='mx-auto text-center font-monoTitle text-3xl md:text-4xl'>{Translation[localeTransitionIndex].portfolio}</h2>
          {/* Flex Items*/}
          <div className='flex flex-col items-center justify-center space-y-8 pt-8 sm:flex-wrap md:flex-row md:gap-4 md:space-y-0'>
            <Card
              imgUrl='./thomas-albuquerque-logo.png'
              title='Thomas Albuquerque'
              description={Translation[localeTransitionIndex].portfolioThomasAlbuquerqueProjectDescription}
              hrefPreview=''
              hrefGitHubFrontend='https://github.com/thomasalbuquerque/portfolio-thomas-albuquerque'
              hrefGitHubBackend=''
            />
            <Card
              imgUrl='./currency-converter.png'
              title='Currency Converter'
              description={Translation[localeTransitionIndex].portfolioCoinCalcProjectDescription}
              hrefPreview='https://coincalc-currency-converter.vercel.app/'
              hrefGitHubFrontend='https://github.com/thomasalbuquerque/currency-converter_frontend'
              hrefGitHubBackend='https://github.com/thomasalbuquerque/currency-converter_backend'
            />
            <Card
              imgUrl='./pipetube-logo.png'
              title='Pipe Tube'
              description={Translation[localeTransitionIndex].pipetubeProjectDescription}
              hrefPreview='https://pipe-tube-one.vercel.app/'
              hrefGitHubFrontend='https://github.com/thomasalbuquerque/pipe-tube/'
              hrefGitHubBackend=''
            />
            <Card
              imgUrl='./sicure-seg.png'
              title='Sicure Seguros'
              description={Translation[localeTransitionIndex].portfolioSicureProjectDescription}
              hrefPreview='https://sicureseguros.com.br/'
              hrefGitHubFrontend='https://github.com/thomasalbuquerque/sicure-seguros'
              hrefGitHubBackend=''
            />
            <Card
              imgUrl='./listen-songs-logo.png'
              title='Listen Songs Backend'
              description={Translation[localeTransitionIndex].portfolioListenSongsProjectDescription}
              hrefPreview=''
              hrefGitHubFrontend=''
              hrefGitHubBackend='https://github.com/thomasalbuquerque/listen-songs-backend/'
            />
          </div>
        </div>
      </section>
    </>
  );
}
