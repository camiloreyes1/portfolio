import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import img1 from '../images/Pixels.png';
import img2 from '../images/MRKT.png';
import img3 from '../images/chicken-run.png'
import Carousel from 'react-bootstrap/Carousel';

const AllProjects = () => {


  return (
    <div>


      <br/>

      <div>

        <Card style={{ width: '40rem' }} data-bs-theme="dark">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Text>
            Pixels is a photo sharing app that lets users like and comment on other people's pictures. <br />
          This project is a full-stack app that was made using many diffent tools such as React, <br />
          Express, MongoDB, Bootstrap, and JavaScript.
            </Card.Text>
          </Card.Body>
        </Card>

        <br></br>

        <Card style={{ width: '40rem' }} data-bs-theme="dark">
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Text>
            Pixels is a photo sharing app that lets users like and comment on other people's pictures. <br />
          This project is a full-stack app that was made using many diffent tools such as React, <br />
          Express, MongoDB, Bootstrap, and JavaScript.
            </Card.Text>
          </Card.Body>
        </Card>

        <br></br>

        <Card style={{ width: '40rem' }} data-bs-theme="dark">
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Text>
            Chicken Run is a game that consists of helping the chicken cross the road without getting runover<br />
          less than three times. This project was done using JavaScript, DOM maniputalion, HTML5, and CSS
            </Card.Text>
          </Card.Body>
        </Card>






      </div>



    </div>
  )
}

export default AllProjects