import { BrowserRouter, Routes, Route } from "react-router-dom"
import { paths } from "./constants/paths"
import { CreateTicket, Ticket, Tickets } from "./pages/tickets"
import { Login, Register } from "./pages/auth"
import { AdminRoute, AuthRoute, PrivateRoute } from "./middlewares"

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={paths.tickets}
                    element={
                        <PrivateRoute>
                            <Tickets />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={paths.ticket}
                    element={
                        <PrivateRoute>
                            <Ticket />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={paths.createTicket}
                    element={
                        <AdminRoute>
                            <CreateTicket />
                        </AdminRoute>
                    }
                />
                <Route
                    path={paths.login}
                    element={
                        <AuthRoute>
                            <Login />
                        </AuthRoute>
                    }
                />
                <Route
                    path={paths.register}
                    element={
                        <AuthRoute>
                            <Register />
                        </AuthRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
