import {FC, useEffect, useState} from 'react';
import Logout from "../../components/buttons/Logout";
import {fetchCurrentUser} from "../../api/api";
import {updateUser} from "../../api/api"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BackToCard from "../../components/buttons/BackToCard";


const AdminPageConnected: FC<{}> = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await fetchCurrentUser();
                setUser(data);
            } catch (err) {
                console.error("Erreur lors de la récupération du profil :", err);
            }
        };
        loadUser();
    }, []);

    return (
        <section className={"background-image-dashboard"} style={{height: "800px"}}>
            <h2 style={{color: 'white'}}>Tableau de bord</h2>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    width: '500px',
                    padding: '20px',
                    margin: '20px',
                    color: "white"
                }}>
                    <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                        Informations utilisateur <ManageAccountsIcon className={"scale-on-hover"} style={{width: "30px", height: "30px"}}/>
                    </h3>
                    {user ? (
                        <>
                            <p>Nom : {user.name}</p>
                            <p>Prénom : {user.firstName}</p>
                            <p>Adresse : {user.address}</p>
                            <p>Code postal : {user.postalNumber}</p>
                            <p>Numéro de téléphone : {user.phoneNumber}</p>
                            <p>Email : {user.email}</p>
                        </>
                    ) : (
                        <p>Chargement...</p>
                    )}
                </div>
                <Logout/>
            </div>
            <div style={{display:'flex', justifyContent:"center",alignItems:'center',margin:'50px'}}>
                <BackToCard/>
            </div>

        </section>
    );
};

export default AdminPageConnected;