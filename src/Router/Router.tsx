import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Account from "../Pages/Account/Account";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import CreateOrder from "../Pages/CreateOrder/CreateOrder";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ProductPage from "../Pages/ProductPage/ProductPage";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      <Route path="/createorder" element={<ProtectedRoute><CreateOrder /></ProtectedRoute>} />
      <Route path="/updateproduct" element={<ProtectedRoute><UpdateProduct /></ProtectedRoute>} />
      <Route path="/productpage" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
    </Routes>
  );
}


export default AppRouter;
