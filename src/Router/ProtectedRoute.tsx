import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { token, role } = useSelector((state: any) => state.User);
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    if (role !== "admin") {
        return <Navigate to="/login" replace />
    }
    return children;
}

export default ProtectedRoute;
