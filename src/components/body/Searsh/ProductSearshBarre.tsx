import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {Product} from "../../../type/product";
import {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getAllProducts} from "../../../api/api";  // Import pour la navigation


const ProductSearshBarre: FC<{}> = ({}) => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState<string | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<string[]>([]);  // Stocke les noms des produits
    const [allProducts, setAllProducts] = React.useState<Product[]>([]); // Stocke tous les produits récupérés

    // 🔄 Utilisation de `get()` pour récupérer les produits et afficher l'attribut name sous forme d'options
    useEffect(() => {
        async function fetchProducts() {
            try {
                const productData = await getAllProducts(); // ✅ Attente correcte
                console.log('Produits récupérés lors de la recherche:', productData);

                // 🔄 Vérification et mise à jour de l'état avec les noms des produits
                if (Array.isArray(productData)) {
                    setAllProducts(productData); // Garde tous les produits en mémoire
                    const productNames = productData.map((product: Product) => product.name);
                    setOptions(productNames);
                } else {
                    console.error("Format inattendu des données produits :", productData);
                    setOptions([]);  // Réinitialisation si données inattendues
                }

            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
                setOptions([]);  // Réinitialisation en cas d'erreur
            }
        }

        fetchProducts();
    }, []);

    // 🔄 Navigation vers la page du produit lors de la sélection dans l'autocomplétion
    const handleSelect = (event: any, newValue: string | null) => {
        setValue(newValue);

        // On cherche l'ID du produit sélectionné pour naviguer vers sa page de détails
        if (newValue) {
            const selectedProduct = allProducts.find((product: Product) => product.name === newValue);
            if (selectedProduct) {
                console.log("ID du produit sélectionné :", selectedProduct.id);
                navigate(`/product-details/${selectedProduct.id}`);
            }
        }
    };

    return (
        <div>
            <Autocomplete
                value={value}
                onChange={handleSelect}  // 🔄 Appel de `handleSelect` lors de la sélection
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}  // 🔄 Utilisation des options mises à jour
                sx={{width: "100%", color: "#A78385"}}
                renderInput={(params) => <TextField {...params} label="Rechercher un produit"/>}
            />
        </div>
    );
};

export default ProductSearshBarre;