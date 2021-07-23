import CREDITO from '../Images/CREDITO.PNG';
import DeContado from '../Images/DeContado.PNG';
import Financiamiento from '../Images/Financiamiento.PNG';

const EsquemasDeAdmision = () => {

  return(
    <>
    <div
    style={{
      display:'flex',
      position:'relative',
      backgroundColor:'#E6E6E6',
      justifyContent:'center',
      height:'115px',
      width:'100vw',
    }}>
      <p style={{color:'#153E86', fontSize:'30px', textAlign:'center', fontWeight:'bold', alignSelf:'center'}}> Esquemas 
de Adquisición</p>
      <img src={CREDITO} alt="CalcularConsumo" style={{}} />
      <img src={DeContado} alt="DeContado" style={{}} />
      <img src={Financiamiento} alt="Financiamiento" style={{}} />
    </div>
    </>
  )
}

export default EsquemasDeAdmision;