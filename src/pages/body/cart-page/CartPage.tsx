import {FC} from 'react';
import CartTable from "../../../components/body/Cart/CartTable";
import './CartPage.css'

const CartPage: FC<{}> = ({}) => {
    return (
        <section className={'cart-background'} style={{height:'900px'}}>
            <h2 style={{ display:'flex',justifySelf:'center',margin:'50px', fontSize:'xxx-large',color:'#A78385'}}>Votre panier</h2>
            <CartTable/>
        </section>
    );
};

export default CartPage;