export type UserRole = 'ADMIN' | 'USER';

export type UserAuth = {
    email: string,
    password: string,
    role?: UserRole
}

export type AuthState = {
    loading: boolean,
    loggedIn: boolean,
    error?: string,
    user?: {
        email: string,
        role?: UserRole
    }

}

export type FirebaseAuthResponse = {
    email: string,
    role?: UserRole
}

export type FirebaseError = {
    code: number,
    message: string
}

export type TicketType = "ECONOMY" | "BUSINESS";

export type Ticket = {
    id?: string,
    ticket_type_id: string,
    inbound: string,
    outbound: string,
    ticket_type: TicketType
    price: number,
    from_date: string,
    to_date: string,
    seat_number: number
}

export type TicketState = {
    loading: boolean,
    error?: string,
    ticket?: Ticket,
    tickets?: Ticket[]
}