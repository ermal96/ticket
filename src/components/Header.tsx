import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Logo from './Logo';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuth } from '../store/selectors/authSelector';
import { Link } from 'react-router-dom';
import { paths } from '../constants/paths';
import { useCallback, useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase-config';


const Header = () => {
    const user = useSelector(selectAuth).user;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = useCallback(async () => {
        return await signOut(auth);
    }, []);

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                <Logo />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {user?.role === "ADMIN" &&
                        <Box>
                            <Link to={paths.createTicket}>
                                <Button variant="contained">
                                    <Typography>Add Ticket</Typography>
                                </Button>
                            </Link>

                        </Box>}

                    <Box>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 40, height: 40 }}>{user?.email[0].toUpperCase()}</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>

                </Box>
            </Box>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{ marginRight: 2 }} /> {user?.email}
                </MenuItem>

                <Divider />


                <MenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default Header;