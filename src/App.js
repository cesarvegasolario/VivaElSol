import './App.css';
import Navbar from './Navbar/Navbar';
import Inicio from './Inicio/Inicio';
import Pagina2 from './Pagina2/Pagina2';
import Servicios from './Servicios/Servicios';
import AhorroBanner from './AhorroBanner/AhorroBanner';
import Beneficios from './Beneficios/Beneficios';
import SolarEnergyBanner from './SolarEnergyBanner/SolarEnergyBanner';
import ComoLeHacemos from './ComoLeHacemos/ComoLeHacemos';
import EsquemasDeAdmision from './EsquemasDeAdmision/EsquemasDeAdmision';
import DejaDatos from './DejaDatos/DejaDatos';

function App() {
  return (
    <>
    <Navbar/>
    <Inicio/>
    <Pagina2/>
    <Servicios/>
    <AhorroBanner/>
    <Beneficios/>
    <SolarEnergyBanner/>
    <ComoLeHacemos/>
    <EsquemasDeAdmision/>
    <DejaDatos/>
    </>
  );
}

export default App;
