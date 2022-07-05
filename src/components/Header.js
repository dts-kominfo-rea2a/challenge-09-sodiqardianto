// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <h1 className="title">Call a Friend</h1>
                <div className="sub-title">your friendly contact app</div>
                <div className="divider">
                    ******************************************************************************************************************
                </div>
            </div>
        </>
    )
}

export default Header;