import ServicesImage from '../Images/Grupo 19@1X.png';
import comercioIndustrialImage from '../Images/Grupo 7@1X.png';

const Servicios = () => {

  return(
    <>
    <div
    style={{
      height:'695px',
      display:'flex',
      position:'relative',
      backgroundColor:'white',
      padding:'20px',
      justifyContent:'center'
    }}>
      {/* <p style={{position:'absolute', color: 'black', fontSize:'60px', top:'0px', margin:'0px'}}>Servicios</p> */}
      <img src={ServicesImage} alt="services" />
      <img src={comercioIndustrialImage} alt="comercio e industrial" style={{position:'absolute', zIndex:'1', marginTop:'230px'}} />
    </div>
    </>
  )
}

export default Servicios;