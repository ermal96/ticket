/* eslint-disable import/named */
import { Box, Grid } from "@mui/material";
import TicketsTable from "../../components/TicketsTable";
import LocationSrc from "../../assets/location.svg";


const Tickets = () => {
    return (
        <Grid container spacing={8} sx={{ marginTop: 12 }}>
            <Grid item xs={12} md={4}>
                <img src={LocationSrc} style={{ width: '100%' }} alt="Location" />
            </Grid>
            <Grid item xs={12} md={8}>
                <Box>
                    <TicketsTable />
                </Box>
            </Grid>

        </Grid>
    );
}

export default Tickets;