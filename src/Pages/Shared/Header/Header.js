import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'


const Header = () => {
   const {user, logOut} = useAuth();
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">World Travels</span>
            </Link>
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/home" className="nav-link" aria-current="page">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
                {user.email && <li className="nav-item"><Link to="/travelers" className="nav-link">My Booking</Link></li>}
                {user.email && <li className="nav-item"><Link to="/contactus" className="nav-link">Add Offer</Link></li>}
                {
                    user.email ?
                        <li className="nav-item"><button onClick={logOut} className="nav-link">Log Out</button></li> :
                        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                }
                 {user.email  && <li className="nav-item bg-dark"><span className="nav-link text-white">{ user.displayName }</span></li>}
            </ul>
            </header>
        </div>
    )
}

export default Header
