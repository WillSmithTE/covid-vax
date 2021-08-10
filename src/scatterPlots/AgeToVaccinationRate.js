import { ScatterPlot } from "./ScatterPlot";

export const AgeToVaccinationRate = ({rawData}) => {

    return <ScatterPlot
        title='Age'
        yTitle='Median age'
        getY={(Area) => Area.CensusStats.Age.Median}
        rawData={rawData}
    />
};
