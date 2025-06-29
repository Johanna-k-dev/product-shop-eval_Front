import React, {FC, useState} from 'react';
import {useAuth} from "../../contexts/UserConnectionContext";
import {useNavigate} from "react-router-dom";
import {useCart} from "../../contexts/AddCartContext";
import {createOrderWithProducts,decreaseStock} from "../../api/api";

const CartValidationButton: FC = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth();
    const {cartItems, clearCart} = useCart();
    const [errorMsg, setErrorMsg] = useState("");

    const handleValidation = async () => {
        setErrorMsg("");
        if (cartItems.length === 0) {
            setErrorMsg(" Impossible : votre panier est vide.");
            return;
        }
        if (!isAuthenticated) {
            alert('Vous devez être connecter pour valider votre panier')
            navigate("/user");
            return;
        }
        try {
            for (const item of cartItems) {
                const stockResult = await decreaseStock(item.id, item.quantity);
                if (!stockResult) {
                    setErrorMsg(`Le produit "${item.name}" est en rupture de stock ou la quantité demandée est indisponible.`);
                    return;
                }
            }
            const orderData = {
                total: cartItems.reduce((acc, item) => acc + item.totalPrice, 0),
                items: cartItems.map(item => ({
                    productId: item.id,
                    quantity: item.quantity
                }))
            };
            const newOrder = await createOrderWithProducts(orderData);
            if (newOrder) {
                localStorage.setItem("lastOrderId",newOrder.orderId);
                localStorage.removeItem("cartItems");
                clearCart();
                navigate('/order')
            } else {
                setErrorMsg("Votre commande n'a pas été prise en compte.");
            }
        } catch (e) {
            setErrorMsg("Erreur serveur.");
        }
    };

    return (
        <div style={{textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button
                onClick={handleValidation}
                className="scale-on-hover"
                style={{
                    width: "200px",
                    height: '60px',
                    backgroundColor: "#A78385",
                    color: 'white',
                    fontSize: 'xx-large',
                    border: 'none',
                    borderRadius: '20px'
                }}
            >
                Valider
            </button>
            {errorMsg && (
                <div style={{color: "red", fontSize: "1rem", margin:'30px'}}>{errorMsg}</div>
            )}
        </div>
    );
};

export default CartValidationButton;