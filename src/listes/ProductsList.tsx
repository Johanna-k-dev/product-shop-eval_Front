import {FC, useState, useEffect} from 'react';

import {Product} from "../@type/product";
import {getAllProducts} from "../api/api";

interface ProductListProps {
    products: Product[];
}

const ProductsList: FC<ProductListProps> = ({products}) => {
    const [productList, setProductList] = useState<Product[]>(products);

    async function fetchProducts() {
        try {
            const productData: any = await getAllProducts();
            setProductList(productData);
        } catch (error) {
            console.error("Erreur lors du chargement des produits :", error);
        }
    }

    useEffect(() => {
        fetchProducts().then(r => r);
    }, []);

    return (
        <div>
            {productList.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default ProductsList;