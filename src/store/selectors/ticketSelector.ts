
import { RootState } from './../index';
import { createSelector } from "@reduxjs/toolkit";


export const selectTicket = createSelector((state: RootState) => state, (state) => state.ticket)

