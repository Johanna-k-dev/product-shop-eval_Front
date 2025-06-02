import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LayoutDisConnected from "../@layout/LayoutConnected";
import ProductDetailsPage from "../pages/body/products-detaills-page/ProductDetailsPage";
import HomePage from "../pages/body/home-page/HomePage";
import AllProductsPage from "../pages/body/AllProductsPage";
import SkinCarePage from "../pages/body/SkinCarePage";
import HairesCarePage from "../pages/body/HairsCarePage";
import MakeUpPage from "../pages/body/MakeUpPage";
import LayoutConnected from "../@layout/LayoutConnected";
import CartPage from "../pages/body/cart-page/CartPage";
import AdminPageConnected from "../pages/admin-page/AdminPageConnected";
import AdminPageDisconnected from "../pages/admin-page/AdminPageDisconnected";
import {useAuth} from "../contexts/UserConnectionContext";

const AppRoutes: FC = () => {
    const {isAuthenticated} = useAuth();
    return (
        <Routes>
            {isAuthenticated ? (
                <Route path="/" element={<LayoutDisConnected/>}>
                    <Route index element={<Navigate to="/home_page"/>}/>
                    <Route path="/home_page" element={<HomePage/>}/>
                    <Route path="all-products" element={<AllProductsPage/>}/>
                    <Route path="skin-care" element={<SkinCarePage/>}/>
                    <Route path="hairs-care" element={<HairesCarePage/>}/>
                    <Route path="make-up" element={<MakeUpPage/>}/>
                    <Route path="product-details/:id" element={<ProductDetailsPage/>}/>
                    <Route path="cart" element={<CartPage/>}/>
                    <Route path="admin" element={<AdminPageDisconnected/>}/>
                </Route>
            ) : (<Route path="/" element={<LayoutConnected/>}>
                <Route index element={<Navigate to="/home_page"/>}/>
                <Route path="/home_page" element={<HomePage/>}/>
                <Route path="all-products" element={<AllProductsPage/>}/>
                <Route path="skin-care" element={<SkinCarePage/>}/>
                <Route path="hairs-care" element={<HairesCarePage/>}/>
                <Route path="make-up" element={<MakeUpPage/>}/>
                <Route path="product-details/:id" element={<ProductDetailsPage/>}/>
                <Route path="cart" element={<CartPage/>}/>
                <Route path="admin" element={<AdminPageConnected/>}/>
            </Route>

            )}
        </Routes>
    );
};

export default AppRoutes;