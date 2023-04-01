import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";


type PublicRouteProps = {
    children: React.ReactNode;
}

const PublicRoute: React.FunctionComponent<PublicRouteProps> = ({ children }) => {
    const { sesion } = useContext (AuthContext);
    return (!sesion.autenticado) 
        ? children
        : <Navigate to="/principal" />
}

export default PublicRoute;