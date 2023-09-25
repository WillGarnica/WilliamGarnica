import React from 'react';

import './Header.css';
import { AppBar, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (

        <div className="header">

            <div id='web-menu' className='web-menu'>
                <Button href='#home'>Home</ Button>
                <Button href='#my-knowledge'>My knowledge</Button>
            </div>

            <div id='movil-menu' className='movil-menu'>
               

            </div>


        </div>
    );
}

export default Header;