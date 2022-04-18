import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { id, name, price, desc, img } = props.service
    const handleCheckout = props.handleCheckout

    return (
        <div className='service-box col-md-4 col-12'>
            <div className="p-3 shadow-lg rounded">
                <img src={img} alt="" className='img-fluid w-100' />
                <div className="meta">
                    <h4 className='name'>{name}</h4>
                    <p className='desc'>
                        {desc}
                    </p>
                    <h2 className='price'>${price}</h2>
                </div>
                <button className="btn btn-warning mx-auto d-block text-white" onClick={() => handleCheckout(id)}>Checkout</button>
            </div>
        </div>
    );
};

export default Service;