import { Link } from "react-router-dom"


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


        </div>
        
        
        
    </div>
  )
}

export default AllProjects