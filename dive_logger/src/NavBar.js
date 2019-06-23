import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav>
                <Link to = "/home"><p>Home</p></Link>
                <Link to = "/locations"><p>Countries</p></Link>
                <Link to = "/alldives"><p>All Dives</p></Link>
                < Link to = "/charts" > < p >Charts</p></Link >
            </nav>
        </div>
    )
}
export default NavBar;