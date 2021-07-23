import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import VivaElSolConLogo from '../Images/VivaElSolConLogo.PNG';
import Contacto from '../Images/Contacto.PNG'


const PieDePagina = () => {

  return(
    <>
    <div
    style={{
      display:'flex',
      justifyContent:'center',
      width:'33vw',
    }}>
      <img src={VivaElSolConLogo} alt="VivaElSolConLogo" style={{width:'300px', marginTop:'150px'}} />
      <input label="email" style={{position:'absolute', marginTop:'300px', width:'240px', height:'35px', marginLeft:'-40px'}} />
      <div style={{marginLeft:'256px', marginTop:'300px', position:'absolute', backgroundColor:'#003DA6', height:'41px', width:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'29px', color:'white'}}/>
      </div>
    </div>
    <div
    style={{
      display:'flex',
      justifyContent:'center',
      width:'33vw',
      marginLeft:'33vw'
    }}>
      <p style={{marginLeft:'-40%', fontWeight:'bold', fontSize:'24px', marginTop:'-49px'}}>Navegacion</p>
      <p style={{ fontWeight:'bold', fontSize:'24px', marginTop:'-49px', marginLeft:'60px'}}>Servicio</p>
    </div>
    <div
    style={{
      display:'flex',
      justifyContent:'center',
      width:'33vw',
      marginLeft:'60vw',
      marginTop:'-40px'
    }}>
      <img src={Contacto} alt="Contacto" style={{width:'200px', marginTop:'-10px'}} />
    </div>

    <div style={{
      width:'80vw',
      borderBottom: '1px solid black',
      height:'0px',
      margin:'auto'
    }}/>

    <div style={{display:'flex'}}>
      <FontAwesomeIcon icon={faFacebook} style={{fontSize:'29px', color:'#003DA6', alignSelf:'center', marginLeft:'10vw'}}/>
      <FontAwesomeIcon icon={faInstagram} style={{fontSize:'29px', color:'#003DA6', alignSelf:'center', marginLeft:'50px'}}/>
      <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:'29px', color:'#003DA6', alignSelf:'center', marginLeft:'50px', marginRight:'30%'}}/>
      <p>Copyright 2021 Viva el Sol SA DE CV  </p>
      <p style={{marginLeft:'20px', marginRight:'20px'}}>| Política de Privacidad |</p>
      <p>Términos y Condiciones</p>
    </div>
    </>
  )
}

export default PieDePagina;