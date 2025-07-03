import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import ProductDetailsPage from "../pages/body/products-detaills-page/ProductDetailsPage";
import HomePage from "../pages/body/home-page/HomePage";
import AllProductsPage from "../pages/body/all-product-search-page/AllProductsPage";
import SkinCarePage from "../pages/body/collections-pages/SkinCarePage";
import HairesCarePage from "../pages/body/collections-pages/HairsCarePage";
import MakeUpPage from "../pages/body/collections-pages/MakeUpPage";
import LayoutConnected from "../@layout/LayoutConnected";
import CartPage from "../pages/body/cart-page/CartPage";
import UserPageDisconnected from "../pages/body/user-page/UserPageDisconnected";
import LayoutDisconnected from "../@layout/LayoutDisconnected";
import OrderPage from "../pages/body/order-page/OrderPage";
import UserPageConnected from "../pages/body/user-page/UserPageConnected";
import {useAuth} from "../contexts/AuthContext";

const AppRoutes: FC = () => {
    const {isAuthenticated} = useAuth();
    return (
        <Routes key={isAuthenticated ? "connected" : "disconnected"}>
            {isAuthenticated ? (
                <Route path="/" element={<LayoutConnected/>}>
                    <Route index element={<Navigate to="/home_page"/>}/>
                    <Route path="/home_page" element={<HomePage/>}/>
                    <Route path="all-products" element={<AllProductsPage/>}/>
                    <Route path="skin-care" element={<SkinCarePage/>}/>
                    <Route path="hairs-care" element={<HairesCarePage/>}/>
                    <Route path="make-up" element={<MakeUpPage/>}/>
                    <Route path="product-details/:id" element={<ProductDetailsPage/>}/>
                    <Route path="cart" element={<CartPage/>}/>
                    <Route path="user" element={<UserPageConnected/>}/>
                    <Route path={"order"} element={<OrderPage/>}/>
                </Route>
            ) : (
                <Route path="/" element={<LayoutDisconnected/>}>
                    <Route index element={<Navigate to="/home_page"/>}/>
                    <Route path="/home_page" element={<HomePage/>}/>
                    <Route path="all-products" element={<AllProductsPage/>}/>
                    <Route path="skin-care" element={<SkinCarePage/>}/>
                    <Route path="hairs-care" element={<HairesCarePage/>}/>
                    <Route path="make-up" element={<MakeUpPage/>}/>
                    <Route path="product-details/:id" element={<ProductDetailsPage/>}/>
                    <Route path="cart" element={<CartPage/>}/>
                    <Route path="user" element={<UserPageDisconnected/>}/>
                </Route>
            )}
        </Routes>
    );
};

export default AppRoutes;