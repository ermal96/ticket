/* eslint-disable @typescript-eslint/no-explicit-any */
import { FirebaseError, Ticket } from './../types';
import { collection, getDocs, query, where, addDoc, getDoc, doc } from '@firebase/firestore';
import { db } from './../firebase-config';


export const fetchTicket = async (id: string, rejectWithValue: any) => {
    try {

        const ticketRef = doc(db, "tickets", id);
        const ticket = await getDoc(ticketRef);
        return {
            ...ticket.data(),
            id: ticket.id
        };

    } catch (err) {
        return rejectWithValue((err as FirebaseError).message as string)
    }
}

export const fetchTickets = async (rejectWithValue: any) => {
    try {
        const colTickets = collection(db, "tickets");

        const tickets = await getDocs(colTickets);

        const ticketDocs: any[] = [];

        tickets.forEach(doc => {
            ticketDocs.push({
                ...doc.data(),
                id: doc.id
            })
        })

        return ticketDocs;

    } catch (err) {
        return rejectWithValue((err as FirebaseError).message as string)
    }
}

export const createTicket = async (ticket: Ticket, rejectWithValue: any) => {
    try {
        const colTickets = collection(db, "tickets");

        const currectDoc = query(colTickets,
            where("inbound", "==", ticket.inbound),
            where("outbound", "==", ticket.outbound),
            where("seat_number", "==", ticket.seat_number),
            where("from_date", "==", ticket.from_date),
            where("to_date", "==", ticket.to_date),
        );

        const tickets = await getDocs(currectDoc);
        let docExist = false;

        tickets.forEach((doc) => doc.data() ? docExist = true : docExist = false)

        if (docExist) {
            return rejectWithValue('The ticket you are trying to create already exist in db')
        } else {

            const docAdded = await addDoc(colTickets, ticket);
            return {
                ...ticket,
                id: docAdded.id
            };
        }


    } catch (err) {
        return rejectWithValue((err as FirebaseError).message as string)
    }

}
