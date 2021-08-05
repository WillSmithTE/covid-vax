import './App.css';
import { AgeToVaccinationRate } from './AgeToVaccinationRate';
import { SalaryToVaccinationRate } from './SalaryToVaccinationRate';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexWrap: 'wrap'}}>
        <AgeToVaccinationRate />
        <SalaryToVaccinationRate />
    </div>
  );
}

export default App;
