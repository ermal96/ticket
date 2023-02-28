import { Ticket } from './../../types';
import { fetchTickets, createTicket, fetchTicket } from './../../services/ticketService';
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

export const getTicket = createAsyncThunk(
    'ticket/getTicket',
    async (id: string, { rejectWithValue }) => {
        return await fetchTicket(id, rejectWithValue);
    }
)

