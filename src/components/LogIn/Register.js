import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const googleProvider = new GoogleAuthProvider();
const Register = () => {
    const {createUser, createUserWithPopup}= useContext(AuthContext);

    const handleRegisterUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(err => console.error(err))
    }
    const handleProvider = ()=>{
        createUserWithPopup(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err=> console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleRegisterUser} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Please Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <button onClick={handleProvider} className="btn btn-ghost bottom-2 border-blue-500 w-1/4 mx-auto "><FaGoogle/></button>

                    <p className='mb-4 my-4 text-center'>Already have an account? <Link className=' font-bold text-blue-800' to='/login'>LogIn</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;