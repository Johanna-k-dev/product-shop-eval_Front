import React, {FC} from 'react';
import Header from "../pages/header/Header";
import {Outlet} from "react-router";
import "../App.css"
import Footer from "../pages/footer/Footer";


const layoutConnected: FC<{}> = ({}) => {
    return (
        <main className={"main"}>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default layoutConnected;