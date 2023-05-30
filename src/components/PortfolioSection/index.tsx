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
        <div className="container mx-auto px-10 py-24 sm:px-20">
          <h2 className="mx-auto py-4 text-3xl md:text-4xl font-monoTitle text-center">
            Portfólio
          </h2>
          {/* Flex Items*/}
          <div className="flex flex-col flex-wrap items-center justify-center pt-4 space-y-8 md:gap-4 md:space-y-0 md:flex-row">
            <Card
              imgUrl="./thomas-albuquerque-logo.png"
              title="Thomas Albuquerque"
              description="Concepção, design e desenvolvimento deste site."
              hrefPreview=""
              hrefGitHub=""
            />
            <Card
              imgUrl="./sicure-seg.png"
              title="Sicure Seguros"
              description="Concepção, design e desenvolvimento do site de uma corretora de seguros."
              hrefPreview=""
              hrefGitHub=""
            />
            <Card
              imgUrl="./sicure-seg.png"
              title="Sicure Seguros"
              description="Concepção, design e desenvolvimento do site de uma corretora de seguros."
              hrefPreview=""
              hrefGitHub=""
            />
            <Card
              imgUrl="./sicure-seg.png"
              title="Sicure Seguros"
              description="Concepção, design e desenvolvimento do site de uma corretora de seguros."
              hrefPreview=""
              hrefGitHub=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
