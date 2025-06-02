import {FC} from 'react';
import CollectionDisplayer from "../../components/body/collection/CollectionDisplayer";

const SkinCareCare: FC<{}> = ({}) => {
    return (
        <section style={{height: "800px"}}>
        <CollectionDisplayer collectionID={1} title="Notre collection SkinCare"/>
        </section>
    );
};

export default SkinCareCare;