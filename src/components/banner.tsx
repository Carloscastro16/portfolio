import { Box, Stack, styled, Typography } from "@mui/material";
import cv from '../assets/icons/cv.png'
import arrow from '../assets/icons/arrow.png'
import insta from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import BouncingArrow from "./special/BouncingArrow";
const GradientText = styled('span')({
    background: 'linear-gradient(90.29deg, #C016B8 0.53%, #4839FF 99.9%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  });
export default function Banner(){
    return(
        <>
            <Box sx={{
                width: '100%',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '40px',
                    fontWeight: '400',
                    lineHeight: '61px'
                }}><GradientText>Full Stack Junior Engineer</GradientText></Typography>
                <Typography color={'white'} sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '128px',
                    lineHeight: '156px',
                    fontWeight: '700',
                }}>Carlos A. Castro</Typography>
                <Stack direction={'row'} gap={'10px'} alignItems={'center'} justifyContent={'center'} p={'30px'} height={'50px'}>
                    <Box sx={{
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        ":hover": {
                            width: '54px',
                            height: '54px',
                            background: 'white',
                            mx: '5px'
                        },
                        transition: 'all 0.6s ease-in-out'
                    }}>
                        <img src={insta} alt="insta" className="icons" width={'100%'} height={'100%'}/>
                    </Box>
                    <Box sx={{
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        ":hover": {
                            width: '54px',
                            height: '54px',
                            background: 'white',
                            mx: '5px'
                        },
                        transition: 'all 0.6s ease-in-out'
                    }}>
                        <img src={linkedin} alt="linkedin" className="icons" width={'100%'} height={'100%'} />
                    </Box>
                    <Box sx={{
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        ":hover": {
                            width: '54px',
                            height: '54px',
                            background: 'white',
                            mx: '5px'
                        },
                        transition: 'all 0.6s ease-in-out'
                    }}>
                        <img src={cv} alt="cv" className="icons" width={'100%'} height={'100%'} />
                    </Box>
                </Stack>
            </Box>
            <Stack alignItems={'center'}>
                <Box sx={{
                    height: '32px',
                    width: '32px',
                }}>
                    {/* <img src={arrow} alt="" width={'100%'} height={'100%'}/> */}
                    <BouncingArrow src={arrow} alt={'Arrow'}/>
                </Box>
            </Stack>
            <div className="Circle1"></div>
            <div className="Circle2"></div>
        </>
    )
}


