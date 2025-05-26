import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {getProductById} from "../../../api/api";
import {Button} from "@mui/material";
import {Product} from "../../../type/product";
import QuantitySelect from "./QuantitySelect";

const AddCart: FC<{}> = ({}) => {
    const {id} = useParams(); // Récupère l'ID depuis l'URL
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

    const handleQuantityChange = (quantity: number) => {
        setSelectedQuantity(quantity);
        console.log("Quantité sélectionnée :", quantity);
    };

    // Requête API pour obtenir les détails du produit à partir de son ID
    useEffect(() => {
        if (id) {
            getProductById(Number(id)).then((data:any) => {
                console.log("Détails du produit:", data);
                setProduct(data);
            }).catch((error) => {
                console.error("Erreur lors de la récupération du produit :", error);
            });
        }
    }, [id]);

    // Fonction pour gérer l'ajout au panier
    const handleAddToCart = () => {
        if (product) {
            // Vérifie si un panier existe déjà dans le Local Storage
            const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

            // Vérifie si le produit est déjà dans le panier
            const productIndex = existingCart.findIndex((item: Product) => item.id === product.id);

            if (productIndex > -1) {
                // Produit déjà dans le panier -> on augmente la quantité
                existingCart[productIndex].quantity += 1;
            } else {
                // Nouveau produit -> on l'ajoute au panier avec une quantité de 1
                existingCart.push({...product, quantity: 1});
            }

            // Mise à jour du panier dans le Local Storage
            localStorage.setItem('cart', JSON.stringify(existingCart));

            console.log("Produit ajouté au panier :", product);
        } else {
            console.log("Aucun produit sélectionné.");
        }
    };

    return (
        <>
            <QuantitySelect price={product?.price || 0} stock={product?.quantity || 0} onQuantityChange={handleQuantityChange}/>
            <Button onClick={handleAddToCart} key={product?.name}>
                <AddShoppingCartIcon/> Ajouter
            </Button>
        </>
    );
};

export default AddCart;