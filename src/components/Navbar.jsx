import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

const Navbar = () => {

    return (
        <div>
            <nav>

                <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to="/all-projects">
                    <button>Projects</button>
                </Link>

                <Link to="/info">
                    <button>Info</button>
                </Link>

                <Link to="/contact">
                    <button>Contact</button>
                </Link>


            </nav>
        </div>
    )
}

export default Navbar