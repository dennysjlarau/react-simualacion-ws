import { Navigate, Route, Routes } from "react-router";
import BarraMenu from "../../ui/components/BarraMenu";
import GuiaEstilosPage from "../pages/GuiaEstilosPage";
import PrincipalPage from "../pages/PrincipalPage";

function SimulaRoutes ()  {
    return (
        <>
            <BarraMenu />
            <div className="container-fluid border contenedorPrincipal">
                <Routes>
                    <Route path="/" element={<Navigate to="/principal" />}/>
                    <Route path="principal" element={<PrincipalPage />}/>
                    <Route path="guia-estilos" element={<GuiaEstilosPage />}/>
                </Routes>
            </div>
        </>
    )
}

export default SimulaRoutes;