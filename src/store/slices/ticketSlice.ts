import { Ticket, TicketState } from './../../types';
import { getTickes, saveTicket } from './../actions/ticketActions';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: TicketState = {
    loading: false,
}

const setLoader = (state: TicketState): void => {
    state.loading = true
    state.error = ''
};

const setTicketsRejected = (state: TicketState, action: PayloadAction<string>): void => {
    state.loading = false
    state.error = action.payload;
};

const setTicketsFulfilled = (state: TicketState, action: PayloadAction<Ticket[]>): void => {
    state.loading = false
    state.tickets = action.payload
};


const setCreateRejected = (state: TicketState, action: PayloadAction<string>): void => {
    state.loading = false
    state.error = action.payload;
};

const setCreateFulfilled = (state: TicketState, action: PayloadAction<Ticket>): void => {
    state.loading = false
    state.tickets = [...state.tickets || [], action.payload]
};



export const TicketSlice = createSlice({
    name: 'Ticket',
    initialState,
    reducers: {},
    extraReducers: {
        // get tickets actions
        [getTickes.pending as unknown as string]: setLoader,
        [getTickes.fulfilled as unknown as string]: setTicketsFulfilled,
        [getTickes.rejected as unknown as string]: setTicketsRejected,

        [saveTicket.pending as unknown as string]: setLoader,
        [saveTicket.fulfilled as unknown as string]: setCreateFulfilled,
        [saveTicket.rejected as unknown as string]: setCreateRejected,
    }
})

export const AuthActions = TicketSlice.actions;

export default TicketSlice.reducer