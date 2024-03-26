import React from 'react';
import {Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
        <nav>
        <Link className = "logo">#VanLife</Link>
        <Link to="/host">Host</Link>
        <Link to = "/">Home</Link>
       <Link to = "/About">About</Link>
      </nav>
      </header>
    )
}
