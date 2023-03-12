import { Navigate, Route, Routes } from "react-router";
import LoginPage from "../auth/pages/LoginPage";
import SimulaRoutes from "../simulaws/routes/SimulaRoutes";
import BarraMenu from "../ui/components/BarraMenu";

function AppRouter ()  {
    return (
            <>
                <Routes>
                    <Route path="login" element={<LoginPage />}/>
                    <Route path="/*" element={<SimulaRoutes />}/>
                </Routes>
            </>
        )
}

export default AppRouter;