import React from 'react';
import myImg from '../../images/my-pic.jpg';

const About = () => {
    return (
        <section className="about my-5 py-3">
            <div className="container">
                <h1 className="text-center">About Me</h1>
                <div className="row g-5">
                    <div className="col-md-6 col-12 p-3">
                        <div className="box p-3 shadow-lg rounded">
                            <h2 className='text-info'>Mehedi Hasan Majed</h2>
                            <p>Hi I am Mehedi Hasan Majed. I am learning MERN stack web development. I am learning it from Programing Hero web course. It was an amazing course in bangladesh. I want to be a full stack web developer, that's why i come on Programing Hero platfrom. My Dream is to be a professional web developer and get a high paying job for my web development skills.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <div className="box p-3 shadow-lg rounded">
                            <img src={myImg} alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;