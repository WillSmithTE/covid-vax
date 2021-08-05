import './App.css';
import { AgeToVaccinationRate } from './AgeToVaccinationRate';
import { SalaryToVaccinationRate } from './SalaryToVaccinationRate';
import { NumPeopleInHousehold } from './NumPeopleInHousehold';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexWrap: 'wrap'}}>
        <AgeToVaccinationRate />
        <NumPeopleInHousehold />
        <SalaryToVaccinationRate />
    </div>
  );
}

export default App;
