import { Box, Container } from '@mui/material'
import React from 'react'
import BannerBottomOne from '../../../assets/images/BannerBottomImages/Tabpanel1.svg';
import BannerBottomTwo from '../../../assets/images/BannerBottomImages/Tabpanel2.svg';
import BannerBottomThree from '../../../assets/images/BannerBottomImages/Tabpanel3.svg';
import BannerBottomFour from '../../../assets/images/BannerBottomImages/Tabpanel4.svg';
import BannerBottomFive from '../../../assets/images/BannerBottomImages/Tabpanel5.svg';

const BannerBottomImages = [BannerBottomOne, BannerBottomTwo, BannerBottomThree, BannerBottomFour, BannerBottomFive]


const BannerBottom = () => {
    return (
        <Box sx={{background: '#eeeeee'}}>
            <Box sx={{
                position: 'relative',
                background: '#EEEEEE', height: '100px', transformOrigin: 'left',
                transform: 'rotate(3deg) translateY(-45px)'
            }}></Box>

            <Box sx={{
                background: '#2171E4', height: '100px', transformOrigin: 'left',
                transform: 'rotate(-3deg) translateY(-45px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 16rem'
            }}>
                    {BannerBottomImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    ))}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(33, 113, 228, 0.5)', // Blue overlay color with opacity
                    }}
                ></div>
            </Box>
        </Box>
    )
}

export default BannerBottom