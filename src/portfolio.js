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
    name: 'Url shortner (nodejs)',
    description:
      'A powerful URL shortening application built with Node.js, JWT Authentication, EJS, and MongoDB. This project allows users to securely log in and generate shortened URLs with ease.',
    stack: ['NodeJs', 'Jwt', 'Ejs','MongoDB'],
    sourceCode: 'https://github.com/umg026/Url-shortner-node.js',
    // livePreview: 'https://github.com',
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
    name: 'CMS-content management system',
    description:
      'A robust Content Management System (CMS) built for admins to efficiently manage and approve stories written by authors. Developed with React.js, Redux, and SASS,',
    stack: ['ReactJs', 'Redux', 'SASS'],
    sourceCode: 'https://github.com/umg026/CMS-forntend',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Jwt Authentication system',
    description:
      'A secure JWT Authentication System developed with Node.js, React.js, Zustand, JWT, and MongoDB. This project enables user authentication.',
    stack: ['NodeJs', 'ReactJs', 'Zustand', 'Jwt', 'MongoDB'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
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
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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
  'MySql',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'umang.prajapati026@gmail.com',
}

export { header, about, projects, skills, contact }
