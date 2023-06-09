import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './Card';

export default function PortfolioSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        id="PortfolioSection"
        className="text-gray"
        data-aos="fade-zoom-in"
        data-aos-duration={800}
        data-aos-offset={400}>
        {/* Container */}
        <div className="container mx-auto px-10 pt-24 sm:px-20">
          <h2 className="mx-auto py-4 text-3xl md:text-4xl font-monoTitle text-center">
            Portfólio
          </h2>
          {/* Flex Items*/}
          <div className="flex flex-col sm:flex-wrap items-center justify-center pt-4 space-y-8 md:gap-4 md:space-y-0 md:flex-row">
            <Card
              imgUrl="./thomas-albuquerque-logo.svg"
              title="Thomas Albuquerque"
              description="Desenvolvimento deste site de portfólio."
              hrefPreview=""
              hrefGitHubFrontend="https://github.com/thomasalbuquerque/portfolio-thomas-albuquerque"
              hrefGitHubBackend=""
            />
            <Card
              imgUrl="./currency-converter.png"
              title="Currency Converter"
              description="Desenvolvimento de uma aplicação de conversão de moedas."
              hrefPreview="https://currency-converter-frontend-beta.vercel.app/"
              hrefGitHubFrontend="https://github.com/thomasalbuquerque/currency-converter_frontend"
              hrefGitHubBackend="https://github.com/thomasalbuquerque/currency-converter_backend"
            />
            <Card
              imgUrl="./sicure-seg.png"
              title="Sicure Seguros"
              description="Desenvolvimento do site de uma corretora de seguros. Segue em desenvolvimento."
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
