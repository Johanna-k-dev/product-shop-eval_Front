import HeaderConnected from "../pages/header/HeaderConnected";
import React, {FC} from 'react';
import {Outlet} from "react-router";
import "../App.css"
import Footer from "../pages/footer/Footer";



const layoutConnected: FC<{}> = ({}) => {
    return (
        <main className={"main"}>
            <HeaderConnected/>
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default layoutConnected;