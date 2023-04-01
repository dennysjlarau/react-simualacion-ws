import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";


function BarraMenu() {
    const { sesion, logout } = useContext( AuthContext );
    console.log('sesion: ', sesion);
    const navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <span>SiMulación-WS </span>
                    <span> <img src="../public/donkey.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/></span>
                </div>
                <div className="navbar-brand ms-auto text-end">
                    <span className="text-primary">{ sesion?.usuario?.nombre_usr }</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/principal">Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Opciones
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><NavLink className="dropdown-item" to="/catalogos">Catálogos</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/configuraciones">Configuraciones</NavLink></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><NavLink className="dropdown-item" to="/guia-estilos">Guía de Estilos</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link link btn btn-link text-primary" onClick={ onLogout }>Salir</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default BarraMenu;