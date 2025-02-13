import React, {FC} from 'react';
import Header from "../pages/header/Header";
import {Grid2} from "@mui/material";
import ProductCard from "../components/body/product/ProductCard";


const layoutConnected: FC<{}> = ({}) => {
    return (
        <>
       <Header/>
            <section>
                <h2>Nos Produits</h2>
                <Grid2>
                    <ProductCard/>
                </Grid2>
            </section>
        </>
    );
};

export default layoutConnected;