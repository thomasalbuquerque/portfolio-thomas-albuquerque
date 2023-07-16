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
      <section
        id="portfolioSection"
        className="text-gray"
        data-aos="fade-zoom-in"
        data-aos-duration={800}
        data-aos-offset={400}>
        {/* Container */}
        <div className="container mx-auto px-10 pt-24 sm:px-20">
          <h2 className="mx-auto py-4 text-3xl md:text-4xl font-monoTitle text-center">
            {Translation[localeTransitionIndex].portfolio}
          </h2>
          {/* Flex Items*/}
          <div className="flex flex-col sm:flex-wrap items-center justify-center pt-4 space-y-8 md:gap-4 md:space-y-0 md:flex-row">
            <Card
              imgUrl="./thomas-albuquerque-logo.png"
              title="Thomas Albuquerque"
              description={
                Translation[localeTransitionIndex]
                  .portfolioThomasAlbuquerqueProjectDescription
              }
              hrefPreview=""
              hrefGitHubFrontend="https://github.com/thomasalbuquerque/portfolio-thomas-albuquerque"
              hrefGitHubBackend=""
            />
            <Card
              imgUrl="./currency-converter.png"
              title="Currency Converter"
              description={
                Translation[localeTransitionIndex]
                  .portfolioCoinCalcProjectDescription
              }
              hrefPreview="https://coincalc-currency-converter.vercel.app/"
              hrefGitHubFrontend="https://github.com/thomasalbuquerque/currency-converter_frontend"
              hrefGitHubBackend="https://github.com/thomasalbuquerque/currency-converter_backend"
            />
            <Card
              imgUrl="./pipetube-logo.png"
              title="Pipe Tube"
              description={
                Translation[localeTransitionIndex].pipetubeProjectDescription
              }
              hrefPreview="https://pipe-tube-one.vercel.app/"
              hrefGitHubFrontend="https://github.com/thomasalbuquerque/pipe-tube/"
              hrefGitHubBackend=""
            />
            <Card
              imgUrl="./sicure-seg.png"
              title="Sicure Seguros"
              description={
                Translation[localeTransitionIndex]
                  .portfolioSicureProjectDescription
              }
              hrefPreview=""
              hrefGitHubFrontend=""
              hrefGitHubBackend=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
