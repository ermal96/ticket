/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormGroup, TextField, Button, Typography, FormControl, InputLabel, MenuItem, Select, Snackbar, Alert } from "@mui/material"
import { Box } from "@mui/system"
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react"
import { Ticket, TicketType } from "../../types"
import { useAppDispatch } from "../../store"
import { saveTicket } from "../../store/actions/ticketActions"
import { useSelector } from "react-redux"
import { selectTicket } from "../../store/selectors/ticketSelector"
import { useNavigate } from "react-router"
import { paths } from "../../constants/paths"


const CreateTicket = () => {

    const dispatch = useAppDispatch();
    const ticket = useSelector(selectTicket)
    const navigate = useNavigate()

    const formatDate = useCallback((date: Date) => {
        return date.toISOString().split('T')[0]
    }, []);

    const initialForm = useMemo(() => {
        return {
            from_date: formatDate(new Date()),
            inbound: '',
            outbound: '',
            price: 0,
            seat_number: 1,
            ticket_type: 'ECONOMY',
            ticket_type_id: '',
            to_date: formatDate(new Date()),
        } as Ticket
    }, [formatDate])


    const [form, setForm] = useState(initialForm)


    const handleTicketCreate = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(saveTicket({
            ...form,
            ticket_type_id: `${Math.random().toString(16).slice(2)}_${form.ticket_type}`
        })).then(() => {
            setForm(initialForm);
            navigate(paths.tickets);
        }).catch(() => setForm(initialForm))


    }, [dispatch, form, initialForm, navigate]);


    const handleTicketType = useCallback((e: ChangeEvent<HTMLSelectElement>) => {

        setForm((prev) => ({ ...prev, ticket_type: e.target.value as TicketType }))

        if (e.target.value === "BUSINESS") {
            setForm((prev) => ({ ...prev, price: prev.price + 100 }))
        } else {
            setForm((prev) => ({ ...prev, price: prev.price - 100 }))
        }
    }, []);


    const handleFromDate = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            from_date: e.target.value,
            to_date: e.target.value < prev.to_date ? prev.from_date : e.target.value
        }));
    }, [])


    return (
        <Box sx={{ marginTop: 2 }}>
            <Snackbar open={!!ticket?.error} >
                <Alert severity="error" sx={{ width: '100%' }}>
                    {ticket.error}
                </Alert>
            </Snackbar>
            <Typography sx={{ marginBottom: 1 }}>
                All fields are required
            </Typography>
            <form onSubmit={handleTicketCreate}>

                <Box marginBottom={2}>
                    <FormGroup>
                        <TextField
                            required
                            value={form.inbound}
                            onChange={(e) => setForm((prev) => ({ ...prev, inbound: e.target.value.toUpperCase() }))}
                            label="Inbound"
                            variant="outlined" />
                    </FormGroup>
                </Box>


                <Box marginBottom={2}>
                    <FormGroup>
                        <TextField
                            required
                            value={form.outbound}
                            onChange={(e) => setForm((prev) => ({ ...prev, outbound: e.target.value.toUpperCase() }))}
                            label="Outbound"
                            variant="outlined" />
                    </FormGroup>
                </Box>


                <Box marginBottom={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Ticket Type</InputLabel>
                        <Select

                            required
                            value={form.ticket_type}
                            label="Tikcet Type"
                            onChange={(e) => handleTicketType(e as any)}
                        >
                            <MenuItem value="ECONOMY">ECONOMY</MenuItem>
                            <MenuItem value="BUSINESS">BUSINESS</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box marginBottom={2}>
                    <FormGroup>
                        <TextField
                            required
                            value={form.price}
                            onChange={(e) => setForm((prev) => ({ ...prev, price: Number(e.target.value) }))}
                            label="Price"
                            type="number"
                            inputProps={
                                {
                                    min: 10
                                }
                            }
                            variant="outlined" />
                    </FormGroup>
                </Box>

                <Box marginBottom={2}>
                    <FormGroup>
                        <TextField
                            required
                            value={form.seat_number}
                            onChange={(e) => setForm((prev) => ({ ...prev, seat_number: Number(e.target.value) }))}
                            label="Seat Number"
                            type="number"
                            inputProps={{
                                min: 1,
                                max: 100
                            }}
                            variant="outlined" />
                    </FormGroup>
                </Box>


                <Box marginBottom={2}>
                    <FormGroup>
                        <TextField
                            required
                            value={form.from_date}
                            onChange={(e) => handleFromDate(e)}
                            label="From Date"
                            type="date"
                            variant="outlined"
                            InputProps={{ inputProps: { min: formatDate(new Date()) } }}
                        />
                    </FormGroup>
                </Box>

                <Box marginBottom={2}>
                    <FormGroup>
                        <TextField
                            required
                            value={form.to_date}
                            onChange={(e) => setForm((prev) => ({ ...prev, to_date: e.target.value }))}
                            label="To Date"
                            type="date"
                            InputProps={{ inputProps: { min: formatDate(new Date(form.from_date)) } }}
                            variant="outlined" />
                    </FormGroup>
                </Box>

                <Box marginBottom={2}>
                    <Button type="submit" variant="contained">Create</Button>
                </Box>

            </form>
        </Box>
    )
}

export default CreateTicket
