import {FC} from 'react';
import {getProductsByCollection} from "../../api/api";
import CollectionDisplayer from "../../components/body/collection/CollectionDisplayer";

const HairesCarePage: FC<{}> = ({}) => {

    getProductsByCollection(2).then(products => console.log("Collection 2:", products))
    return (

        <section style={{height: "800px"}}>
            <CollectionDisplayer collectionID={2} title={'Notre collection HairsCare'}/>
        </section>
    );
};

export default HairesCarePage;