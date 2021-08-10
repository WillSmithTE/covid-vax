import { VaccinationGraph } from "./VaccinationGraph";

export const NumPeopleInHousehold = ({rawData}) => {

    return <VaccinationGraph
        title='Household Size'
        yTitle='Average household size'
        getY={(Area) => Area.CensusStats.AvgPeoplePerHousehold}
        rawData={rawData}
    />
};