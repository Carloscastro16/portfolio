import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import react from '../assets/icons/react.png';
import vue from '../assets/icons/vue-16.png';
import javascript from '../assets/icons/js01-svgrepo.png';
import typescript from '../assets/icons/logo-ts-svgrepo.png';
import angular from '../assets/icons/angular-svgrepo.png';
import node from '../assets/icons/node.png';
import net from '../assets/icons/dotnet-svgrepo.png';
import csharp from '../assets/icons/c-sharp-16.png';
import flask from '../assets/icons/flask-svgrepo.png';
import docker from '../assets/icons/docker-16.png';
import github from '../assets/icons/github-14.png';
import sass from '../assets/icons/sass-svgrepo.png';
import css from '../assets/icons/css3-02.png';
import figma from '../assets/icons/figma-svgrepo.png';
const TitleContainer = styled(Box)`
  width: 100%;
  text-align: center;
  z-index: -2;
`;

export default function Habilities() {
    return (
        <>
            <Box sx={{
                width: "100%",
                position: 'relative',
                marginTop: '42px'
            }}>
                <TitleContainer
                    sx={{
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "96px",
                            lineHeight: "117px",
                            letterSpacing: "0.29em",
                            color: "rgba(255, 255, 255, 0.5)",
                            whiteSpace: "nowrap"
                        }}
                    >
                        HABILIDADES
                    </Typography>
                </TitleContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{
                            height: 'fit-content',
                            background: 'rgba(44, 44, 44, 0.3)',
                            backdropFilter: 'blur(40px)',
                            color: 'white',
                            padding: '24px',
                            borderRadius: '16px'
                        }}>
                            <Typography color={'#C016B8'} fontFamily={'Montserrat'} fontSize={'28px'} fontWeight={'400'}>Front-end</Typography>
                            <Box sx={{
                                width: '100%',
                                mt: '10px'
                            }}>
                                <img src={angular} alt="react" width={'40px'} height={'40px'}/>
                                <img src={vue} alt="react" width={'40px'} height={'40px'}/>
                                <img src={javascript} alt="react" width={'40px'} height={'40px'}/>
                                <img src={typescript} alt="react" width={'60px'} height={'60px'}/>
                                <img src={react} alt="react" width={'40px'} height={'40px'}/>
                                <img src={css} alt="react" width={'40px'} height={'40px'}/>
                                <img src={sass} alt="react" width={'40px'} height={'40px'}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            height: 'fit-content',
                            background: 'rgba(44, 44, 44, 0.3)',
                            backdropFilter: 'blur(40px)',
                            color: 'white',
                            padding: '24px',
                            borderRadius: '16px'
                        }}>
                            <Typography color={'#C016B8'} fontFamily={'Montserrat'} fontSize={'28px'} fontWeight={'400'}>Back-end</Typography>
                            <Box sx={{
                                width: '100%',
                                mt: '10px'
                            }}>
                                <img src={node} alt="react" width={'40px'} height={'40px'}/>
                                <img src={net} alt="react" width={'40px'} height={'40px'}/>
                                <img src={csharp} alt="react" width={'40px'} height={'40px'}/>
                                <img src={flask} alt="react" width={'40px'} height={'40px'}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{
                            height: 'fit-content',
                            background: 'rgba(44, 44, 44, 0.3)',
                            backdropFilter: 'blur(40px)',
                            color: 'white',
                            padding: '24px',
                            borderRadius: '16px'
                        }}>
                            <Typography color={'#C016B8'} fontFamily={'Montserrat'} fontSize={'28px'} fontWeight={'400'}>Herramientas</Typography>
                            <Box sx={{
                                width: '100%',
                                mt: '10px'
                            }}>
                                <img src={github} alt="react" width={'40px'} height={'40px'}/>
                                <img src={docker} alt="react" width={'40px'} height={'40px'}/>
                                <img src={figma} alt="react" width={'40px'} height={'40px'}/>
                                <img src={sass} alt="react" width={'40px'} height={'40px'}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}