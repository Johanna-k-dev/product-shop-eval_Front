import {FC} from 'react';
import CollectionDisplayer from "../../../components/body/collection/CollectionDisplayer";

const MakeUpPage: FC<{}> = ({}) => {
    return (
        <section style={{
            height: "950px",
            display: 'flex',
            justifyContent: 'center',
        }}>
            <CollectionDisplayer collectionID={3} title='Notre collection MakeUp'/>
        </section>
    );
};

export default MakeUpPage;