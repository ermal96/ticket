
import { RootState } from './../index';
import { createSelector } from "@reduxjs/toolkit";


export const selectAuth = createSelector((state: RootState) => state, (state) => state.auth)

