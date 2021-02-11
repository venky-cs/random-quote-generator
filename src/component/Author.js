import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Header'

function Author() {
    return (
        <div className="container">
            <Link to='/'>
               <Header />
            </Link>
        </div>
    )
}

export default Author
