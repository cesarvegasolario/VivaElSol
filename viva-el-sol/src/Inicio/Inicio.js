import logoSolarioBlanco from '../Images/Icono Viva el sol blanco@1X.png';
import panelesImage from '../Images/paneles imagen.jpg';

const Inicio = () => {

  return(
    <>
    <div
    style={{
      height:'1047px',
      width: '100vw',
      display:'flex',
      position:'relative',
      marginTop:'250px',
      backgroundColor:'black'
    }}>
      <img src={logoSolarioBlanco} alt="Viva el sol logo" style={{height:'78px', marginTop:'106px', position:'absolute', right:'50%'}} />
      <img src={panelesImage} alt="Paneles" style={{ height:'1047px',
      width: '100vw', opacity:'.37'}} />
      <p style={{marginTop:'220px', position:'absolute', textAlign:'center', color: 'white', fontSize:'70px'}}>EMPRESA LÍDER DE PANELES SOLARES EN MÉXICO</p>
    </div>
    </>
  )
}

export default Inicio;