export const navButtons = [
  {
    title: "Home",
    redirect: "#home",
  },
  {
    title: "Experience",
    redirect: "#experience",
  },
  {
    title: "Projects",
    redirect: "#projects",
  },
  {
    title: "Contact",
    redirect: "#contact",
  },
] as const;

export const tagSkills = [
  { tag: "Typescript", experienceTime: 3, expertise: 5, type: "hard" },
  { tag: "NestJS", experienceTime: 3, expertise: 5, type: "hard" },
  { tag: "Node", experienceTime: 4, expertise: 5, type: "hard" },
  { tag: "TDD", experienceTime: 3, expertise: 4, type: "hard" },
  { tag: "Jest", experienceTime: 3, expertise: 4, type: "hard" },
  { tag: "API Rest", experienceTime: 3.5, expertise: 4, type: "hard" },
  { tag: "React", experienceTime: 4.5, expertise: 5, type: "hard" },
  { tag: "Postgres", experienceTime: 3, expertise: 4, type: "hard" },
  { tag: "MongoDB", experienceTime: 1, expertise: 2, type: "hard" },
  { tag: "Neo4j", experienceTime: 1, expertise: 3, type: "hard" },
  { tag: "SQL", experienceTime: 3.5, expertise: 3, type: "hard" },
  { tag: "NoSQL", experienceTime: 1.5, expertise: 3, type: "hard" },
  { tag: "GCP", experienceTime: 2, expertise: 3, type: "hard" },
  { tag: "Firebase", experienceTime: 2, expertise: 4, type: "hard" },
  { tag: "AWS", experienceTime: 2, expertise: 2, type: "hard" },
  { tag: "SOLID", experienceTime: 3, expertise: 4, type: "hard" },
  {
    tag: "MVC",
    experienceTime: 3,
    expertise: 4,
    type: "hard",
  },
  {
    tag: "Microservices",
    experienceTime: 1,
    expertise: 3,
    type: "hard",
  },
  { tag: "Clean Code", experienceTime: 4, expertise: 4, type: "hard" },
  { tag: "NextJS", experienceTime: 0.2, expertise: 2, type: "hard" },
  { tag: "Tailwind", experienceTime: 0.2, expertise: 2, type: "hard" },
  { tag: "Javascript", experienceTime: 4.5, expertise: 5, type: "hard" },
  { tag: "Communication", experienceTime: 0, expertise: 5, type: "soft" },
  { tag: "Teamwork", experienceTime: 0, expertise: 5, type: "soft" },
  { tag: "Python", experienceTime: 2, expertise: 4, type: "hard" },
  {
    tag: "Problem solver",
    experienceTime: 0,
    expertise: 4,
    type: "soft",
  },
  // { tag: "Proactive", experienceTime: 0, expertise: 5, type: "soft" },
];

export const LINKEDIN_URL = "https://www.linkedin.com/in/davidson-de-faria/";
export const GITHUB_URL = "https://github.com/davidsondefaria";

export const aboutText: any = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: "My journey in tech kicked off in the world of ",
          nodeType: "text",
        },
        {
          data: {},
          marks: [{ type: "italic" }],
          value: "Computational Physics",
          nodeType: "text",
        },
        {
          data: {},
          marks: [],
          value: ", where I first got my hands on C and ",
          nodeType: "text",
        },
        {
          data: {},
          marks: [{ type: "bold" }],
          value: "JavaScript",
          nodeType: "text",
        },
        {
          data: {},
          marks: [],
          value:
            ". I dove into multi-disciplinary projects, notably developing an interactive ",
          nodeType: "text",
        },
        {
          data: {},
          marks: [{ type: "italic" }],
          value: "web game for children with autism",
          nodeType: "text",
        },
        {
          data: {},
          marks: [],
          value: ". This project was pivotal, igniting my passion for ",
          nodeType: "text",
        },
        {
          data: {},
          marks: [{ type: "bold" }],
          value: "web development",
          nodeType: "text",
        },
        { data: {}, marks: [], value: ".", nodeType: "text" },
      ],
      nodeType: "paragraph",
    },
    { data: {}, marks: [], value: "\n", nodeType: "text" },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: "I began as a Frontend Developer in 2019 and transitioned to ",
          nodeType: "text",
        },
        {
          data: {},
          marks: [{ type: "bold" }],
          value: "Fullstack",
          nodeType: "text",
        },
        {
          data: {},
          marks: [],
          value:
            " in 2020. This shift allowed me to work on various stimulating projects, including a sales website, an NFT subscription platform, and an ",
          nodeType: "text",
        },
        { data: {}, marks: [{ type: "bold" }], value: "AI", nodeType: "text" },
        { data: {}, marks: [], value: " initiative.", nodeType: "text" },
      ],
      nodeType: "paragraph",
    },
    { data: {}, marks: [], value: "\n", nodeType: "text" },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "When I'm not coding, I'm likely gaming, binge-watching series, or delving into the depths of dungeons in D&D. ",
          nodeType: "text",
        },
        {
          data: {},
          marks: [{ type: "strike" }],
          value: "Yep, I embrace my inner nerd!",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
  ],
  nodeType: "document",
};

export const experienceData = [
  {
    type: "professional",
    title: "Fullstack Developer",
    company: "Crowdform",
    location: "Remote",
    descriptions: [
      {
        item: "Develop innovative AI-driven products to optimize, automate, and revolutionize various industrial and consumer applications.",
        subitem: [
          "Firebase: Firestore & Functions & Stripe Extension",
          "OpenAI API & ElevenLabs",
        ],
      },
      {
        item: "Develop Progressive Web Apps to deliver the best mobile and desktop experiences in applications that require security, multifunctionality and optimization.",
        subitem: [
          "Authentication: Magic Auth & Firebase.",
          "Core server: NestJS & Postgres.",
          "Connection with Web3 and crypto contracts.",
        ],
      },
      {
        item: "Responsable for delivering a sophisticated back-end system that provides authentication, data management and notifications for multiple mobile applications.",
        subitem: [
          "Web Portal for user management: ReactJS & Auth0.",
          "Content Manager System: Strapi CMS & PostgreSQL",
          "Core server connecting every system: NestJS & Node & TypeScript & Neo4j & n8n",
        ],
      },
    ],
    dates: {
      start: "03/2021",
      end: "09/2023",
    },
  },
  {
    type: "professional",
    title: "Junior Developer",
    company: "Grupo Jovem Pan",
    location: "Sao Paulo, Brazil",
    descriptions: [
      {
        item: "Crafting an intuitive CMS solution for internal operations.",
        subitem: [
          "Frontend Development: Javascript, React, Styled Components.",
        ],
      },
      {
        item: "Data Engineering and Analysis of social media.",
        subitem: [
          "Structuring of databases and data lakes: AWS S3 & Airflow",
          "Extraction, manipulation and analysis of large amount of data: Python.",
          "Cleaning, merging and migration of databases: MySQL & PostgresSQL.",
        ],
      },
      {
        item: "Crafted an engaging sales website to showcase company products.",
        subitem: [
          "Frontend Development: Javascript & React & MaterialUI & Redux",
          "Backend Development: Node & Typescript & MongoDB",
        ],
      },
    ],
    dates: {
      start: "06/2019",
      end: "03/2021",
    },
  },
  {
    type: "education",
    title: "Bachelor: Computational Physics",
    company: "Universidade Federal Fluminense - UFF",
    location: "Volta Redonda - RJ, Brazil",
    descriptions: [
      {
        item: "Internship: ADACA - Game Development for Autistic Children.",
        subitem: [
          "Scientific internship whose objective was the development of web games for children with autism.",
          "Capture information needed for an analysis of children's educational development.",
          "Javascript & HTML5 & CSS & JQuery & AJAX & Java",
        ],
        reference: "https://adaca.com.br/",
      },
      {
        item: "Bachelor Thesis: Hybrid Computational Model for studying the spread of HIV",
        subitem: [
          "Hybrid Model: Intra-host Simulation & Agent-based Model.",
          "C & Graphs & Data Structure & Differential equations.",
        ],
        reference:
          "https://drive.google.com/file/d/1sZ2NMrGbIwIcnKEzxlM3jjcPEpTJ1D33/view?usp=sharing",
      },
      {
        item: "Educational projects",
        subitem: [
          "Optimization and parallelization of neural networks for cortical maps applied to autistic children brain: C & OpenMP & Kohonen Maps.",
          "Development of a molecular dynamics simulation software in C.",
          "Machine learning applied in the stock market: Python & Sklearn & Pandas.",
        ],
      },
    ],
    dates: {
      start: "03/2012",
      end: "12/2018",
    },
  },
  {
    type: "courses",
    title: "Data Engineer Nanodegree Program",
    company: "Udacity",
    location: "Online",
    reference: "https://confirm.udacity.com/75E749SD",
    descriptions: [
      {
        item: "Data models designs, data warehouses and data lakes building, data pipelines automatization and massive datasets handling.",
        subitem: [
          "Data Manipulation and Modeling: Python & Cassandra & PostgreSQL",
          "Build ETL pipelines for data lakes and data warehouse: Spark & AWS S3 & Redshift & Airflow",
        ],
      },
    ],
    dates: {
      start: "10/2019",
      end: "02/2020",
    },
  },
  {
    type: "courses",
    title: "NestJS Fundamentals",
    company: "NestJS, Trilon, LLC",
    location: "Online",
    descriptions: [
      {
        item: "Build REST API applications with NestJS.",
        subitem: ["Typescript & TypeORM & Dependency Injection & Testing"],
      },
    ],
    dates: {
      start: "04/2021",
      end: "05/2021",
    },
  },
  {
    type: "courses",
    title: "O curso completo de Banco de Dados e SQL, sem mistérios!",
    company: "Udemy",
    location: "Online",
    reference:
      "https://www.udemy.com/certificate/UC-ba5e0ea3-28ea-44a2-83dc-ca7783c776cb/",
    descriptions: [
      {
        item: "Create, Model and Manage SQL databases.",
        subitem: ["MySQL & SQL Server & Oracle."],
      },
    ],
    dates: {
      start: "08/2020",
      end: "09/2020",
    },
  },
  {
    type: "courses",
    title: "Redes Neurais Artificiais em Python",
    company: "Udemy",
    location: "Online",
    reference:
      "https://www.udemy.com/certificate/UC-1e53a2ad-dca0-4d9a-9c43-adc6f3d896c6/",
    descriptions: [
      {
        item: "Neural Networks Fundamentals",
        subitem: ["Perceptron & Multilayer Neural Networks & Python"],
      },
    ],
    dates: {
      start: "09/2020",
      end: "10/2020",
    },
  },
  {
    type: "courses",
    title: "NLP - Natural Language Processing with Python",
    company: "Udemy",
    location: "Online",
    reference:
      "https://www.udemy.com/certificate/UC-f85b60c0-188f-4b8b-9464-82dbba0cd072/",
    descriptions: [
      {
        item: "NLP Fundamentals",
        subitem: [
          "Machine Learning & Spacy & NLTK & SciKit-Learn & Deep Learning & Python",
        ],
      },
    ],
    dates: {
      start: "10/2020",
      end: "10/2020",
    },
  },
  {
    type: "courses",
    title: "Formação Cientista de Dados com Python e R",
    company: "Udemy",
    location: "Online",
    reference:
      "https://www.udemy.com/certificate/UC-7c104bd7-0529-413d-93cc-06c01369450e/",
    descriptions: [
      {
        item: "Data Science Fundamentals",
        subitem: [
          "Predict Models: Deep Learning & Neural Network & Time-series",
          "Probability & Statistics: Python & R",
          "Data Structure: Graphs",
          "NLP: Text Mining and Processing",
          "Data Treatment: Cleaning & Modeling & Visualization",
          "Data Engineering: MongoDB & PostgreSQL",
        ],
      },
    ],
    dates: {
      start: "12/2020",
      end: "02/2021",
    },
  },
  {
    type: "courses",
    title: "Design Patterns em TypeScript: Entendendo Padrões de Projetos",
    company: "Udemy",
    location: "Online",
    reference:
      "https://www.udemy.com/certificate/UC-7303a752-b5be-4da6-8c50-c38ec327fb7b/",
    descriptions: [
      {
        item: "GoF Design Patterns Fundamentals.",
        subitem: [
          "Creational: Factory Method & Abstract Factory & Builder.",
          "Structural: Adapter & Bridge.",
          "Behavioral: Chain of Responsibility.",
          "SOLID principles.",
        ],
      },
    ],
    dates: {
      start: "10/2023",
      end: "11/2023",
    },
  },
  {
    type: "courses",
    title: "PRO FIGMA | UI DESIGN com Figma do Zero ao especialista 2023",
    company: "Udemy",
    location: "Online",
    reference:
      "https://www.udemy.com/certificate/UC-7303a752-b5be-4da6-8c50-c38ec327fb7b/",
    descriptions: [
      {
        item: "Figma Fundamentals.",
        subitem: ["Create interface prototypes with Figma tools."],
      },
      {
        item: "UI Design Fundamentals.",
        subitem: [
          "UI & UX Design & Workflows.",
          "Web Design & Style Guides & Design Systems.",
          "Mobile Apps Design.",
        ],
      },
    ],
    dates: {
      start: "10/2023",
      end: "11/2023",
    },
  },
];

export const projectsData = [
  {
    id: 1,
    type: "Study",
    title: "My portfolio",
    description: "My personal website to show my skills and learn new ones.",
    tags: ["NextJS", "Tailwind", "Typescript", "FramerMotion", "Vercel"],
    gitUrl: "https://github.com/davidsondefaria/davidson",
    previewUrl: "https://www.davidsondefaria.me/",
    imageUrl: "/images/projects/example.png",
  },
  {
    id: 2,
    type: "Freelancer",
    title: "Fluens School",
    description: "Level and learning tests for a English language school.",
    tags: ["NextJS", "Tailwind", "Typescript", "Notion", "Vercel"],
    previewUrl: "https://testes.fluensschool.com.br/",
    imageUrl: "/images/projects/fluensschool.png",
  },
];
