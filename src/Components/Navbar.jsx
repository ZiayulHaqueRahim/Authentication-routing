import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar flex justify-center gap-20 bg-base-100">
        <NavLink to='/home' className="btn btn-ghost text-xl">Home</NavLink>
        <NavLink to='/register' className="btn btn-ghost text-xl">Register</NavLink>
        <NavLink to='/login' className="btn btn-ghost text-xl">Login</NavLink>
      </div>
    );
};

export default Navbar;