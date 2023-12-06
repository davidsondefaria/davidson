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
  { tag: "NextJS", experienceTime: 1, expertise: 1, type: "hard" },
  { tag: "Tailwind", experienceTime: 1, expertise: 2, type: "hard" },
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
