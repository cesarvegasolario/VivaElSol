import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoSolario from '../Images/Logo Viva el Sol Grande@1X.png';

const Navbar = () => {

  return(
    <>
    <div
    style={{
      position:'absolute',
      height:'76px',
      width: '100vw',
      backgroundColor: '#003DA6',
      display:'flex',
      alignItems:'center',
      color:'white',
      top:'0px'
    }}>
      <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:'20px', color:'#8CD5EB', marginRight:'2px', marginLeft:'139px'}}/>
      <p>+52 (81) 8421-2010</p>
      <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px', color:'#8CD5EB', marginRight:'2px', marginLeft:'96px'}}/>
      <p>VitaminaD@VivaelSol.mx</p>
      <FontAwesomeIcon icon={faFacebook} style={{fontSize:'20px', color:'#8CD5EB', marginLeft:'auto'}}/>
      <FontAwesomeIcon icon={faInstagram} style={{fontSize:'20px', color:'#8CD5EB', marginLeft:'20px', marginRight:'116px'}}/>
    </div>
    <div
    style={{
      position:'absolute',
      height:'153px',
      width:'100vw',
      backgroundColor: 'white',
      display:'flex',
      alignItems:'center',
      top:'76px',
      color:'#707070',
      fontSize:'24px'
    }}>
      <img src={logoSolario} alt="Viva el sol" style={{marginLeft:'121px', marginRight:'100px'}} />
      <p style={{marginRight:'24px'}}>Inicio</p>
      <p style={{marginRight:'24px'}}>Nosotros</p>
      <p style={{marginRight:'24px'}}>Recidencial</p>
      <p style={{marginRight:'24px'}}>Industria ó Comercio</p>
      <p style={{marginRight:'24px'}}>Contacto</p>
      <button style={{marginRight:'24px', backgroundColor:'#003DA6', borderRadius:'50px', padding:'10px', color:'white',  fontSize:'24px'}}>Cotizar</button>

    </div>
    </>
  )
}

export default Navbar;