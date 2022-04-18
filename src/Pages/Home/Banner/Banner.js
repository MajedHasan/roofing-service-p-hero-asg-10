import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <section className='home-page-banner'>
            <div className="bg-color">
                <div className="container">
                    <div className="content">
                        <h2>Welcome To <span>Roofing</span> Service</h2>
                        <p>I am providing best quality roofing service in your city. My priority best quality service and best quality customer support. Please contact me if you need my service</p>
                        <Link to='/about' className='btn btn-success'>Contact Me</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;