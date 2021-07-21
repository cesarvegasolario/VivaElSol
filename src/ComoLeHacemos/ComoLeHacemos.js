import CalcularConsumo from '../Images/01CalcularTuConsumo.PNG';
import PorjeccionAhorro from '../Images/02ProjeccionDeAhorro.PNG';
import Levantamiento from '../Images/03Levantamiento.PNG';
import EmpiezaAhorrar from '../Images/04EmpiezaAhorrar.PNG';

const SolarEnergyBanner = () => {

  return(
    <>
    <div
    style={{
      display:'flex',
      position:'relative',
      backgroundColor:'white',
      justifyContent:'center'
    }}>
      {/* <img src={bannerImage} alt="Paneles" style={{ objectFit:'cover',
      width: '100vw', opacity:'.37'}} /> */}
      <p style={{position:'absolute', color:'#969696', fontSize:'22px', textAlign:'center', fontWeight:'bold'}}> NUESTRO PROCESO</p>
      <p style={{position:'absolute', color:'#003DA6', fontSize:'70px', textAlign:'center'}}> ¿COMO LO HACEMOS? 
      </p>
      <img src={CalcularConsumo} alt="CalcularConsumo" style={{height:'300px', marginTop:'200px'}} />
      <img src={PorjeccionAhorro} alt="CalcularConsumo" style={{height:'300px', marginTop:'200px'}} />
      <img src={Levantamiento} alt="CalcularConsumo" style={{height:'300px', marginTop:'200px'}} />
      <img src={EmpiezaAhorrar} alt="CalcularConsumo" style={{height:'270px', marginTop:'212px'}} />
    </div>
    </>
  )
}

export default SolarEnergyBanner;