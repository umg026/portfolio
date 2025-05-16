import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am  <span className="typewriter about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>
        I’m a passionate <strong>MERN Stack Developer</strong> with expertise in building dynamic, user-centric web applications. With a strong command of React.js, Node.js, Express.js, MongoDB, MySQL, Redux, and Next.js, I create seamless, scalable, and high-performance solutions tailored to meet client needs.
        <br />
        <br />
        Whether you&apos;re looking to build responsive front-end user interfaces, robust back-end services, or full-stack applications, I bring a blend of creativity and technical expertise to every project. From start-ups to established businesses, I help turn ideas into reality with clean, maintainable, and efficient code.

      </p>

      <div className='about__contact center'>
        {/* {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )} */}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon fontSize="large" />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon fontSize="large" />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
