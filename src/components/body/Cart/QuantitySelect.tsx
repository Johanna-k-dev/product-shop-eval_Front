import React, {FC, useState, useEffect} from "react";
import Typography from "@mui/material/Typography";

type QuantitySelectProps = {
    stock: number;
    price: number;
    onQuantityChange: (quantity: number, totalPrice: number) => void;
};

const QuantitySelect: FC<QuantitySelectProps> = ({stock, price, onQuantityChange}) => {
    const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [alertMessage, setAlertMessage] = useState<string>("");

    // Générer les options du select en fonction du stock
    const generateOptions = (quantity: number) => {
        return [
            <option key={0} value={0}>0</option>,
            ...Array.from({length: quantity}, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))
        ];
    };

    // Fonction pour gérer l'alerte en fonction de la quantité restante
     // Fonction pour gérer l'alerte en fonction de la quantité restante
    const generateAlert = (selectedStock: number, initialStock: number) => {
        const stockAfterSelect= initialStock - selectedStock;
        const oneOfInitialStock = initialStock-1;
        const twoOfInitialStock = initialStock-2;
        const treeOfInitialStock = twoOfInitialStock - 3;


        if (stockAfterSelect === 0) {
            setAlertMessage(`Ce produit a été victime de son succès, il est actuellement en rupture de stock.`);
        } else if (selectedStock === oneOfInitialStock) {
            setAlertMessage(`Attention, il ne reste que ${stockAfterSelect} article en stock ! 🚨`);
        } else if (selectedStock === twoOfInitialStock) {
            setAlertMessage(`Attention, il ne reste que ${stockAfterSelect} article(s) en stock ! 🚨`);
        } else if (selectedStock === treeOfInitialStock) {
            setAlertMessage(`Attention, il ne reste que ${stockAfterSelect} article(s) en stock ! 🚨`);
        } else {
            setAlertMessage(`${stockAfterSelect} articles en stock`);
        }
    };

    // Met à jour le prix et l'alerte en fonction de la quantité sélectionnée

    const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const quantity = parseInt(event.target.value, 10);
        setSelectedQuantity(quantity);
        const newTotalPrice = quantity * price;
        setTotalPrice(newTotalPrice);
        generateAlert(quantity, stock);

        // ⬇️ Appel de la fonction fournie par le parent pour notifier le changement de quantité
        onQuantityChange(quantity, newTotalPrice);
    };

    return (
        <div>
            <Typography variant="h5">Prix total : {totalPrice} €</Typography>
            {/* Affichage de l'alerte de stock */}
            {alertMessage && (
                <div className="alert" style={{color: "red", marginBottom: "15px"}}>{alertMessage}</div>
            )}
            <select onChange={handleQuantityChange} value={selectedQuantity}>
            {generateOptions(stock)}
            </select>
        </div>
    );
};

export default QuantitySelect;