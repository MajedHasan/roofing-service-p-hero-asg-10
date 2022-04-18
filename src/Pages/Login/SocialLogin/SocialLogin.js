import React from 'react';
import googleImg from '../../../images/social/google.png';
import githubImg from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth)
    const navigate = useNavigate()
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button className='btn btn-info d-block w-50 mx-auto my-2' onClick={() => signInWithGoogle()}>
                    <img src={googleImg} style={{ width: '30px', borderRadius: '50%' }} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-dark d-block w-50 mx-auto my-2' onClick={() => signInWithGithub()}>
                    <img src={githubImg} style={{ width: '30px', borderRadius: '50%', boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)', background: '#FFFFFF' }} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;