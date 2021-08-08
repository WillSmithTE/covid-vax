import { VaccinationGraph } from "./VaccinationGraph";

export const AgeToVaccinationRate = ({rawData}) => {

    return <VaccinationGraph
        title='Vaccination Rate vs Age'
        yTitle='Median age'
        getY={(Area) => Area.CensusStats.Age.Median}
        rawData={rawData}
    />
};
