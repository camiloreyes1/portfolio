import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComponent = () => {

    return (
        <div>
            <nav>

                <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to="/all-projects">
                    <button>Projects</button>
                </Link>

                <Link to="/contact">
                    <button>Contact</button>
                </Link>


            </nav>

            


        </div>
    )
}

export default NavbarComponent