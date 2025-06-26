import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {Product} from "../../../@type/product";
import {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getAllProducts} from "../../../api/api";


const ProductSearshBarre: FC<{}> = ({}) => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState<string | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<string[]>([]);
    const [allProducts, setAllProducts] = React.useState<Product[]>([]);


    useEffect(() => {
        async function fetchProducts() {
            try {
                const productData = await getAllProducts();
                if (Array.isArray(productData)) {
                    setAllProducts(productData);
                    const productNames = productData.map((product: Product) => product.name);
                    setOptions(productNames);
                } else {
                    console.error("Format inattendu des données produits :", productData);
                    setOptions([]);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
                setOptions([]);
            }
        }
        fetchProducts();
    }, []);

    const handleSelect = (event: any, newValue: string | null) => {
        setValue(newValue);
        if (newValue) {
            const selectedProduct = allProducts.find((product: Product) => product.name === newValue);
            if (selectedProduct) {
                navigate(`/product-details/${selectedProduct.id}`);
            }
        }
    };

    return (
        <div style={{margin:'30px', display:'flex',alignSelf:'center',width:'7' +
                '0%',minWidth:'315px'}}>
            <Autocomplete
                value={value}
                onChange={handleSelect}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{width: "100%", color: "#A78385"}}
                renderInput={(params) => <TextField {...params} label="Rechercher un produit"/>}
            />
        </div>
    );
};

export default ProductSearshBarre;