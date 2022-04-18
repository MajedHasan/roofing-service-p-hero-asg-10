import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Testimonial = (props) => {
    const { img, name, text } = props.testimonial
    return (
        <div className='col-md-4 p-3'>
            <div className="shadow-lg rounded p-3">
                <div className="d-flex align-items-center">
                    <div className="img-box">
                        <img src={img} alt="" style={{ maxWidth: "50px", width: "100%", maxHeight: "50px", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                    <div className="d-flex ms-4">
                        <FontAwesomeIcon icon={faStar} style={{ color: "orange", fontSize: "17px" }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "orange", fontSize: "17px" }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "orange", fontSize: "17px" }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "orange", fontSize: "17px" }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "orange", fontSize: "17px" }} />
                    </div>
                </div>
                <h2 className='text-center'>{name}</h2>
                <p className="text-center text-italic">{text}</p>
            </div>
        </div>
    );
};

export default Testimonial;