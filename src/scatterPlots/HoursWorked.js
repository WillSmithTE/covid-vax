import { ScatterPlot } from "./ScatterPlot";

export const HoursWorked = ({rawData}) => {
    return <ScatterPlot
        title='Number of Hours Worked'
        yTitle='Average number hours worked'
        getY={(Area) => Area.CensusStats.HoursWorked.Average}
        rawData={rawData}
    />
};
