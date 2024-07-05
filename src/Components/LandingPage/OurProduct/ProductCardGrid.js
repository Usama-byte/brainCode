import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = () => {

    const products = [
        { badgeTitle: 'OPPORTUNITIES', title: 'UI/ UX and brand design', description: 'We will help you uncover hidden potential in your business. ' },
        { badgeTitle: 'OPPORTUNITIES',title: 'Identify Growth Opportunities', description: 'We will help you uncover hidden potential in your business. ' },
        { badgeTitle: 'OPPORTUNITIES',title: 'Identify Growth Opportunities', description: 'We will help you uncover hidden potential in your business. ' },
        { badgeTitle: 'OPPORTUNITIES', title: 'Identify Growth Opportunities', description: 'We will help you uncover hidden potential in your business. ' },
        { badgeTitle: 'OPPORTUNITIES',title: 'Identify Growth Opportunities', description: 'We will help you uncover hidden potential in your business. ' },
        { badgeTitle: 'OPPORTUNITIES',title: 'Identify Growth Opportunities', description: 'We will help you uncover hidden potential in your business. ' },
    ];

    return (
        <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1, padding: '2rem' }}>
                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProductCard badgeTitle={product.badgeTitle} title={product.title} description={product.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default ProductGrid;
