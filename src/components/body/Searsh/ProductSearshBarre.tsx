import React, {FC, useState, useEffect} from 'react';
import {Autocomplete, TextField, Stack} from "@mui/material";
import axios from "axios";  // Importation d'axios

// Fonction pour récupérer les produits filtrés
const getFilteredProducts = async (searchQuery: string) => {
    try {
        const response = await axios.get(`/product/search?name=${searchQuery}`);
        return response.data;  // Retourne les données des produits
    } catch (error) {
        console.error("Erreur API", error);
        return {products: []};  // En cas d'erreur, retourne une liste vide de produits
    }
};

const ProductSearshBarre: FC<{}> = ({}) => {
    const [products, setProducts] = useState<string[]>([]);  // Liste des produits pour l'autocomplétion
    const [searchQuery, setSearchQuery] = useState<string>("");  // Valeur de la recherche de l'utilisateur
    const [loading, setLoading] = useState<boolean>(false);  // État de chargement pour indiquer que la recherche est en cours

    useEffect(() => {
        // Si la recherche est vide, on ne fait pas de requête
        if (searchQuery.trim() === "") {
            setProducts([]);
            return;
        }

        setLoading(true);  // On met l'état de chargement à true

        // Appel API avec la requête de recherche
        getFilteredProducts(searchQuery).then((data) => {
            setLoading(false);  // On met l'état de chargement à false

            if (data && data.products) {
                setProducts(data.products.map((product: any) => product.name));  // Mise à jour des produits
            } else {
                setProducts([]);  // Si aucune donnée, on réinitialise les produits
            }
        });
    }, [searchQuery]);

    return (
        <Stack spacing={2} sx={{width: 300}}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={products}  // Utilisation des produits filtrés
                loading={loading}  // Affiche un indicateur de chargement
                onInputChange={(_, newInputValue) => setSearchQuery(newInputValue || "")}  // Met à jour la query de recherche
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                type: 'search',  // Utilise le type 'search' pour la barre
                            },
                        }}
                    />
                )}
            />
        </Stack>
    );
};

export default ProductSearshBarre;