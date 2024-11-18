import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {



    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, password, email)
    }






    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register </button>
                        </div>
                    </form>
                    <div>
                        <p className='text-gray-700 font-semibold text-sm px-4 py-5'>Already have account...? Please go to <Link className='text-xl text-black ml-3' to='/login'> Login </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;