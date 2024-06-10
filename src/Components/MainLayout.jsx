import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

const MainLayout = ({ children }) => {

    const location = useLocation();
    const showNavbar = location.pathname !== '/Login' && location.pathname !== '/';

    return (
        <div>
            {showNavbar && <Header />}
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;
