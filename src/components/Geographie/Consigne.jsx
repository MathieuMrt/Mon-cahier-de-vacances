import sun from '../../assets/images/sun.png'

const Consigne = () => {
    return (
        <div className="Consigne">
            <img src={sun} alt="sun" className='Consigne_img'/>
            <div className='Consigne_text'>
            <h2 className='Consigne_h2'>Bienvenue dans la section Géographie !</h2><br/><br/>
            <p className='Consigne_p'>Teste tes connaissances des drapeaux et capitales européennes à travers 10 questions.</p>
            </div>
            <button className='Consigne_button'>Commencer</button>
        </div>
    );
};

export default Consigne;