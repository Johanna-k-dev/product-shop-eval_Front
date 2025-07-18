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

export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    clearCart: () => void;
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
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