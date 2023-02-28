import { Navigate, Route, Routes } from "react-router";
import LoginPage from "../auth/pages/LoginPage";
import GuiaEstilosPage from "../simulaws/pages/GuiaEstilosPage";
import PrincipalPage from "../simulaws/pages/PrincipalPage";
import BarraMenu from "../ui/components/BarraMenu";

function AppRouter ()  {
    return (
            <>
                <BarraMenu />
                <Routes>
                    <Route path="guia-estilos" element={<GuiaEstilosPage />}/>
                    <Route path="principal" element={<PrincipalPage />}/>

                    <Route path="login" element={<LoginPage />}/>
                    <Route path="/" element={<Navigate to="/principal" />}/>
                </Routes>
            </>
        )
}

export default AppRouter;