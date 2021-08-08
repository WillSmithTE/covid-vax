import './App.css';
import { AgeToVaccinationRate } from './AgeToVaccinationRate';
import { SalaryToVaccinationRate } from './SalaryToVaccinationRate';
import { NumPeopleInHousehold } from './NumPeopleInHousehold';
import { Religion } from './Religion';
import { useEffect, useState } from 'react';
import { api } from './api';

const App = () => {
  const [rawData, setRawData] = useState(undefined)

  useEffect(() => {
    api.getAll().then(setRawData);
  }, []);

  return <>
    <h1 style={{ color: 'antiquewhite', textAlign: 'center' }}>Sydney Covid Vaccine Stats (2/8/2021)</h1>
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', padding: '0 10px' }}>
      <Religion rawData={rawData} />
      <AgeToVaccinationRate rawData={rawData} />
      <NumPeopleInHousehold rawData={rawData} />
      <SalaryToVaccinationRate rawData={rawData} />
    </div>
  </>;
}

export default App;
