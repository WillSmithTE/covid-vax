import { VaccinationGraph } from "./VaccinationGraph";

export const NumPeopleInHousehold = () => {

    return <VaccinationGraph
        title='Household Size vs Salary'
        yTitle='Average household size'
        getY={(Area) => Area.CensusStats.AvgPeoplePerHousehold}
    />
};