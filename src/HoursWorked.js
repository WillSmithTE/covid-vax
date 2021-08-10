import { VaccinationGraph } from "./VaccinationGraph";

export const HoursWorked = ({rawData}) => {
    return <VaccinationGraph
        title='Number of Hours Worked'
        yTitle='Average number hours worked'
        getY={(Area) => Area.CensusStats.HoursWorked.Average}
        rawData={rawData}
    />
};
