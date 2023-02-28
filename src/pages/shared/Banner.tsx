import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import img from '../../assets/download.jpeg'
import './Banner.css'
import SpecialSearch from './SpecialSearch';
const Banner = () => {

    return (
        <div  className='banner'>
            
                <img src={img} className="" width="100%" height="400px" />
            
            <div className='banner-2'>
                <h1>image searcing banner</h1>
                <p>image search</p>
               <SpecialSearch searchStyle={{width:"400px", display: { xs: "block", md: "block" }}}/>
            </div>
        </div>
    );
};

export default Banner;