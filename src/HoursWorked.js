import { VaccinationGraph } from "./VaccinationGraph";

export const HoursWorked = ({rawData}) => {
    console.error({rawData})
    return <VaccinationGraph
        title='Vaccination Rate vs Number of Hours Worked'
        yTitle='Average number hours worked'
        getY={(Area) => Area.CensusStats.HoursWorked.Average}
        rawData={rawData}
    />
};
