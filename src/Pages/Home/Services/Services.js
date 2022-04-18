import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const navigate = useNavigate()

    const handleCheckout = (id) => {
        navigate(`/checkout/${id}`)
    }

    return (
        <section className="service-section my-5 py-3">
            <div className="container">
                <h2 className='text-center mb-5'>My Services</h2>
                <div className="service-wrapper row g-5 align-items-stretch">

                    {
                        services.map(service => <Service key={service.id} service={service} handleCheckout={handleCheckout}></Service>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;