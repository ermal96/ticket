/* eslint-disable react/no-unescaped-entities */
import { Button, Grid, TextField, Container, FormGroup, Typography, Box, Alert, Snackbar } from "@mui/material"
import LoginIcon from '../../assets/login.svg';
import { Link } from "react-router-dom";
import { paths } from "../../constants/paths";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { loginUser } from "../../store/actions/authActions";
import { selectAuth } from "../../store/selectors/authSelector";

const Login = () => {

    const dispatch = useAppDispatch();
    const auth = useSelector(selectAuth)

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleLogin = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(loginUser({
            email: form.email,
            password: form.password,
        }))

    }, [dispatch, form.email, form.password]);

    const isFormValid = useMemo(() => {
        return form.email.length && form.password.length >= 6
    }, [form.email.length, form.password.length]);


    return (
        <Container style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center' }} maxWidth="md">
            <Snackbar open={!!auth?.error} >
                <Alert severity="error" sx={{ width: '100%' }}>
                    {auth.error}
                </Alert>
            </Snackbar>
            <Grid container spacing={8}>
                <Grid item xs={6} md={7} >
                    <img alt="" style={{ width: '100%' }} src={LoginIcon} />
                </Grid>
                <Grid item xs={6} md={5}>
                    <Typography variant="h3" component="h1">
                        Login
                    </Typography>
                    <Box marginTop={2}>
                        <form onSubmit={handleLogin}>

                            <Box marginBottom={2}>
                                <FormGroup>
                                    <TextField
                                        value={form.email}
                                        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                                        label="Email"
                                        variant="outlined" />
                                </FormGroup>
                            </Box>


                            <Box marginBottom={2}>
                                <FormGroup>
                                    <TextField
                                        value={form.password}
                                        onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                                        label="Password"
                                        type="password"
                                        variant="outlined" />
                                </FormGroup>
                            </Box>


                            <Box marginBottom={2}>
                                <Button disabled={!isFormValid || auth.loading} type="submit" variant="contained">Enter</Button>
                            </Box>

                            <Box marginBottom={2}>
                                <Typography>
                                    Don't have an account? <Link to={paths.register}>Register here.</Link>
                                </Typography>
                            </Box>


                        </form>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Login
