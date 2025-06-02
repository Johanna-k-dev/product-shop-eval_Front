import React, {FC} from 'react';
import ProductCard from "./ProductCard";
import {Grid2} from "@mui/material";


const ProductsDisplayer: FC<{}> = (product: any) => {
    return (
        <section>

            <Grid2 className={"products-grid"} sx={{

                height: "1320px",
                display: "flex",
                flexDirection:"column",
                flexWrap:"wrap",
                justifyContent:"center",
                justifySelf: "start",
            }}>
                <ProductCard key={product.id}/>
            </Grid2>
        </section>
    );
};

export default ProductsDisplayer;