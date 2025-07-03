import {FC, useState} from 'react';
import Switch from '@mui/material/Switch';
import SubscribeForm from "../../../components/body/form/SubscribeForm";
import LoginForm from "../../../components/body/form/LoginForm";

const UserPageDisconnected: FC<{}> = () => {
    const label = {inputProps: {'aria-label': 'Color switch demo'}};
    const [isInscription, setIsInscription] = useState(false);

    return (
        <section style={{
            display: "flex",
            flexDirection: 'column',
            height: "1000px",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h2 style={{color: '#A78385'}}>Tableau de bord</h2>
            <div style={{color: '#A78385'}}>
                <h3 style={{ display:'flex', flexWrap:'wrap', marginLeft:'30px', marginRight:'30px'}}>Vous devez vous connecter ou vous inscrire pour accéder à votre espace administrateur</h3>
                <div style={{width: "100%", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                    <div style={{display: "flex", width: "100%",alignItems: "center", marginLeft:'30px'}}>
                        <p>Connexion</p>
                        <Switch {...label} checked={isInscription} onChange={(e) => setIsInscription(e.target.checked)}
                                color="secondary" />
                        <p>Inscription</p>
                    </div>
                    {isInscription ? <SubscribeForm/> : <LoginForm/>}
                </div>
            </div>
        </section>
    );
};
export default UserPageDisconnected;