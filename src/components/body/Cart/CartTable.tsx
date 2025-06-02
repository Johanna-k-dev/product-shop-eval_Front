import {FC} from 'react';
import {
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,

} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useCart} from '../../../contexts/AddCartContext'
import '../../../pages/body/cart-page/CartPage.css';
import {useNavigate} from "react-router-dom";





const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: `rgba(167, 131, 131, 0.70)`,
        color: theme.palette.common.white,
        fontSize: 16,
        fontWeight: 'bolder',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: `rgba(203, 164, 169, 0.42)`,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CartTable: FC<{}> = ({}) => {
    const {cartItems, setCartItems} = useCart();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/admin');
    }

    const updateQuantity = (id: number, delta: number) => {
        const updatedCart = cartItems.map(item =>
            item.id === id
                ? {
                    ...item,
                    quantity: Math.max(1, item.quantity + delta), // Empêche les quantités négatives
                    totalPrice: (item.price * Math.max(1, item.quantity + delta))
                }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const removeItem = (id: number) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Produit</StyledTableCell>
                            <StyledTableCell align="right">Identifiant</StyledTableCell>
                            <StyledTableCell align="right">Prix unitaire</StyledTableCell>
                            <StyledTableCell align="right">Quantité séléctionnée</StyledTableCell>
                            <StyledTableCell align="right">Total par produit</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map(item => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell> {item.name}</StyledTableCell>
                                <StyledTableCell align="right">{item.id}</StyledTableCell>
                                <StyledTableCell align="right">{item.price.toFixed(2)} €</StyledTableCell>
                                <StyledTableCell align="right" style={{ display:'flex',alignItems:'center', gap: '10px'  }}>
                                    <DeleteOutlineIcon className={"scale-on-hover"} onClick={() => removeItem(item.id)} style={{cursor: 'pointer', color:'#A78385'}}/>
                                    <RemoveCircleOutlineIcon className={"scale-on-hover"}onClick={() => updateQuantity(item.id, -1)} style={{cursor: 'pointer',
                                        color: '#A78385'}}/>
                                    {item.quantity}
                                    <AddCircleOutlineIcon className={"scale-on-hover"} onClick={() => updateQuantity(item.id, 1)} style={{cursor: 'pointer',
                                        color: '#A78385'}}/>

                                </StyledTableCell>
                                <StyledTableCell align="right">{item.totalPrice.toFixed(2)} € </StyledTableCell>
                            </StyledTableRow>
                        ))}
                            <StyledTableRow>
                                <StyledTableCell colSpan={4} align="right" style={{fontSize: 'x-large',fontWeight:'bolder' ,color: '#A78385'}}>Total </StyledTableCell>
                                <StyledTableCell align="right" style={{fontSize: 'larger',
                                    fontWeight: 'bolder',
                                    color: '#A78385' }}>{cartItems.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)} €</StyledTableCell>
                            </StyledTableRow>


                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{display:"flex", width: '300px',height: '150px', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                <button type="button" className={"scale-on-hover"} style={{width:"200px", height: '60px', backgroundColor:"#A78385", color:'white', fontSize:'x-large',border:'none',borderRadius:'20px'}} onClick={handleNavigate}>Valider</button>
            </div>
        </>
    );
};

export default CartTable;