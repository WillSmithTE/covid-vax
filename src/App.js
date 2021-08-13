import './App.css';
import { AgeToVaccinationRate } from './scatterPlots/AgeToVaccinationRate';
import { SalaryToVaccinationRate } from './scatterPlots/SalaryToVaccinationRate';
import { NumPeopleInHousehold } from './scatterPlots/NumPeopleInHousehold';
import { Religion } from './barGraphs/Religion';
import { useEffect, useState } from 'react';
import { api } from './api';
import { MotorVehicles } from './scatterPlots/MotorVehicles';
import { HoursWorked } from './scatterPlots/HoursWorked';
import { Ancestry } from './barGraphs/Ancestry';
import { WorkFromHome } from './scatterPlots/WorkFromHome';

const App = () => {
  const [rawData, setRawData] = useState(undefined)

  useEffect(() => {
    api.getAll().then(setRawData);
  }, []);

  return <>
    <h1 style={{ color: 'antiquewhite', textAlign: 'center' }}>Sydney Covid Vaccine Stats (2/8/2021)</h1>
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', padding: '0 10px' }}>
      <SalaryToVaccinationRate rawData={rawData} />
      <WorkFromHome rawData={rawData} />
      <AgeToVaccinationRate rawData={rawData} />
      <Ancestry rawData={rawData} />
      <Religion rawData={rawData} />
      <HoursWorked rawData={rawData} />
      <NumPeopleInHousehold rawData={rawData} />
      <MotorVehicles rawData={rawData} />
    </div>
  </>;
}

export default App;
