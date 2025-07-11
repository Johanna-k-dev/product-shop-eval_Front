import React, {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Product} from "../../../@type/product";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {getAllProducts} from "../../../api/api";
import {Grid2} from "@mui/material";


const ProductCard: FC = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    function handleNavigate(productId: number) {
        navigate(`/product-details/${productId}`);
    }

    useEffect(() => {
        async function fetchProducts() {
            try {
                const productData = await getAllProducts()
                setProducts(productData);
            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
            }
        }
        fetchProducts();
    }, []);
    return (
        <Grid2 style={{width:"100%",maxWidth:"2400px", display: "flex",flexWrap:"wrap", flexDirection: "row",gap:'50px', justifyContent:"space-around", height:"1500px", overflow:"hidden",overflowY:"scroll", scrollbarWidth:"none"}}>
            {products.map((product: Product) => (
                <Card key={product.id} className={'scale-on-hover'} sx={{
                    maxWidth: '500px',
                    minWidth: 350,
                    minHeight: 200,
                    m:2,
                    borderRadius: 2,
                    backgroundColor: "rgba(116,186,196,0.54)"
                }}>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "450px",
                            height: "100%",
                            textAlign: "center"
                        }}
                    >
                        <Typography variant="h4">{product.name} {product.price}€</Typography>
                        <img src={product.posterPath} alt={product.name} onClick={() => handleNavigate(product.id)} style={{borderRadius:"20px", margin:"20px"}} />
                    </CardContent>
                </Card>
            ))}
        </Grid2 >
    );
};

export default ProductCard;