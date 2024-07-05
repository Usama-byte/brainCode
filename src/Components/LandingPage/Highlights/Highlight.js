import { Box, Typography,Container, Grid } from '@mui/material'
import React from 'react'
import MyCard from './MyCard'

const Highlight = () => {
    const products = [
        { title:"16k+", description:"Our Happy Customers" },
        { title:"152" , description:"Our Partners" },
        { title:"1k+" , description:"Our Happy Customers" },
        { title:"250+", description:"Total Services We Offer" }
      ];
  return (
    <Box sx={{ background: '#ffffff' }}>
    <Container sx={{padding: '5rem 0rem'}}>
        <Box sx={{textAlign: 'center'}}>
            <Typography sx={{fontSize: '180px', fontWeight: 600, letterSpacing: '-5%'}}>
                Hi<Typography variant='span' sx={{fontWeight: 300}}>g</Typography>hlights
            </Typography>
        </Box>
        <Box sx={{textAlign: 'center'}}>
            <Typography variant='p' sx={{fontSize: '27px', fontWeight: '400', color:'#878787', lineHeight: '48px', letterSpacing: '1.5px', textAlign: 'center'}}>We are Offering a <Typography variant='span' sx={{fontStyle: 'italic', color:'#000'}}>comprehensive portfolio</Typography> of software products catering to a wide range of customers and business needs.</Typography>
        </Box>
        <Box sx={{padding: '3rem 0rem'}}>
        <Grid container>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={index === 3 ? 12 : 4} key={index} sx={{ width: index === 3 ? '100%' : 'auto' }}>
            <MyCard
              title={product.title}
              description={product.description}
              fullWidth={index === 3}
              showDots={index === 0 ? 'left' : index === 2 ? 'right' : index === 3 ? 'both' : ''}
              backgroundColor={index === 0 || index === 2 ? '#fcfafc' : '#fff'}
              titleColor={index === 0 || index === 2 ? '#2171E4' : 'inherit'}
            />
          </Grid>
        ))}
      </Grid>
        </Box>
    </Container>
    </Box>
    )
}

export default Highlight