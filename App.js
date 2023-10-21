import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaboratoryGlasswares from './Product pages/LaboratoryGlasswares';
import PetroleumGlasswares from './Product pages/PetroleumGlasswares';
import DistillationPilotPlants from './Product pages/DistillationPilotPlants';
import OrsatGasPurityTesting from './Product pages/OrsatGasPurityTesting';
import PressureVacuumMeasuringInstruments from './Product pages/PressureVacuumMeasuringInstruments';
import EngineeringDiplomaLabInstruments from './Product pages/EngineeringDiplomaLabInstruments';
import GeneralLaboratoryInstruments from './Product pages/GeneralLaboratoryInstruments';
import ElectrochemicalCells from './Product pages/ElectrochemicalCells';
import About from './Components/About';
import Catalog from './Components/Catalog';

function App() {

  return (

<div>
  {/* <Home></Home>
  <Contact></Contact> */}

  <Router>
  
  <Routes>

  <Route exact path='/' element={<Home></Home>}></Route>
  <Route exact path='/about' element={<About></About>}></Route>
  <Route exact path='/catalog' element={<Catalog></Catalog>}></Route>
  <Route exact path='/contact' element={<Contact></Contact>}></Route>
  <Route exact path='/laboratory' element={<LaboratoryGlasswares></LaboratoryGlasswares>}></Route>
  <Route exact path='/petroleum' element={<PetroleumGlasswares></PetroleumGlasswares>}></Route>
  <Route exact path='/distillation' element={<DistillationPilotPlants></DistillationPilotPlants>}></Route>
  <Route exact path='/orsat' element={<OrsatGasPurityTesting></OrsatGasPurityTesting>}></Route>
  <Route exact path='/pressure' element={<PressureVacuumMeasuringInstruments></PressureVacuumMeasuringInstruments>}></Route>
  <Route exact path='/engg' element={<EngineeringDiplomaLabInstruments></EngineeringDiplomaLabInstruments>}></Route>
  <Route exact path='/general' element={<GeneralLaboratoryInstruments></GeneralLaboratoryInstruments>}></Route>
  <Route exact path='/electro' element={<ElectrochemicalCells></ElectrochemicalCells>}></Route>

  </Routes>
  
  </Router>



</div>


  
  );
}

export default App;
