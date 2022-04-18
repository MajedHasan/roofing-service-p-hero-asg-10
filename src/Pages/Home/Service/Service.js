import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ id, name, price, desc, img }) => {

    const navigate = useNavigate()

    const handleCheckout = (id) => {
        navigate(`/checkout/:${id}`)
    }

    return (
        <div className='service-box'>
            <img src={img} alt="" className='img-fluid' />
            <div className="meta">
                <h4 className='name'>{name}</h4>
                <p className='desc'>
                    {desc}
                </p>
                <h2 className='price'>{desc}</h2>
            </div>
            <button className="btn btn-warning" onClick={() => handleCheckout(id)}>Checkout</button>
        </div>
    );
};

export default Service;