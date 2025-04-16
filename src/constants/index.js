import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    discordBlack,
    facebook,
    instagram,
    twitter,
    telegram,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Project Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company_name: "Woldreamz Inc",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2018 - Aug 2022 ",
      points: [
        "Developed and maintained web applications using React.js, TypeScript, and Python for various internal and external projects.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Managed cross-platform data integration using Google Firebase to ensure seamless user experience across web and mobile platforms.",
      ],
    },
    {
      title: "Senior Front End Developer",
      company_name: "Infinity Health Africa",
      icon: tesla,
      iconBg: "#383E56",
      date: "Sept 2022 - Nov 2024",
      points: [
        "Build reusable and component-based user interfaces using React.js library.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Integrate frontend components with backend services via RESTful APIs or GraphQL.",
        "Conduct unit testing and participate in code reviews to ensure code quality and reliability.",
      ],
    },
    {
      title: "Senior Front End Developer",
      company_name: "Mahshel Soft Limited",
      icon: meta,
      iconBg: "#383E56",
      date: "Sept 2024 - Dec 2024",
      points: [
        "Directed multiple web development projects from initial client briefing to final deployment.",
        "Implemented a new administration panel for a purchasing agent business, boosting customer service efficiency by 90% and reducing operational overhead by 25%.",
        "Collaborated closely with stakeholders to translate business needs into technical requirements.",
        "Collaborated with cross-functional teams to ensure alignment on project goals and timely delivery of key features.",
      ],
    },
    {
      title: "Senior LLM Python + Node / React Engineer",
      company_name: "Turing Inc",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sept 2024 - Present",
      points: [
        "Designed, trained and optimized large language models using Python for high accuracy and performance",
        "Built and maintained RESTful/GraphQL APIs with Node.js for seamless LLM access and third-party integration.",
        "Documented code, pipelines, and processes for future scalability and knowledge continuity.",
        "Worked cross-functionally with data scientists, DevOps, and front-end developers to align on project goals and ensure scalability.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I harbored doubts about the chances of crafting a website as aesthetically pleasing as our product, yet Rainer effortlessly delivered.",
      name: "Irene Nwaukwa",
      designation: "CEO",
      company: "Infinity Health Africa",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "In my experience, I've yet to encounter a web developer who demonstrates the level of dedication to their clients' success that Rainer does.",
      name: "Bassey Ikpeme",
      designation: "COO",
      company: "United Mateni",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Following Rainer's optimization of our website, we witnessed a remarkable 50% surge in our traffic. Our gratitude towards him knows no bounds!",
      name: "Lisa Wang",
      designation: "Technical Director",
      company: "Turing Inc",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Krypto",
      description:
        "Web-based platform that allows users to engage with the crypto world, Using Web 3.0 methodologies, Solidity and Metamask producing a Web 3.0 Application - from start to finish.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://kryptoinc.vercel.app/",
    },
    {
      name: "House Hunter",
      description:
        "Web application that enables users to search for houses & properties listed, view estimated sale/rent ranges for listings, and locate available houses based on their current location.",      
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://househunters-ebon.vercel.app/",
    },
    {
      name: "Cerebro",
      description:
        "A comprehensive versatile web application for the sale of software services to the general public. it presents an accessible platform for software solutions catering to diverse user needs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://cerebroai.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };

  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "https://discord.gg/X8wQgv68HD",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://x.com/Woldreamz",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/woldreamz/",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "https://t.me/woldreamz",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "https://www.facebook.com/reyonsa/",
    },
  ];
  