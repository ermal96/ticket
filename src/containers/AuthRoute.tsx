import { Navigate } from "react-router-dom";
import { paths } from "../constants/paths";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/selectors/authSelector";

type Props = {
    children: JSX.Element,
}

const AuthRoute = ({ children }: Props) => {
    const auth = useSelector(selectAuth);


    if (!auth.loggedIn) {
        return children;
    }

    return <Navigate to={paths.tickets} replace />;
}

export default AuthRoute
