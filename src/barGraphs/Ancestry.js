import { BarGraph } from "./BarGraph";

export const Ancestry = ({ rawData, }) => {

    return <BarGraph
        xTitle='Ancestry'
        title='Ancestry'
        manipulate={manipulate}
        rawData={rawData}
    />
};

function manipulate({ Computed }) {
    const correlations = Computed.AncestryCorrelations;
    const rows = [];
    for (const [key, value] of Object.entries(correlations)) {
        let cleanedReligionName = key.replace("_Tot_Resp", "");
        rows.push([cleanedReligionName, value]);
    };


    return rows
}
