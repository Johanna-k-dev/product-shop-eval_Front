import React, {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Product} from "../../../type/product";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {get} from "../../../api/api";


const ProductCard: FC = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    function handleNavigate(productId: number) {
        console.log("ID du produit cliqué :", productId);
        navigate(`/product-details/${productId}`);
    }

    useEffect(() => {
        async function fetchProducts() {
            try {
                const productData = await get("product/all"); // ✅ Attente correcte
                console.log('Produits récupérés:', productData);
                setProducts(productData); // ✅ Mise à jour de l'état
            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
            }
        }

        fetchProducts();
    }, []);
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%", height: "100%"}}>
            {products.map((product: Product) => (
                <Card key={product.id} sx={{
                    maxWidth: 350,
                    minWidth: 250,
                    minHeight: 400,
                    m: 2,
                    borderRadius: 2,
                    backgroundColor: "aliceblue"
                }}>
                    <CardContent>
                        <Typography variant="h4">{product.name}</Typography>
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