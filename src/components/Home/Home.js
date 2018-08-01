import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home()
{
    
    
    return(
        <div className="landing-page">
            <h1>ecommerce practice</h1>

            
            <Link to='/products'><button>View Products</button></Link>
            <Link to='/cart'><button>Cart</button></Link>
        </div>
    );
}

export default Home;