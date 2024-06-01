import { Box, Stack, Typography } from "@mui/material";

export default function Navbar(){
    return (
        <>
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            py: '22.5px'
        }}>
            <Stack direction={'row'} gap={'60px'}>
                <Typography color={"white"} fontFamily={'Montserrat'}>Sobre mí</Typography>
                <Typography color={"white"} fontFamily={'Montserrat'}>Mis proyectos</Typography>
                <Typography color={"white"} fontFamily={'Montserrat'}>Habilidades</Typography>
                <Typography color={"white"} fontFamily={'Montserrat'}>Contactame</Typography>
            </Stack>
        </Box>
        </>    
    )
}