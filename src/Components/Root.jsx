import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <br/>
            <Outlet />
        </div>
    );
};

export default Root;