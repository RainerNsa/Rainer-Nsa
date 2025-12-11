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
      title: "Product Manager",
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
      date: "Jan 2018 - Jan 2022 ",
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
        "Built reusable and component-based user interfaces using React.js library.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Integrated frontend components with backend services via RESTful APIs or GraphQL.",
        "Conducted unit testing and participated in code reviews to ensure code quality and reliability.",
      ],
    },
    {
      title: "Senior LLM Python + Node / React Engineer",
      company_name: "Turing Inc",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sept 2024 - Jul 2025",
      points: [
        "Developed scalable RESTful and GraphQL APIs using Node.js, reducing response times by 30% through optimized data structures and caching — enhancing system scalability and user interaction speed.",
        "Engineered and fine-tuned large language models (LLMs) in Python for content generation and data summarization, improving accuracy by 15% and reducing API errors by 20%, boosting client trust in AI-driven insights.",
        "Collaborated closely with stakeholders to translate business needs into technical requirements.",
        "Collaborated with cross-continental teams, translating technical specifications into production-grade systems that supported visualization-heavy, AI-integrated web apps.",
      ],
    },
    {
      title: "Senior Web Developer - AI Trainer",
      company_name: "micro1 ",
      icon: meta,
      iconBg: "#383E56",
      date: "Aug 2025 - Present",
      points: [
        "Supported the training and refinement of next generation AI models using expert level knowledge of full stack web development.",
        "Evaluated model output for accuracy, quality, depth, and reasoning in areas such as JavaScript, React, Node.js, REST APIs, state management, system design, and debugging.",
        "Created detailed grading reports for complex technical prompts, code review tasks, and architectural discussions, improving model reliability and performance.",
        "Contributed domain expertise used to improve a world class AI model that supports millions of users globally.",
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
      name: "Nkem Nwankwo",
      designation: "CTO",
      company: "PhCityRent",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Onboard",
      description:
        "Web-based platform that helps healthcare and life science businesses connect and comply with regulatory standards easily",
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
      source_code_link: "https://www.getonboard.africa/",
    },
    {
      name: "Infinity Health Africa",
      description:
        "A comprehensive suite of services aimed at addressing challenges faced by healthcare businesses across the continent.",      
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
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.infinityhealth.africa/",
    },
    {
      name: "Cerebro",
      description:
        "A comprehensive versatile web application that presents an accessible platform for software solutions catering to diverse user needs.",
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
  