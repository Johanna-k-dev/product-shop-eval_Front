import {FC} from 'react';
import {
    TableCell,
    TableRow,
    styled,
    tableCellClasses,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useCart} from '../../../contexts/AddCartContext'
import '../../../pages/body/cart-page/CartPage.css';
import {useNavigate} from "react-router-dom";
import CartValidationButton from "../../buttons/CartValidationButton";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: `rgba(167, 131, 131, 0.70)`,
        color: theme.palette.common.white,
        fontSize: 'xx-large',
        fontWeight: 'bolder',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "x-large",
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
                    quantity: Math.max(1, item.quantity + delta),
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
                            <StyledTableCell align="right">Quantité sélectionnée</StyledTableCell>
                            <StyledTableCell align="right">Total par produit</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map(item => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell> {item.name}</StyledTableCell>
                                <StyledTableCell align="right">{item.id}</StyledTableCell>
                                <StyledTableCell align="right">{item.price.toFixed(2)} €</StyledTableCell>
                                <StyledTableCell align="right" style={{ display:'flex',alignItems:'center', gap: '10px'}}>
                                    <DeleteOutlineIcon className={"scale-on-hover"} onClick={() => removeItem(item.id)} style={{cursor: 'pointer', color:'#A78385',marginLeft:'10px',marginRight:'10px',fontSize:'40px'}}/>
                                    <RemoveCircleOutlineIcon className={"scale-on-hover"}onClick={() => updateQuantity(item.id, -1)} style={{cursor: 'pointer', color: '#A78385',
                                        marginLeft: '10px',
                                        marginRight: '10px',
                                        fontSize: '40px'}}/>
                                    {item.quantity}
                                    <AddCircleOutlineIcon className={"scale-on-hover"} onClick={() => updateQuantity(item.id, 1)} style={{cursor: 'pointer', color: '#A78385',
                                        marginLeft: '10px',
                                        marginRight: '10px',
                                        fontSize: '40px'}}/>
                                </StyledTableCell>
                                <StyledTableCell align="right">{(item.totalPrice ?? 0).toFixed(2)}
                                    € </StyledTableCell>
                            </StyledTableRow>
                        ))}
                            <StyledTableRow>
                                <StyledTableCell colSpan={4} align="right" style={{fontSize: 'xx-large',fontWeight:'bolder' ,color: '#A78385'}}>Total </StyledTableCell>
                                <StyledTableCell align="right" style={{fontSize:'xx-large'}}>
                                    {cartItems.reduce((acc, item) => acc + (item.totalPrice ?? 0), 0).toFixed(2)} €
                                </StyledTableCell>
                            </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{display:"flex", width: '300px',height: '150px', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
               <CartValidationButton/>
            </div>
        </>
    );
};

export default CartTable;