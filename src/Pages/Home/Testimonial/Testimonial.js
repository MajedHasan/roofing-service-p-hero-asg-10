import React from 'react';

const Testimonial = ({ img, name, text }) => {
    return (
        <div className='col-md-4 p-3'>
            <div className="shadow-lg rounded p-3">
                <div className="d-flex align-items-center">
                    <div className="img-box">
                        <img src="" alt="" style={{ maxWidth: "50px", width: "100%", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;