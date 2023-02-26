import { Navigate } from "react-router-dom";
import { paths } from "../constants/paths";

type Props = {
    children: JSX.Element,
}

const AdminRoute = ({ children }: Props) => {

    const loggedIn = false;
    const userRole = "ADMIN";

    if (loggedIn && userRole === "ADMIN") {
        return children;
    }

    return <Navigate to={paths.login} replace />;
}

export default AdminRoute
