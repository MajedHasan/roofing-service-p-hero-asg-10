import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='my-5'>
            <div className="container">
                <h1 className='text-center text-danger'>Ops. You are in wrong url</h1>
                <Link to='/' className='text-center d-block btn btn-success'>Go to Home Page</Link>
            </div>
        </section>
    );
};

export default NotFound;