import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    const {signInUser} = useContext(AuthContext);

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
        })
        .then(err => console.error(err))
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
                    <p className='mb-4 text-center'>Have not account? <Link className=' font-bold text-blue-800' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;