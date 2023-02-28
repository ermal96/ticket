import { Link } from 'react-router-dom';
import LogoSrc from '../assets/logo.png';
import { paths } from '../constants/paths';
import { Box, Typography } from '@mui/material';


const Logo = () => {
    return (

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to={paths.tickets}>
                <img alt="Logo" src={LogoSrc} width={60} height={60} />
            </Link>

            <Typography fontWeight='900' variant='h5' component='h1' sx={{ marginLeft: 2, color: '#333', textDecoration: 'none' }}>My Tickets</Typography>
        </Box>

    )
}

export default Logo;