import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';
import React from 'react';
import {FC} from 'react';
import {useNavigate} from "react-router-dom";

const BackToCart: FC<{}> = ({}) => {
const navigate = useNavigate();

    const handlenavigate = (() => {
        navigate('/cart')
    })
    return (
        <button
            onClick={handlenavigate}
            className={"scale-on-hover"}
            style={{backgroundColor:'#74BAC4',color:'white',fontSize:"x-large",width:'200px',height:'70px',borderRadius:'20px',border:"none",boxShadow:"", margin:"50px"}}
        >Voir mon panier
        </button>
    );
};

export default BackToCart;