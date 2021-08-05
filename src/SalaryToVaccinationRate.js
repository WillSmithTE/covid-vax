import { VaccinationGraph } from "./VaccinationGraph";

export const SalaryToVaccinationRate = () => {

    return <VaccinationGraph
        title='Vaccination Rate vs Salary'
        yTitle='Median household weekly salary'
        getY={(Area) => Area.CensusStats.Income.MedianHousehold}
    />
};
