import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

    return(
        <div className="top-nav">
            <nav>
                <Link to = "/home"><p>Home</p></Link>
                <Link to = "/locations"><p>Countries</p></Link>
                <Link to = "/alldives"><p>All Dives</p></Link>
                <Link to = "/charts"><p>Charts</p></Link>
            </nav>
        </div>
    )
}
export default NavBar;