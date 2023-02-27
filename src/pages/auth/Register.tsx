import { Button, Grid, TextField, Container, FormGroup, Typography, Box, Alert, Snackbar } from "@mui/material"
import RegisterIcon from '../../assets/register.svg';
import { Link } from "react-router-dom";
import { paths } from "../../constants/paths";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { useAppDispatch } from "../../store";
import { registerUser } from "../../store/actions/authActions";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/selectors/authSelector";

const Register = () => {

    const dispatch = useAppDispatch();
    const auth = useSelector(selectAuth)

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleRegister = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(registerUser({
            email: form.email,
            password: form.password,
            role: 'USER'
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
                    <img alt="" style={{ width: '100%' }} src={RegisterIcon} />
                </Grid>
                <Grid item xs={6} md={5}>
                    <Typography variant="h3" component="h1">
                        Register
                    </Typography>
                    <Box marginTop={2}>
                        <form onSubmit={handleRegister}>

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
                                <Button disabled={!isFormValid || auth.loading} type="submit" variant="contained">Create</Button>
                            </Box>

                            <Box marginBottom={2}>
                                <Typography>
                                    Already have an account? <Link to={paths.login}>Login here.</Link>
                                </Typography>
                            </Box>

                        </form>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Register
