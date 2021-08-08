import { VaccinationGraph } from "./VaccinationGraph";

export const NumPeopleInHousehold = ({rawData}) => {

    return <VaccinationGraph
        title='Vaccination Rate vs Household Size'
        yTitle='Average household size'
        getY={(Area) => Area.CensusStats.AvgPeoplePerHousehold}
        rawData={rawData}
    />
};