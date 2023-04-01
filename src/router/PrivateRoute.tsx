import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";


type PrivateRouteProps = {
    children: React.ReactNode;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({ children }) => {
    const { sesion } = useContext (AuthContext);
    return (sesion.autenticado) 
        ? children
        : <Navigate to="/login" />
}

export default PrivateRoute;
