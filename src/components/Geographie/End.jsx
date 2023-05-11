import sun from '../../assets/images/sun.png'
import { useNavigate } from "react-router-dom";

const End = () => {
    const navigate = useNavigate();
    return (
        
            <div className="Consigne">
            <img src={sun} alt="sun" className='Consigne_img'/>
            <div className='Consigne_text'>
            <h2 className='Consigne_h2'>✨ Bravo  ✨</h2><br/><br/>
            <p className='Consigne_p'>Tu as fini le parcours Géographie !</p>
            </div>
            <div className='Consigne_container_buttons_endPage'>
            <button className='Consigne_button_retourHome' onClick={() => navigate("/")}>Accueil</button>                       
            </div>
       
        </div>
    );
};

export default End;