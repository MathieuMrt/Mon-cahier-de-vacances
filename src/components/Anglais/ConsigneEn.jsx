import ice from '../../assets/images/ice-cream.png'

const ConsigneEn = () => {
    return (
        <div className="Consigne">
            <img src={ice} alt="sun" className='Consigne_img'/>
            <div className='Consigne_text'>
            <h2 className='Consigne_h2'>Bienvenue dans la section Anglais !</h2><br/><br/>
            <p className='Consigne_p'>.</p>
            </div>
            <button className='Anglais_button'>Commencer</button>
        </div>
    );
};

export default ConsigneEn;