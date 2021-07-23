import panelsFamily from '../Images/panelsFamily.PNG';
import BeneficiosList from '../Images/Beneficios.PNG';

const Beneficios = () => {

  return(
    <>
    <div
    style={{
      display:'flex',
      position:'relative',
      width:'100vw',
    }}>
      <img src={BeneficiosList} alt="Beneficios" style={{marginLeft:'270px', marginTop:'90px'}} />
      <img src={panelsFamily} alt="Beneficios" style={{position:'absolute', right:'0px', marginTop:'50px'}} />
    </div>
    </>
  )
}

export default Beneficios;