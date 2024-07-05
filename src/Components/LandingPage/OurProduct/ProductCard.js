import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import './OurProduct.css'
import ViewService from '../../../assets/images/cardbutton.svg';

const ProductCard = ({ title, description, badgeTitle }) => {
    // For Title
    const titleParts = title.split(' ');
    const firstLine = titleParts.slice(0, -1).join(' ');
    const secondLine = titleParts.slice(-1).join(' ');
    // For Description
    const descriptionParts = description.split(' ');
    const firstDescriptionPart = descriptionParts.slice(0, -2).join(' ');
    const secondDescriptionPart = descriptionParts.slice(-3).join(' ');
    return (
        <Card className='card-wrapper' sx={{ height: '570px',margin: '1rem', background: 'transparent' }}>
            <CardContent sx={{padding: '30px 20px'}}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography className='dot'></Typography><Typography variant='p' sx={{fontSize: '14px', fontWeight: 700, color:'#1D2939'}}>{badgeTitle}</Typography>
                </Box>
                <Box sx={{padding: '6rem 0rem'}}>
                <Typography variant="h5" component="div" className='title'>
                    {firstLine} <br/> {secondLine}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='desc'>
                    {firstDescriptionPart} <br/> {secondDescriptionPart}
                </Typography>
                </Box>
                <Box sx={{ cursor: 'pointer' }}>
                    <img width="100%" src={ViewService} alt="view-btn" />
                </Box>
            </CardContent>
        </Card>
    )
}

export default ProductCard