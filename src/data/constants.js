import ghobashLogo from "../images/companies/ghobash.png";
import mindsquareLogo from "../images/companies/mindsquare.png";
import tapupLogo from "../images/companies/tapup.png";

export const Bio = {
  name: "Navneet Chaurasiya",
  roles: [
    "AI Full Stack Developer",
    "Backend Specialist",
    "Frontend & Mobile Developer",
    "System Architecture Design",
  ],
  description:
    "AI Full Stack Developer with 5+ years of experience building end-to-end products across web and mobile. I design scalable backends with Node.js, NestJS, and FastAPI, and craft polished frontends with React, Next.js, Angular, and React Native. Specialized in backend engineering, microservices, cloud platforms, AI-powered features, and real-time systems — delivering secure, high-performance applications from idea to production.",
  github: "https://github.com/Navneetoo7",
  resume:
    "https://drive.google.com/file/d/1hmwqrXJxACjm9kL3VFqek_xNrdYKzVi9/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/navneetoo7/",
  insta:
    "https://instagram.com/nef__oo7?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Go",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React Native",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "React.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Angular",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Redux",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "TailwindCSS",
        image: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Nest.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Express.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "FastAPI",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "GraphQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "Socket.IO",
        image: "https://socket.io/images/logo.svg",
      },
      {
        name: "RabbitMQ",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
      },
    ],
  },
  {
    title: "Databases & Cache",
    skills: [
      {
        name: "PostgreSQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Docker",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Azure",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "Cloudflare",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ghobashLogo,
    role: "Full Stack Developer",
    company: "Ghobash Group",
    date: "June 2025 - Present",
    desc: "Building enterprise-level applications for automation, reporting, and cross-department communication.",
    points: [
      "Developed 4 major enterprise applications that improved automation, reporting, and system communication across departments.",
      "Built a FastAPI dashboard with authentication to manage product pricing, purchases, and analytics — improving data accessibility and operational visibility.",
      "Created a smart barcode generation solution for Oracle ERP using Express.js, enabling invoice-based barcode generation and secure bill download after scan.",
      "Engineered an automated mail service with Node.js, Redis, Bull Queue, and Azure Blob Storage that processes nightly billing data and delivers consolidated email summaries at 8 AM with 99.9% delivery success.",
      "Led an internal enterprise management hub integrating Adrenaline, Smart Recruiter, Adhoc Requests, Visa Management, and Asset Issuance into one platform.",
      "Designed Nest.js microservices with gRPC, Kong API Gateway, and a Next.js frontend — reducing cross-department workflow time by ~40%.",
    ],
    skills: [
      "Nest.js",
      "Next.js",
      "PostgreSQL",
      "MySQL",
      "Socket.IO",
      "Bull Queue",
      "Redis",
      "Docker",
      "gRPC",
      "Kong",
      "FastAPI",
      "Microservices",
      "Azure",
    ],
  },
  {
    id: 1,
    img: "https://www.google.com/s2/favicons?domain=voizzit.com&sz=128",
    role: "Full Stack Developer",
    company: "Voizzit Information Technology LLC",
    date: "February 2024 - June 2025",
    desc: "Built scalable OTT and AI-powered EdTech products with an international engineering team.",
    points: [
      "Developed a scalable OTT platform content management system as part of an 18-member international team.",
      "Architected backend services with Nest.js, PostgreSQL, and Bull Queue for efficient content delivery and background processing.",
      "Integrated OCR (Tesseract.js) and text-to-speech (ElevenLabs) to power audiobook and content extraction features.",
      "Built real-time features with Socket.IO and integrated payment gateway solutions for seamless transactions.",
      "Designed and deployed microservices to improve scalability and performance across the platform.",
      "Developed an AI-powered story creation feature for an EdTech product, enabling parents and children to collaboratively create books.",
    ],
    skills: [
      "Nest.js",
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Socket.IO",
      "Bull Queue",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Cloudflare",
    ],
  },
  {
    id: 2,
    img: mindsquareLogo,
    role: "Full Stack Developer",
    company: "MindSquare | Reliance Industries Limited",
    date: "September 2023 - February 2024",
    desc: "Delivered oil & energy applications with secure access and multi-level approval workflows.",
    points: [
      "Developed a microservice subscription portal enabling sectors to securely access services via tokens.",
      "Built a maintenance management application for oil and gas equipment with multi-level approval workflows.",
      "Implemented danger-level calculation and approval tracking to improve operational safety and decision-making.",
      "Delivered full-stack features using TypeScript, Angular, Node.js, and MySQL in a production enterprise environment.",
    ],
    skills: ["TypeScript", "Angular", "Node.js", "MySQL"],
  },
  {
    id: 3,
    img: "https://www.google.com/s2/favicons?domain=oneture.com&sz=128",
    role: "Software Engineer",
    company: "Oneture Technologies",
    date: "February 2022 - March 2023",
    desc: "Built banking/FinTech ATM operations platforms used by 60,000+ users daily.",
    points: [
      "Developed ATM operation management applications serving 60,000+ daily users across multiple banks including SBI and UCO.",
      "Built mobile and web applications for ATM-related activities using TypeScript, React Native, Angular, and Redux.",
      "Reduced service calls by ~40% by improving workflows and reliability for day-to-day ATM operations.",
      "Led development of a security-focused Angular web application for ATM activities and Securam lock operations.",
    ],
    skills: [
      "TypeScript",
      "React Native",
      "Angular",
      "React.js",
      "Redux",
      "Node.js",
    ],
  },
  {
    id: 4,
    img: tapupLogo,
    role: "Full Stack Developer",
    company: "Tapup",
    date: "November 2020 - February 2022",
    desc: "Built e-commerce, social networking, and caregiving products across web and mobile.",
    points: [
      "Developed an e-commerce platform with product, cart, and order flows using modern full-stack technologies.",
      "Built a social media application with features similar to Instagram and Clubhouse for networking and engagement.",
      "Created cross-platform caregiving service applications using React Native and Node.js.",
      "Worked across React Native, Next.js, Redux, Context API, Node.js, and Django to ship production features.",
    ],
    skills: [
      "React Native",
      "Next.js",
      "Redux",
      "Context API",
      "Node.js",
      "Django",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://image-static.collegedunia.com/public/college_data/images/logos/1709543727PHCETLogo21.png?h=71.17&w=71.17&mode=stretch",
    school: "Mumbai University — MES Pillai HOC College of Engineering",
    date: "2017 - 2020",
    desc: "Completed Bachelor of Engineering in Computer Engineering with a focus on software development and systems design.",
    degree: "B.E. in Computer Engineering",
  },
  {
    id: 1,
    img: "https://www.vidyavision.com/CollegeUploads/Logos/2017-20-11-15-03-27_VIT.png",
    school: "Vidyalankar Polytechnic",
    date: "Apr 2015 - Apr 2017",
    desc: "Completed Diploma in Computer Engineering, building a strong foundation in programming and computer systems.",
    degree: "Diploma in Computer Engineering",
  },
];
