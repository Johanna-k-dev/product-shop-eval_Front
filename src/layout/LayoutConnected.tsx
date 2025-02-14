import React, {FC} from 'react';
import Header from "../pages/header/Header";
import {Outlet} from "react-router";
import "../App.css"


const layoutConnected: FC<{}> = ({}) => {
    return (
        <main className={"main"}>
            <Header/>
            <Outlet/>
        </main>
    );
};

export default layoutConnected;