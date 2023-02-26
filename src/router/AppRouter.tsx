import { Route, Routes } from "react-router";
import LoginPage from "../auth/pages/LoginPage";
import DosPage from "../simulaws/pages/DosPage";
import GuiaEstilosPage from "../simulaws/pages/GuiaEstilosPage";

function AppRouter ()  {
    return (
            <>
                <Routes>
                    <Route path="guia-estilos" element={<GuiaEstilosPage />}/>
                    <Route path="dos" element={<DosPage />}/>

                    <Route path="login" element={<LoginPage />}/>
                </Routes>
            </>
        )
}

export default AppRouter;