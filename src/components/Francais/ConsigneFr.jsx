import coral from '../../assets/images/coral.png'

const ConsigneFr = () => {
    return (
        <div className="Consigne">
            <img src={coral} alt="coral" className='Consigne_img'/>
            <div className='Consigne_text'>
            <h2 className='Consigne_h2'>Bienvenue dans la section Français !</h2><br/><br/>
            <p className='Consigne_p'>.</p>
            </div>
            <button className='Francais_button'>Commencer</button>
        </div>
    );
};

export default ConsigneFr;