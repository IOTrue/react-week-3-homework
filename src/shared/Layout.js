import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';

function Layout({ children }) {
    return (
        <div>
            <HomeHeader/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;