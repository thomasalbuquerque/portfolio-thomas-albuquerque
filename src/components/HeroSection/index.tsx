import React from 'react';

export default function HeroSection() {
  return (
    <>
      <section id="hero" className="text-gray">
        {/* Flex Container */}
        <div className="container flex flex-col items-center lg:flex-row mt-10 px-6 py-20 lg:py-36 mx-auto space-y-16 lg:space-y-0 ">
          {/* Left Item */}
          <div className="flex md:w-2/5 lg:w-2/5 items-center">
            <img
              src="/profile-rounded.png"
              alt="Foto de perfil do desenvolvedor"
              className="w-auto max-h-60 sm:max-h-80 place-self-center"
            />
          </div>

          {/* Right Item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-3/5 lg:w-3/5">
            <h1 className="max-w-xl font-bold text-center text-3xl md:text-5xl lg:text-left font-monoTitle">
              Desenvolvedor Frontend
            </h1>
            <p className="max-w-4xl text-center lg:text-left font-monoText text-base md:text-xl">
              Olá, tudo bem? Me chamo Thomas Albuquerque, e sou um Desenvolvedor
              Frontend que está continuamente estudando, fazendo projetos
              próprios, trabalhando como freelancer e buscando uma oportunidade
              como Desenvolvedor Frontend Júnior.
              <br />
              <br />
              Desenvolvo aplicações Frontend utilizando ReactJS, NextJS,
              Typescript, Javascript, Tailwindcss e Sass. Já desenvolvi algumas
              aplicações Full Stack utilizando ExpressJS e Sequelize para o
              Backend, com banco de dados Postgres.
              <br />
              <br />
              Abaixo estão mais algumas informações sobre mim e projetos
              realizados. Caso ache que eu possa contruibuir com seus projetos,
              fico à disposição para uma conversa :{')'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
