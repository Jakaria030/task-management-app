import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner></Spinner>;
    }

    return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
