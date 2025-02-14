import {FC} from 'react';
import CartTable from "../../components/body/Cart/CartTable";

const Cart: FC<{}> = ({}) => {
    return (
        <>
<section>
    <h2>Votre panier</h2>
    <CartTable/>
</section>
        </>
    );
};

export default Cart;