import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



export default function About() {


    return (
        <>
            <Box
                id="target-section"
                sx={{
                    position: "relative",
                    width: "100%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: { xs: '24px', md: '53px', lg: "96px" },
                        lineHeight: "117px",
                        letterSpacing: "0.29em",
                        color: "rgba(255, 255, 255, 0.5)",
                        whiteSpace: "nowrap"
                    }}
                >
                    SOBRE MÍ
                </Typography>
                <Box sx={{
                    width: '100%',
                    height: 'fit-content',
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                    backdropFilter: 'blur(20px)',
                    px: '100px',
                    py: '50px'
                }}>
                    <Stack alignItems={'center'} justifyContent={'center'} gap={'42px'} sx={{
                        direction: { xs: 'column', md: 'column', lg: 'row' }
                    }}>
                        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} gap={'24px'} sx={{
                            width: '70%',
                            height: '100%'
                        }}>
                            <Typography color={'white'} fontFamily={'Montserrat'} fontWeight={'400'} sx={{
                                fontSize: { xs: '16px', md: '20px' }
                            }}>
                                Hola, soy Carlos, la resolución de problemas fueron
                                mi pasión desde muy joven, y cuando descubrí la programación,
                                fue amor a primera vista. Programo sitios web desde 2021,
                                y en poco tiempo he dominado tecnologías como Angular,
                                React, Vue, Node.js y Python.
                            </Typography>
                            <Typography color={'white'} fontFamily={'Montserrat'} fontSize={'20px'} fontWeight={'400'} sx={{
                                fontSize: { xs: '16px', md: '20px' }
                            }}>
                                Albert Einstein dijo:
                                "La creatividad es la inteligencia divirtiéndose".
                                Para mí, cada línea de código es una oportunidad
                                para aprender y crear algo asombroso.
                            </Typography>
                        </Stack>
                        <Box>
                            <Stack sx={{
                                flexDirection: 'center',
                                width: '100%',
                            }}>
                                <Typography color={'white'} fontFamily={'Montserrat'} fontSize={'40px'} fontWeight={'500'} sx={{
                                    fontSize: { xs: '26px', md: '40px' }
                                }}>
                                    Experiencia
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '42px',
                                    width: '100%'
                                }}>
                                    <Box sx={{
                                        width: '5px',
                                        backgroundColor: "rgba(192, 22, 184, 0.67)",
                                        height: '493px',
                                        borderRadius: '10px'
                                    }}></Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        flexDirection: 'column',
                                        gap: '32px',
                                        width: { xs: '80%', md: '70%' }
                                    }}>
                                        <Stack direction={'column'} sx={{
                                            width: '100%',
                                            gap: '5px'
                                        }}>
                                            <Typography sx={{
                                                fontFamily: 'Montserrat',
                                                fontSize: { xs: '16px', md: '20px' },
                                                fontWeight: '500',
                                                lineHeight: '24p',
                                                color: 'white'
                                            }}>Practicante Full-stack MEAN - Área de desarrollo web</Typography>
                                            <Stack direction={'row'} gap={'16px'}>
                                                <Typography sx={{
                                                    fontFamily: 'Montserrat',
                                                    fontSize: { xs: '12px', md: '16px' },
                                                    color: 'rgba(255, 255, 255, 0.6)',
                                                    lineHeight: '20px',
                                                    fontWeight: '400'
                                                }}>Dapper technologies</Typography>
                                                <Typography sx={{
                                                    fontFamily: 'Montserrat',
                                                    fontSize: { xs: '12px', md: '16px' },
                                                    color: 'rgba(255, 255, 255, 0.6)',
                                                    lineHeight: '20px',
                                                    fontWeight: '400'
                                                }}>Mayo 2023 - Agosto 2023</Typography>
                                            </Stack>
                                            <Box>
                                                <List dense>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <FiberManualRecordIcon sx={{
                                                                fontSize: 'small',
                                                                color: 'white'
                                                            }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            sx={{
                                                                fontSize: { xs: '10px', md: '14px' },
                                                                color: 'white'
                                                            }}
                                                            primary="Desarrollo de landing pages y paneles web para importantes empresas de la zona con Angular."
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <FiberManualRecordIcon sx={{
                                                                fontSize: 'small',
                                                                color: 'white'
                                                            }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            sx={{
                                                                fontSize: { xs: '10px', md: '14px' },
                                                                color: 'white'
                                                            }}
                                                            primary="Desarrollo de API’s en base a buenas practicas con al menos 10 endpoints para conexión de aplicaciones web de Angular."
                                                        />
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Stack>
                                        <Stack direction={'column'} sx={{
                                            width: '100%',
                                            gap: '5px'
                                        }}>
                                            <Typography sx={{
                                                fontFamily: 'Montserrat',
                                                fontSize: '20px',
                                                fontWeight: '500',
                                                lineHeight: '24p',
                                                color: 'white'
                                            }}>Ingeniero en Programación y Soporte</Typography>
                                            <Stack direction={'row'} gap={'16px'}>
                                                <Typography sx={{
                                                    fontFamily: 'Montserrat',
                                                    fontSize: '16px',
                                                    color: 'rgba(255, 255, 255, 0.6)',
                                                    lineHeight: '20px',
                                                    fontWeight: '400'
                                                }}>Comtecsa S.A de C.V</Typography>
                                                <Typography sx={{
                                                    fontFamily: 'Montserrat',
                                                    fontSize: '16px',
                                                    color: 'rgba(255, 255, 255, 0.6)',
                                                    lineHeight: '20px',
                                                    fontWeight: '400'
                                                }}>Octubre 2023 - Mayo 2024</Typography>
                                            </Stack>
                                            <Box>
                                                <List dense>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <FiberManualRecordIcon sx={{
                                                                fontSize: 'small',
                                                                color: 'white'
                                                            }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            sx={{
                                                                fontSize: '14px',
                                                                color: 'white'
                                                            }}
                                                            primary="Desarrollo de aplicacion web para la gestion de equipos de red utilizando Angular y NodeJs como herramientas"
                                                        />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <FiberManualRecordIcon sx={{
                                                                fontSize: 'small',
                                                                color: 'white'
                                                            }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            sx={{
                                                                fontSize: '14px',
                                                                color: 'white'
                                                            }}
                                                            primary="Implementación de sistema de mesa de ayuda, flujos de trabajo, formularios, seguimiento de proyectos, entre otras cosas, utilizando Jira."
                                                        />
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}
