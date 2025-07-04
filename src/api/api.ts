import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const {status} = error.response;
            switch (status) {
                case 400:
                    console.warn(" 400: Mauvaise requête");
                    break;
                case 401:
                    console.warn(" 401: Non autorisé — session expirée ou token invalide.");
                    alert("Votre session a expiré. Veuillez vous reconnecter.");
                    localStorage.removeItem("token");
                    localStorage.removeItem("user")
                    window.location.href = "/user";
                    break;
                case 403:
                    console.warn("403: Accès refusé.");
                    alert("Accès refusé. Veuillez vous reconnecter.");
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    window.location.href = "/user";
                    break;
                case 404:
                    console.warn(" 404: Ressource non trouvée.");
                    break;
                case 500:
                    console.error("500: Erreur serveur interne.");
                    break;
                default:
                    console.error("Erreur inconnue", status);
            }
        } else {
            console.error("Aucune réponse du serveur", error);
        }
        return Promise.reject(error);
    }
);

export const getAllProducts = async () => {
    try {
        const response = await axios.get("/product/all");
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return [];
    }
};

export const getProductById = async (id: number) => {
    try {
        const response = await axios.get(`/product/${id}`);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

export const getProductsByCollection = async (collectionId: number) => {
    try {
        const response = await axios.get(`/product/collection/${collectionId}`);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return [];
    }
};


export const getProductByName = async (name: string) => {
    try {
        const response = await axios.get(`/product/name/${name}`);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

export const addProduct = async (productData:any ) => {
    try {
        const response = await axios.post("/product/add", productData);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

export const updateProduct = async (id:number, productData: any) => {
    try {
        const response = await axios.put(`/product/update/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

export const deleteProductById = async (id:number) => {
    try {
        const response = await axios.delete(`/product/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
};

export const decreaseStock = async (productId: number, quantity: number) => {
    try {
        const response = await axios.post(`/stock/decrease`, null, {params: {productId, quantity}});
        return response.data;
    } catch (error) {
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

export const createOrderWithProducts = async (orderData: any) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post("/order-products/add", orderData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
};

export const fetchOrderProductById = async (orderId: number, productId: number) => {
    const response = await axios.get(`/${orderId}/${productId}`);
    return response.data;
};

export const generateInvoice = async (orderId: number) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`/invoice/generate`, null, {
            params: {orderId},
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
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

export const registerUser = async (userData: any) => {
    try {
        const response = await axios.post("/user/add", userData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'inscription", error);
        return null;
    }
};

export const loginUser = async (loginData: { email: string; password: string }) => {
    try {
        const response = await axios.post("/auth/login", loginData);
        const {token, user} = response.data;
        if (token && user) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", user.name || user.email);
            return {success: true, user: user.name || user.email};
        }
        return {success: false};
    } catch (error) {
        console.error("Erreur lors de la connexion", error);
        return {success: false};
    }
};

export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // all user data
};

export const fetchCurrentUser = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/user/me', {
            headers: {Authorization: `Bearer ${token}`}
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur connecté", error);
        return null;
    }
};

export const updateUser = async (id: number, userData: any) => {
    try {
        const response = await axios.put(`/user/update/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur", error);
        return null;
    }
};