import { Navigate } from "react-router-dom";
import { paths } from "../constants/paths";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/selectors/authSelector";

type Props = {
    children: JSX.Element,
}

const AdminRoute = ({ children }: Props) => {

    const auth = useSelector(selectAuth);

    if (auth.loggedIn && auth.user?.role === "ADMIN") {
        return children;
    }

    return <Navigate to={paths.login} replace />;
}

export default AdminRoute
