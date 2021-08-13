import { ScatterPlot } from "./ScatterPlot";

export const WorkFromHome = ({rawData}) => {

    return <ScatterPlot
        title='People Working From Home'
        yTitle='People Working From Home (%)'
        getY={(Area) => Area.CensusStats.TravelToWork.PctWorkFromHome * 100}
        rawData={rawData}
    />
};
