import {FC} from 'react';
import * as React from "react";
import {Link} from "react-router";
import "./Header.css"
import LoginIcon from '@mui/icons-material/Login';


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
            }} className="scale-on-hover"> <Link to={"/home_page"} style={{textDecoration:"none", color: '#A78385'}}>BeautyShop</Link></h1>
            <nav>
                <ul style={{
                    width: "900px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    listStyleType: "none",
                }}>
                    <li className="scale-on-hover"><Link to="/all-products" style={{textDecoration: 'none', color: '#A78385'}}>Tous nos produits</Link></li>
                    <li className="scale-on-hover"><Link to="/skin-care" style={{textDecoration: 'none', color: '#A78385'}}>Skin care</Link></li>
                    <li className="scale-on-hover"><Link to="/hairs-care" style={{textDecoration: 'none', color: '#A78385'}}>Hairs care</Link></li>
                    <li className="scale-on-hover"><Link to="/make-up" style={{textDecoration: 'none', color: '#A78385'}}>Make Up</Link></li>
                    <li className="scale-on-hover"><Link to="/cart" style={{textDecoration: 'none', color: '#A78385'}}>Panier</Link></li>
                    <li className="scale-on-hover"><Link to="/cart" style={{
                        textDecoration: 'none',
                        color: '#A78385'
                    }}><LoginIcon /></Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;