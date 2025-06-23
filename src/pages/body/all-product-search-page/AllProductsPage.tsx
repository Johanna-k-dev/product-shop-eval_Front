import React, {FC} from 'react';
import ProductSearshBarre from "../../../components/body/Searsh/ProductSearshBarre";
import ProductsDisplayer from "../../../components/body/product/ProductsDisplayer";

const MyComponent: FC<{}> = ({}) => {
    return (
        <section style={{"display":"flex",flexDirection:"column",justifyContent:"center", padding: "30px"}} >
            <ProductSearshBarre />
            <div style={{margin:'30px'}}>
                <ProductsDisplayer/>
            </div>
        </section>
    );
};

export default MyComponent;