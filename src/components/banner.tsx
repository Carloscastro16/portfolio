import { Box, Stack, styled, Typography } from "@mui/material";
import cv from '../assets/icons/cv.png'
import arrow from '../assets/icons/arrow.png'
import github from '../assets/icons/github-14.png'
import linkedin from '../assets/icons/linkedin.png'
import BouncingArrow from "./special/BouncingArrow";
const GradientText = styled('span')({
    background: 'linear-gradient(90.29deg, #C016B8 0.53%, #4839FF 99.9%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
});
export default function Banner() {
    const handleDownload = () => {
        // Crear un enlace y hacer clic en él para descargar el archivo
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/Resume_Castro.pdf`; // Ruta al archivo PDF en el directorio public
        link.download = 'Resume_Castro.pdf'; // Nombre sugerido para el archivo descargado
        link.click();
      };
    return (
        <>
            <Box sx={{
                width: '100%',
                height: { xs: '60vh', md: '40vh', lg: '80vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '20px', md: '32px', lg: '40px' },
                    textAlign: 'center',
                    fontWeight: '400',
                    lineHeight: '61px'
                }}><GradientText>Full Stack Junior Engineer</GradientText></Typography>
                <Typography color={'white'} sx={{
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '32px', md: '96px', lg: '128px' },
                    textAlign: 'center',
                    lineHeight: { xs: '42px', md: '100px', lg: '156px' },
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
                            mx: '5px'
                        },
                        transition: 'all 0.6s ease-in-out'
                    }}>
                        <a href="https://github.com/Carloscastro16">
                            <img src={github} alt="insta" className="icon" width={'100%'} height={'100%'} />
                        </a>
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
                        <a href="https://www.linkedin.com/in/carlos-andre-castro-rodriguez/">
                            <img src={linkedin} alt="linkedin" className="icons" width={'100%'} height={'100%'} />
                        </a>
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
                        <img src={cv} alt="cv" className="icons" width={'100%'} height={'100%'} onClick={()=>{handleDownload()}} />
                    </Box>
                </Stack>
            </Box>
            <Stack alignItems={'center'}>
                <Box sx={{
                    height: '32px',
                    width: '32px',
                }}>
                    {/* <img src={arrow} alt="" width={'100%'} height={'100%'}/> */}
                    <BouncingArrow src={arrow} alt={'Arrow'} />
                </Box>
            </Stack>
            <div className="Circle1"></div>
            <div className="Circle2"></div>
        </>
    )
}


