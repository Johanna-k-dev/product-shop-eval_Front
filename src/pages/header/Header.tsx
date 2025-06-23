import {FC} from 'react';
import * as React from "react";
import {Link} from "react-router";
import "./Header.css"
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const Header: FC<{}> = ({}) => {


    return (
        <header className={"header-container"} style={{
            boxSizing: 'border-box',
            height:'150px',
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#F6EDF0",
            padding: "50px",
        }}>
            <h1 style={{
                color: "#A78385",
                margin: "30px",
                fontSize:'xxx-large',
            }} className="scale-on-hover"> <Link to={"/home_page"} style={{textDecoration:"none", color: '#A78385'}}>BeautyShop</Link></h1>
            <nav>
                <ul style={{
                    margin:'50px',
                    width:"1200px",
                    flexWrap: "wrap",
                    gap:"40px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    listStyleType: "none",
                    fontSize: "x-large",
                    fontWeight:'bold',
                }}>
                    <li className="scale-on-hover"><Link to="/all-products" style={{textDecoration: 'none', color: '#A78385',cursor:'pointer'}}>Tous nos produits</Link></li>
                    <li className="scale-on-hover"><Link to="/skin-care" style={{textDecoration: 'none', color: '#A78385',
                        cursor: 'pointer'}}>Soins peau</Link></li>
                    <li className="scale-on-hover"><Link to="/hairs-care" style={{textDecoration: 'none', color: '#A78385',
                        cursor: 'pointer'}}>Soins cheveux</Link></li>
                    <li className="scale-on-hover"><Link to="/make-up" style={{textDecoration: 'none', color: '#A78385',
                        cursor: 'pointer'}}>Maquillage</Link></li>
                    <li className="scale-on-hover"><Link to="/cart" style={{
                        textDecoration: 'none',
                        color: '#A78385',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        cursor: 'pointer'}}>Panier <ShoppingCartCheckoutIcon style={{fontSize: 'xxx-large'}}/></Link></li>
                    <li className="scale-on-hover"><Link to="/user" style={{
                        textDecoration: 'none',
                        color: '#A78385',
                        display:'flex',
                        alignItems:'center',
                        gap:'5px',
                        cursor: 'pointer'
                    }}>Connexion<LoginIcon style={{fontSize:'xxx-large'}}/></Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;