import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

axios.interceptors.response.use(
    (response) => {
        console.log("interceptor response", response);
        return response;
    },
    (error) => {
        if (error.response) {
            const {status} = error.response;
            console.log("interceptor error", status);
            switch (status) {
                case 400:
                    console.log("ERROR 400: Bad Request");
                    break;
                case 401:
                    console.log("ERROR 401: Unauthorized");
                    break;
                case 403:
                    console.log("ERROR 403: Forbidden");
                    break;
                case 404:
                    console.log("ERROR 404: Not Found");
                    break;
                case 500:
                    console.log("ERROR 500: Internal Server Error");
                    break;
                default:
                    console.log("Unknown Error");
                    break;
            }
        } else {
            console.error("No response received", error);
        }
        return Promise.reject(error);
    }
);

// GET - All Products
export const getAllProducts = async () => {
    try {
        const response = await axios.get("/product/all");
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return [];
    }
};

// GET - Product by ID
export const getProductById = async (id: number) => {
    try {
        const response = await axios.get(`/product/${id}`);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

// GET - Products by Collection ID
export const getProductsByCollection = async (collectionId: number) => {
    try {
        const response = await axios.get(`/product/collection/${collectionId}`);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return [];
    }
};

// GET - Product by Name
export const getProductByName = async (name: string) => {
    try {
        const response = await axios.get(`/product/name/${name}`);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

// POST - Add Product
export const addProduct = async (productData:any ) => {
    try {
        const response = await axios.post("/product/add", productData);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

// PUT - Update Product
export const updateProduct = async (id:number, productData: any) => {
    try {
        const response = await axios.put(`/product/update/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

// DELETE - Delete Product by ID
export const deleteProductById = async (id:number) => {
    try {
        const response = await axios.delete(`/product/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};


//Stock service
export const decreaseStock = async (productId: number, quantity: number) => {
    try {
        const response = await axios.post(`/stock/decrease`, null, {params: {productId, quantity}});
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la diminution du stock", error);
        return null;
    }
};

export const increaseStock = async (productId: number, quantity: number) => {
    try {
        const response = await axios.post(`/stock/increase`, null, {params: {productId, quantity}});
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'augmentation du stock", error);
        return null;
    }
};

// Invoice Services

export const generateInvoice = async (orderId: number) => {
    try {
        const response = await axios.post(`/invoice/generate`, null, {params: {orderId}});
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la génération de la facture", error);
        return null;
    }
};

export const getInvoice = async (orderId: number) => {
    try {
        const response = await axios.get(`/invoice/get/${orderId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération de la facture", error);
        return null;
    }
};

// POST - Inscription
export const registerUser = async (userData: any) => {
    try {
        const response = await axios.post("/user/add", userData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'inscription", error);
        return null;
    }
};

// POST - Connexion
export const loginUser = async (loginData: any) => {
    try {
        const response = await axios.post("/user/login", loginData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la connexion", error);
        return null;
    }
};

// PUT - Mettre à jour un utilisateur par ID
export const updateUser = async (id: number, userData: any) => {
    try {
        const response = await axios.put(`/user/update/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur", error);
        return null;
    }
};