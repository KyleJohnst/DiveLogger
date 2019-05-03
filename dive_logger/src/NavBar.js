import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav>
                <Link to = "/"><p>Home</p></Link>
                < Link to = "/locations"><p>Locations</p></Link >
            </nav>
        </div>
    )
}
export default NavBar;