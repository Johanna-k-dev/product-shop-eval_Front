interface AuthContextType {
    isAuthenticated: boolean;
    user: string | null;
    login: (user: string) => void;
    logout: () => void;
    forceLogout: () => void;
}

interface User {
    id: number;
    name: string;
    firstName: string;
    email: string;
    address: string;
    postalNumber: string;
    phoneNumber: string;
    role: string;
}


export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
    description: string; // ← ajoute cette ligne
    stock: number;
}