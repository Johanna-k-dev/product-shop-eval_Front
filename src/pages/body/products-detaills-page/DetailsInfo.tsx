import React, {FC} from 'react';
import {useCart} from '../../../contexts/AddCartContext';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {AddShoppingCart} from "@mui/icons-material";

interface DetailsInfoProps {
    id: number;
    name: string;
    price: number;
    description: string;
    alertMessage: string;
    quantity: number;
    totalPrice: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onAddToCart: () => void;
}

const DetailsInfo: FC<DetailsInfoProps> = ({id,name,price,description,alertMessage,quantity,totalPrice, onIncrease,onDecrease,onAddToCart}) => {
    const {addToCart} = useCart()
    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            description,
            price,
            quantity,
            totalPrice: price * quantity,
            stock: quantity,
        });
        alert( `Vous avez ajouter ${quantity} ${name} article(s) à votre panier!`)
    };
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: 'space-around',
            width: '500px',
            height: '200px',
            margin: '30px',
            fontSize: 'x-large'
        }}>
            <div>
                <p style={{color: "white", fontWeight: "bolder", fontSize: "x-large"}}>Prix unitaire
                    : {price.toFixed(2)}
                </p>
                <p style={{color: "white", fontWeight: "bold"}}>
                    Déscription du produit: {description}
                </p>
            </div>
            <div style={{
                display: "flex", flexDirection: "column", gap: "30px",
                width: '500px', height: '200px'
            }}>
                <div>
                    <p style={{color: "white", fontWeight: "bold"}}>{alertMessage}</p>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: 'center',
                        gap: '20px',
                        width: "500px"
                    }}>
                        <div style={{margin: '15px', display: 'flex', flexDirection: 'column'}}>
                            <AddCircleOutlineIcon sx={{width: "30px", height: "30px", color: "white"}}
                                                  onClick={onIncrease} />
                            <RemoveCircleOutlineIcon sx={{width: "30px", height: "30px", color: "white"}}
                                                     onClick={onDecrease}/>
                        </div>
                        <p style={{color: "white", fontWeight: "bold"}}>Quantité sélectionnée : {quantity}</p>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    gap: '10px',
                    width: "200px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "30px",
                        justifyContent: "center",
                        alignItems: "center",
                        width: '500px',
                        height: '100px'
                    }}>
                        <p style={{color: "white", fontWeight: "bold", fontSize: 'x-large'}}>Prix total
                            : {totalPrice.toFixed(2)} €</p>
                        <AddShoppingCart
                            sx={{color: "white", width: '50px', height: '50px', cursor: 'pointer'}}
                            onClick={handleAddToCart}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsInfo;