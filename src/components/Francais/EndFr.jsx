import coral from '../../assets/images/coral.png'

const EndFr = () => {
    return (
        <div className = "end">
            <div className="Consigne">
            <img src={coral} alt="coral" className='Consigne_img'/>
            <div className='Consigne_text'>
            <h2 className='Consigne_h2'>✨ Bravo  ✨</h2><br/><br/>
            <p className='Consigne_p'>Tu as fini le parcours Français !</p>
            </div>
            <div className='Consigne_container_buttons_endPage'>
            <button className='Francais_button_retourHome'>Accueil</button>
            <button className='Francais_button'>Suivant</button>
            
            </div>
        </div>
        </div>
    );
};

export default EndFr;