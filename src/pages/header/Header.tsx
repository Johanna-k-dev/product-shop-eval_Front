import {FC} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBarre from "../../components/header/AppBarre";
import {Link} from "react-router";

const Header: FC<{}> = ({}) => {


    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#F6EDF0",
            width: "100%",
            maxHeight: "150px",
        }}>
            <h1 style={{
                color: "#A78385",
                margin: "30px",
            }}> <Link to={"/home_page"} style={{textDecoration:"none", color: '#A78385'}}>BeautyShop</Link></h1>
            <nav>
                <ul style={{
                    width: "900px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    listStyleType: "none",
                }}>
                    <li><Link to="/all-products" style={{textDecoration: 'none', color: '#A78385'}}>Nos produits</Link>
                    </li>
                    <li><Link to="/skin-care" style={{textDecoration: 'none', color: '#A78385'}}>Skin care</Link></li>
                    <li><Link to="/hairs-care" style={{textDecoration: 'none', color: '#A78385'}}>Hairs care</Link></li>
                    <li><Link to="/make-up" style={{textDecoration: 'none', color: '#A78385'}}>Make Up</Link></li>
                    <li><Link to="/cart" style={{textDecoration: 'none', color: '#A78385'}}>Panier</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;