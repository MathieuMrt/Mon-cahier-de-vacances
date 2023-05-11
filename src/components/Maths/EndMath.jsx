import crabe from '../../assets/images/crabe.png'

const EndMaths = () => {
    return (
        <div className = "end">
            <div className="Consigne">
            <img src={crabe} alt="crabe" className='Consigne_img'/>
            <div className='Consigne_text'>
            <h2 className='Consigne_h2'>✨ Bravo  ✨</h2><br/><br/>
            <p className='Consigne_p'>Tu as fini le parcours Anglais !</p>
            </div>
            <div className='Consigne_container_buttons_endPage'>
            <button className='Maths_button_retourHome'>Accueil</button>
            <button className='Maths_button'>Suivant</button>
            
            </div>
        </div>
        </div>
    );
};

export default EndMaths;