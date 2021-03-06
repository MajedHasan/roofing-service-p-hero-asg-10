import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Services></Services>
            <Testimonials></Testimonials>
        </main>
    );
};

export default Home;