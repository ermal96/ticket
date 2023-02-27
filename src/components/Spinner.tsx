import { Box, CircularProgress } from "@mui/material"

const Spinner = () => {
    return (
        <Box sx={{ display: 'flex', width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    )
}

export default Spinner