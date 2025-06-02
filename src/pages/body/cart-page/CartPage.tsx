import {FC} from 'react';
import CartTable from "../../../components/body/Cart/CartTable";
import './CartPage.css'

const CartPage: FC<{}> = ({}) => {
    return (
        <>
<section className={'cart-background'}>
    <h2>Votre panier</h2>
    <CartTable/>
</section>
        </>
    );
};

export default CartPage;