import { Alert, AlertTitle } from "@mui/material"

const ErrorHandler = () => {
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
        </Alert>
    )
}

export default ErrorHandler
