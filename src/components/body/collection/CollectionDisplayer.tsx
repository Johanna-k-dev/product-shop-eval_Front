import {FC, useEffect, useState} from 'react';
import {getProductsByCollection} from "../../../api/api";
import Grid2 from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import {useNavigate, NavigateFunction} from "react-router";
import * as React from "react";
import {Product} from "../../../@type/product";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


interface CollectionDisplaye {
    collectionID: number;
    title: string;
}

const CollectionDisplayer: FC<CollectionDisplaye> = ({collectionID ,title}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProductsByCollection(collectionID);
                setProducts(data);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [collectionID]);

    if (loading) return <p>Chargement en cours ...</p>;

    function handleNavigate(productId: number) {
        navigate(`/product-details/${productId}`);
    }

    return (

        <div style={{display:"flex",flexDirection:"column", alignItems: 'center',padding: "30px" }} >
            <h2 style={{fontSize:"xx-large", color:'#A78385'}}>{title}</h2>
            <Grid2 container spacing={2}
                style={{width:'100%',display: "flex", justifyContent: "space-around" , alignItems: 'center', padding: "30px",  overflow: 'hidden',
                   gap: '50px',
                   overflowY: 'scroll',
                   scrollbarWidth: 'none',}}>
                {products.map((product) => (
                <Grid2  key={product.id} component="div" style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                    <Card className={'scale-on-hover'} style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        minWidth: 450,
                        minHeight: 300,
                        margin: 2,
                        borderRadius:' 20px',
                        backgroundColor: "rgba(116,186,196,0.54)"}}
                          onClick={() => handleNavigate(product.id)}>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "450px",
                                height: "100%",
                            }}
                        >
                            <Typography variant="h4" style={{justifySelf:'center', alignSelf:'center'}}>{product.name} {product.price}€</Typography>
                            <img src={product.posterPath} alt={product.name}
                                 onClick={() => handleNavigate(product.id)}
                                 style={{borderRadius: "20px", margin: "20px"}}
                            />
                        </CardContent>
                    </Card>
                </Grid2>
            ))}
            </Grid2>
        </div>
    );
};

export default CollectionDisplayer;