import HombreViendoPanel from '../Images/5.png';
import FranjaContacto from '../Images/FranjaContacto.PNG';

const DejaDatos = () => {

  return(
    <>
    <div style={{backgroundColor:'#F5F5F5', paddingBottom:'130px'}}>
    <div
    style={{
      display:'flex',
      justifyContent:'center',
      height:'115px',
      width:'100vw',
      marginBottom:'10px',
    }}>
      <p style={{fontSize:'30px', textAlign:'center', alignSelf:'center', width:'724px'}}> DEJANOS TUS DATOS Y NOSOTROS NOS PONEMOS EN CONTACTO CONTIGO.</p>
      
    </div>
    <div style={{display:'flex', justifyContent:'center'}}>
      <img src={HombreViendoPanel} alt="HombreViendoPanel" style={{height:'616px', width:'600px', marginTop:'8px'}} />
      <div style={{display:'flex', marginLeft:'55px'}}>
        <label for="Nombre" style={{position:'absolute'}}>Nombre</label>
        <input name="Nombre" style={{width:'644px', height:'34px', marginTop:'30px'}}></input>
        
        <label for="Correo" style={{position:'absolute', marginTop:'90px'}}>Correo</label>
        <input name="Correo" style={{width:'644px', height:'34px', marginTop:'130px', position:'absolute'}}></input>

        <label for="Número de Teléfono:" style={{position:'absolute', marginTop:'200px'}}>Número de Teléfono:</label>
        <input name="Número de Teléfono:" style={{width:'644px', height:'34px', marginTop:'240px', position:'absolute'}}></input>

        <label for="Mensaje" style={{position:'absolute', marginTop:'300px'}}>Mensaje</label>
        <input name="Mensaje" style={{width:'644px', height:'210px', marginTop:'330px', position:'absolute'}}></input>

        <button style={{backgroundColor:'#115EE2', padding:'10px 287px', color:'white',  fontSize:'26px', position:'absolute', marginTop:'570px'}}>Envíar</button>
        
      </div>
    </div>
    </div>
    <div style={{display:'flex', justifyContent:'center'}}>
      <img src={FranjaContacto} alt="FranjaContacto" style={{position:'absolute', marginTop:'-50px'}} />
    </div>
    </>
  )
}

export default DejaDatos;