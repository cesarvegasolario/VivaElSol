import bannerImage from '../Images/3.png';

const AhorroBanner = () => {

  return(
    <>
    <div
    style={{
      height:'357px',
      display:'flex',
      width:'100vw',
      position:'relative',
      backgroundColor:'#003DA6',
      justifyContent:'center'
    }}>
      <img src={bannerImage} alt="Paneles" style={{ objectFit:'cover',
      width: '100vw', opacity:'.37'}} />
      <p style={{position:'absolute', color:'white', fontSize:'36px', textAlign:'center'}}> ¿Estás pensando utilizar páneles solares para tu casa o empresa?</p>
      <p style={{position:'absolute', color:'white', fontSize:'40px', textAlign:'center', marginTop:'80px'}}> DESCUBRE CUÁNTO PODRÍAS ESTAR AHORRANDO </p>
      <button style={{backgroundColor:'#6FCFEB', borderRadius:'50px', padding:'12px 40px', color:'white',  fontSize:'24px', position:'absolute', marginTop:'250px'}}>Cotizar</button>
    </div>
    </>
  )
}

export default AhorroBanner;