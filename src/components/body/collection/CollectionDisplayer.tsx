import {FC, useEffect, useState} from 'react';
import {getProductsByCollection} from "../../../api/api";
import Grid2 from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import {useNavigate, NavigateFunction} from "react-router";
import * as React from "react";
import {Product} from "../../../@type/product";


interface IProps {
    collectionID: number;
    title: string;
}

const CollectionDisplayer: FC< IProps> = ({collectionID ,title}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProductsByCollection(collectionID);
                setProducts(data);
            } catch (error) {
                console.error("Erreur lors du chargement des produits", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [collectionID]);

    if (loading) return <p>Chargement en cours ...</p>;

    function handleNavigate(productId: number) {
        console.log("ID du produit cliqué :", productId);
        navigate(`/product-details/${productId}`);
    }

    return (
        <section style={{display:"flex",flexDirection:"column",justifyContent:"center", padding: "30px" }} >
            <h2 >{title}</h2>
            <Grid2 container spacing={2}>
                {products.map((product) => (
                    <Grid2  key={product.id} component="div" style={{display: "flex", justifyContent: "space-between" , flexDirection:"column", alignItems: "center",}}>
                        <Card style={{width: "500px", height: "100%", display: "flex",flexDirection:"column" , justifyContent: "center", alignItems: "center"}}
                              onClick={() => handleNavigate(product.id)}>
                            <h4>{product.name}</h4>
                            <img src={product.posterPath} alt={product.name} style={{margin:"20px"}}/>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </section>
    );
};

export default CollectionDisplayer;