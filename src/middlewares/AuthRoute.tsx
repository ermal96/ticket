import { Navigate } from "react-router-dom";
import { paths } from "../constants/paths";

type Props = {
    children: JSX.Element,
}

const AuthRoute = ({ children }: Props) => {
    const loggedIn = false;

    if (!loggedIn) {
        return children;
    }

    return <Navigate to={paths.tickets} replace />;
}

export default AuthRoute
