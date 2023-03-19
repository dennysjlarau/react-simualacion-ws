import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function LoginPage () {
    const { login } = useContext( AuthContext );
    const navigate = useNavigate();
    
    //[ ] revisar aquí el consumo del login
    const onLogin = () => {
        login('Dennys Javier Lara Uquillas');
        navigate('/', {
            replace: true
        })
    }
    return (
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />
                <button className="btn btn-primary" onClick={ onLogin }>Login</button>
            </div>
        )
}

export default LoginPage;