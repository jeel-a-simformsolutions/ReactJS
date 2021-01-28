import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <NavLink exact activeClassName="active_class" to='/'> About US</NavLink>
            <NavLink exact activeClassName="active_class" to='/Contact'> Contact US</NavLink>
            <br />
            <a href="/"> AboutUS </a>
            <a href="/Contact"> Contact </a>
        </>
    )
}

export default Menu;