import React, {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Product} from "../../../@type/product";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {getAllProducts} from "../../../api/api";
import {Grid2} from "@mui/material";


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
                const productData = await getAllProducts()
                console.log('Produits récupérés:', productData);
                setProducts(productData); // ✅ Mise à jour de l'état
            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
            }
        }

        fetchProducts();
    }, []);
    return (
        <Grid2 style={{width:"100%",maxWidth:"2000px", display: "flex",flexWrap:"wrap", flexDirection: "row", justifyContent:"center", height:"1500px", overflow:"hidden",overflowY:"scroll", scrollbarWidth:"none"}}>
            {products.map((product: Product) => (
                <Card key={product.id} sx={{
                    minWidth: 450,
                    minHeight: 300,
                    m:2,
                    borderRadius: 2,
                    backgroundColor: "#F6EDF0"
                }}>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "450px",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h4">{product.name}</Typography>
                        <img src={product.posterPath} alt={product.name} onClick={() => handleNavigate(product.id)} style={{borderRadius:"20px", margin:"20px"}} />
                    </CardContent>

                </Card>
            ))}
        </Grid2 >
    );
};

export default ProductCard;