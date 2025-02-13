export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    posterPath: string;
}
export interface ProductCollection{
    products: Product[];
}