import React, {FC} from "react";
import {useParams} from "react-router";
import productsData from "../../dataFake/product-data.json";
import {Product} from "../../type/product";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Button} from "@mui/material";
import * as url from "node:url";


const ProductDetails: FC = () => {
    const {id} = useParams(); // 🔥 Récupération de l'ID depuis l'URL
    const productId = Number(id); // Convertir l'ID (car `useParams` retourne une string)

    // 🔎 Rechercher le produit correspondant
    const product = productsData.products.find((p: Product) => p.id === productId);

    if (!product) {
        return <h2>⚠️ Produit non trouvé 😕</h2>;
    }

    // 🔢 Générer la liste des quantités de `product.quantity` à `0`
    const quantityOptions = Array.from({length: product.quantity + 1}, (_, i) => product.quantity - i);

    return (
        <section key={product.id} className={"section-background"} style={{ backgroundColor:"rgba(203,164,169,0)", margin:0 }}>
            <h3>Description de {product.name}</h3>


            <img src={product.posterPath} alt={product.name}/>
            <div className="productDetails">
                <h4>Prix: {product.price} €</h4>
                <label>Choisir une quantité : </label>
                <select>
                    {quantityOptions.map((qty) => (
                        <option key={qty} value={qty}>
                            {qty}
                        </option>
                    ))}
                </select>
                <Button><AddShoppingCartIcon/></Button>

            </div>
            {/* Select affichant les quantités de `product.quantity` à 0 */}

            <p>{product.description}</p>
        </section>
    );
};

export default ProductDetails;