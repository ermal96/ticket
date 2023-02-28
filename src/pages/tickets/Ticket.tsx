import { useEffect } from "react";
import { useParams } from "react-router"
import { useAppDispatch } from "../../store";
import { getTicket } from "../../store/actions/ticketActions";
import { useSelector } from "react-redux";
import { selectTicket } from "../../store/selectors/ticketSelector";
import Spinner from "../../components/Spinner";
import { Box, CircularProgress, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import AirportSrc from '../../assets/airport.svg';

const Ticket = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const ticket = useSelector(selectTicket);

    useEffect(() => {
        dispatch(getTicket(id || ''))
    }, [dispatch, id]);

    if (ticket.loading) {
        return <CircularProgress />
    }



    if (ticket.error) {
        return <Typography>
            {ticket.error}
        </Typography>
    }

    return (

        <Grid container spacing={8} sx={{
            marginTop: 2
        }}>


            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={AirportSrc} alt="Airport" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ width: '100%' }}>
                    <List>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ConfirmationNumberIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ticket ID" secondary={ticket.ticket?.ticket_type_id} />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FlightTakeoffIcon />
                                </ListItemIcon>
                                <ListItemText primary="From" secondary={ticket.ticket?.inbound} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FlightLandIcon />
                                </ListItemIcon>
                                <ListItemText primary="To" secondary={ticket.ticket?.outbound} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AirlineSeatReclineNormalIcon />
                                </ListItemIcon>
                                <ListItemText primary="Seat Number" secondary={ticket.ticket?.seat_number} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PriceChangeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ticket Type" secondary={ticket.ticket?.ticket_type} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AttachMoneyIcon />
                                </ListItemIcon>
                                <ListItemText primary="Price" secondary={ticket.ticket?.price} />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DateRangeIcon />
                                </ListItemIcon>
                                <ListItemText primary="From Date" secondary={ticket.ticket?.from_date} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InsertInvitationIcon />
                                </ListItemIcon>
                                <ListItemText primary="To Date" secondary={ticket.ticket?.to_date} />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Box></Grid>
        </Grid>
    )
}

export default Ticket
