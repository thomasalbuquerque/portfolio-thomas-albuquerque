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
    portfolioListenSongsProjectDescription: string;
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
    heroSectionDescription: `Hello, how are you? My name is Thomas Albuquerque, and I am a Backend Developer who is constantly studying, working on personal projects, and working as a Backend Developer at InfinityTec.
    
    I develop Backend applications using Node.js, Typescript, MongoDB, Prisma, Express, PostgreSQL, among others. I have also developed some Frontend applications using React.js, Next.js, and Tailwindcss.
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
        description: `I have programming experience within Marketing, and it was part of my job to manipulate email HTMLs and prepare audiences using SQL language.
        
        I also have experience as a Backend Developer, where I develop and maintain APIs and microservices in Node.js, Typescript, NestJS, Prisma, Express, and PostgreSQL. In personal and freelance projects, I have developed frontend applications using Next.js.
        
        Other technologies I frequently work with include AWS (EC2, S3, RDS), Docker, and Bull.`,
      },
      {
        id: 4,
        title: 'Current Status',
        description: `Currently, I am working as a Backend Developer at InfinityTec.`,
      },
    ],

    portfolioThomasAlbuquerqueProjectDescription: 'Development of this portfolio website.',
    portfolioCoinCalcProjectDescription: 'Full Stack development of a currency conversion application.',
    portfolioSicureProjectDescription: 'Website development for an insurance broker. It is still under development.',
    pipetubeProjectDescription: 'Personal project of a YouTube-like video platform, to practice my frontend skills.',
    portfolioListenSongsProjectDescription: 'A complete API built with NestJS that I developted at a previous job, but simplified and anonymized.',
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
    heroSectionDescription: `Olá, tudo bem? Me chamo Thomas Albuquerque, sou Desenvolvedor Backend e estou constantemente estudando, trabalhando em projetos pessoais e atuando como Desenvolvedor Backend na InfinityTec.

    Desenvolvo aplicações Backend utilizando Node.js, Typescript, MongoDB, Prisma, Express, PostgreSQL, entre outros. Também já desenvolvi algumas aplicações Frontend utilizando React.js, Next.js e Tailwindcss.`,

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
    
        Possuo também experiência como Desenvolvedor Backend, onde desenvolvo e mantenho API's e microsserviços em Node.js, Typescript, NestJS, Prisma, Express e PostgreSQL. Em projetos próprios e freelancers, já desenvolvi aplicações frontend utilizando Next.js.
        
        Outras tecnologias que mexo com frequência: AWS (EC2, S3, RDS), Docker e Bull.`,
      },
      {
        id: 4,
        title: 'Momento Atual',
        description: `Atualmente trabalho como Desenvolvedor Backend Júnior na InfinityTec.`,
      },
    ],

    portfolioThomasAlbuquerqueProjectDescription: 'Desenvolvimento deste site de portfólio.',
    portfolioCoinCalcProjectDescription: 'Desenvolvimento Full Stack de uma aplicação de conversão de moedas.',
    portfolioSicureProjectDescription: 'Desenvolvimento do site de uma corretora de seguros. Segue em desenvolvimento.',
    pipetubeProjectDescription: 'Projeto pessoal de uma plataforma de vídeos semelhante ao YouTube, para praticar minhas habilidades frontend.',
    portfolioListenSongsProjectDescription: 'Uma API completa feita com NestJS desenvolvida em um emprego anterior - mas simplificada e anonimizada.',
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
