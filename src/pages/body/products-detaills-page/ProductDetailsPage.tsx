import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Product} from "../../../@type/product";
import Typography from "@mui/material/Typography";
import {decreaseStock, getProductById} from "../../../api/api";
import DetailsInfo from "./DetailsInfo";


const ProductDetailsPage: FC = () => {
    const {id} = useParams<{ id : string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [stock, setStock] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
    const [selectedTotal, setSelectedTotal] = useState<number>(0);

    const handleQuantityChange = (quantity: number, totalPrice: number) => {
        setSelectedQuantity(quantity);
        setSelectedTotal(totalPrice);
    };

    const handleIncrease = () => {
        if (product && selectedQuantity < stock) {
            setSelectedQuantity(q => q + 1);
            setSelectedTotal(t => Number(((t + product.price).toFixed(2))));
            generateAlert(selectedQuantity + 1, stock);
        }
    };

    const handleDecrease = () => {
        if (selectedQuantity > 0) {
            setSelectedQuantity(q => q - 1);
            setSelectedTotal(t => Number(((t - product!.price).toFixed(2))));
            generateAlert(selectedQuantity - 1, stock);
        }
    };

    const handleAddToCart = async () => {
        if (selectedQuantity > 0 && product) {
            const result = await decreaseStock(product.id, selectedQuantity);
            if (result) {
                alert(`Ajouté au panier avec ${selectedQuantity} article(s)`);
                setStock(s => s - selectedQuantity); // Mise à jour locale
                setSelectedQuantity(0);
                setSelectedTotal(0);
                generateAlert(0, stock - selectedQuantity);
            } else {
                alert("Stock insuffisant pour cette quantité.");
            }
        } else {
            alert("Sélectionnez une quantité valide.");
        }
    };

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
        <section style={{ height: '950px',boxSizing:'border-box',padding: "30px",justifyContent:"center", alignItems: "center"}}>
            <article
                className="background-image"
                style={{display:'flex',flexDirection:'column',padding: "40px",width:'1800px',height:"100%",  alignSelf:"center", objectFit:"cover", }}
            >
                <Typography variant="h3" style={{color: "white", fontSize: 'xx-large',display:'flex',alignSelf:'center'}}>{product.name}</Typography>
                <div style={{display: "flex"}}>
                    <img
                        src={product.posterPath}
                        alt={product.name}
                        style={{

                            margin: "30px",
                            width: "350px",
                            height: "80%",
                            objectFit: "cover",
                            marginBottom: "50px",
                            borderRadius: '20px',
                        }}
                    />
                    <DetailsInfo
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        alertMessage={alertMessage}
                        quantity={selectedQuantity}
                        totalPrice={selectedTotal}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        onAddToCart={handleAddToCart}  />
                </div>
            </article>

        </section>
    );

};

export default ProductDetailsPage;