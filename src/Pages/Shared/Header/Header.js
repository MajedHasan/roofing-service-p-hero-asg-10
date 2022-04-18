import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth)
    }


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Roofing
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link as={Link} className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link as={Link} className="nav-link" to="/blogs">Blogs</Link>
                            </li>

                            {
                                user ?
                                    <li className="nav-item d-flex">
                                        <span className='text-white' style={{ display: "block", marginTop: "9px" }}> {user.displayName} </span>
                                        <button onClick={handleLogout} className="btn btn-link text-danger ms-3" >Log Out</button>
                                    </li>
                                    :
                                    < li className="nav-item d-flex">
                                        <Link className="nav-link" to="/login">Login</Link>
                                        <Link className="nav-link ms-3" to="/register">Register</Link>
                                    </li>

                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Header;