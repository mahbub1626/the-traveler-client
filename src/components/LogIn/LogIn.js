import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const googleProvider = new GoogleAuthProvider()

const LogIn = () => {
    const {signInUser, createUserWithPopup} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const handleLoginUser = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .then(err => console.error(err))
    }

    const handleProvider = ()=>{
        createUserWithPopup(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true });

        })
        .catch(err=> console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLoginUser} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                            <button onClick={handleProvider} className="btn btn-ghost bottom-2 border-blue-500 w-1/4 mx-auto "><FaGoogle/></button>
                    <p className='mb-4 my-4 text-center'>Don't have an account, <Link className=' font-bold text-blue-800' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;