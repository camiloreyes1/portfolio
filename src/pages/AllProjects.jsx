import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import img1 from '../images/Pixels.png';
import img2 from '../images/MRKT.png';
import img3 from '../images/chicken-run.png'
import { Button } from "react-bootstrap"



const AllProjects = () => {


  return (

<div class="d-flex flex-wrap m-4 justify-content-around ">      

        <Card style={{ width: '29rem' }} data-bs-theme="dark">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Text>
              Pixels is a photo sharing app that lets users like and comment on other people's pictures.
              This project is a full-stack app that was made using many diffent tools such as React,
              Express, MongoDB, Bootstrap, and JavaScript.

              <br></br>
              <br></br>


              <Button variant="danger">
              <Link to="https://www.youtube.com/watch?v=Ms523b8Z_Jw" class="link-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg> Youtube Demo</Link>
              </Button>

              &nbsp;&nbsp;&nbsp;

              <Button> Pixels </Button>


            </Card.Text>
          </Card.Body>
        </Card>

        <br></br>
              <br></br>


      <Card style={{ width: '32rem' }} data-bs-theme="dark" >
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Text>
          MRKT is an app that lets users post items they would like to get rid of and for potential buyers to be able to reach out to them and ask for more information about them. This was achieved using Express, Bootstrap, MongoDB, and JavaScript.

            <br></br>
            <br></br>


            <Button variant="danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg><Link to="https://youtu.be/AXbWVKRRZwg" class="link-light"> Youtube Demo</Link>
            </Button>

            &nbsp;&nbsp;&nbsp;

            <Button> MRKT </Button>

          </Card.Text>
        </Card.Body>
      </Card>

      <br></br>
              <br></br>

      <Card style={{ width: '38rem' }} data-bs-theme="dark">
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Text>
            Chicken Run is a game that consists of helping the chicken cross the road without getting runover
            less than three times. This project was done using JavaScript, DOM maniputalion, HTML5, and CSS.

            <br></br>
            <br></br>


            <Button variant="danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg> Youtube Demo
            </Button>

            &nbsp;&nbsp;&nbsp;

            <Button> Chicken Run </Button>

          </Card.Text>
        </Card.Body>
      </Card>








    </div>


  )
}

export default AllProjects