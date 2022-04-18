import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    let errorElement;

    if (error || updateError) {
        errorElement = <p className="text-danger">Error: {error?.message} {updateError?.message} </p>
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)

        await updateProfile({ displayName: name })
        toast("Update Profile")
    }

    if (user) {
        navigate("/home")
    }

    return (
        <div className='container mx-auto w-50 mt-5'>
            <h2 className='text-center text-info mt-2'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Register
                </Button>
            </Form>
            {errorElement}
            <p className="text-center">Already have an account? <span className='text-info' style={{ cursor: "pointer" }} onClick={navigateLogin}>Login Now </span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Register;