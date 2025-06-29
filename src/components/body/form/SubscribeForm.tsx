import {FC, useState, CSSProperties} from 'react';
import {registerUser} from '../../../api/api';

const SubscribeForm: FC = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: string[] = [];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.push("L'email n'est pas valide.");
        }
        if (email !== confirmEmail) {
            newErrors.push("Les e-mails ne correspondent pas.");
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            newErrors.push("Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.");
        }
        if (password !== confirmPassword) {
            newErrors.push("Les mots de passe ne correspondent pas.");
        }

        if (!nom || !prenom || !adresse || !codePostal || !telephone) {
            newErrors.push("Tous les champs doivent être remplis.");
        }

        setErrors(newErrors);
        if (newErrors.length > 0) return;

        const userData = {
            name: nom,
            firstName: prenom,
            email,
            password,
            address: adresse,
            postalNumber: codePostal,
            phoneNumber: telephone,
        };

        const result = await registerUser(userData);
        if (result) {
            alert("Inscription réussie !");
        } else {
            alert("Erreur lors de l'inscription.");
        }
    };

    return (
        <form className={"form-background"} onSubmit={handleSubmit} style={formStyle}>
            <legend style={legendStyle}>Inscription</legend>
            {errors.length > 0 && (
                <ul style={{color: "red"}}>
                    {errors.map((err, index) => <li key={index}>{err}</li>)}
                </ul>
            )}
            <input type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} style={inputStyle}
                   required/>
            <input type="text" placeholder="Prénom" value={prenom} onChange={e => setPrenom(e.target.value)}
                   style={inputStyle} required/>
            <input type="text" placeholder="Adresse" value={adresse} onChange={e => setAdresse(e.target.value)}
                   style={inputStyle} required/>
            <input type="text" placeholder="Code Postal" value={codePostal}
                   onChange={e => setCodePostal(e.target.value)} style={inputStyle} required/>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                   style={inputStyle} required/>
            <input type="email" placeholder="Confirmer Email" value={confirmEmail}
                   onChange={e => setConfirmEmail(e.target.value)} style={inputStyle} required/>
            <input type="tel" placeholder="Téléphone" value={telephone} onChange={e => setTelephone(e.target.value)}
                   style={inputStyle} pattern="[0-9]{10}" required/>
            <input type="password" placeholder="Mot de passe" value={password}
                   onChange={e => setPassword(e.target.value)} style={inputStyle} required/>
            <input type="password" placeholder="Confirmer Mot de passe" value={confirmPassword}
                   onChange={e => setConfirmPassword(e.target.value)} style={inputStyle} required/>
            <input type="submit" value="S'inscrire" className={"scale-on-hover"} style={submitStyle}/>
        </form>
    );
};

const formStyle: CSSProperties = {
    width: "900px",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #A78385",
    borderRadius: "20px",
    padding: "20px",

};

const legendStyle: CSSProperties = {
    color: "white",
    fontWeight: "bolder",
    fontSize: "xx-large",
    margin: "10px",
};

const inputStyle: CSSProperties = {
    width: '600px',
    height: '50px',
    border: 'none',
    borderRadius: '20px',
    marginBottom: "20px",
    backgroundColor: "rgb(255,255,255)",
    fontSize: 'x-large',
    fontWeight: "bolder",
    textAlign: "center",
};

const submitStyle: CSSProperties = {
    width: "150px",
    height: '60px',
    backgroundColor: "#74BAC4",
    color: 'white',
    fontSize: 'x-large',
    fontWeight: 'bolder',
    border: 'none',
    borderRadius: '20px',
    display: "flex",
    textAlign: "center",
};

export default SubscribeForm;