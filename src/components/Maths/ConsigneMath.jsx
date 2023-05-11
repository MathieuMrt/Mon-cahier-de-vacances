import crabe from '../../assets/images/crabe.png'

const ConsigneMaths = () => {
    return (
        <div className="Consigne">
            <img src={crabe} alt="crabe" className='Consigne_img'/>
            <div className='Consigne_text'>
            <h2 className='Consigne_h2'>Bienvenue dans la section Maths !</h2><br/><br/>
            <p className='Consigne_p'>Teste tes connaissances en mathématiques à travers 10 questions.</p>
            </div>
            <button className='Maths_button'>Commencer</button>
        </div>
    );
};

export default ConsigneMaths;