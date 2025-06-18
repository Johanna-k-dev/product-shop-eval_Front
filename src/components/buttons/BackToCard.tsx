import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';
import React from 'react';
import {FC} from 'react';

const BackToCard: FC<{}> = ({}) => {

    return (
        <button
            className={"scale-on-hover"}
            style={{backgroundColor:'#74BAC4',color:'white',fontSize:"x-large",width:'200px',height:'70px',borderRadius:'20px',border:"none",boxShadow:"", margin:"50px"}}
        >Voir mon panier
        </button>
    );
};

export default BackToCard;