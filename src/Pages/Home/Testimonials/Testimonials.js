import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="my-5">
            <div className="container">
                <h2 className='text-center'>Testimonials</h2>
                <div className="testimonial-wrapper row g-5">

                    {
                        testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial}></Testimonial>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Testimonials;