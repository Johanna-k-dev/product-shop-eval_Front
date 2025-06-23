import {FC} from 'react';
import CollectionDisplayer from "../../../components/body/collection/CollectionDisplayer";

const SkinCareCare: FC<{}> = ({}) => {
    return (
        <>
        <section style={{height:"950px",}}>
            <div style={{
                height:"900px",
                display: 'flex',
                justifyContent:'center'
                }}>
                <CollectionDisplayer collectionID={1} title="Notre collection SkinCare"/>
            </div>
        </section>
        </>
    );
};

export default SkinCareCare;