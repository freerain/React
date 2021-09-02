import React from 'react'
import Menu from './Menu'
import Search from './Search'
import Login from './Login'

function Navbar(props)
{
    return(
        <div className="navbar">
            <Menu links={props.links}/>
            <Search/>
            <Login/>
        </div>
    );
}

export default Navbar;