import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import image1 from '../../../public/images/services/img-1.jpg';
import image2 from '../../../public/images/services/img-2.jpg';
import image3 from '../../../public/images/services/img-3.jpg';
import image4 from '../../../public/images/services/img-4.jpg';
import image5 from '../../../public/images/services/img-5.jpg';
import image6 from '../../../public/images/services/img-6.jpg';

const Checkout = () => {

    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loading></Loading>
    }

    const { serviceId } = useParams()
    console.log(serviceId);

    const [service, setService] = useState([])

    const data = [
        {
            id: 1,
            name: "Residential Foam Roofs",
            desc: "Residential Foam Roofs is for only Residential Foam",
            price: 250,
            img: image1
        },
        {
            id: 2,
            name: "Drainage Systems",
            desc: "Drainage Systems is a high quality service for you from me",
            price: 300,
            img: image2
        },
        {
            id: 3,
            name: "Other Roofing Systems",
            desc: "I can provide others roofing service if you need",
            price: 225,
            img: image3
        },
        {
            id: 4,
            name: "Skylights",
            desc: "SkyLights roofing service i can provide. if you need then please buy this service",
            price: 330,
            img: image4
        },
        {
            id: 5,
            name: "Recoating & Restoration",
            desc: "Recoating & Restoration is another service i am providing",
            price: 550,
            img: image5
        },
        {
            id: 6,
            name: "Eichler Beam Repairs",
            desc: "Eichler Beam Repairs is very low cost for me. I am providing it very low cost",
            price: 120,
            img: image6
        }
    ]

    useEffect(() => {
        const service = data.find(service => service.id == serviceId)
        setService(service)
    }, [])


    return (
        <section className="checkout my-5">
            <h1 className="text-center">Please Check the service</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 p-3">
                        <div className="box shadow-lg rounded p-3">
                            <img src={service.img} alt="" className='w-100 mb-3' />
                            <h2 className='text-info'>Name: {service.name}</h2>
                            <p>Description: {service.desc}</p>
                            <h3>Price: {service.price}</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <div className="box shadow-lg rounded p-3">
                            <h2 className='text-center'>Checkout</h2>
                            <p>Tax: {service.price * .05}</p>
                            <p>Price: {service.price}</p>
                            <p>Total Price: {service.price + (service.price * .05)}</p>
                            <button className='btn btn-warning text-white w-100'>Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;