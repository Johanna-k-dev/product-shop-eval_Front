import {FC} from 'react';
import CollectionDisplayer from "../../../components/body/collection/CollectionDisplayer";

const SkinCareCarePage: FC<{}> = ({}) => {
    return (
        <>
        <section style={{height:"950px",}}>
            <div style={{
                height:"900px",
                display: 'flex',
                justifyContent:'center'
                }}>
                <CollectionDisplayer collectionID={1} title="Notre collection Soins de la peau"/>
            </div>
        </section>
        </>
    );
};

export default SkinCareCarePage;