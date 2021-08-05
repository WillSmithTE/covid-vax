import { VaccinationGraph } from "./VaccinationGraph";

export const AgeToVaccinationRate = () => {

    return <VaccinationGraph
        title='Age vs Vaccination Rate'
        yTitle='Median age'
        getY={(Area) => Area.CensusStats.Age.Median}
    />
};
