import {FC} from 'react'
import {logoutUser} from "../../api/api";
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Logout: FC<{}> = () => {
    const navigate=useNavigate();
    const {logout} = useAuth();

    const handleLogout = ()=>{
        logoutUser();
        logout();
        navigate("/user");
    }
    return (
        <div onClick={handleLogout} className={"scale-on-hover"} style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '150px',
            height: '20px',
            padding: '20px',
            margin: '20px',
            color: "white",
            fontWeight: 'bolder',
            cursor:'pointer'
        }}>
            <p>Déconnexion</p>
            <LogoutIcon style={{fontWeight: 'bolder'}}/>
        </div>
    );
};

export default Logout;