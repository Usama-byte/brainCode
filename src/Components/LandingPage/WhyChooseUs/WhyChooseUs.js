import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import './WhyChooseUs.css'
import Wireframe from '../../../assets/images/whyus.svg';

const WhyChooseUs = () => {
    return (
        <Box className="whyChooseUs-bg">
            <Box sx={{cursor: 'pointer'}}><img src={Wireframe} alt="" /></Box>
            <Box>
                <Typography variant='h2' sx={{ fontSize: '46px', fontWeight: 600, color: '#2171E4', padding:'2rem 0rem 1rem 0rem' }}>Why Chose Us</Typography>
                <Typography variant='p' sx={{ fontSize: '38px', lineHeight: '64px', fontWeight: 300, color: '#A6A1AC' }}>Empower Your Teams <br /> and Streamline <br /> Operations</Typography>
            <Button sx={{display: 'block', color: '#A6A1AC', border: '1px solid #4B505C', padding: '17px 47px', borderRadius: '60px', marginTop: '1.5rem' }}>Discover More</Button>
            </Box>
        </Box>
    )
}

export default WhyChooseUs