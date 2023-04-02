import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
//@ts-ignore
import { authReducer } from "./authReducer";
//@ts-ignore
import { types } from "../types/types";


type AuthProps = {
    children: React.ReactNode;
}

const init = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    return {
        autenticado: !!usuario, 
        usuario: usuario 
    } 
}

const AuthProvider: React.FunctionComponent<AuthProps> = ({ children }) => {
    const [sesion, dispatch] =  useReducer(authReducer, {}, init);
    
    //[ ] login: llamar funcion asíncrona con usuario y clave para la autenticación
    const login = (nombre_usr='') => { 
        const usuario = {id_usr: 'id user: 789555562', nombre_usr};
        const action = {type: types.login, payload: usuario}
        localStorage.setItem('usuario', JSON.stringify(usuario));
        dispatch(action);
    }

    const logout = () => {
        const action = {type: types.logout}
        localStorage.removeItem('usuario');
        dispatch(action);
    }

    return (
            <AuthContext.Provider value = {{sesion, login, logout}}>
                { children }
            </AuthContext.Provider>
        )
}

export default AuthProvider;