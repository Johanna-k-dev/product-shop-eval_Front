import React, {FC} from 'react';
import {Grid2} from "@mui/material";
import ProductCard from "../../components/body/product/ProductCard";
import ProductSearshBarre from "../../components/body/Searsh/ProductSearshBarre";

const HomePage: FC<{}> = (product:any) => {
    return (
        <>
            <section >
                <h2>Nos Produits</h2>
                <ProductSearshBarre/>
                <Grid2>
                    <ProductCard key={product.id}/>
                </Grid2>
            </section>
        </>
    );
};

export default HomePage;