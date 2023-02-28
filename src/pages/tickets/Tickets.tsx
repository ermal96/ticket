/* eslint-disable import/named */
import { Typography } from "@mui/material";
import TicketsTable from "../../components/TicketsTable";


const Tickets = () => {
    return (
        <>
            <Typography variant="h4" component="h1" marginBottom={2} marginTop={2}>
                Check out our tickes
            </Typography>
            <TicketsTable />
        </>


    );
}

export default Tickets;