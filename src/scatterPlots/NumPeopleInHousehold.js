import { ScatterPlot } from "./ScatterPlot";

export const NumPeopleInHousehold = ({rawData}) => {

    return <ScatterPlot
        title='Household Size'
        yTitle='Average household size'
        getY={(Area) => Area.CensusStats.AvgPeoplePerHousehold}
        rawData={rawData}
    />
};