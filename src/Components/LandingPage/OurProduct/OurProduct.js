import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ProductGrid from './ProductCardGrid'

const OurProduct = () => {
    return (
        <Box sx={{ background: '#ffffff' }}>
        <Container sx={{padding: '5rem 0rem'}}>
            <Box sx={{textAlign: 'center'}}>
                <Typography sx={{fontSize: '180px', fontWeight: 600, letterSpacing: '-5%'}}>
                    O<Typography variant='span' sx={{fontWeight: 300}}>u</Typography>r Products
                </Typography>
            </Box>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant='p' sx={{fontSize: '27px', fontWeight: '400', color:'#878787', lineHeight: '48px', letterSpacing: '1.5px'}}>Explore our flagship <Typography variant='span' sx={{fontStyle: 'italic', color:'#000'}}>products</Typography> designed to revolutionise your workflow</Typography>
            </Box>
        </Container>
        <Box>
            <ProductGrid />
        </Box>
        </Box>
    )
}

export default OurProduct