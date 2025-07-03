import React, {FC, useState} from 'react';
import {loginUser} from '../../../api/api';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../contexts/AuthContext";

const LoginForm: FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const navigation =useNavigate();
    const {login}= useAuth()

    const isPasswordValid = (pwd: string) => {
        const minLength = 12;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/;
        return pwd.length >= minLength && regex.test(pwd);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: string[] = [];

        if (!email) newErrors.push("L'email est requis.");
        if (!password) {
            newErrors.push("Le mot de passe est requis.");
        } else if (!isPasswordValid(password)) {
            newErrors.push("Le mot de passe doit contenir au moins 12 caractères, avec au moins une majuscule, une minuscule, un chiffre et un caractère spécial.");
        }
        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }
        const result = await loginUser({email, password});
        if (result && localStorage.getItem('token')) {
            login(email)
            alert("Connexion réussie !");
            navigation('/user')
        } else {
            alert("Échec de la connexion. Vérifie tes identifiants.");
            navigation('/user')
        }
    };

    return (
        <form className={"form-background"} onSubmit={handleSubmit} style={{
            width: "900px",
            height: '700px',
            display: "flex",
            flexDirection: "column",
            alignSelf:"center",
            justifyContent: "end",
            alignItems: "center",
            border: "2px solid #A78385",
            borderRadius: "20px",
            padding: "20px",
            margin:'30px'
        }}>
            <legend style={{color: "white", fontWeight: "bolder", fontSize: "xx-large",margin:'10px'}}>Connexion</legend>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
                   style={inputStyle}/>
            <input type="password" placeholder="Mot de passe" value={password}
                   onChange={(e) => setPassword(e.target.value)} required style={inputStyle}/>
            <input type="submit" value="Se connecter" className={"scale-on-hover"} style={submitStyle}/>
            {errors.length > 0 && (
                <ul style={{color: "red", backgroundColor:'white'}}>
                    {errors.map((err, index) => <li key={index}>{err}</li>)}
                </ul>
            )}
        </form>
    );
};

const inputStyle = {
    width: '600px',
    height: '70px',
    border: 'none',
    borderRadius: '20px',
    margin: "20px",
    backgroundColor: "rgb(255,255,255)",
    fontSize: 'x-large',
    textAlign: "center" as const,
};

const submitStyle = {
    width: "250px",
    height: '60px',
    backgroundColor: "#74BAC4",
    color: 'white',
    fontSize: 'x-large',
    border: 'none',
    borderRadius: '20px',
    display: "flex",
    textAlign: "center" as const,
};

export default LoginForm;