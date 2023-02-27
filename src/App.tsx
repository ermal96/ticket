import { BrowserRouter, Routes, Route } from "react-router-dom"
import { paths } from "./constants/paths"
import { CreateTicket, Ticket, Tickets } from "./pages/tickets"
import { Login, Register } from "./pages/auth"
import { AdminRoute, AuthRoute, PrivateRoute } from "./middlewares"
import { auth } from "./firebase-config"
import { onAuthStateChanged } from "firebase/auth"
import { AuthActions } from "./store/slices/authSlice"
import { useAppDispatch } from "./store"
import { useState } from "react"
import Spinner from "./components/Spinner"
import Layout from "./components/Layout"

const App = () => {
    const dispatch = useAppDispatch();
    const [userLoading, setUserLoading] = useState(true);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(AuthActions.restoreUser({
                email: user.email || '',
                role: "USER"
            }))
            setUserLoading(false);
        } else {
            setUserLoading(false);
            dispatch(AuthActions.logoutUser())
        }
    });

    if (userLoading) {
        return <Spinner />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={paths.tickets}
                    element={
                        <PrivateRoute>
                            <Layout>
                                <Tickets />
                            </Layout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={paths.ticket}
                    element={
                        <PrivateRoute>
                            <Layout>
                                <Ticket />
                            </Layout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={paths.createTicket}
                    element={
                        <AdminRoute>
                            <Layout>
                                <CreateTicket />
                            </Layout>
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
