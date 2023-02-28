import { Ticket } from './../../types';
import { fetchTickets, createTicket } from './../../services/ticketService';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTickes = createAsyncThunk(
    'ticket/getTickets',
    async (_, { rejectWithValue }) => {
        return await fetchTickets(rejectWithValue);
    }
)

export const saveTicket = createAsyncThunk(
    'ticket/create',
    async (ticket: Ticket, { rejectWithValue }) => {
        return await createTicket(ticket, rejectWithValue);
    }
)
