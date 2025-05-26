import React, {FC} from 'react';
import Header from "../pages/header/Header";
import {Outlet} from "react-router";
import Footer from "../pages/footer/Footer";

const LayoutDisconnected: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default LayoutDisconnected;