import { Navigate } from "react-router-dom";
import { paths } from "../constants/paths";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/selectors/authSelector";

type Props = {
    children: JSX.Element,
}

const PrivateRoute = ({ children }: Props) => {
    const auth = useSelector(selectAuth);


    if (auth.loggedIn && (auth.user?.role === "ADMIN" || auth.user?.role === "USER")) {
        return children;
    }

    return <Navigate to={paths.login} replace />;
}

export default PrivateRoute
