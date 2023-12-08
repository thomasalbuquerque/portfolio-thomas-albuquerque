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
    aboutMeTexts: { id: number; title: string; description: string }[];
    portfolioThomasAlbuquerqueProjectDescription: string;
    portfolioCoinCalcProjectDescription: string;
    portfolioSicureProjectDescription: string;
    pipetubeProjectDescription: string;
    contactDescription: string;
    contactViewLinkedinProfileButton: string;
    contactCopyEmailButton: string;
    contactCopyEmailMessage: string;
    contactViewGitHubButton: string;
    backToTopBack: string;
    backToTopToTop: string;
  };
}

export const Translation: TranslationType = {
  enUS: {
    websiteTitle: 'Thomas Albuquerque Portfolio',
    websiteDescriptionContent: 'Portfolio site for a backend web developer named Thomas Albuquerque',
    flagUrl: './USflag.png',
    aboutMe: 'About Me',
    portfolio: 'Portfolio',
    contact: 'Contact',
    frontendDeveloper: 'Backend Developer',
    profilePicAlt: 'Developer profile picture',
    heroSectionDescription: `Hello, how are you? My name is Thomas Albuquerque, and I am a Backend Developer who is constantly studying, working on personal projects, and working as a Junior Backend Developer at Astro Cash.

        I develop Backend applications using Node.js, Typescript, MongoDB, Prisma, Express, PostgreSQL, among others. I have also developed some Frontend applications using React.js, Next.js, Typescript, Tailwindcss, and Sass.
    `,

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
        
        Although it is a different area of programming, I believe that these experiences will help me transition to Web Development.`,
      },
      {
        id: 4,
        title: 'Current Status',
        description: `Recently, I completed a Full Stack Web Development course at OneBitCode school, where I learned to develop complete applications, including databases, backend, and frontend.

        While making personal projects and for some freelancer clients, I got a job as a Junior Backend Developer at Astro Cash, where I am currently working.`,
      },
    ],

    portfolioThomasAlbuquerqueProjectDescription: 'Development of this portfolio website.',
    portfolioCoinCalcProjectDescription: 'Full Stack development of a currency conversion application.',
    portfolioSicureProjectDescription: 'Website development for an insurance broker. It is still under development.',
    pipetubeProjectDescription: 'Personal project of a YouTube-like video platform, to practice my frontend skills.',
    contactDescription:
      'If you believe that I can contribute to your projects, please send me a message on LinkedIn or email me at thomasalbuquerque@proton.me. I will be available to assist you. :)',
    contactViewLinkedinProfileButton: 'View Profile',
    contactCopyEmailButton: 'Copy Email',
    contactCopyEmailMessage: 'Copied!',
    contactViewGitHubButton: 'View GitHub',
    backToTopBack: 'Back',
    backToTopToTop: 'to top',
  },
  ptBR: {
    websiteTitle: 'Thomas Albuquerque Portfólio',
    websiteDescriptionContent: 'Site de portfólio de um desenvolvedor web back end chamado Thomas Albuquerque',
    flagUrl: './BRflag.png',
    aboutMe: 'Sobre Mim',
    portfolio: 'Portfólio',
    contact: 'Contato',
    frontendDeveloper: 'Desenvolvedor Backend',
    profilePicAlt: 'Foto de perfil do desenvolvedor',
    heroSectionDescription: `Olá, tudo bem? Me chamo Thomas Albuquerque, e sou um Desenvolvedor Backend que está continuamente estudando, fazendo projetos próprios e trabalhando como Desenvolvedor Backend Júnior na Astro Cash.

    Desenvolvo aplicações Backend utilizando Node.js, Typescript, MongoDB, Prisma, Express, PostgreSQL, entre outras. Já desenvolvi algumas aplicações Frontend utilizando React.js, Next.js, Typescript, Tailwindcss e Sass.`,

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
    
                Enquanto fazia projetos pessoais e para alguns clientes freelancers, consegui um emprego como desenvolvedor de back-end júnior na Astro Cash, onde estou trabalhando atualmente.`,
      },
    ],

    portfolioThomasAlbuquerqueProjectDescription: 'Desenvolvimento deste site de portfólio.',
    portfolioCoinCalcProjectDescription: 'Desenvolvimento Full Stack de uma aplicação de conversão de moedas.',
    portfolioSicureProjectDescription: 'Desenvolvimento do site de uma corretora de seguros. Segue em desenvolvimento.',
    pipetubeProjectDescription: 'Projeto pessoal de uma plataforma de vídeos semelhante ao YouTube, para praticar minhas habilidades frontend.',
    contactViewLinkedinProfileButton: 'Acessar Perfil',
    contactDescription:
      'Caso considere que eu possa contribuir com seus projetos, por favor me envie uma mensagem no LinkedIn ou no e-mail thomasalbuquerque@proton.me que estarei à disposição. :)',
    contactCopyEmailButton: 'Copiar Email',
    contactCopyEmailMessage: 'Copiado!',
    contactViewGitHubButton: 'Acessar GitHub',
    backToTopBack: 'Voltar',
    backToTopToTop: 'ao topo',
  },
};
