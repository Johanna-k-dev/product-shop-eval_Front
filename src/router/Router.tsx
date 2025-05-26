import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LayoutConnected from "../layout/LayoutConnected";
import ProductDetails from "../pages/body/ProductDetails";
import Cart from "../pages/body/Cart";
import Admin from "../pages/body/Admin";
import HomePage from "../pages/body/home-page/HomePage";
import AllProductsPage from "../pages/body/AllProductsPage";
import SkinCarePage from "../pages/body/SkinCarePage";
import HairesCarePage from "../pages/body/HairsCarePage";
import MakeUpPage from "../pages/body/MakeUpPage"; // Importe ta page d'accueil

const Router: FC = () => {

    return (
        <Routes>
            <Route path="/" element={<LayoutConnected/>}>
                <Route index element={<Navigate to="/home_page"/>}/>
                <Route path="/home_page" element={<HomePage/>}/>
                <Route path={"all-products"} element={<AllProductsPage/>}/>
                <Route path={"/skin-care"} element={<SkinCarePage/>}/>
                <Route path={"/hairs-care"} element={<HairesCarePage/>}/>
                <Route path={"/make-up"} element={<MakeUpPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/product-details/:id" element={<ProductDetails/>}/>
            </Route>
        </Routes>
    );
};

export default Router;