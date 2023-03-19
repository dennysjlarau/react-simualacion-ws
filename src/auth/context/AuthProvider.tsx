import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
//@ts-ignore
import { authReducer } from "./authReducer";
//@ts-ignore
import { types } from "../types/types";

const initialState = {
    autenticado: false,
    usuario: null
}

type AuthProps = {
    children: React.ReactNode;
}

const AuthProvider: React.FunctionComponent<AuthProps> = ({ children }) => {
    const [sesion, dispatch] =  useReducer(authReducer, initialState);
    
    //[ ] login: llamar funcion asíncrona con usuario y clave para la autenticación
    const login = (nombre_usr='') => { 
        const action = {
            type: types.login,
            payload: {
                id_usr: 'id user: 789555562',
                nombre_usr
            }
        }
        dispatch(action);
    }

    return (
            <AuthContext.Provider value = {{sesion, login: login}}>
                { children }
            </AuthContext.Provider>
        )
}

export default AuthProvider;