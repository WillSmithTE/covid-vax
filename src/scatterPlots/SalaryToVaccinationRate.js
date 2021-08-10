import { ScatterPlot } from "./ScatterPlot";

export const SalaryToVaccinationRate = ({rawData}) => {

    return <ScatterPlot
        title='Median Salary'
        yTitle='Median household weekly salary'
        getY={(Area) => Area.CensusStats.Income.MedianHousehold}
        rawData={rawData}
    />
};
