import Container from "react-bootstrap/Container"
import NavbarComponent from "../components/NavbarComponent"
import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap"

const HomePage = () => {
  const skillsData = [
    
    { name: 'JavaScript', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/11_d3kszu.png' },
    { name: 'HTML', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/9_vyfdgx.png' },
    { name: 'CSS', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/10_osb5by.png' },
    { name: 'React.js', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/12_eemg54.png' },
    { name: 'Express.js', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/14_bs8hu1.png' },
    { name: 'Node.js', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511234/PORTFOLIO/15_hspdjq.png' },
    { name: 'Postman APIs', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/16_zdcjjn.png' },
    { name: 'MongoDB', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/17_l25jfv.png' },
    { name: 'Mongoose', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/18_exfnn3.png' },
    { name: 'Bootstrap', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511658/PORTFOLIO/Portfolio_3_x2rmgz.png' },
    { name: 'GitHub & Git', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/19_fyhlhi.png' },
    { name: 'Visual Studio', imageSrc: 'https://res.cloudinary.com/dhqplbne3/image/upload/v1692511235/PORTFOLIO/21_eh6efr.png' },

];

  
  return (

    
    <div> 
      <div className="container m-3 px-10 py-20 items-center flex-wrap"> 

        <h1>Welcome</h1>

        <p>Hi! my name is Juan Reyes, as a Full Stack Developer, I've had the privilege of working on a diverse range of projects, from creating interactive web applications to building robust backend systems. My dedication to mastering both frontend and backend technologies enables me to bring comprehensive solutions to life.

        <br /><br />
          In this portfolio, you'll find examples of my coding problem-solving abilities, and a commitment to clean, efficient, and scalable code. Whether you're an employer seeking a capable developer or a fellow enthusiast of the tech world, I invite you to explore my projects and get to know my capabilities.
        </p>

      </div>

      <br /><br />
      <br /><br />


          <h1 className="text-center">My Skills</h1>
      <div className="skills">
        <div className="techSkills">
          {skillsData.map((skill, index) => (
            <div key={index} className='skillCard'>
              <img src={skill.imageSrc} alt={`${skill.name} Logo`} className='skillImg' />
              <h3 className='skillName'>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
      

      </div>


  )
}

export default HomePage