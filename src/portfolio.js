const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'UP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Umang Prajapati',
  role: 'MERN Stack Developer',
  // description:
    // 'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/umang-prajapati-1775a8280',
    github: 'https://github.com/umg026',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Consumer Reports',
    description:
      'Consumer Reports (CR), formerly Consumers Union (CU), is an American nonprofit consumer organization dedicated to independent product testing, investigative journalism, consumer-oriented research, public education, and consumer advocacy',
    stack: ['ReactJs', 'Laravel', 'Abodbe Analytics', 'SevlteJs'],
    // sourceCode: 'https://github.com/umg026/Url-shortner-node.js',
    livePreview: 'http://consumerreports.org/cars/used',
  },
  {
    name: 'Suhora',
    description:
      'A comprehensive website for Suhora, a space service provider company, designed and developed using React.js, Node.js, MySQL, and EJS.',
    stack: ['ReactJs', 'NodeJs', 'MySql', 'ejs'],
    // sourceCode: 'https://github.com',
     livePreview: 'https://suhora.com',
  },
  {
    name: 'CRM - Ai Sante',
    description:
      'AI Sante offers tailored CRM solutions for the pharmaceutical industry, streamlining operations, boosting sales, and enhancing connections across',
    stack: ['ReactJs', 'Redux', 'SASS'],
    // sourceCode: 'https://github.com/umg026/CMS-forntend',
    livePreview: 'https://pharma.aisante.in/',
  },
  {
    name: 'Toyota - Colombia',
    description:
      'Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is the largest automobile manufacturer in the world, producing about 10 million vehicles per year.',
    stack: ['NextJs', 'ReactJs'],
    // sourceCode: 'https://github.com',
     livePreview: 'https://stage.d34auqrbm43ik5.amplifyapp.com/',
  },
  {
    name: 'Chating web-app',
    description:
      'A real-time chat application built with Node.js, React.js, Zustand, JWT, MongoDB, and Socket.io. This web app allows users to send and receive messages instantly.',
      stack: ['NodeJs', 'ReactJs', 'Zustand', 'Jwt', 'MongoDB', 'socket.io'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  'NodeJs',
  'ReactJS',
  'Redux',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'SASS',
  'Material UI',
  'Git',
  'ExpressJs',
  'MongoDB',
  'Tailwind CSS',
  'MySql',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'umang.prajapati026@gmail.com',
}

export { header, about, projects, skills, contact }
