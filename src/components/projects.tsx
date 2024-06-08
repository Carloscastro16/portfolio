import { Box, Grid, keyframes, Stack, Typography } from "@mui/material";
import mayanview from '../assets/images/mayanview.png'
import gaming from '../assets/images/gaming.png'
import sonora from '../assets/images/sonora.png'
import comtecsa from '../assets/images/comtecsa.png'
import styled from "@emotion/styled";

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;
const FloatingGridItem = styled(Grid)`
  animation: ${float} 5s ease-in-out infinite;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;
const Overlay = styled(Box)`
  background: #17192672;
  backdrop-filter: blur(40px);
  height: 200px;
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 12px;
`;
export default function Projects() {
    return (
        <Box sx={{
            width: '100%',
            mt: '150px'
        }}>
            <Typography
                sx={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "96px",
                    lineHeight: "117px",
                    letterSpacing: "0.29em",
                    color: "rgba(255, 255, 255, 0.5)",
                    whiteSpace: "nowrap",
                    textAlign: 'center',
                }}
            >
                PROYECTOS
            </Typography>
            <Grid container>
                <FloatingGridItem item xs={12} sx={{ height: '500px', mb: '24px' }}>
                    <Box sx={{
                        backgroundImage: `url(${mayanview})`,
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingInline: '12px',
                        paddingBottom: '12px'
                    }}>
                        <Overlay></Overlay>
                    </Box>
                </FloatingGridItem>
                <FloatingGridItem item xs={6} sx={{ height: '400px', paddingRight: '12px' }}>
                    <Box sx={{
                        backgroundImage: `url(${sonora})`,
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingInline: '12px',
                        paddingBottom: '12px'
                    }}>
                        <Overlay></Overlay>
                    </Box>
                </FloatingGridItem>
                <FloatingGridItem item xs={6} sx={{ height: '400px', paddingLeft: '12px' }}>
                    <Box sx={{
                        backgroundImage: `url(${gaming})`,
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingInline: '12px',
                        paddingBottom: '12px'
                    }}>
                        <Overlay></Overlay>
                    </Box>
                </FloatingGridItem>
                <FloatingGridItem item xs={12} sx={{ height: '500px', mt: '24px' }}>
                    <Box sx={{
                        backgroundImage: `url(${comtecsa})`,
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingInline: '12px',
                        paddingBottom: '12px'
                    }}>
                        <Overlay></Overlay>
                    </Box>
                </FloatingGridItem>
            </Grid>
        </Box>
    )
}