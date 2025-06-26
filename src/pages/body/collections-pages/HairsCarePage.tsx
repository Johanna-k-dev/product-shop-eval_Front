import {FC} from 'react';
import {getProductsByCollection} from "../../../api/api";
import CollectionDisplayer from "../../../components/body/collection/CollectionDisplayer";

const HairesCarePage: FC<{}> = ({}) => {

    getProductsByCollection(2).then(products => products)
    return (
        <section style={{
            height: "950px",
            display: 'flex',
            justifyContent:'center'
        }}>
            <CollectionDisplayer collectionID={2} title={'Notre collection Soin des cheveux'}/>
        </section>
    );
};

export default HairesCarePage;