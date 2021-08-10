import { VaccinationGraph } from "./VaccinationGraph";

export const SalaryToVaccinationRate = ({rawData}) => {

    return <VaccinationGraph
        title='Median Salary'
        yTitle='Median household weekly salary'
        getY={(Area) => Area.CensusStats.Income.MedianHousehold}
        rawData={rawData}
    />
};
