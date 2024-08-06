import { Github, Twitter, Figma, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoAngular from "/public/images/logos/icon-angular.svg";
import LogoAngularLight from "/public/images/logos/icon-angular-light.svg";
import LogoAWS from "/public/images/logos/icon-aws.svg";
import LogoAWSLight from "/public/images/logos/icon-aws-light.svg";
import LogoMaterialUI from "/public/images/logos/icon-material-ui.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoReactNative from "/public/images/logos/icon-react-native.svg";

import LogoHussle from "/public/images/Hussle-Logo-Blue.png";
import WanderLogo from "/public/images/Wander-Logos-Primary.png";
import LogoDarkLearfield from "/public/images/LEARFIELD-blacklogo.png";
import LogoLightLearfield from "/public/images/Learfield-Logo-White.png";

import ProjectLiveVod from "/public/images/project-live-vod.png";
import ProjectHussleLive from "public/images/project-hussle-live-video-desktop.jpg";
import ProjectTicTacToe from "/public/images/project-tic-tac-toe.png";

import AvatarAj from "/public/images/avatar-AJ-Call-Brau.jpeg";
import AvatarJason from "/public/images/avatar-jason.jpg";
import AvatarStefano from "/public/images/avatar-stefano.jpg";
import AvatarAnna from "/public/images/avatar-anna.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/carterjpilling",
  LINKEDIN: "https://www.linkedin.com/in/cj-pilling/",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/carterjpilling",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/cj-pilling/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Angular",
    logo: LogoAngular,
    darkModeLogo: LogoAngularLight,
    url: "https://angular.dev/",
  },
  {
    label: "Material UI",
    logo: LogoMaterialUI,
    url: "https://mui.com/material-ui/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "AWS",
    logo: LogoAWS,
    darkModeLogo: LogoAWSLight,
    url: "https://aws.amazon.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "React Native",
    logo: LogoReactNative,
    url: "https://reactnative.dev/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoHussle,
    logoAlt: "Hussle Technology logo",
    position: "Fullstack Software Developer",
    startDate: new Date(2021, 1),
    endDate: new Date(2024, 3),
    summary: [
      `Led the development of a live streaming platform, built in React, that contributed to 70% of SaaS content
revenue by integrating Shopify and various RESTful product APIs.`,
      `Demonstrated exceptional communication skills, fostering productive interactions with UI/UX designers,
engineers, product management teams, and clients.
`,
      `Working with UI/UX designers created several product landing pages and marketing materials.`,
    ],
  },
  {
    logo: WanderLogo,
    logoAlt: "Wander logo",
    position: "React Developer Intern",
    startDate: new Date(2020, 11),
    endDate: new Date(2021, 1),
    summary: [
      `Contributed to the early-stage development of Wander, an outdoor mapping company, focusing on building
interactive Web maps using map.js within the React framework`,
      `Integrated geospatial data into the maps, enabling users to visualize and interact with outdoor landmarks, routes,
and points of interest effectively`,
    ],
  },
  {
    logo: LogoDarkLearfield,
    darkModeLogo: LogoLightLearfield,
    logoAlt: "Learfield Logo",
    position: "Administrative Assistant",
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: [
      "Coordinated with Athletic Departments to create marketing events around major Sports including CFP Playoffs, Big 12 Basketball Tournament, Final Four 2019.",
      "Worked for C-Suite Exectutives handling traveling, quarterly reports, expenses.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "LIVE · VODs E-Commerce Tool",
    description:
      "A video e-commerce platform built to integrate directly on client sites, allowing them to sell products through recorded videos.",
    url: "https://www.shop.com/shop-live-video",
    previewImage: ProjectLiveVod,
    technologies: [
      "Angular",
      "Typescript",
      "Node.JS",
      "Express.js",
      "MongoDB",
      "NGRX",
      "AWS",
    ],
  },
  {
    name: "LIVE Shopping Platform",
    description:
      "A live streaming platform used by distributors to sell directly to their customers and prospects at any time. LIVE integrated with Hussle's CRM and e-commercse platform, spotify, and client product databases.",
    url: "https://hussle.tech/live/",
    previewImage: ProjectHussleLive,
    technologies: [
      "Angular",
      "Typescript",
      "NodeJS",
      "Express.js",
      "MongoDB",
      "Agora SDK",
      "WebSockets",
      "WebRTC",
      "RESTFul API",
      "Shopify",
    ],
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Project built for a coding challenge, a simple game of Tic-Tac-Toe. The challenge was to create a game that could be played against an unbeatable computer.",
    url: "https://cj-tic-tac-toe.netlify.app/",
    previewImage: ProjectTicTacToe,
    technologies: ["HTML", "CSS", "Javascript", "Netlify"],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Jason Matheny",
    personAvatar: AvatarJason,
    title: "CEO - Hussle Technology",
    testimonial: `I had the pleasure of working closely with CJ as his boss, who demonstrated exceptional skill and
professionalism as a front-end engineer. His contributions were instrumental in implementing
critical features, showcasing his talent and commitment to excellence.
<br/> <br/>CJ's role extended beyond technical execution; he actively participated in collaborative sessions with
clients, product teams, and stakeholders. His preparation and ability to present viable options greatly
enriched our decision-making process.
`,
  },
  {
    personName: "AJ Brau ",
    personAvatar: AvatarAj,
    title: "CEO & Founder - Wander",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Anna Inman",
    personAvatar: AvatarAnna,
    title: "Colleague - Verb Technology",
    testimonial: `I truly can't say enough great things about working with CJ. When I started at Verb, CJ and I were peers, we worked closely together during that time while I was managing projects and running scrum ceremonies with the engineering teams. From day 1 CJ both understood what was necessary from a technical perspective to successfully deliver what was expected - but further than that he took the time to understand the larger team and company-wide initiatives to ensure as he found technical solutions, they were truly solving the problem at hand. 
  <br/> <br/>
When I was moved to manage the engineering teams, CJ was one of the engineers I knew I could go to when tasked with more technical planning and resource allocation. His willingness to raise his hand and ask the question everyone else was silently thinking, his ability to complete tasks on time without fail, and the culture add he was to the team to get others sharing their thoughts / feelings / assumptions / preferences all set him apart as a leader on the engineering team. 
  <br/> <br/>
I would absolutely work with CJ again if given the opportunity!`,
  },
  {
    personName: "Stefano Martinengo",
    personAvatar: AvatarStefano,
    title: "Colleague - Hussle Technology",
    testimonial: `I had the privilege of working with CJ for 2 years recently. In that time he showed several attributes
  that I feel any company would find as valuable assets.
  <br/> <br/>
The first being work ethic. CJ shortly after starting out was put on a project that was complex and
required a pretty skilled mind. CJ proved to be an asset on that project despite constant changes that
were happening within that project. On that project, CJ bounced from working on a team, to being
the sole and lead developer on the project. <br/> <br/>
The second being his receptiveness to feedback as well as to giving feedback. CJ always took any
feedback and criticism with a cool head and receptive spirit. `,
  },
];
