import React, { ChangeEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactSection() {
  const [copyEmail, setCopyEmail] = useState('Copiar E-mail');
  const handleCopyEmailText = async () => {
    setCopyEmail('Copiado!');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCopyEmail('Copiar E-mail');
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="contactSection"
        className="text-gray"
        data-aos="fade-zoom-in"
        data-aos-duration={800}
        data-aos-offset={300}>
        <div className="container flex flex-col max-w-4xl mx-auto mt-24 px-10 py-14 sm:px-24 text-gray bg-gradient-to-b from-darkBlue to-transparent">
          <div className="font-monoTitle text-3xl md:text-4xl">Contato</div>
          <div className="text-base md:text-xl mt-10 font-monoText">
            Caso considere que eu possa contribuir com seus projetos, por favor
            envie-me uma mensagem no LinkedIn ou no e-mail
            thomasalbuquerque@proton.me que estarei à disposição. :)
          </div>
          {/* <div className=""> */}
          <div className="flex flex-col mt-9 gap-4 sm:flex-row sm:gap-4 sm:justify-around items-center text-sm md:text-base">
            <a
              href="https://www.linkedin.com/in/thomas-albuquerque-80412b137/"
              target="_blank"
              className="flex flex-colfont-monoText items-center hover:text-hoverGray cursor-pointer">
              <FontAwesomeIcon icon={faLinkedin} className="h-10 pr-4" />
              <div className="text-center">Acessar perfil</div>
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
              <div className="text-center">Acessar GitHub</div>
            </a>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
