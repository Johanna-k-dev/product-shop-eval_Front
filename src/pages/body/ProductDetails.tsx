import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Product} from "../../type/product";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddCart from "../../components/body/Cart/AddCart";
import {getProductById} from "../../api/api";

const ProductDetails: FC = () => {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [stock, setStock] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        async function fetchProduct() {
            try {
                if (!id) throw new Error("Aucun ID trouvé dans l'URL");
                const productData: any = await getProductById(Number(id));
                console.log("Produit récupéré :", productData);

                if (productData) {
                    setProduct(productData);
                    setStock(productData.quantity);
                    setTotalPrice(productData.price);
                    generateAlert(0, productData.quantity);
                } else {
                    throw new Error("Produit non trouvé");
                }
            } catch (error) {
                setError("Erreur lors du chargement du produit. Vérifiez l'API.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    const generateAlert = (selectedStock: number, initialStock: number) => {
        const stockAfterSelect = initialStock - selectedStock;
        const oneOfInitialStock = initialStock - 1;
        const twoOfInitialStock = initialStock - 2;
        const threeOfInitialStock = initialStock - 3;

        if (stockAfterSelect === 0) {
            setAlertMessage(`Nous en avons ${initialStock} en Stock, alors foncez !🚀`);
        } else if (selectedStock === initialStock) {
            setAlertMessage(`Oh non rupture du stock, désolé il ne reste plus d'article(s) en stock ! 😱`);
        } else if (selectedStock === oneOfInitialStock || selectedStock === twoOfInitialStock || selectedStock === threeOfInitialStock) {
            setAlertMessage(`Attention, il ne reste que ${stockAfterSelect} article(s) en stock ! 🚨`);
        } else {
            setAlertMessage(`${stockAfterSelect} articles en stock`);
        }
    };

    if (loading) return <p>Chargement du produit...</p>;
    if (error) return <p style={{color: "red"}}>{error}</p>;
    if (!product) return <p>Produit introuvable.</p>;

    return (
        <section style={{ padding: "30px", margin: "50px" }}>
            <article
                className="background-image"
                style={{padding: "40px", height: "800px", justifySelf: "center !important"}}
            >

                <Typography variant="h3" style={{color: "white"}}>{product.name}</Typography>
                <div style={{display: "flex"}}>
                    <img
                        src={product.posterPath}
                        alt={product.name}
                        style={{
                            margin: "40px",
                            width: "600px",
                            height: "100%",
                            objectFit: "contain",
                            marginBottom: "15px",
                            borderRadius: "20px"
                        }}
                    />
                    <div style={{display: "flex", flexDirection: "column", gap:"30px", justifyContent:"start"}}>
                        <Typography variant="body1"
                                    style={{color: "white", fontWeight: "bold"}}>{product.description}</Typography>
                        <p style={{color: "white"}}>{alertMessage}</p>
                        <AddCart/>

                    </div>
                </div>
            </article>

        </section>
    );

};

export default ProductDetails;