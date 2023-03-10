/* eslint-disable import/named */
import { Box, CircularProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { paths } from '../constants/paths';
import { useAppDispatch } from '../store';
import { getTickes } from '../store/actions/ticketActions';
import { useSelector } from 'react-redux';
import { selectTicket } from '../store/selectors/ticketSelector';

const columns: GridColDef[] = [
    {
        field: 'ticket_type_id',
        headerName: 'Ticket Type ID',
        width: 210,
    },
    {
        field: 'inbound',
        headerName: 'Inbound',
        width: 110,
    },
    {
        field: 'outbound',
        headerName: 'Outbound',
        width: 110,
    },
    {
        field: 'ticket_type',
        headerName: 'Ticket Type',
        type: 'number',
        width: 110,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 80,
    },
    {
        field: 'from_date',
        headerName: 'From Date',
        width: 110,
    },
    {
        field: 'to_date',
        headerName: 'To Date',
        width: 110,
        type: 'dateTime'
    },
    {
        field: 'seat_number',
        headerName: 'Seat Number',
        width: 110,

    },
];


const TicketsTable = () => {

    const dispatch = useAppDispatch();
    const ticket = useSelector(selectTicket);

    useEffect(() => {
        dispatch(getTickes())
    }, [dispatch]);

    const navigate = useNavigate();
    const hanigateToSigleTicket = useCallback((e: {
        row: {
            id: string
        }
    }) => {
        navigate(paths.ticket.replace(':id', e.row.id), { replace: true });
    }, [navigate])


    if (ticket.loading) {
        return <CircularProgress />
    }

    if (!ticket.tickets?.length) {
        return <p>No Data</p>
    }

    return (

        <Box sx={{ height: 390, marginTop: 3 }}>
            <DataGrid
                isRowSelectable={() => false}
                onRowClick={hanigateToSigleTicket}
                rows={ticket.tickets}
                columns={columns}
                pageSize={8}
                density='compact'
                rowsPerPageOptions={[8]}
            />
        </Box>

    );
}

export default TicketsTable;