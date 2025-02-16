import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom"; // Permet de récupérer l'ID dans l'URL
import {Product} from "../../type/product";
import {get} from "../../api/api";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddCart from "../../components/body/Cart/AddCart";



const ProductDetails: FC = () => {
    const {id} = useParams(); // Récupère l'ID du produit depuis l'URL
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [alertMessage, setAlertMessage] = useState<string>(""); // Alerte pour le stock
    const [stock, setStock] = useState<number>(0); // Stock initialisé à 0
    const [totalPrice, setTotalPrice] = useState<number>(0);

    // 🛍️ Récupérer les détails du produit en fonction de son ID
    useEffect(() => {
        async function fetchProduct() {
            try {
                if (!id) throw new Error("Aucun ID trouvé dans l'URL");

                const productData = await get(`product/${id}`); // Requête API pour un seul produit
                console.log("Produit récupéré :", productData);

                if (productData) {
                    setProduct(productData); // Mise à jour de l'état avec le produit trouvé
                    setStock(productData.quantity); // Récupère la quantité de stock
                    setTotalPrice(productData.price); // Initialise le prix
                    generateAlert(productData.quantity, productData.quantity); // Gère l'alerte en fonction du stock
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

    // Fonction pour gérer l'alerte en fonction de la quantité restante
    const generateAlert = (selectedStock: number, initialStock: number) => {
        const stockAfterSelect = initialStock - selectedStock;
        const oneOfInitialStock = initialStock - 1;
        const twoOfInitialStock = initialStock - 2;
        const treeOfInitialStock = twoOfInitialStock - 3;

        if (stockAfterSelect === 0) {
            setAlertMessage(`Nous en avons ${initialStock} en Stock, alors foncez !🚀`);
        } else if (selectedStock === initialStock) {
            setAlertMessage(
                `Oh non rupture le stock set à ${stockAfterSelect} ,Désolé il ne reste plus d'article(s) en stock ! 😱`
            );
        } else if (selectedStock === oneOfInitialStock) {
            setAlertMessage(
                `Attention, il ne reste que ${stockAfterSelect} article(s) en stock ! 🚨`
            );
        } else if (selectedStock === twoOfInitialStock) {
            setAlertMessage(
                `Attention, il ne reste que ${stockAfterSelect} article(s) en stock ! 🚨`
            );
        } else if (selectedStock === treeOfInitialStock) {
            setAlertMessage(
                `Attention, il ne reste que ${stockAfterSelect} article(s) en stock ! 🚨`
            );
        } else {
            setAlertMessage(`${stockAfterSelect} articles en stock`);
        }
    };

    // 🛑 Gestion du chargement et des erreurs
    if (loading) return <p>Chargement du produit...</p>;
    if (error) return <p style={{color: "red"}}>{error}</p>;
    if (!product) return <p>Produit introuvable.</p>;

    return (
        <div
            style={{
                maxWidth: 1000,
                margin: "auto",
                padding: 20,
                borderRadius: 8,
                backgroundColor: "aliceblue",
            }}
        >
            <CardContent key={product.id}>
                <Typography variant="h3">{product.name}</Typography>
                <img
                    src={product.posterPath}
                    alt={product.name}
                    style={{
                        width: "800px",
                        height: "100%",
                        objectFit: "cover",
                        marginBottom: "15px",
                    }}
                />

                <AddCart key={id}/>
                <Typography variant="body1">{product.description}</Typography>
            </CardContent>
        </div>
    );
};

export default ProductDetails;