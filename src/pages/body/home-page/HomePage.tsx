import React, {FC} from 'react';
import './HomePage.css';
import './Section.css'
import CollectionDisplayer from "../../../components/body/collection/CollectionDisplayer";





const HomePage: FC<{}> = () => {
    return (
            <section style={{display:"flex", flexDirection:"column", alignItems:'center'}}>
                <CollectionDisplayer collectionID={4} title={'Nos Best Sellers'}/>
                <img src="/assets/backgrounds/Background_Border_salmon.png" alt="Home" className={'background-image'}/>
                <CollectionDisplayer collectionID={1} title="Nos Skin Care"/>
                <img src={"/assets/backgrounds/Background_Border_blue.png"} alt="Home" style={{margin:"20px"}}/>
            </section>
    );
};

export default HomePage;