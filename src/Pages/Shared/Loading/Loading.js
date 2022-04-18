import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <section className="my-5">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" />
                    <Spinner animation="border" variant="primary" />
                </div>
            </div>
        </section>
    );
};

export default Loading;