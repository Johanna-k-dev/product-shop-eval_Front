import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LayoutConnected from "../layout/LayoutConnected";
import ProductDetails from "../pages/body/ProductDetails";
import productsData from "../../src/dataFake/product-data.json";
import Cart from "../pages/body/Cart";
import Admin from "../pages/body/Admin";
import HomePage from "../pages/body/HomePage"; // Importe ta page d'accueil

const Router: FC = () => {

    return (
        <Routes>
            <Route path="/" element={<LayoutConnected/>}>
                <Route index element={<Navigate to="/home_page"/>}/>
                <Route path="/home_page" element={<HomePage/>}/> {/* Ajoute la page d'accueil */}
                <Route path="/product-details/:id" element={<ProductDetails/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Route>
        </Routes>
    );
};

export default Router;