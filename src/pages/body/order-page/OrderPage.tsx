import React from "react";
import {useNavigate} from "react-router-dom";


const OrderPage = () => {
    const navigate=useNavigate()
    const handleNavigate = (()=>{
        navigate("/home_page")

    })
    return (
       <section className={'order-background'} style={{height:'950px',display:'flex',flexDirection:'column',alignItems:'center',marginTop:20, marginBottom:20}}>
        <h2 style={{color:"white",fontSize:'xx-large'}}>Félicitation votre commande a bien été prise en compte !</h2>
        <div style={{color: "white", fontSize: 'x-large',margin:'50px'}}>
        <button className={"scale-on-hover"} onClick={handleNavigate} style={{
            display:'flex',
            width: "250px",
            height: '60px',
            backgroundColor: "#74BAC4",
            color: 'white',
            fontSize: 'x-large',
            border: 'none',
            borderRadius: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: "center"}}>Retour à l'accueil</button>
        </div>
       </section>
    );
};

export default OrderPage;