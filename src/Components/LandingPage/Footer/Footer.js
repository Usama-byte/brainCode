import { Box, Container } from '@mui/material'
import React from 'react'
import FooterLogo from '../../../assets/images/LogoMain.svg';
import ScrollUp from '../../../assets/images/ScrollUpIcon.svg';
import Hub from '../../../assets/images/hub.svg';
import CodeBrain from '../../../assets/images/codeBrain.svg';
import './Footer.css';

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <Box sx={{backgroundColor: '#1A2026', padding: '6rem 0rem 6rem 0rem', height: '655px',position: 'relative'}}>
        <Container maxWidth="xl">
            <Box sx={{display: 'flex', position: 'relative'}}>
                <Box sx={{flex: '0 0 25%'}}><img src={FooterLogo} alt=""/></Box>
                <Box sx={{flex: '0 0 18%'}}>
                    <ul className='unorderedList'>
                        <li className='whiteCustom'>Home</li>
                        <li className='listItem'>About Us</li>
                        <li className='listItem'>Services</li>
                        <li className='listItem'>Contact Us</li>
                        <li className='listItem'>Products</li>
                    </ul>
                </Box>
                <Box sx={{flex: '0 0 18%'}}>
                    <ul className='unorderedList'>
                        <li className='whiteCustom'>Home</li>
                        <li className='listItem'>About Us</li>
                        <li className='listItem'>Services</li>
                        <li className='listItem'>Contact Us</li>
                        <li className='listItem'>Products</li>
                    </ul>
                </Box>
                <Box sx={{flex: '0 0 18%'}}>
                    <ul className='unorderedList'>
                        <li className='whiteCustom'>Home</li>
                        <li className='listItem'>About Us</li>
                        <li className='listItem'>Services</li>
                        <li className='listItem'>Contact Us</li>
                        <li className='listItem'>Products</li>
                    </ul>
                </Box>
                <img onClick={handleScrollToTop} className='scrollUpIcon' src={ScrollUp} alt=""/>
                <img className='hubText' src={Hub} alt='' />
            </Box>
        </Container>
        <img className='codeBrain' src={CodeBrain} alt='' />
    </Box>
    )
}

export default Footer