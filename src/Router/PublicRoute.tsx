import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const { token } = useSelector((state: any) => state.User);
    if (token) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default PublicRoute;
