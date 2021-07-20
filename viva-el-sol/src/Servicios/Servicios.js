import menStaringIntoHorizon from '../Images/12.png';
import whiteQuotes from '../Images/whiteQuotes.png';
import YearWarranty25 from '../Images/25YearWarranty.png';

const Pagina2 = () => {

  return(
    <>
    <div
    style={{
      height:'1150px',
      display:'flex',
      position:'relative',
      backgroundColor:'white',
      padding:'20px'
    }}>
      <p style={{marginTop:'30px', position:'absolute', textAlign:'center', color: 'black', fontSize:'60px'}}>Genera tu propia energía, limpia y económica con paneles solares</p>
      <img src={menStaringIntoHorizon} alt="Viva el sol logo" style={{height:'409px', width:'451px', position:'absolute', top:'300px', left: '120px'}} />
      <img src={whiteQuotes} alt="white quotes" style={{ position:'absolute', top:'530px', left: '230px', zIndex:1}} />
      <div style={{position:'absolute', backgroundColor:'#003DA6', height:'230px', width:'220px', top:'550px', left:'230px', display:'flex', alignItems:'center'}}>
        <p style={{color:'white', textAlign:'center'}}>Nuestra misión es brindar energía limpia y económica para todos.</p>
      </div>
      <p style={{textAlign:'center', position:'absolute', color:'#969696', fontSize:'22px', top:'300px', left:'700px'}}>NOSOTROS</p>
      <p style={{textAlign:'center', position:'absolute', fontSize:'70px', top:'300px', left:'685px'}}>¿Quiénes somos?</p>
      <img src={YearWarranty25} alt="Warranty 25 years" style={{ position:'absolute', top:'660px', left: '685px', zIndex:1}} />
    </div>
    </>
  )
}

export default Pagina2;