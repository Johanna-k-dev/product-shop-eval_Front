import React, {FC} from 'react';
import './HomePage.css';
import '../Section.css'
import CollectionDisplayer from "../../../components/body/collection/CollectionDisplayer";







const HomePage: FC<{}> = () => {
    return (
            <section style={{display:"flex", flexDirection:"column", alignItems:'center'}}>
                <img src="/assets/backgrounds/Background_Border_salmon.png" alt="Home" className={'background-image'}/>
                <CollectionDisplayer collectionID={4} title={'Nos Meilleures ventes'}/>
                <img src={"/assets/backgrounds/Background_Border_blue.png"} alt="Home" style={{margin:"20px"}}
                     className={'background-image'}/>
            </section>
    );
};

export default HomePage;