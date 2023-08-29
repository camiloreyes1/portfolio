import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import img1 from '../images/Pixels.png';
import img2 from '../images/MRKT.png';
import img3 from '../images/chicken-run.png'
import Carousel from 'react-bootstrap/Carousel';



const AllProjects = () => {

    
  return (
    <div id='all-projects'>
        
        <div>

          

        <Link to="https://project-3-client-roan.vercel.app/"> Pixels </Link>

        <p>Pixels is a photo sharing app that lets users like and comment on other people's pictures. <br/>
          This project is a full-stack app that was made using many diffent tools such as React, <br/>
          Express, MongoDB, Bootstrap, and JavaScript. </p>

        </div>

        <br/>
        <div>
        <Link to="https://mrkt.adaptable.app/"> MRKT </Link>
        <p>MRKT is a trading app that lets users post anything they would like to sell while letting<br/>
          potential sellers message the owner about details about such product. This project was achieved <br/>
          using tools such as Express, Bootstrap, Handlebars, and JavaScript </p>


        </div>

        <br/>
        
        <div>
        <Link to="https://camiloreyes1.github.io/project-1/">Chicken Run</Link>
        <p>
          Chicken Run is a game that consists of helping the chicken cross the road without getting runover<br/>
          less than three times. This project was done using JavaScript, DOM maniputalion, HTML5, and CSS
        </p>

        <Carousel fade data-bs-theme="dark">
      <Carousel.Item interval={2500}>
        <img class="img-fluid" src={img1} text="First slide" />
        <Carousel.Caption>
          <h3>Pixels</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <img  class="img-fluid" src={img2} text="First slide" />        
      <Carousel.Caption>
          <h3>MRKT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="img-fluid" src={img3} text="First slide" />        
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      


        </div>

        
       
    </div>
  )
}

export default AllProjects