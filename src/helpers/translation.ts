interface TranslationType {
  [key: string]: {
    websiteTitle: string;
    websiteDescriptionContent: string;
    flagUrl: string;
    aboutMe: string;
    portfolio: string;
    contact: string;
    frontendDeveloper: string;
    profilePicAlt: string;
    heroSectionDescription: string;
    aboutMeTexts: { id: number, title: string, description: string }[];
    portfolioThomasAlbuquerqueProjectDescription: string;
    portfolioCoinCalcProjectDescription: string;
    portfolioSicureProjectDescription: string;
    contactDescription: string;
    contactViewLinkedinProfileButton: string;
    contactCopyEmailButton: string;
    contactCopyEmailMessage: string;
    contactViewGitHubButton: string;
    backToTopBack: string,
    backToTopToTop: string,
  };
};

export const Translation: TranslationType = {
  enUS: {
    websiteTitle: 'Thomas Albuquerque Portfolio',
    websiteDescriptionContent: 'Portfolio site for a front-end web developer named Thomas Albuquerque',
    flagUrl: './USflag.png',
    aboutMe: 'About Me',
    portfolio: 'Portfolio',
    contact: 'Contact',
    frontendDeveloper: 'Frontend Developer',
    profilePicAlt: 'Developer profile picture',
    heroSectionDescription: `Hello, how are you? My name is Thomas Albuquerque, and I am a Frontend Developer who is continuously studying, working on personal projects, freelancing, and seeking an opportunity as a Junior Frontend Developer.

    I develop Frontend applications using React, Next.js, Typescript, Javascript, Tailwindcss, and Sass. I have also developted some Full Stack applications using ExpressJS and Sequelize for the backend, with Postgres database.
    
    Below are some more details about me and projects I have completed. If you think I can contribute to your projects, I am available for a conversation. :)`,

    aboutMeTexts: [
      {
        id: 1,
        title: 'Personal',
        description: `Sharing a bit about myself, I live in Caçapava, SP, Brazil. I enjoy spending time at home with my family, playing online games with friends, taking care of my pets (cats and dogs), and traveling occasionally.

        Overall, I am easygoing and always open to meeting new people and experiencing different realities.`,
      },
      {
        id: 2,
        title: 'Education',
        description: `Regarding my education, I have a degree in Computing (Bachelor's in Science and Technology), where I learned the foundations and fundamentals of computer science, such as:

        Programming logic, data structures, object-oriented programming, among others.`,
      },
      {
        id: 3,
        title: 'Experience',
        description: `I have programming experience within the marketing field, where part of my job involved manipulating HTML emails, performing code optimizations, and preparing audiences using SQL language.

        Furthermore, I have experienced working on team projects, and I have even led some of them. It was common for me to manage delivery schedules using a methodology similar to Scrum.
        
        Although it is a different area of programming, I believe that these experiences will help me in this new field I am transitioning to, which is Web Development.`,
      },
      {
        id: 4,
        title: 'Current Status',
        description: `Recently, I completed a Full Stack Web Development course at OneBitCode school, where I learned to develop complete applications, including databases, backend, and frontend.

        Even though my initial focus was to become a frontend developer, practicing these other areas of Full Stack development has greatly helped me in understanding a web application as a whole.
        
        Currently, I continue to work on personal projects and projects for clients, with the goal of practicing, learning more, and gaining experience.`,
      },
    ],

    portfolioThomasAlbuquerqueProjectDescription: 'Development of this portfolio website.',
    portfolioCoinCalcProjectDescription: 'Full Stack development of a currency conversion application.',
    portfolioSicureProjectDescription: 'Website development for an insurance broker. It is still under development.',
    contactDescription: 'If you believe that I can contribute to your projects, please send me a message on LinkedIn or email me at thomasalbuquerque@proton.me. I will be available to assist you. :)',
    contactViewLinkedinProfileButton: 'View Profile',
    contactCopyEmailButton: 'Copy Email',
    contactCopyEmailMessage: 'Copied!',
    contactViewGitHubButton: 'View GitHub',
    backToTopBack: 'Back',
    backToTopToTop: 'to top',

  },
  ptBR: {
    websiteTitle: 'Thomas Albuquerque Portfólio',
    websiteDescriptionContent: 'Site de portfólio de um desenvolvedor web front-end chamado thomas albuquerque',
    flagUrl: './BRflag.png',
    aboutMe: 'Sobre Mim',
    portfolio: 'Portfólio',
    contact: 'Contato',
    frontendDeveloper: 'Desenvolvedor Frontend',
    profilePicAlt: 'Foto de perfil do desenvolvedor',
    heroSectionDescription: `Olá, tudo bem? Me chamo Thomas Albuquerque, e sou um Desenvolvedor Frontend que está continuamente estudando, fazendo projetos próprios, trabalhando como freelancer e buscando uma oportunidade como Desenvolvedor Frontend Júnior.

    Desenvolvo aplicações Frontend utilizando React, Next.js, Typescript, Javascript, Tailwindcss e Sass. Já desenvolvi algumas aplicações Full Stack utilizando ExpressJS e Sequelize para o Backend, com banco de dados Postgres.
    
    Abaixo estão mais algumas informações sobre mim e projetos realizados. Caso ache que eu possa contruibuir com seus projetos, fico à disposição para uma conversa. :) `,

    aboutMeTexts: [
      {
        id: 1,
        title: 'Pessoal',
        description: `Contando um pouco sobre mim, moro em Caçapava, SP, gosto de ficar em casa com minha família, jogar online com amigos, cuidar dos meus pets (gatos e cachorros) e viajar de vez em quando.
        
        No geral sou bem tranquilo, sempre aberto a conhecer novas pessoas e realidades diferentes.`,
      },
      {
        id: 2,
        title: 'Formação',
        description: `Sobre minha formação, possuo graduação em computação (Bacharelado em Ciência e Tecnologia), onde aprendi toda a base e fundamentos da computação, como:
        
        Lógica de programação, estrutura de dados, orientação a objetos, entre outros.`,
      },
      {
        id: 3,
        title: 'Experiência',
        description: `Possuo experiência de programação dentro do Marketing, e era parte do meu trabalho manipular html’s de emails, fazer dinamizações no código e preparar audiências utilizando a linguagem SQL.
    
        Além disso, vivenciei projetos em equipe, tendo liderado alguns deles, e era comum eu fazer o gerenciamento das pautas de entrega em um modelo parecido com o Scrum.
        
        Mesmo sendo outra área da programação, acredito que estas vivências irão me ajudar nesta nova área para a qual estou migrando, que é o Desenvolvimento Web.`,
      },
      {
        id: 4,
        title: 'Momento Atual',
        description: `Recentemente completei um curso de Desenvolvimento Web Full Stack na escola OneBitCode, onde aprendi a desenvolver aplicações completas, incluindo banco de dados, backend e frontend.
    
        Mesmo com meu foco inicial de se tornar um programador frontend, praticar estas outras áreas do desenvolvimento Full Stack me ajudou muito a entender uma aplicação web como um todo.
    
        Atualmente sigo desenvolvendo projetos pessoais e para clientes, com o foco de praticar, aprender mais e adquirir experiência.`,
      },
    ],

    portfolioThomasAlbuquerqueProjectDescription: 'Desenvolvimento deste site de portfólio.',
    portfolioCoinCalcProjectDescription: 'Desenvolvimento Full Stack de uma aplicação de conversão de moedas.',
    portfolioSicureProjectDescription: 'Desenvolvimento do site de uma corretora de seguros. Segue em desenvolvimento.',
    contactViewLinkedinProfileButton: 'Acessar Perfil',
    contactDescription: 'Caso considere que eu possa contribuir com seus projetos, por favor me envie uma mensagem no LinkedIn ou no e-mail thomasalbuquerque@proton.me que estarei à disposição. :)',
    contactCopyEmailButton: 'Copiar Email',
    contactCopyEmailMessage: 'Copiado!',
    contactViewGitHubButton: 'Acessar GitHub',
    backToTopBack: 'Voltar',
    backToTopToTop: 'ao topo',
  }
}