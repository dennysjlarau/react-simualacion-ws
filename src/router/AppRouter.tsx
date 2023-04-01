import { Navigate, Route, Routes } from "react-router";
import LoginPage from "../auth/pages/LoginPage";
import SimulaRoutes from "../simulaws/routes/SimulaRoutes";
import BarraMenu from "../ui/components/BarraMenu";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRouter ()  {
    return (
            <>
                <Routes>
                    <Route path="login/*" element={
                        <PublicRoute >
                            <Routes>
                                <Route path="/" element={<LoginPage />} />
                            </Routes>
                            
                        </PublicRoute>
                    }/>
                    <Route path="/*" element={
                        <PrivateRoute >
                            <SimulaRoutes />
                        </PrivateRoute>
                    }/>
                </Routes>
            </>
        )
}

export default AppRouter;