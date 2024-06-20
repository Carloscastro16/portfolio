import { Box, Grid, keyframes, Typography } from "@mui/material";
import mayanview from '../assets/images/mayanview.png'
import gaming from '../assets/images/gaming.png'
import sonora from '../assets/images/sonora.png'
import comtecsa from '../assets/images/comtecsa.png'
import styled from "@emotion/styled";
import react from '../assets/icons/react.png'
import Angular from '../assets/icons/angular-svgrepo.png'
import css from '../assets/icons/css3-02.png'
import sass from '../assets/icons/sass-svgrepo.png'
import node from '../assets/icons/node.png'
import Vue from '../assets/icons/vue-16.png'
import { useState } from "react";
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
const LanguageButtonPill = styled(Box)`
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 16px;
  padding-bottom: 6px;
  padding-top: 6px;
  border: 1px solid white;
  width: fit-content;
  gap: 6px;
  font-size: 14px;
  color: white;
`;


const Overlay = styled(Box)`
  background: #17192672;
  backdrop-filter: blur(40px);
  height: fit-content;
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  gap: 16px;
`;
export default function Projects() {
    const [hoveredId, sethoveredId] = useState(0);

    const handleMouseEnter = (id: number) => {
        sethoveredId(id);
    };

    const handleMouseLeave = () => {
        sethoveredId(0);
    };
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
                    fontSize: {xs: '53px',md:"96px"},
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
                        <Overlay 
                        onMouseEnter={ () => handleMouseEnter(1) }
                        onMouseLeave={handleMouseLeave}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '20px',
                                        fontWeight: '500'
                                    }}>Mayan View Landing | Rediseño de landing</Typography>
                                    <Typography sx={{
                                        fontFamily: 'Roboto',
                                        fontWeight: '300',
                                        fontSize: '16px',
                                        opacity: '0.8'
                                    }}>Desarrollo para Empresa Dapper Technologies</Typography>
                                </Box>
                                <Box>
                                    <LanguageButtonPill>
                                        <img src={Angular} alt="language" width={'16px'} height={'16px'} />
                                        Angular
                                    </LanguageButtonPill>
                                    <LanguageButtonPill>
                                        <img src={sass} alt="language" width={'16px'} height={'16px'} />
                                        Sass
                                    </LanguageButtonPill>
                                </Box>
                            </Box>
                            {hoveredId === 1 && (
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: '16px',
                                    fontWeight: '400'
                                }}>
                                    Rediseño de landing page basado en un Figma proporcionado por la empresa Dapper Technologies
                                    utilizando Angular como Front-end.
                                </Typography>
                            )}
                        </Overlay>
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
                        <Overlay 
                        onMouseEnter={ () => handleMouseEnter(2) }
                        onMouseLeave={handleMouseLeave}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '20px',
                                        fontWeight: '500'
                                    }}>Sonora Global Landing | Desarrollo de Blog y Panel</Typography>
                                    <Typography sx={{
                                        fontFamily: 'Roboto',
                                        fontWeight: '300',
                                        fontSize: '16px',
                                        opacity: '0.8'
                                    }}>Desarrollo para Empresa Dapper Technologies</Typography>
                                </Box>
                                <Box>
                                    <LanguageButtonPill>
                                        <img src={Angular} alt="language" width={'16px'} height={'16px'} />
                                        Angular
                                    </LanguageButtonPill>
                                    <LanguageButtonPill>
                                        <img src={sass} alt="language" width={'16px'} height={'16px'} />
                                        Sass
                                    </LanguageButtonPill>
                                    <LanguageButtonPill>
                                        <img src={node} alt="language" width={'16px'} height={'16px'} />
                                        Node
                                    </LanguageButtonPill>
                                </Box>
                            </Box>
                            {hoveredId === 2 && (
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: '16px',
                                    fontWeight: '400'
                                }}>
                                    Desarrollé una sección de blog para la pagina existente,
                                    creando un panel de administrador para manejar las entradas,
                                    utilizando Angular, NodeJs con Express y MongoDB como base de datos.
                                </Typography>
                            )}
                        </Overlay>
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
                        <Overlay 
                        onMouseEnter={ () => handleMouseEnter(3) }
                        onMouseLeave={handleMouseLeave}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '20px',
                                        fontWeight: '500'
                                    }}>Landing web de E-Commerce Gaming</Typography>
                                    <Typography sx={{
                                        fontFamily: 'Roboto',
                                        fontWeight: '300',
                                        fontSize: '16px',
                                        opacity: '0.8'
                                    }}>Proyecto personal</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                    <LanguageButtonPill>
                                        <img src={Vue} alt="language" width={'16px'} height={'16px'} />
                                        Vue
                                    </LanguageButtonPill>
                                    <LanguageButtonPill>
                                        <img src={css} alt="language" width={'16px'} height={'16px'} />
                                        CSS
                                    </LanguageButtonPill>
                                </Box>
                            </Box>
                            {hoveredId === 3 && (
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: '16px',
                                    fontWeight: '400'
                                }}>
                                    Realicé el diseño y desarrollo de la landing page presentada como parte de un Proyecto
                                    personal utilizando VueJs y TailwindCSS.
                                </Typography>
                            )}
                        </Overlay>
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
                        <Overlay 
                        onMouseEnter={ () => handleMouseEnter(4) }
                        onMouseLeave={handleMouseLeave}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '20px',
                                        fontWeight: '500'
                                    }}>SOFIA Gestion de Redes</Typography>
                                    <Typography sx={{
                                        fontFamily: 'Roboto',
                                        fontWeight: '300',
                                        fontSize: '16px',
                                        opacity: '0.8'
                                    }}>Desarrollo para Empresa Comtecsa S.A. de C.V.</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                    <LanguageButtonPill>
                                        <img src={react} alt="language" width={'16px'} height={'16px'} />
                                        React
                                    </LanguageButtonPill>
                                </Box>
                            </Box>
                            {hoveredId === 4 && (
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: '16px',
                                    fontWeight: '400'
                                }}>
                                    Desarrollé un 90% del Front-end y Back-end de la aplicacion web SOFIA,
                                    agregando funciones de red como, escaneos de red con distintos protocolos de red,
                                </Typography>
                            )}
                        </Overlay>
                    </Box>
                </FloatingGridItem>
            </Grid>
        </Box>
    )
}