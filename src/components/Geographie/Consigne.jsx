import sun from '../../assets/images/sun.png'

const Consigne = ({handleGameStart}) => {
    return (
        <div className="Consigne">
            <img src={sun} alt="sun" className='Consigne_img'/>
            <div className='Consigne_text'>
            <h2 className='Consigne_h2'>Bienvenue dans la section géographie !</h2><br/><br/>
            <p className='Consigne_p'>Teste tes connaissances des drapeaux et capitales européennes à travers 10 questions.</p>
            </div>
            <button className='Consigne_button' onClick={handleGameStart}>Commencer</button>
        </div>
    );
};

export default Consigne;