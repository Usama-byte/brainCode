import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Dots = styled(Box)`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
`;

const MyCard = ({ title, description, fullWidth, showDots, backgroundColor, titleColor }) => {
  return (
    <Card sx={{ 
    //   height: '200px', 
      overflow: 'unset',
      position: 'relative', 
      backgroundColor: backgroundColor || '#fff',
      border: '1px solid #D0D1D4',
      borderRadius: 'unset',
      width: fullWidth ? '100%' : 'auto'
    }}>
       {showDots === 'left' && (
        <>
          <Dots sx={{ top: -5, left: -5 }} />
        </>
      )}
      {showDots === 'right' && (
        <>
          <Dots sx={{ top: -5, right: -5 }} />
        </>
      )}
       {showDots === 'both' && (
        <>
        <Dots sx={{ top: -5, left: -5 }} />
          <Dots sx={{ bottom: -5, left: -5 }} />
          <Dots sx={{ top: -5, right: -5 }} />
          <Dots sx={{ bottom: -5, right: -5 }} />
        </>
      )}
      <CardContent sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%' 
      }}>
        <Typography variant="h5" component="div" align="center" sx={{ color: titleColor || 'inherit', fontSize: '120px', fontWeight: 400 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" sx={{fontSize: '32px', fontWeight: 400}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
