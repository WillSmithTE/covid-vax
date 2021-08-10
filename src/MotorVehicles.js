import { VaccinationGraph } from "./VaccinationGraph";

export const MotorVehicles = ({rawData}) => {

    return <VaccinationGraph
        title='Motor Vehicles per Dwelling'
        yTitle='Average number motor vehicles per dwelling'
        getY={(Area) => Area.CensusStats.AverageMotorVehiclesPerDwelling}
        rawData={rawData}
    />
};
