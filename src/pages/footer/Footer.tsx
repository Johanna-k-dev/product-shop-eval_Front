import {FC} from 'react';
import './Footer.css'

const Footer: FC<{}> = ({}) => {
    return (
        <footer className={"footer"} style={{padding:'30px' , display : 'flex'}}>
<ul>
    <li><a href='https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/rediger-des-conditions-generales-dutilisation' style={{textDecoration:'none', color:'black', cursor:'cursorPointer'}}>CGU</a></li>
    <li><a href='https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-e-commerce/rediger-des-conditions-generales-de'
           style={{textDecoration: 'none', color: 'black', cursor: 'cursorPointer'}}>CGV</a></li>
    <li><a href='https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/quelles-sont-les-mentions-legales-pour-un-site'
           style={{textDecoration: 'none', color: 'black', cursor: 'cursorPointer'}}>Mentions légales</a></li>
    <li><a href="#" style={{textDecoration: 'none', color: 'black', cursor: 'cursorPointer'}}>Contact</a></li>
</ul>
        </footer>
    );
};

export default Footer;