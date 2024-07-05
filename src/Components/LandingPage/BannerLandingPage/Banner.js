import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ContactImg from "../../../assets/images/contactAnimation.svg";
import sliderOne from "../../../assets/images/bannerSlider/Logo1.svg";
import sliderTwo from "../../../assets/images/bannerSlider/Logo2.svg";
import sliderThree from "../../../assets/images/bannerSlider/Logo3.svg";
import sliderFour from "../../../assets/images/bannerSlider/Logo4.svg";
import sliderFive from "../../../assets/images/bannerSlider/Logo5.svg";
import sliderSix from "../../../assets/images/bannerSlider/Logo6.svg";
import sliderSeven from "../../../assets/images/bannerSlider/Logo7.svg";
import sliderEight from "../../../assets/images/bannerSlider/Logo8.svg";
import PopularProducts from "../../../assets/images/popularProduct.svg";
import Circle from "../../../assets/images/circle.svg";
import Slider from "react-slick";
import './Banner.css'

const Banner = () => {
    var settings = {
        dots: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };
    return (
        <Box className="banner-bg" sx={{paddingBottom:'2rem'}}>
            <Container sx={{ padding: '10rem 0rem', position: 'relative' }}>
                <Box>
                    <Typography variant='h1' sx={{ fontWeight: 500, color: '#313542' }}>Effortless Transformation</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '48px', fontWeight: 400, fontStyle: 'italic' }}>
                        Unify
                        <Typography variant='span' sx={{ color: '#2171E4', fontStyle: 'normal', paddingLeft: '14px' }}>
                            Your Team
                        </Typography>
                        , Seamless
                        <Typography variant='span' sx={{ color: '#2171E4', fontStyle: 'normal', paddingLeft: '14px' }}>
                            Integration
                        </Typography>
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    width: '45%',
                    paddingTop: '3rem',
                    margin: 'auto'
                }}>
                    Realise your vision securely, collaborating<br /> effortlessly with anyone, anywhere, on any device.
                </Box>
                <Box sx={{ position: 'absolute', right: '3rem', bottom: '2rem', cursor: 'pointer' }}>
                    <img width="100%" src={ContactImg} alt="contact" />
                </Box>
                <Box sx={{ position: 'absolute', right: '3.2rem', bottom: '2.5rem', cursor: 'pointer' }}>
                    <img className='circle-img' width="100%" src={Circle} alt="contact" />
                </Box>
            </Container>
            <Container sx={{position:'relative'}}>
                <Slider {...settings}>
                    <div>
                        <img src={sliderOne} alt=""/>
                    </div>
                    <div>
                        <img src={sliderTwo} alt=""/>
                    </div>
                    <div>
                        <img src={sliderThree} alt=""/>
                    </div>
                    <div>
                        <img src={sliderFour} alt=""/>
                    </div>
                    <div>
                        <img src={sliderFive} alt=""/>
                    </div>
                    <div>
                        <img src={sliderSix} alt=""/>
                    </div>
                    <div>
                        <img src={sliderSeven} alt=""/>
                    </div>
                    <div>
                        <img src={sliderEight} alt=""/>
                    </div>
                </Slider>
                <Box sx={{position: 'absolute', top: '-7rem'}}>
                    <img src={PopularProducts} alt=""/>
                </Box>
            </Container>
        </Box>
    )
}

export default Banner