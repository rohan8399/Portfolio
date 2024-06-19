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
    title: "Cloud Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Microsoft 365 Developer",
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
    title: "Software Developer",
    company_name: "General Mills",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2021 - August 2022",
    points: [
      "Automated data workflows with PowerApps and Microsoft Flows for SharePoint Online.",
      "Developed a PowerApps app for product content changes with approval workflows.",
      "Improved performance with Node.js and Python, boosting data speed by 25%.",
      "Streamlined CI/CD workflows and increased engagement with responsive SPAs.",
      


    ],
  },
  {
    title: "Software Developer",
    company_name: "Technetic Global Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "February 2020 - July 2021",
    points: [
      "Developed an Angular application for student learning, hosted on AWS with secure user login and DynamoDB.",
      "Enhanced operational efficiency by utilizing AWS Lambda for seamless application updates.",
      "Led the migration of legacy systems to modern web technologies, improving performance and maintainability.",
      "Built dashboards with Python, SQL, and Tableau, boosting team productivity by 15%.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Trivia Software",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2019 - August 2019",
    points: [
      "Developed the “Student Management System” using advanced Java SE 14 technologies.",
      "Implemented GUI with Swings and ORM with Hibernate for Oracle Database.",
      "Established efficient CRUD operations, reducing data entry errors by 40%.",
      "Enhanced software quality through thorough debugging and defect detection.",
      "Demonstrated strong inquisitiveness and hardworking nature in Java development."
    ],
  },
  /*{
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "",
    name: "AWS Developer Associate",
    designation: "",
    company: "",
    image: "/image.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "AWS Cloud Practioner",
    designation: "COO",
    company: "DEF Corp",
    image: "/image-2.png",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "CISCO",
    designation: "CTO",
    company: "456 Enterprises",
    image:"/da.png"
  },
];

const projects = [
  {
    name: "Admin Dashboard",
    description:
      "React-based dashboard application designed to provide a comprehensive overview of key metrics and data visualizations. The dashboard includes various charts, recent transactions, and geographic traffic analysis.",
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
    source_code_link: "https://github.com/rohan8399/React-Admin-Dashboard.git",
  },
  {
    name: "Realtime Data Streaming",
    description:
      "Building an end-to-end data engineering pipeline using Apache Airflow, Kafka, Spark, and Cassandra, fully containerized with Docker for seamless deployment and scalability.",
    tags: [
      {
        name: "apache",
        color: "blue-text-gradient",
      },
      {
        name: "cassandra",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rohan8399/DataStream_Project.git",
  },
  {
    name: "Healthcare Chatbot",
    description:
      "Developed a Telegram chatbot using Google Dialogflow that provides information on 4,700 types of medicines and answers over 43,000 FAQs, leveraging Google Cloud and webhooks for seamless integration with the Telegram app.",
    tags: [
      {
        name: "dialogflow",
        color: "blue-text-gradient",
      },
      {
        name: "gcp",
        color: "green-text-gradient",
      },
      {
        name: "webmd",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://t.me/Med_wbmd_bot",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
