import { ScatterPlot } from "./ScatterPlot";

export const MotorVehicles = ({rawData}) => {

    return <ScatterPlot
        title='Motor Vehicles per Dwelling'
        yTitle='Average number motor vehicles per dwelling'
        getY={(Area) => Area.CensusStats.AverageMotorVehiclesPerDwelling}
        rawData={rawData}
    />
};
