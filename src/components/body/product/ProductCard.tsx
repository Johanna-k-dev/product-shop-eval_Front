import React, {FC} from "react";
import {useNavigate} from "react-router";
import productsData from "../../../dataFake/product-data.json";
import {Product} from "../../../type/product";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductCard: FC = () => {
    const navigation = useNavigate();

    function handleNavigate(productId: number) {
        console.log("ID du produit cliqué :", productId);
        navigation(`/product-details/${productId}`);
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%", height: "100%"}}>
            {productsData.products.map((product: Product) => (
                <Card key={product.id} sx={{
                    maxWidth: 350,
                    minWidth: 250,
                    minHeight: 400,
                    m: 2,
                    borderRadius: 2,
                    backgroundColor: "aliceblue"
                }}>
                    <CardContent>
                        <Typography variant="h2">{product.name}</Typography>
                        <img src={product.posterPath} alt={product.name} onClick={() => handleNavigate(product.id)}/>
                        <Typography variant="body1">{product.price} €</Typography>
                        <Typography variant="body2">{product.description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleNavigate(product.id)}>Détailles du produit</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default ProductCard;