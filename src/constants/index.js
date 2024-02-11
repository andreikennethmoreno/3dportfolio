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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Front End Developer",
      icon: backend,
    },
    {
      title: "3D artist and Illustrator",
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
 
   
    
  ];
  
  const experiences = [
    {
      title: "CS50x: Introduction to Computer Science",
      company_name: "Harvard University",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - December 2021",
      points: [
        "Fundamentals of programming in C, including control structures, data structures, and algorithms.",
        "Web development basics, including HTML, CSS, JavaScript, and SQL.",
        "Database design and management, including version control with Git and GitHub.",
        "Ethical and social implications of technology, along with problem-solving and critical thinking skills."
      ],
    },
    {
      title: "CS50w: Web Programming with Python and JavaScript",
      company_name: "Harvard University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - September 2022",
      points: [
        "Designing and implementing dynamic web applications using Python, Flask, SQL, and NoSQL databases.",
        "Implementing responsive design and user experience best practices using HTML, CSS, Bootstrap, and JavaScript.",
        "Building scalable web applications using cloud services such as GitHub and Heroku.",
        "Understanding and implementing security best practices for web applications."
      ],
    },
    {
      title: "Full Stack PHP Developer",
      company_name: "Freelance",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2023 - Nov 2023",
      points: [
       "Developed and maintained full-stack web applications using PHP, MySQL, and Bootstrap.",
        "Implemented CRUD (Create, Read, Update, Delete) functionality for managing database records.",
        "Collaborated with clients to understand their requirements and delivered custom web solutions.",
        "Utilized Bootstrap to create responsive and user-friendly web designs."
      ],
    },
    {
      title: "Bachelor of Science in Computer Science",
      company_name: "Cavite State University Bacoor Campus",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Currently pursuing a Bachelor's degree in Computer Science at Cavite State University.",
        "Completed coursework in programming, algorithms, data structures, and computer systems.",
        "Gained experience in programming languages such as Python, Java, and C++.",
        "Developed problem-solving and critical thinking skills through various coding assignments and projects."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      name: "Lily Bogan",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      name: "Tini Cole",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      name: "Suzumo Yukuna",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Coming Soon",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Coming Soon",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",

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
      source_code_link: "https://github.com/",
    },
    {
      name: "Coming Soon",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",

      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };