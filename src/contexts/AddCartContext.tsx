import React, {createContext, useState, useContext, useEffect, ReactNode} from 'react';
import {CartContextType, CartItem} from "../@type/app";

const AddCartContext = createContext<CartContextType | undefined>(undefined);

export const AddCartProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    const addToCart = (item: CartItem) => {
        setCartItems(prev => {
            const existing = prev.find(ci => ci.id === item.id);
            if (existing) {
                return prev.map(ci =>
                    ci.id === item.id ? {
                            ...ci,
                            quantity: ci.quantity + item.quantity,
                            totalPrice: ci.price * (ci.quantity + item.quantity)
                        }
                        : ci
                );
            } else {
                return [...prev, {...item, totalPrice: item.price * item.quantity}];
            }
        });
    };
    const clearCart = () => setCartItems([]);
    return (
        <AddCartContext.Provider value={{cartItems, addToCart, clearCart, setCartItems}}>
            {children}
        </AddCartContext.Provider>
    );
};
export const useCart = () => {
    const context = useContext(AddCartContext);
    if (!context) throw new Error('useCart must be used within AddCartProvider');
    return context;
};