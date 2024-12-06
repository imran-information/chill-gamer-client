import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)


    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div class="loader"></div>
        </div>

    }
    if (!user) {
        return <Navigate state={location.pathname} to='/signIn'></Navigate>
    }

    return children;
};

export default PrivateRout;