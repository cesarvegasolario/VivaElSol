import bannerImage from '../Images/3.png';

const SolarEnergyBanner = () => {

  return(
    <>
    <div
    style={{
      height:'357px',
      display:'flex',
      position:'relative',
      backgroundColor:'#003DA6',
      justifyContent:'center',
      width:'100vw',
    }}>
      <img src={bannerImage} alt="Paneles" style={{ objectFit:'cover',
      width: '100vw', opacity:'.37'}} />
      <p style={{position:'absolute', color:'white', fontSize:'30px', textAlign:'center', fontWeight:'bold'}}> Solar Energy -</p>
      <p style={{position:'absolute', color:'white', fontSize:'70px', textAlign:'center', marginTop:'80px', width:'937px'}}> Today`s resource for a brighter tomorrow! </p>
    </div>
    </>
  )
}

export default SolarEnergyBanner;