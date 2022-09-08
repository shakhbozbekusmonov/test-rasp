import React from 'react';
import '../sass/header.scss';
import {NavLink} from "react-router-dom";
import {NavbarBrand} from "reactstrap";

const Header = () => {
    return (
        <>
            <nav>
                <NavLink to='/'>
                    <NavbarBrand>
                        <img src="/images/logo.svg" alt=""/>
                    </NavbarBrand>
                </NavLink>
                <NavLink to='class1'>EC01-21</NavLink>
                <NavLink to='class2'>EC01-21</NavLink>
                <NavLink to='class3'>EC01-21</NavLink>
                <NavLink to='class4'>EC01-21</NavLink>
                <NavLink to='class5'>EC01-21</NavLink>
                <NavLink to='class6'>EC01-21</NavLink>
                <NavLink to='class7'>EC01-21</NavLink>
            </nav>
        </>
    );
};

export default Header;
